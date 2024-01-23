import Categories from '@/components/category/Categories';
import StoreInfo from '@/components/home/StoreInfo';
import React, { Suspense } from 'react';
import Loading from './loading';
import Footer from '@/components/home/Footer';


function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {children}

        <div className="relative top-16 max-md:top-0">
          <Categories />
        </div>
        <div className="relative top-6 max-md:top-0">
          <StoreInfo />
        </div>
        <Footer />
      </Suspense>
    </>
  );
}

export default layout;
