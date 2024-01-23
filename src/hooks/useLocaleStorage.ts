'use client';

import { CartItemsType } from '@/lib/zod/Schemas/cartItemsSchema';
import { useEffect, useState } from 'react';

function useLocaleStorage(key: string, iValue: []) {
  const [value, setValue] = useState<CartItemsType[] | []>(() => {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);

    return iValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocaleStorage;
