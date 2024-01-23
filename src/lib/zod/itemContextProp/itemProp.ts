import { z } from 'zod';

const ImageType = z.object({
  mobile: z.string(),
  tablet: z.string(),
  desktop: z.string(),
});

const ItemPropSchema = z.object({
  name: z.string(),
  slug: z.string(),
  image: ImageType,
  email: z.string(),
  quantity: z.number(),
  price: z.number(),
});
type ItemPropType = z.infer<typeof ItemPropSchema>;

export { ItemPropSchema };
export type { ItemPropType };
