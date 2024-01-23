'use client';

import { useState } from 'react';
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

function CheckoutForm() {
  const [showThanks, setShowThanks] = useState<boolean>(false);
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
    toast.success("don't worry , it's a demo")
    setShowThanks(true);
  };

  return (
    <>
      {showThanks && <ThanksPopUp setShowThanks={setShowThanks} />}
      <form
        action={'POST'}
        onSubmit={handleSubmit(onSubmit)}
        className="max-content mt-[2.375rem] flex justify-between gap-6 max-[1104px]:flex-col max-[1104px]:items-center"
      >
        <CheckoutInputs {...{ register, errors, watch }} />
        <CheckoutSubmit {...{ isSubmitting }} />
      </form>
    </>
  );
}

export default CheckoutForm;
