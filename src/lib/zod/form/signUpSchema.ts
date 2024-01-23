import { z } from 'zod';

const signUpSchema = z
  .object({
    email: z.string().email('invalid format'),
    password: z.string().min(8, '8 characters or more'),
    confirmPassword: z.string().min(8, '8 characters or more'),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: 'passwords should match',
    path: ['confirmPassword'],
  });

type signUpType = z.infer<typeof signUpSchema>;

export { signUpSchema };
export type { signUpType };
