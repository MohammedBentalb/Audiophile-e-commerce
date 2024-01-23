function ProductCategoryLoading() {
  /* let numOfSkeletons;
  if (category === 'headphones') {
    numOfSkeletons = 3;
  } else if (category === 'speakers') {
    numOfSkeletons = 2;
  } else {
    numOfSkeletons = 1;
  } */
  return (
    <>
      <div className="h-[21rem] bg-black pt-[12.1875rem]">
        <h1 className="h2-bold flashing flashing-text m-auto h-[25px] w-[150px] text-primary-white"></h1>
      </div>
      <div className="mx-6 mt-[160px]  flex flex-col gap-[160px] max-md:gap-[120px]">
        {Array.from({ length: 3 }).map((_, i) => (
          <section
            key={i}
            className={`max-content flex w-full items-center justify-between gap-6 max-md:flex-col ${
              i % 2 === 0 ? '' : 'flex-row-reverse'
            }`}
          >
            <div className="flashing relative h-[35rem] w-[33.75rem] rounded-lg bg-primary-lightGray max-[1089px]:h-[380px] max-md:h-[352px] max-md:w-full"></div>
            <div className="flex w-full max-w-[445px] flex-col gap-8 max-[1089px]:w-[430px] max-md:max-w-[552px] max-md:items-center max-sm:gap-6">
              <div className="flex flex-col gap-4 max-md:items-center max-sm:gap-6">
                <h1 className="overline-text flashing-text h-[20px] w-full max-w-[400px] rounded-lg"></h1>
                <h2 className="h2-bold flashing-text h-[20px] w-full max-w-[400] rounded-lg max-md:text-center"></h2>
              </div>
              <div className="flex flex-col gap-10 max-md:items-center max-md:gap-6">
                <p className="paragraph flashing-text h-[100px] w-full max-w-[500px] rounded-lg max-md:text-center"></p>
                <div className="flashing-text h-[48px] w-[160px] rounded-lg"></div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default ProductCategoryLoading;
