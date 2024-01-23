'use client';

import React, { useState } from 'react';
import Counter from '../publicComponents/Counter';
import { useCartContext } from '@/hooks/useCartContext';
import { ItemCartType } from '@/types/types';

function ProductAddToCart({ data }: { data: ItemCartType | null }) {
  const [item, setItem] = useState<
    (ItemCartType & { quantity: number }) | null
  >();

  const { addItemToCart } = useCartContext();

  const handleAddToCart = (
    item: (ItemCartType & { quantity: number }) | null | undefined
  ) => {
    if (!item || item.quantity === 0) return;
    addItemToCart(item)
  };

  return (
    <>
      <Counter data={data} setItem={setItem} />
      <button
        className="button-default-1"
        onClick={() => handleAddToCart(item)}
      >
        add to cart
      </button>
    </>
  );
}

export default ProductAddToCart;
