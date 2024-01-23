'use client';

import { ItemPropType } from '@/lib/zod/itemContextProp/itemProp';
import { ItemCartType } from '@/types/types';
import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function Counter({
  data,
  setItem,
}: {
  data: ItemCartType | null;
  setItem: Dispatch<
    SetStateAction<(ItemCartType & { quantity: number }) | null | undefined>
  >;
}) {
  const [counter, setCounter] = useState<number>(0);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (!session || !session.user?.email) redirect('/log-in');

      if (session) setEmail(session.user.email.toString());
    };
    checkSession();
  }, []);

  /*   const { updateItem, addItemToCart } = useCartContext();
   */

  const previewIncrease = () => {
    if (counter === 20) return;

    setCounter((prev) => prev + 1);
    if (!data || !email) return;

    const currentCounter = counter;

    const newItem: ItemPropType = {
      quantity: currentCounter + 1,
      image: data.image,
      email,
      slug: data.slug,
      name: data.name,
      price: data.price,
    };
    /* console.log(newItem); */
    setItem(newItem);
  };

  const previewDecrease = () => {
    if (counter === 0) return;

    setCounter((prev) => {
      if (prev === 0) return 0;
      return prev - 1;
    });
    if (!data || !email) return;

    const currentCounter = counter;

    const newItem: ItemPropType = {
      quantity: currentCounter - 1,
      image: data.image,
      email,
      slug: data.slug,
      name: data.name,
      price: data.price,
    };
    /*      console.log(newItem) */
    setItem(newItem);
  };

  const handleIncrease = () => {
    previewIncrease();
  };

  const handleDecrease = () => {
   previewDecrease()
  };

  return (
    <div className="flex h-[3rem] w-[7.5rem] items-center justify-center bg-primary-lightGray">
      <label
        className="subTitle w-10 cursor-pointer select-none text-center font-bold opacity-25 hover:text-primary-orange hover:opacity-100 max-sm:w-7"
        onClick={handleDecrease}
      >
        -
      </label>
      <label className="w-10 text-center text-[13px] font-bold">
        {counter}
      </label>
      <label
        className="subTitle w-10 cursor-pointer select-none text-center font-bold opacity-25 hover:text-primary-orange hover:opacity-100 max-sm:w-7"
        onClick={handleIncrease}
      >
        +
      </label>
    </div>
  );
}

export default Counter;
