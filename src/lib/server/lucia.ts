import { dev } from '$app/environment';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { prisma as prismaAdapter } from '@lucia-auth/adapter-prisma';

import { prisma } from '$lib/server/prisma';

export const auth = lucia({
  adapter: prismaAdapter(prisma),
  env: dev ? 'DEV' : 'PROD',
  middleware: sveltekit(),
  getUserAttributes: (userData) => {
    return {
      id: userData.id,
      email: userData.email,
      email_verified: userData.email_verified,
      username: userData.username,
      image: userData.image
    };
  },
  csrfProtection: true,
  sessionCookie: {
    name: 'user_session',
    attributes: {
      sameSite: 'strict'
    }
  }
});

export type Auth = typeof auth;
