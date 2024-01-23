'use client';

import { useEffect, useRef, useState } from 'react';
import CheckoutInputs from './CheckoutInputs';
import CheckoutSubmit from './CheckoutSubmit';
import { useForm } from 'react-hook-form';
import {
  CheckoutFormSchema,
  CheckoutFormSchemaType,
} from '@/lib/zod/checkoutForm/checkoutSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import ThanksPopUp from './ThanksPopUp';
import toast from 'react-hot-toast';
import { useCartContext } from '@/hooks/useCartContext';
import { useRouter } from 'next/navigation';

function CheckoutForm() {
  const { cartItem, deleteItem } = useCartContext();
  const [showThanks, setShowThanks] = useState<boolean>(false);
  const target1 = useRef<HTMLFormElement>(null);
  const target2 = useRef<HTMLDivElement>(null);
  const router = useRouter()
  const disabled = (!cartItem || cartItem.length === 0) ?? true 


  const {
    register,
    /* reset, */
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
    setError,
  } = useForm<CheckoutFormSchemaType>({
    resolver: zodResolver(CheckoutFormSchema),
  });

  const onSubmit = (data: CheckoutFormSchemaType) => {
    if (
      (data.payment === 'e-money' && !data['e-money-number']) ||
      (data.payment === 'e-money' && !data['e-money-pin'])
    ) {
      if (!data['e-money-number']) {
        setError('e-money-number', { type: 'manual', message: 'required' });
      }
      if (!data['e-money-pin']) {
        setError('e-money-pin', { type: 'manual', message: 'required' });
      }
      return;
    }
    toast.success("don't worry , it's a demo");
    setShowThanks(true);
  };

  useEffect(() => {
    const handleCloseThanks = (e: Event) => {
      if ( showThanks &&
        target1.current &&
        target2.current &&
        !target1.current.contains(e.target as Node) &&
        !target2.current.contains(e.target as Node)
      ) {
        setShowThanks(false);
        deleteItem({}, true)
        router.push('/')
      }
    };

    window.addEventListener('click', handleCloseThanks);

    if (!showThanks)
      document.documentElement.setAttribute('customScroll', 'true');
    if (showThanks) document.documentElement.removeAttribute('customScroll');

    if (showThanks) {
      document.body.setAttribute('Scroll', 'false');
      document.documentElement.setAttribute('customScroll', "false")
    }
    if (!showThanks) {
      document.body.removeAttribute('Scroll');
      document.documentElement.setAttribute('customScroll', 'true')
    }

    return () => {
      window.addEventListener('click', handleCloseThanks);
    };
  }, [showThanks, router]);

  return (
    <>
      {showThanks && (
        <ThanksPopUp setShowThanks={setShowThanks} target2={target2} />
      )}
      <form
        ref={target1}
        action={'POST'}
        onSubmit={handleSubmit(onSubmit)}
        className="max-content mt-[2.375rem] flex justify-between gap-6 max-[1104px]:flex-col max-[1104px]:items-center"
      >
        <CheckoutInputs {...{ register, errors, watch, disabled }  } />
        <CheckoutSubmit {...{ isSubmitting }} />
      </form>
    </>
  );
}

export default CheckoutForm;
