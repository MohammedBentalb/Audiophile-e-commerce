import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import { checkMark } from '../../../public';
import { useCartContext } from '@/hooks/useCartContext';
import CartItem from '@/components/publicComponents/CartItem';
import Link from 'next/link';
import toast from 'react-hot-toast';

function ThanksPopUp({
  setShowThanks,
}: {
  setShowThanks: Dispatch<SetStateAction<boolean>>;
}) {
  const { cartItem, deleteItem } = useCartContext();

  const handleBack = () => {
    deleteItem({}, true);
    setShowThanks(false);
    toast.success('thanks for trying demo')
  };

  return (
    <>
      <div className=" fixed inset-0 top-[6rem] z-[99] bg-black/40 max-lg:top-[5.71rem]">
        <section className="relative inset-x-[50%]  top-[222px] z-[999] w-full max-w-[540px] translate-x-[-50%]  max-sm:px-6">
          <div className="flex flex-col gap-[2.0625rem] rounded-lg bg-white p-12 max-sm:gap-6 max-[320px]:p-6">
            <Image src={checkMark} width={64} height={64} alt={'arrow'} className='select-none'/>

            <div className="flex flex-col gap-6">
              <h1 className="h3-bold text-black">
                Thank you <br /> for your order
              </h1>
              <p className="paragraph">
                You will receive an email confirmation shortly.
              </p>
            </div>

            <div className="flex min-h-[8.75rem] w-full rounded-lg bg-primary-lightGray max-sm:flex-col">
              <div className="flex w-full max-w-[444px] flex-col gap-1  rounded-lg p-4 max-[320px]:p-2">
                {cartItem && cartItem.length > 0 && (
                  <CartItem cart={false} data={[cartItem[0]]} single={true} />
                )}
                {cartItem && cartItem.length > 0 && (
                  <span className="mx-auto mb-[0.4rem] mt-[0.2rem] h-[0.1rem] w-[90%] bg-primary-blackish opacity-20"></span>
                )}
                {cartItem && cartItem.length > 1 && (
                  <p className="text-center text-[0.75rem] text-black opacity-50">{`and ${
                    cartItem.length - 1
                  } more item(s)`}</p>
                )}
              </div>
              <div className="flex w-full max-w-[198px] flex-col justify-center gap-2 rounded-b-lg rounded-r-lg bg-black py-6 pl-8 max-sm:max-w-none max-[320px]:pl-6">
                <h2 className="text-[0.9375rem] font-thin uppercase text-white opacity-50">
                  Grand Total
                </h2>
                <p className="h6-bold text-white">
                  ${' '}
                  {cartItem && cartItem.length > 0
                    ? Math.trunc(
                        cartItem.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        ) + 50
                      )
                    : '$ 0'}
                </p>
              </div>
            </div>
            <Link
              href={'/'}
              className="button-default-1 mt-[0.8rem] w-full"
              onClick={handleBack}
            >
              back to home
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default ThanksPopUp;
