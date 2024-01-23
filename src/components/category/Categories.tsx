import Image from 'next/image';
import Link from 'next/link';

import { categoryItems, rightArrow } from '../../../public';

function Categories() {
  return (
    <section className="max-content mb-28 mt-44 flex w-full items-center justify-between gap-3 max-lg:mt-[153px] max-sm:flex-col max-sm:gap-[4.3125rem]">
      {/* <section className="max-content my-44 grid w-full grid-cols-3 items-center justify-between gap-3"> */}
      {/* max-sm:flex-col max-sm:justify-center max-sm:gap-[6.25rem] */}
      {categoryItems.map((cat, index) => (
        <div
          key={index}
          className="relative flex h-[12.72rem] w-full max-w-[21.875rem] flex-col items-center justify-center rounded-[0.5rem] bg-primary-lightGray pb-2 max-lg:h-[10.3125rem]"
        >
          <div
            className={`h-[190px] w-[219px] max-md:w-[145px] ${
              index === 0
                ? 'mt-[-168px] max-md:mt-[-73px]'
                : `${
                    index === 1
                      ? 'mt-[-153px] max-md:mt-[-65px]'
                      : 'mt-[-125px] max-md:mt-[-65px] max-md:w-[165px]'
                  }`
            }`}
          >
            <Image
              src={cat.img}
              alt="category"
              /* sizes="(max-width: 1024px) 135px, 200px" */
              sizes="(min-width: 780px) 219px, 145px"
              className='select-none'
            />
          </div>
          <div className="absolute bottom-[28px] flex flex-col gap-[1.05rem] max-lg:bottom-[20px]">
            <h1 className="h6-bold">{cat.title}</h1>
            <Link href={cat.link} className="button-default-3">
              shop{' '}
              <Image
                width={5}
                height={2}
                src={rightArrow}
                alt="arrow"
                className="w-2 select-none"
              />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Categories;
