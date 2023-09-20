import { error, redirect } from '@sveltejs/kit';

import { auth } from '$lib/server/lucia';
import { InvalidTokenError, validateEmailVerificationToken } from '$lib/server/token';
import { sendWelcomeEmail } from '$lib/server/mailer.js';

export async function load({ locals, params }) {
  const session = await locals.auth.validate();

  if (session) {
    throw redirect(302, '/home');
  }

  const token = params.token;

  try {
    const userId = await validateEmailVerificationToken(token);

    const user = await auth.getUser(userId);

    await auth.updateUserAttributes(user.id, {
      email_verified: true
    });

    await sendWelcomeEmail(user.email);
  } catch (err) {
    if (err instanceof InvalidTokenError) {
      throw redirect(302, '/login');
    }

    throw error(500, {
      message: 'Internal Server Error'
    });
  }
}
