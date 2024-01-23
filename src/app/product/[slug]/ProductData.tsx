import BackAnchor from '@/components/product page/BackAnchor';
import Features from '@/components/product page/Features';
import Gallery from '@/components/product page/Gallery';
import ProductPreview from '@/components/product page/ProductPreview';
import Suggestion from '@/components/product page/Suggestion';
import { ProductType } from '@/lib/zod/Schemas/productsSchema';

function ProductData({ data }: { data: ProductType | undefined }) {
  return (
    <>
      <div className="h-[6.04rem] w-full bg-black max-lg:h-[5.7rem]"></div>
      <div className="mx-6 max-md:mt-8 sm:mx-10">
        <BackAnchor />
      </div>
      { !data &&  <h1 className="h3-bold mt-11 text-center">Item not found</h1>}
      { data && <section className="mx-6 sm:mx-10">
        <ProductPreview data={data} />
        <div className="mt-[160px] max-md:mt-[125px] max-sm:mt-20">
          <Features data={data} />
        </div>
        <div className="mt-[10.1rem] max-md:mt-[7.5rem] max-sm:mt-[5.5rem]">
          <Gallery data={data} />
        </div>
        <div className="mt-[161px]">
          <Suggestion data={data} />
        </div>
      </section> } 
    </>
  );
}

export default ProductData;
