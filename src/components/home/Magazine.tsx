import Image from 'next/image';
import React from 'react';
import {
  circles,
  magazineImages,
  magazineImages2,
  magazineImages3,
} from '../../../public';

function Magazine() {
  return (
    <section className="max-container mb-8 flex w-full flex-col items-center gap-12 pt-[3.45rem] max-xl:px-6 max-md:gap-8 max-sm:gap-6 max-sm:pt-0">
      <div className="max-content flex h-[35rem] w-full justify-around gap-4 overflow-hidden rounded-lg bg-primary-orange max-lg:pl-1 max-md:h-[720px] max-md:flex-col max-md:items-center max-md:justify-around max-md:px-1 max-sm:h-[600px]">
        <div className="relative flex h-full w-[23.5rem] items-end overflow-visible max-md:h-[237px] max-md:w-[11.25rem] max-md:items-center max-sm:h-auto max-sm:w-[8.125rem] lg:left-[2.8rem]">
          <Image
            alt="decoration circles"
            src={circles}
            className="absolute z-[0] scale-[2.2] select-none max-md:scale-[5] max-sm:top-5 max-sm:scale-[3.5]"
          />

          <Image
            src={magazineImages.desktop}
            alt="audiophile product"
            className="z-[1] mb-[-0.75rem] select-none max-md:hidden"
            sizes="(min-width: 820px) 376px, (min-width: 660px) calc(95vw - 384px), (min-width: 420px) calc(20.91vw + 89px), calc(100vw - 230px)"
          />

          <Image
            src={magazineImages.tablet}
            alt="audiophile product"
            className="z-[1] mb-[-0.75rem] select-none max-sm:hidden md:hidden"
            sizes="180px"
          />

          <Image
            src={magazineImages.mobile}
            alt="audiophile product"
            className="z-[1] mb-[-0.75rem] select-none sm:hidden"
            sizes="130px"
          />
        </div>

        <div className=" relative z-[1] flex h-full w-full max-w-[21.8125rem] flex-col justify-center gap-6 pl-[0.12rem] pt-2 max-md:h-[20.625rem] max-md:items-center max-md:p-0">
          <h1 className="h1-bold text-primary-white max-md:w-[10ch] max-md:text-center">
            zx9 speaker
          </h1>
          <p className="paragraph max-md:text-center">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <a href="/product/zx9-speaker" className="button-default-4 sm:mt-4">
            see product
          </a>
        </div>
      </div>

      <div className="max-content relative flex h-auto w-full items-center rounded-lg md:max-h-[20rem]">
        <Image
          sizes="(min-width: 1240px) 1110px, calc(85.91vw + 62px)"
          alt="audiophile product"
          src={magazineImages2.desktop}
          className="select-none rounded-lg max-md:hidden"
        />
        <Image
          sizes="calc(80.83vw + 75px)"
          alt="audiophile product"
          src={magazineImages2.tablet}
          className="select-none rounded-lg max-sm:hidden md:hidden"
        />
        <Image
          sizes="calc(100vw - 48px)"
          alt="audiophile product"
          src={magazineImages2.mobile}
          className="select-none rounded-lg sm:hidden"
        />
        <div className="absolute flex flex-col gap-8 max-md:left-[3.875rem] max-sm:left-6 max-[320px]:left-2 md:left-[6rem]">
          <h1 className="h4-bold">zx7 speaker</h1>
          <a href="/product/zx7-speaker" className="button-default-2">
            see product
          </a>
        </div>
      </div>

      <div className="max-content flex h-auto w-full gap-[30px] rounded-lg  max-sm:flex-col">
        <div className="h-auto w-[50%] max-sm:w-full">
          <Image
            src={magazineImages3.desktop}
            alt="audiophile product"
            className="select-none rounded-lg max-md:hidden"
          />
          <Image
            src={magazineImages3.tablet}
            alt="audiophile product"
            className="select-none rounded-lg max-sm:hidden md:hidden"
          />
          <Image
            src={magazineImages3.mobile}
            alt="audiophile product"
            className="select-none rounded-lg sm:hidden"
          />
        </div>
        <div className="flex h-auto w-[50%] flex-col justify-center gap-8 rounded-lg bg-primary-lightGray pl-24 max-lg:pl-10 max-sm:h-[13.75rem] max-sm:w-full max-sm:pr-3 ">
          <h1 className="h4-bold">yx1 earphones</h1>
          <a href="/product/yx1-earphones" className="button-default-2">
            see product
          </a>
        </div>
      </div>
    </section>
  );
}

export default Magazine;
