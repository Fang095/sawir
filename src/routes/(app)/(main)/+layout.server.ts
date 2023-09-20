import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
  const session = await locals.auth.validate();

  if (!session) throw redirect(302, '/login');

  return {
    userId: session.user.id,
    username: session.user.username,
    email: session.user.email,
    image: session.user.image
  };
}
