import { currencyFormatter } from '@/lib/util/currencyFormatter';
import { ProductType } from '@/lib/zod/Schemas/productsSchema';
import Image from 'next/image';
import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import ProductAddToCart from './ProductAddToCart';

async function ProductPreview({ data }: { data: ProductType | undefined }) {
  const session = await getServerSession();
  if (!session || !session.user?.email) redirect('log-in');

  if (!data) return;

  const newData = {
    name: data.name,
    slug: data.slug,
    email: session.user.email,
    image: data.image,
    price: data.price
  };

  return (
    <div className="max-content mt-14 flex items-center justify-between gap-6 max-md:mt-6 max-sm:flex-col">
      <div className="relative h-[35rem] w-[33.75rem] rounded-lg bg-primary-lightGray max-lg:h-[30rem] max-md:w-[17.5625rem] max-sm:h-[20.4375rem] max-sm:w-full max-sm:max-w-[20.4375rem]">
        <Image
          fill
          priority
          alt={`${data?.name} audiophile`}
          src={`/${data?.image.desktop}`}
          className=" rounded-lg object-cover max-md:hidden"
          sizes="(min-width: 1160px) 540px, (min-width: 780px) 47.22vw, (min-width: 640px) calc(34.17vw + 21px), (min-width: 420px) 327px, calc(75vw + 27px)"
        />
        <Image
          fill
          priority
          alt={`${data?.name} audiophile`}
          src={`/${data?.image.tablet}`}
          className="mas-sm:hidden rounded-lg object-cover md:hidden"
          sizes="(min-width: 640px) calc(34.17vw + 21px), (min-width: 420px) 327px, calc(75vw + 27px)"
        />
        <Image
          fill
          priority
          alt={`${data?.name} audiophile`}
          src={`/${data?.image.mobile}`}
          className=" rounded-lg object-cover sm:hidden"
          sizes="(min-width: 420px) 327px, calc(75vw + 27px)"
        />
      </div>
      <div className="flex w-[27.90625rem] flex-col gap-8 max-md:w-[21.21875rem] max-sm:w-full max-sm:max-w-[20.4375rem] max-sm:gap-6">
        <div className="flex flex-col gap-4">
          {data?.new && (
            <h1 className="overline-text max-md:text-[0.75rem]">new product</h1>
          )}
          <h2 className="h2-bold w-[10.5ch] max-md:w-[12ch] max-md:text-[1.75rem] max-md:leading-8">
            {data?.name}
          </h2>
        </div>
        <p className="paragraph">{data?.description}</p>
        <div className="flex flex-col gap-[2.9375rem] max-sm:gap-8">
          <label className="h6-bold">$ {currencyFormatter(data?.price)}</label>
          <div className="flex items-center gap-4">
            <ProductAddToCart data={newData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
