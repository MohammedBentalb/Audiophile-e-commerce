'use client';
function BackAnchor() {
  return (
    <div className="max-content">
      <h5
        className=" mt-[5.1rem] w-fit cursor-pointer text-[15px] capitalize opacity-50 hover:text-primary-orange hover:opacity-100 max-md:mt-7"
        onClick={() => {
          window?.history.back();
        }}
      >
        go back
      </h5>
    </div>
  );
}

export default BackAnchor;
