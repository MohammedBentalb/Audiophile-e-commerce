'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cart } from '../../../public';
import { useCartContext } from '@/hooks/useCartContext';
import CartItem from '../publicComponents/CartItem';

function NavCart() {
  const { cartItem, deleteItem } = useCartContext();
  const [openCart, setOpenCart] = useState<boolean>(false);
  const target = useRef<HTMLDivElement>(null);
  const target2 = useRef<HTMLDivElement>(null);
  const target3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (
        target.current &&
        target2.current &&
        target3.current &&
        !target.current.contains(e.target as Node) &&
        !target.current.contains(e.target as Node) &&
        !target3.current.contains(e.target as Node)
      ) {
        setOpenCart(false);
      }
    };

    window.addEventListener('mousedown', handleClose);
    return () => {
      window.addEventListener('mousedown', handleClose);
    };
  });

  return (
    <>
      <div
        className={`absolute right-0 top-[5.95rem] h-screen w-screen bg-black/60 transition-opacity duration-200 ease-out max-lg:top-[5.65rem] max-md:top-[5.58rem] max-sm:top-[5.6rem] ${
          openCart ? 'opacity-100' : 'right-[100%] opacity-0'
        }`}
      ></div>
      <span id="cartIcon" ref={target} className="relative w-fit xl:ml-auto">
        {cartItem && cartItem.length > 0 && (
          <div className="absolute -right-1 top-0 h-[10px] w-[10px] rounded border border-black bg-primary-orange"></div>
        )}
        <Image
          role="img"
          aria-label="menu cart icon"
          src={cart}
          width={23}
          height={20}
          alt="cart icon"
          className=" cursor-pointer max-md:ml-auto"
          onClick={() => {
            setOpenCart((prev) => !prev);
          }}
        />
        <div
          ref={target2}
          className={`absolute right-0 flex min-h-[30.5rem] w-[23.5625rem] flex-col gap-[0.2rem] rounded-lg bg-primary-offWhite p-8 max-sm:w-[20.4375rem] max-[400px]:hidden max-[376px]:right-[50%] max-[376px]:translate-x-[5%] ${
            openCart ? 'top-[5.66rem] opacity-100' : 'top-[-50.66rem] opacity-0'
          }`}
        >
          <div className="flex justify-between">
            <h1 className="h6-bold text-black">
              cart {`(${cartItem ? cartItem.length : 0})`}
            </h1>
            <button
              disabled={(!cartItem || cartItem.length === 0) && true}
              onClick={() => deleteItem({}, true)}
              className="paragraph underline hover:text-primary-orange"
            >
              Remove all
            </button>
          </div>
          {cartItem && cartItem.length > 0 ? (
            <div className="mt-7 h-full">
              <CartItem
                data={cartItem}
                cart={true}
                setOpenCart={setOpenCart}
                single={false}
              />
            </div>
          ) : (
            <p className="h5-bold m-auto text-black">cart is empty</p>
          )}
        </div>
      </span>
      {/** mobile cart */}
      <div
        ref={target3}
        className={`absolute right-[50%] flex min-h-[30.5rem] w-[18.4375rem] translate-x-[50%] flex-col gap-[0.2rem] rounded-lg bg-primary-offWhite px-5 py-8 max-[308px]:w-[16.7rem]  min-[400px]:hidden ${
          openCart ? 'top-[7.8rem] opacity-100' : 'top-[-50.66rem] opacity-0'
        }`}
      >
        <div className="flex justify-between">
          <h1 className="h6-bold text-black">
            cart {`(${cartItem ? cartItem.length : 0})`}
          </h1>
          <button
            disabled={(!cartItem || cartItem.length === 0) && true}
            onClick={() => deleteItem({}, true)}
            className="paragraph underline hover:text-primary-orange"
          >
            Remove all
          </button>
        </div>
        {cartItem && cartItem.length > 0 ? (
          <div className="mt-7 h-full">
            <CartItem
              data={cartItem}
              cart={true}
              setOpenCart={setOpenCart}
              single={false}
            />
          </div>
        ) : (
          <p className="h5-bold m-auto text-black">cart is empty</p>
        )}
      </div>
    </>
  );
}

export default NavCart;
