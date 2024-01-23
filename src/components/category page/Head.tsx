import React from 'react';

function HeadTitle({ title }: { title: string }) {
  return (
    <div className="h-[21rem] bg-black">
      <h1 className="h2-bold m-auto w-fit pt-[12.1875rem] text-primary-white">
        {title}
      </h1>
    </div>
  );
}

export default HeadTitle;
