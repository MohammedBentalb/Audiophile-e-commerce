import React, { Suspense } from 'react';
import ProductCategoryLoading from './loading';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<ProductCategoryLoading />}>{children}</Suspense>
    </>
  );
}

export default layout;
