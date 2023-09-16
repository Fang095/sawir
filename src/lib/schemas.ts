import { z } from 'zod';

const email = z.string().email({ message: 'email must be properly formatted' });
const username = z.string().min(2, { message: 'username must contain 2 or more characters' });
const password = z.string().min(10, { message: 'password must contain or more characters' });

export const loginFormSchema = z.object({
  username,
  password
});

export type LoginFormSchema = typeof loginFormSchema;

export const registerFormSchema = z.object({
  email,
  username,
  password
});

export type RegisterFormSchema = typeof registerFormSchema;

export const resetPasswordFormSchema = z.object({
  email
});

export type ResetPasswordFormSchema = typeof resetPasswordFormSchema;
