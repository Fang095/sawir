import { fail, redirect } from '@sveltejs/kit';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { LuciaError } from 'lucia';

import { auth } from '$lib/server/lucia';
import { loginFormSchema } from '$lib/schemas';
import { verifyEmailFormat } from '$lib/server/mailer';

export async function load({ locals }) {
  const session = await locals.auth.validate();

  if (session) {
    throw redirect(302, '/home');
  }

  return {
    form: superValidate(loginFormSchema)
  };
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, loginFormSchema);

    if (!form.valid) {
      return fail(400, {
        form
      });
    }

    const { username, password } = form.data;

    if (verifyEmailFormat(username)) {
      try {
        const key = await auth.useKey('email', username, password);

        const session = await auth.createSession({
          userId: key.userId,
          attributes: {}
        });

        event.locals.auth.setSession(session);
      } catch (error) {
        if (error instanceof LuciaError) {
          if (error.message === 'AUTH_INVALID_KEY_ID') {
            return setError(form, 'username', 'Invalid username or email');
          }

          if (error.message === 'AUTH_INVALID_PASSWORD') {
            return setError(form, 'password', 'Invalid password. Double check and try again');
          }
        }
      }
    } else {
      try {
        const key = await auth.useKey('username', username, password);

        const session = await auth.createSession({
          userId: key.userId,
          attributes: {}
        });

        event.locals.auth.setSession(session);
      } catch (error) {
        if (error instanceof LuciaError) {
          if (error.message === 'AUTH_INVALID_KEY_ID') {
            return setError(form, 'username', 'Invalid username or email');
          }

          if (error.message === 'AUTH_INVALID_PASSWORD') {
            return setError(form, 'password', 'Invalid password. Double check and try again');
          }
        }
      }
    }

    throw redirect(302, '/home');
  }
};
