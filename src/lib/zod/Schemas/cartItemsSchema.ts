import { z } from 'zod';

const ImageType = z.object({
  mobile: z.string(),
  tablet: z.string(),
  desktop: z.string(),
});

const CartItemsSchema = z.object({
  _id: z.any().optional(),
  image: ImageType,
  name: z.string(),
  slug: z.string(),
  price: z.number(),
  email: z.string().email(),
  quantity: z.number()
});

type CartItemsType = z.infer<typeof CartItemsSchema>;

export { CartItemsSchema };
export type { CartItemsType };
