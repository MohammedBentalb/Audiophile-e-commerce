function Loading() {
  return (
    <>
      <div className="h-[6.04rem] w-full bg-black max-lg:h-[5.7rem]"></div>
      <div className="mx-6 max-md:mt-8 sm:mx-10">
        <div className="max-content">
          <h5 className="flashing-text mt-[5.1rem] h-[1.25rem] w-[12.5rem] cursor-pointer rounded-2xl text-[0.9375rem] capitalize opacity-50 hover:text-primary-orange hover:opacity-100 max-md:mt-7 max-sm:w-[9.375rem]">
            {/* text */}
          </h5>
        </div>
      </div>

      <section className="mx-6 sm:mx-10">
        {/* Product Preview */}
        <div className="max-content mt-14 flex items-center justify-between gap-6 max-md:mt-6 max-sm:flex-col">
          <div className="flashing relative h-[35rem] w-[33.75rem] rounded-lg bg-primary-lightGray max-lg:h-[30rem] max-md:w-[17.5625rem] max-sm:h-[20.4375rem] max-sm:w-full max-sm:max-w-[20.4375rem]"></div>
          <div className="flex w-[27.90625rem] flex-col gap-8 max-md:w-[21.21875rem] max-sm:w-full max-sm:max-w-[20.4375rem] max-sm:gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="flashing-text overline-text h-[1.25rem] w-[12.5rem] rounded-xl max-md:text-[0.75rem] max-sm:h-[1.25rem] max-sm:w-[9.375rem]">
                {}
              </h1>
              <h2 className="h2-bold flashing-text h-[6.125rem] w-[18.125rem] rounded-xl max-md:w-[12ch] max-md:text-[1.75rem] max-md:leading-8 max-sm:w-full max-sm:max-w-[12ch]">
                {}
              </h2>
            </div>
            <p className="paragraph flashing-text h-[6.125rem] w-[28.125rem] rounded-xl max-md:h-[7.8125rem] max-md:w-[21.1875rem] max-sm:h-[7.8125rem] max-sm:w-full">
              {}
            </p>
            <div className="flex flex-col gap-[2.9375rem] max-sm:gap-8">
              <label className="flashing-text h6-bold h-[1.25rem] w-[6.25rem] rounded-xl">
                {}
              </label>
              <div className="flex items-center gap-4">
                {/*  Counter  */}
                <div className="flashing-text h-[3rem] w-[7.5rem] rounded-lg"></div>
                <button className="button-default-1 flashing-text rounded-lg">
                  {}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[10rem] max-md:mt-[7.8125rem] max-sm:mt-20">
          {/* Features */}
          <div className="max-content flex justify-between gap-[7.5rem] max-md:flex-col max-sm:items-center max-sm:gap-20 md:gap-9">
            <div className="flex w-full max-w-[39.6875rem] flex-col gap-8 max-sm:max-w-[20.4375rem]">
              <h3 className="h3-bold flashing-text h-[2.1875rem] w-[10rem] rounded-xl max-md:w-[9.375rem]"></h3>
              <div className=" flex h-[15.625rem] w-full flex-col gap-6 max-sm:h-[29.6875rem]">
                {Array.from({ length: 2 }).map((_, i) => (
                  <p
                    key={i}
                    className="paragraph flashing-text h-full w-full rounded-xl"
                  >
                    {}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex max-md:w-full max-md:max-w-[34.3125rem] max-md:justify-between max-sm:max-w-[20.4375] max-sm:flex-col max-sm:gap-6 md:w-[21.875rem] md:flex-col md:gap-8 ">
              <h3 className="h3-bold flashing-text h-[2.5rem] w-[9.375rem] rounded-xl"></h3>
              <ul className="flex flex-col gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i} className="flex gap-6">
                    <label className="flashing-text h-[1.5625rem] w-[1.25rem] rounded-xl font-bold text-primary-orange">
                      {}
                    </label>
                    <label className="paragraph flashing-text h-[1.25rem] w-[12.5rem] rounded-xl capitalize max-sm:w-[9.375rem]">
                      {}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[10.1rem] max-md:mt-[7.5rem] max-sm:mt-[5.5rem]">
          {/* Gallery */}
          <div className="max-content flex gap-[1.875rem] max-md:gap-[1.125rem] max-sm:flex-col max-sm:items-center max-sm:gap-5">
            <div className="flex w-fit flex-col gap-8 max-md:gap-[1.375rem] max-sm:w-full max-sm:items-center max-sm:gap-5">
              <div className="relative h-[17.5rem] w-[27.8125rem] rounded-lg max-lg:h-[14.5rem] max-lg:w-[24.8125rem]  max-md:h-[10.875rem] max-md:w-[17.3125rem] max-sm:h-[10.875rem] max-sm:w-full max-sm:max-w-[20.4375rem]">
                <div className="flashing-text h-full w-full rounded-lg" />
              </div>

              <div className="relative h-[17.5rem]  w-[27.8125rem] rounded-lg max-lg:h-[14.5rem] max-lg:w-[24.8125rem] max-md:h-[10.875rem] max-md:w-[17.3125rem] max-sm:h-[10.875rem] max-sm:w-full max-sm:max-w-[20.4375rem]">
                <div className="flashing-text h-full w-full rounded-lg" />
              </div>
            </div>

            <div className="relative h-[37rem] w-full max-w-[39.6875rem] rounded-lg max-lg:h-[31rem] max-lg:max-w-[36.6875rem] max-md:h-[23rem] max-md:w-[24.6875rem] max-sm:h-[23rem] max-sm:w-full max-sm:max-w-[20.4375rem]">
              <div className="flashing-text h-full w-full rounded-lg" />
            </div>
          </div>
        </div>
        <div className="mt-[161px]">
          {/* Suggestion  */}
          <div className="max-content flex w-full flex-col items-center gap-16 max-md:gap-14 ">
            <h1 className=" h-8 w-[15.5625rem] text-center"></h1>
            <div className="flex w-full justify-between gap-6 max-sm:flex-col max-sm:items-center max-sm:gap-14">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex w-full max-w-[21.875rem] flex-col items-center gap-10 max-sm:gap-8 "
                >
                  <div className="relative h-[19.875rem] w-full max-w-[21.875rem] rounded-lg max-md:max-w-[13.9375rem] max-sm:h-[7.5rem] max-sm:max-w-[20.4375rem]">
                    <div className="flashing-text h-full w-full rounded-xl"></div>
                  </div>
                  <div className="flex flex-col items-center gap-7">
                    <h1 className="flashing-text h-[2.3125rem] w-[11.25rem] whitespace-nowrap rounded-xl max-md:w-[9.375rem]">
                      {}
                    </h1>
                    <div className="button-default-1 flashing-text rounded-xl">
                      {}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Loading;
