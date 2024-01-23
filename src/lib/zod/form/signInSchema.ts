import { z } from 'zod';

const singInSchema = z.object({
  email: z.string().email('invalid email format'),
  password: z.string().min(8, '8 character and more'),
});

type signInType = z.infer<typeof singInSchema>;

export { singInSchema };
export type { signInType };
