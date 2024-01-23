import CartItem from '@/components/publicComponents/CartItem';
import { useCartContext } from '@/hooks/useCartContext';
import React from 'react';

function CheckoutSubmit({ isSubmitting }: { isSubmitting: boolean }) {
  const { cartItem } = useCartContext();

  return (
    <div className="flex h-fit min-h-[38.25rem] w-full min-w-[245px] max-w-[45.625rem] flex-col gap-8 rounded-lg bg-primary-white px-10 py-8 max-sm:px-6">
      <h1 className="h6-bold">summary</h1>
      {cartItem && cartItem.length > 0 ? (
        <CartItem data={cartItem} cart={false} single={false}/>
      ) : (
        <p className="h6-bold m-auto text-center text-black">cart is empty</p>
      )}

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="flex justify-between text-[0.9375rem] font-medium uppercase leading-[1.5625rem] text-primary-black/50">
            Total
            <span className="text-[1.125rem] font-bold text-primary-black">
              ${' '}
              {cartItem && cartItem.length > 0
                ? Math.trunc(
                    cartItem.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                  )
                : '0'}
            </span>
          </label>
          <label className="flex justify-between text-[0.9375rem] font-medium uppercase leading-[1.5625rem] text-primary-black/50">
            Shipping
            <span className="text-[1.125rem] font-bold text-primary-black">
              $ 50
            </span>
          </label>
          <label className="flex justify-between text-[0.9375rem] font-medium uppercase leading-[1.5625rem] text-primary-black/50">
            {`vat (included)`}
            <span className="text-[1.125rem] font-bold text-primary-black">
              ${' '}
              {cartItem && cartItem.length > 0
                ? Math.trunc(
                    cartItem.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ) * 0.2
                  )
                : '0'}
            </span>
          </label>
          <label className="mt-4 flex justify-between text-[0.9375rem] font-medium uppercase leading-[1.5625rem] text-primary-black/50">
            Grand Total
            <span className="text-[1.125rem] font-bold text-primary-orange">
              ${' '}
              {cartItem && cartItem.length > 0
                ? Math.trunc(
                    cartItem.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ) + 50
                  )
                : '0'}
            </span>
          </label>
        </div>
        <input
          type="submit"
          value="Continue & Pay"
          className="button-default-1 mt-2 w-full bg-primary-orange"
          disabled={!cartItem || cartItem.length === 0}
        />
      </div>
    </div>
  );
}

export default CheckoutSubmit;
