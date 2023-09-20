import { z } from 'zod';

const email = z.string().toLowerCase().email({ message: "This isn't an email. Try again." });

const username = z
  .string()
  .toLowerCase()
  .min(2, { message: 'Username must contain 2 or more characters.' });

const password = z
  .string()
  .toLowerCase()
  .min(10, { message: 'Password must contain 8 or more characters.' });

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

export const changePasswordFormSchema = z.object({
  password,
  confirmPassword: password
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords don't match",
//   params: ['confirmPassword']
// });

export type ChangePasswordFormSchema = typeof changePasswordFormSchema;
