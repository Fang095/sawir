import { env } from '$env/dynamic/private';
import nodemailer from 'nodemailer';
import { render } from 'svelte-email';

import ConfirmEmail from '$lib/components/mailers/confirm-email.svelte';
import WelcomeEmail from '$lib/components/mailers/welcome-email.svelte';
import ResetPassword from '$lib/components/mailers/reset-password.svelte';

const from = `Sawir Team <adamauthonly@gmail.com>`;

export function verifyEmailFormat(email: string): boolean {
  const regex = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  );
  return regex.test(email);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.GMAIL_USER,
    pass: env.GMAIL_PASS
  }
});

export async function sendEmailVerificationLink(email: string, username: string, token: string) {
  const confirmEmailHTML = render({
    template: ConfirmEmail,
    props: { token }
  });

  transporter.sendMail({
    from,
    to: email,
    subject: 'Email Address Confirmation',
    html: confirmEmailHTML
  });
}

export async function sendWelcomeEmail(email: string) {
  const welcomeEmailHTML = render({
    template: WelcomeEmail
  });

  transporter.sendMail({
    from,
    to: email,
    subject: 'Welcome To Sawir',
    html: welcomeEmailHTML
  });
}

export async function sendPasswordResetLink(email: string, username: string, token: string) {
  const passwordResetHTML = render({
    template: ResetPassword,
    props: {
      username,
      token
    }
  });

  transporter.sendMail({
    from,
    to: email,
    subject: 'Password Reset Request',
    html: passwordResetHTML
  });
}
