import { CheckoutFormSchemaType } from '@/lib/zod/checkoutForm/checkoutSchema';
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<CheckoutFormSchemaType >;
  errors: FieldErrors<CheckoutFormSchemaType >;
  name: "name" | "email" | "phone" | "address" | "zip" | "city" | "country" | "payment" | "e-money-pin" | "e-money-number";
  type: string;
  placeholder: string;
  title: string;
  fullW: boolean
  disabled: boolean
};

function InputField({
  errors,
  register,
  name,
  type,
  placeholder,
  title,
  fullW,
  disabled
}: Props) {
  return (
    <div className={`flex flex-col gap-2 ${fullW ? '': 'w-full max-w-[19.3125rem]'} max-sm:max-w-none`}>
      <div className={`flex w-full justify-between gap-4`}>
        <label htmlFor="email" className="input-label">
          {title}
        </label>
        {errors[name] && <p className="input-label-error text-right">{ errors[name]?.message?.toString() ?? 'Wrong Format' }</p>}
      </div>
      <input
        {...register(name, { required: 'required' })}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={(errors && errors[name]) && true || false}
        className={`input-field ${errors.email ? 'border-red-500' : ''} ${fullW ? 'w-full max-w-[39.625rem] ': ''} max-md:w-full max-sm:max-w-none`}
      />
    </div>
  );
}

export default InputField;
