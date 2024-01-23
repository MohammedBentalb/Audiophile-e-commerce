import Pool from '@/db/schema/productsSchema';
import { ProductSchema, ProductType } from '@/lib/zod/Schemas/productsSchema';
import ProductData from './ProductData';
import connectMongo from '@/db';

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params: { slug } }: Props) => {
  return { title: `Frontend Mentor | ${slug}` };
};

async function ProductPage({ params: { slug } }: Props) {
  const fetchData = async (slug: string) => {
    try {
      await connectMongo();

      const data = await Pool.find({ slug });
      const validatedData = ProductSchema.safeParse(data[0]);
      if (!validatedData.success) {
        console.log('data is not valid');
        return undefined;
      }
      return validatedData.data;
    } catch (e) {
      console.log(e);
    }
  };

  const data: ProductType | undefined = await fetchData(slug);




  return (
    <>
      <ProductData data={data} />
    </>
  );
}

export default ProductPage;
