import { z } from 'zod';

const CheckoutFormSchema = z.object({
  name: z.string().trim().min(3),
  email: z.string().email().trim(),
  phone: z.string().regex(/^\+\d+$/, 'only digits').min(10),
  address: z.string().trim().min(10),
  zip: z.string().regex(/^\d+$/, 'only digits').min(4),
  city: z.string().trim().min(3),
  country: z.string().trim().min(3),
  payment: z.string().trim().min(4),
  'e-money-number': z.string().regex(/^\d+$/, 'Zip code must contain only digits').min(9).optional(),
  'e-money-pin': z.string().regex(/^\d+$/, 'Zip code must contain only digits').min(4).optional(),
});



type CheckoutFormSchemaType = z.infer<typeof CheckoutFormSchema>;

export type { CheckoutFormSchemaType };
export { CheckoutFormSchema  };
