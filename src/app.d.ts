import type { PrismaClient } from '@prisma/client';

declare global {
  namespace App {
    // interface Error {}
    // interface PageData {}
    // interface Platform {}

    interface Locals {
      auth: import('lucia').AuthRequest;
    }
  }

  // eslint-disable-next-line no-var
  var __prisma: PrismaClient;

  /// <reference types="lucia-auth" />
  declare namespace Lucia {
    type Auth = import('$lib/server/lucia').Auth;

    type DatabaseUserAttributes = {
      email: string;
      email_verified: boolean;
      username: string;
      image: string;
    };

    type DatabaseSessionAttributes = Record<string, never>;
  }
}

export {};
