import { z } from 'zod';

export const formSchema = z.object({
  username: z.string().min(2, { message: 'username must contain 2 or more characters' }),
  password: z.string().min(10, { message: 'password must contain or more characters' })
});

export type FormSchema = typeof formSchema;
