import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import { auth } from '$lib/server/lucia';
import { InvalidTokenError, validatePasswordResetToken } from '$lib/server/token';
import { changePasswordFormSchema } from '$lib/schemas';

export async function load({ locals }) {
  const session = await locals.auth.validate();

  if (session) {
    throw redirect(302, '/home');
  }

  return {
    form: superValidate(changePasswordFormSchema)
  };
}

export const actions = {
  default: async (event) => {
    const token = event.params.token;

    const form = await superValidate(event, changePasswordFormSchema);

    if (!form.valid) {
      return fail(400, {
        form
      });
    }

    try {
      const userId = await validatePasswordResetToken(token);

      const user = await auth.getUser(userId);

      await auth.invalidateAllUserSessions(user.id);

      await auth.updateKeyPassword('email', user.email, form.data.password);

      await auth.updateKeyPassword('username', user.username, form.data.password);

      if (!user.email_verified) {
        await auth.updateUserAttributes(user.id, {
          email_verified: true
        });
      }
    } catch (error) {
      if (error instanceof InvalidTokenError) {
        return {
          form,
          success: false
        };
      }
    }

    return {
      form,
      success: true
    };
  }
};
