import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email({ message: 'email must be properly formatted' })
});

export type FormSchema = typeof formSchema;
