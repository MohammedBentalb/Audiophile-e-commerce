'use client';

import { useCartContext } from '@/hooks/useCartContext';
import { CartItemsType } from '@/lib/zod/Schemas/cartItemsSchema';
import { ItemPropType } from '@/lib/zod/itemContextProp/itemProp';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

function CartItem({
  data,
  cart,
  setOpenCart = () => {},
  single,
}: {
  data: CartItemsType[];
  cart: boolean;
  setOpenCart?: Dispatch<SetStateAction<boolean>>;
  single: boolean;
}) {
  const [email, setEmail] = useState<string>('');

  const { addItemToCart, deleteItem } = useCartContext();

  useEffect(() => {
    const getEmail = async () => {
      const session = await getSession();
      if (!session || !session.user?.email) redirect('/log-in');

      setEmail(session.user.email.toString());
    };
    getEmail();
  }, []);

  const handleDecrease = (item: CartItemsType) => {
    const newItem: ItemPropType = {
      name: item.name,
      image: item.image,
      email,
      price: item.price,
      slug: item.slug,
      quantity: item.quantity - 1,
    };

    if (item.quantity === 1) {
      deleteItem(newItem, false);
      return;
    }
    addItemToCart(newItem);
  };

  const handleIncrease = (item: CartItemsType) => {
    const newItem: ItemPropType = {
      name: item.name,
      image: item.image,
      email,
      price: item.price,
      slug: item.slug,
      quantity: item.quantity + 1,
    };
    addItemToCart(newItem);
  };

  return (
    <div
      className={`flex flex-col justify-between gap-8  ${
        single ? '' : cart ? 'min-h-[22.8125rem]' : 'min-h-[14.8125rem]'
      }`}
    >
      <ul
        className={`flex max-h-[250px] flex-col gap-6 ${
          cart ? 'overflow-auto' : ' max-h-none'
        } `}
      >
        {data.map((item) => (
          <li key={item._id} className="flex items-center justify-between">
            <div className="flex gap-4 max-[308px]:gap-3">
              <Link
                href={`/product/${item.slug}`}
                className="relative h-16 w-16 "
                as={`/product/${item.slug}`}
                onClick={() => {
                  if (cart) {
                    setOpenCart(false);
                  }
                }}
              >
                <Image
                  alt={`${item.name} Audiophile`}
                  src={`${item.image.mobile.substring(1)}`}
                  fill
                  className="select-none rounded-lg object-cover hover:opacity-60"
                  sizes=""
                />
              </Link>
              <div className="flex flex-col justify-center">
                <label className="text-[0.9375rem] font-bold uppercase text-black">
                  {item.name.split(' ')[0]}
                </label>
                <label className=" text-[0.875rem] font-bold leading-6 text-black opacity-50">
                  $ {item.price}
                </label>
              </div>
            </div>
            {cart && (
              <div className="flex h-8 w-full max-w-[6rem] items-center bg-primary-lightGray max-[308px]:max-w-[4.5rem]">
                <label
                  onClick={() => handleDecrease(item)}
                  className="subTitle inline-block w-8 cursor-pointer text-center font-bold text-black opacity-25 hover:text-primary-orange hover:opacity-100 max-[308px]:w-6"
                >
                  -
                </label>
                <label className="m-auto inline-block w-8 text-center text-[0.8125rem] font-bold text-black max-[308px]:w-6">
                  {item.quantity}
                </label>
                <label
                  onClick={() => handleIncrease(item)}
                  className="subTitle inline-block w-8 cursor-pointer text-center font-bold text-black opacity-25 hover:text-primary-orange hover:opacity-100 max-[308px]:w-6"
                >
                  +
                </label>
              </div>
            )}{' '}
            {!cart && (
              <label className="mb-auto h-full pt-1 text-start text-[0.9375rem] font-bold leading-6 opacity-50">
                x{item.quantity}
              </label>
            )}
          </li>
        ))}
      </ul>

      {cart && (
        <div className="flex flex-col gap-6">
          <div className="flex w-full justify-between">
            <p className="text-[0.9375rem] font-medium uppercase leading-6 text-black opacity-50">
              Total
            </p>
            <p className="text-[1.125rem] font-bold text-black">
              $ {data.reduce((total, item) => total + item.price, 0)}
            </p>
          </div>
          <Link
            href={'/checkout'}
            className="button-default-1 w-full"
            onClick={() => setOpenCart(false)}
          >
            checkout
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartItem;
