import Image from 'next/image';
import React from 'react';
import { personGallery } from '../../../public';

function StoreInfo() {
  return (
    <section className="max-content mb-20 mt-28 flex w-full items-center justify-between gap-8 pt-[5.55rem] max-xl:px-6 max-md:flex-col-reverse max-md:pt-0 max-sm:px-6">
      <div className="flex w-full max-w-[27.8125rem] flex-col gap-8 max-md:max-w-[35.8125rem]">
        <h1 className="h2-bold max-md:text-center">
          Bringing you the <span className="text-primary-orange">best</span>{' '}
          audio gear
        </h1>
        <p className="paragraph max-md:text-center">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="w-[33.75rem] overflow-hidden rounded-lg bg-primary-lightGray max-md:w-full max-md:max-w-[43.0625rem] max-sm:max-w-[20.4375rem]">
        <Image
          alt="store owner"
          src={personGallery.desktop}
          className="my-auto select-none rounded-lg max-md:hidden"
        />
        <Image
          alt="store owner"
          src={personGallery.tablet}
          className="select-none rounded-lg max-sm:hidden md:hidden"
        />
        <Image
          alt="store owner"
          src={personGallery.mobile}
          className="select-none rounded-lg sm:hidden"
        />
      </div>
    </section>
  );
}

export default StoreInfo;
