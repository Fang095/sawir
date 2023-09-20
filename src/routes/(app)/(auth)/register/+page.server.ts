import { fail, redirect } from '@sveltejs/kit';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { auth } from '$lib/server/lucia';
import { registerFormSchema } from '$lib/schemas';
import { generateEmailVerificationToken } from '$lib/server/token';
import { sendEmailVerificationLink } from '$lib/server/mailer';

export async function load({ locals }) {
  const session = await locals.auth.validate();

  if (session) {
    throw redirect(302, '/home');
  }

  return {
    form: superValidate(registerFormSchema)
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function hasTarget(meta: any): meta is { target: string[] } {
  return meta && Array.isArray(meta.target);
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, registerFormSchema);

    if (!form.valid) {
      return fail(400, { form });
    }

    try {
      const user = await auth.createUser({
        key: {
          providerId: 'email',
          providerUserId: form.data.email,
          password: form.data.password
        },
        attributes: {
          email: form.data.email,
          email_verified: false,
          username: form.data.username,
          image: ''
        }
      });

      await auth.createKey({
        userId: user.id,
        providerId: 'username',
        providerUserId: form.data.username,
        password: form.data.password
      });

      const token = await generateEmailVerificationToken(user.id);

      await sendEmailVerificationLink(form.data.email, form.data.username, token);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        if (hasTarget(error.meta)) {
          if (error.meta.target.includes('email')) {
            return setError(form, 'email', 'This email is invalid or already taken');
          }

          if (error.meta.target.includes('username')) {
            return setError(form, 'username', 'This username is invalid or already taken');
          }
        }
      }

      return fail(500, { message: 'An unknown error occurred' });
    }

    return {
      form,
      email: form.data.email,
      success: true
    };
  }
};
