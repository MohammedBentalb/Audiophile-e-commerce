import BackAnchor from '@/components/product page/BackAnchor';
import React from 'react';
import CheckoutForm from './CheckoutForm';

function CheckoutPage() {
  return (
    <>
      <div className="h-[6.04rem] w-full bg-black max-lg:h-[5.7rem]"></div>
      <div className="mx-6 max-md:mt-8 sm:mx-10">
        <BackAnchor />
      </div>
      <div className='mx-6 max-md:mt-8 sm:mx-10'>
        <CheckoutForm />
      </div>
    </>
  );
}

export default CheckoutPage;
