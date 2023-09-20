import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import { resetPasswordFormSchema } from '$lib/schemas';
import { prisma } from '$lib/server/prisma.js';
import { generatePasswordResetToken } from '$lib/server/token.js';
import { sendPasswordResetLink } from '$lib/server/mailer.js';

export async function load({ locals }) {
  const session = await locals.auth.validate();

  if (session) {
    throw redirect(302, '/home');
  }

  return {
    form: superValidate(resetPasswordFormSchema)
  };
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, resetPasswordFormSchema);

    if (!form.valid) {
      return fail(400, {
        form
      });
    }

    try {
      const user = await prisma.user.findFirst({
        where: {
          email: form.data.email
        }
      });

      if (!user) {
        return {
          form,
          success: true
        };
      }

      const token = await generatePasswordResetToken(user.id);

      await sendPasswordResetLink(user.email, user.username, token);
    } catch (error) {
      throw fail(500, { error, message: 'An unknown error occurred' });
    }

    return {
      form,
      success: true
    };
  }
};
