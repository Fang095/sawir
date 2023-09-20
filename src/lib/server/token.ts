import { generateRandomString, isWithinExpiration } from 'lucia/utils';

import { prisma } from './prisma';

export class InvalidTokenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidTokenError';
  }
}

export class ExpiredTokenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ExpiredTokenError';
  }
}

const EXPIRES_IN = 1000 * 60 * 60 * 2; // 2 hours

type Tokens = {
  id: string;
  expires: bigint;
  user_id: string;
};

function getReusableToken(storedUserTokens: Tokens[]) {
  if (storedUserTokens.length > 0) {
    const reusableStoredToken = storedUserTokens.find((token) => {
      return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
    });

    if (reusableStoredToken) return reusableStoredToken.id;
  }
}

export const generateEmailVerificationToken = async (userId: string) => {
  const storedUserTokens = await prisma.emailVerificationToken.findMany({
    where: { user_id: userId }
  });

  getReusableToken(storedUserTokens);

  const token = generateRandomString(63);

  await prisma.emailVerificationToken.create({
    data: {
      id: token,
      expires: new Date().getTime() + EXPIRES_IN,
      user_id: userId
    }
  });

  return token;
};

export const validateEmailVerificationToken = async (token: string) => {
  const storedToken = await prisma.$transaction(async () => {
    const foundToken = await prisma.emailVerificationToken.findFirst({
      where: { id: token }
    });

    if (!foundToken) throw new InvalidTokenError('Invalid token');

    await prisma.emailVerificationToken.delete({
      where: { id: foundToken.id }
    });

    return foundToken;
  });

  const tokenExpires = Number(storedToken.expires);

  if (!isWithinExpiration(tokenExpires)) {
    throw new ExpiredTokenError('Expired token');
  }

  return storedToken.user_id;
};

export async function generatePasswordResetToken(userId: string) {
  const storedUserTokens = await prisma.passwordResetToken.findMany({
    where: { user_id: userId }
  });

  getReusableToken(storedUserTokens);

  const token = generateRandomString(63);

  await prisma.passwordResetToken.create({
    data: {
      id: token,
      expires: new Date().getTime() + EXPIRES_IN / 2,
      user_id: userId
    }
  });

  return token;
}

export async function validatePasswordResetToken(token: string) {
  const storedToken = await prisma.$transaction(async () => {
    const foundToken = await prisma.passwordResetToken.findFirst({
      where: { id: token }
    });

    if (!foundToken) throw new InvalidTokenError('Invalid token');

    await prisma.passwordResetToken.delete({
      where: { id: foundToken.id }
    });

    return foundToken;
  });

  const tokenExpires = Number(storedToken.expires);

  if (!isWithinExpiration(tokenExpires)) {
    throw new ExpiredTokenError('Expired token');
  }

  return storedToken.user_id;
}
