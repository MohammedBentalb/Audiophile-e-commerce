import { ProductType } from '@/lib/zod/Schemas/productsSchema';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ProductDetails({
  product,
  index,
}: {
  index: number;
  product: ProductType;
}) {
  return (
    <section
      className={`max-content flex w-full items-center justify-between gap-6 max-md:flex-col ${
        index % 2 === 0 ? '' : 'flex-row-reverse'
      }`}
    >
      <div className="relative h-[35rem] w-[33.75rem] rounded-lg bg-primary-lightGray max-[1089px]:h-[380px] max-md:h-[352px] max-md:w-full">
        <Image
          alt={'product name'}
          fill
          src={`/${product.image.desktop}`}
          className="rounded-lg object-contain"
          sizes="(min-width: 1120px) 540px, (min-width: 780px) calc(46.25vw + 31px), calc(100vw - 48px)"
        />
      </div>
      <div className="flex w-full max-w-[445px] flex-col gap-8 max-[1089px]:w-[430px] max-md:max-w-[552px] max-md:items-center max-sm:w-full max-sm:gap-6">
        <div className="flex flex-col gap-4 max-md:items-center max-sm:gap-6">
          {product.new ? <h1 className="overline-text ">new products</h1> : ''}
          <h2 className="h2-bold w-[12ch] max-md:text-center">
            {product.name}
          </h2>
        </div>
        <div className="flex flex-col gap-10 max-md:items-center max-md:gap-6">
          <p className="paragraph max-md:text-center">{product.description}</p>
          <Link href={`/product/${product.slug}`} className="button-default-1">
            see product
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
