import HeadTitle from '@/components/category page/Head';
import ProductDetails from '@/components/category page/ProductDetails';
import Categories from '@/components/category/Categories';
import Footer from '@/components/home/Footer';
import StoreInfo from '@/components/home/StoreInfo';
import connectMongo from '@/db';
import Pool from '@/db/schema/productsSchema';
import {
  AllProductSchema,
  AllProductType,
  ProductType,
} from '@/lib/zod/Schemas/productsSchema';

async function DataCat({ category }: { category: string }) {
  /*  const fetchCategory = async (category: string) => {
    try {
      const data = await fetch(
        `http://localhost:3000/api/category/${category}`
      );
      if (!data.ok) throw new Error('data is not ok');
      const response = await data.json();
      const validatedData = AllProductSchema.safeParse(response);
      if (!validatedData.success) throw new Error('no data available ');
      return validatedData.data;
    } catch (e) {
      console.log('error loading data');
      return [];
    }
  }; */

  const fetchCategory = async (category: string) => {
    try {
      await connectMongo();
      const data = await Pool.find({ category }).sort({ _id: -1 });
      const ValidatedData = AllProductSchema.safeParse(data);
      if (!ValidatedData.success) {
        console.log('data is not valid');
        return undefined;
      }
      return ValidatedData.data;
    } catch (e) {
      console.log('error loading data', e);
    }
  };

  const data: AllProductType | undefined = await fetchCategory(category);

  return (
    <>
      <HeadTitle title={category} />

      {(!data || data.length === 0) && (
        <h1 className="h3-bold mt-11 text-center">{`Could not find "${category}"`}</h1>
      )}

      <div className="mx-6 mt-[160px]  flex flex-col gap-[160px] max-md:gap-[120px]">
        {data?.map((product, i) => (
          <ProductDetails key={i} index={i} product={product as ProductType} />
        ))}
      </div>

      <div className="relative top-10 pt-6 max-sm:top-0 max-sm:p-0">
        <Categories />
      </div>
      <StoreInfo />
      <Footer />
    </>
  );
}

export default DataCat;
