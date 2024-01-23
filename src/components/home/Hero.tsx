import Image from 'next/image';
import Link from 'next/link';
import { product } from '../../../public';

function Hero() {
  return (
    <header className="w-full bg-[#181818] max-[1120px]:bg-[#191919] lg:min-h-[45.625rem]">
      <div className="hero max-content overflow-x-visible max-[1120px]:flex max-[1120px]:items-center max-[1120px]:justify-center max-md:px-[2.4375rem] max-sm:px-[1.5rem]">
        <Image
          content="cover"
          width={1110}
          height={562}
          src={product}
          alt="product hero page"
          className="h-auto w-full scale-[1.3] select-none py-20 max-[1120px]:hidden"
          priority={true}
        />
        {/* <Image
          content="cover"
          width={1110}
          height={562}
          src={product}
          alt="product"
          className="h-auto w-full scale-[1.3] py-20 max-[1120px]:hidden"
          priority={true}
        /> */}
        <section className="flex max-w-[28.0625rem] flex-col gap-6 max-xl:mx-6 max-[1121px]:pt-5 max-[1120px]:items-center min-[1120px]:absolute min-[1121px]:translate-y-[-142.6%]">
          <h1 className="overline-text text-primary-lightGray">new product</h1>
          <h2 className="h1-bold text-primary-white max-[1120px]:text-center">
            xx99 mark ii headphones
          </h2>
          <p className="paragraph max-w-[21.8125rem] max-[1120px]:text-center">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href={'/product/xx99-mark-two-headphones'}
            className="button-default-1 mt-4"
          >
            see product
          </Link>
        </section>
      </div>
    </header>
  );
}

export default Hero;
