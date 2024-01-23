'use client';

import { CartItemsType } from '@/lib/zod/Schemas/cartItemsSchema';
import { ItemPropSchema } from '@/lib/zod/itemContextProp/itemProp';
import { getSession } from 'next-auth/react';
import { ReactNode, createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export type CartContextType = {
  cartItem: CartItemsType[] | null;
  addItemToCart: (item: CartItemsType) => void;
  updateItem: (Item: CartItemsType, quantity: number) => void;
  deleteItem: (Item: CartItemsType | {}, all: boolean) => void;
};

export const CartContext = createContext<CartContextType>({
  cartItem: [],
  addItemToCart: () => {},
  updateItem: () => {},
  deleteItem: () => {},
});

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItem, setCartItem] = useState<CartItemsType[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/cartItems');
      if (response.status === 401) throw new Error('you are not signed in');
      if (!response.ok) throw new Error("data isn't ok");
      const data = await response.json();
      setCartItem(data.cartItems);
    } catch (e) {
      if (e instanceof Error) console.log(e);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const session = await getSession();
      if (session && session.user?.email && !cartItem) await fetchData();
    };
    checkAuth();
  });

  const addItemToCart = async (item: CartItemsType) => {
    try {
      ItemPropSchema.parse(item);

      const foundItem = cartItem
        ? cartItem.find((product) => product.slug === item.slug)
        : false;
      if (foundItem) {
        console.log(item);
        await updateItem(item);
        return;
      }
      const response = await fetch('/api/cartItems', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });

      if (response.status === 401) throw new Error('you are not signed in');
      if (!response.ok) throw new Error("data isn't ok");

      await fetchData();
      toast.success('item got added');
    } catch (e) {
      if (e instanceof Error) console.log(e.stack);
      toast.error('failed adding item');
    }
  };

  const updateItem = async (item: CartItemsType) => {
    try {
      ItemPropSchema.parse(item);
      if (!item) return;

      const response = await fetch('/api/cartItems', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
      if (response.status === 401) throw new Error('you are not signed in');
      if (!response.ok) throw new Error("data isn't ok");
      toast.success('cart item updated');
      await fetchData();
    } catch (e) {
      if (e instanceof Error) console.log(e);
      toast.error('failed updating');
    }
  };

  const deleteItem = async (item: CartItemsType | {}, all: boolean) => {
    try {
      if (!all) ItemPropSchema.parse(item);

      const response = await fetch('/api/cartItems', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item,
          all,
        }),
      });
      if (response.status === 401) throw new Error('you are not signed in');
      if (!response.ok) throw new Error("data isn't ok");
      toast.success('item removed');
      await fetchData();
    } catch (e) {
      if (e instanceof Error) console.log(e);
      toast.error('deleting failed');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItem, addItemToCart, updateItem, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
}
