import { z } from 'zod';

const ImageType = z.object({
  mobile: z.string(),
  tablet: z.string(),
  desktop: z.string(),
});

const IncludesType = z.object({
  quantity: z.number(),
  item: z.string(),
});

const OthersType = z.object({
  slug: z.string(),
  name: z.string(),
  image: ImageType,
});

const ProductSchema = z.object({
  _id: z.any(),
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  image: ImageType,
  category: z.string(),
  categoryImage: ImageType,
  new: z.boolean(),
  price: z.number(),
  description: z.string(),
  features: z.string(),
  includes: z.array(IncludesType),
  gallery: z.object({
    first: ImageType,
    second: ImageType,
    third: ImageType,
  }),
  others: z.array(OthersType),
});

const AllProductSchema = z.array(ProductSchema);

type ProductType = z.infer<typeof ProductSchema>;
type AllProductType = z.infer<typeof AllProductSchema>;

export { ProductSchema, AllProductSchema };
export type { ProductType, AllProductType };
