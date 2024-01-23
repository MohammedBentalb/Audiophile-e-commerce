import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import InputField from './InputField';
import { CheckoutFormSchemaType } from '@/lib/zod/checkoutForm/checkoutSchema';

type Props = {
  register: UseFormRegister<CheckoutFormSchemaType >;
  errors: FieldErrors<CheckoutFormSchemaType >;
  watch: UseFormWatch<CheckoutFormSchemaType >
};



function CheckoutInputs({ register, errors, watch }: Props) {

  const payment = watch('payment')


  return (
    <div className="flex w-full max-w-[45.625rem] flex-col gap-[3.3125rem] rounded-lg bg-primary-white px-12 pb-[3rem] pt-[3.375rem] max-[819px]:px-5">
      <h1 className="h3-bold text-black">Checkout</h1>

      {/* first field */}
      <div className='flex flex-col gap-6'>
        <label className='subTitle text-primary-orange'>Billing Details</label>
        <div className='flex gap-4 max-sm:flex-col max-sm:gap-6'>
          <InputField name='name' title='Name' placeholder='Alexei Ward' type='text' fullW={false} register={register} errors={errors} />
          <InputField name='email' title='Email Address' placeholder='alexei@mail.com' type='email' fullW={false} register={register} errors={errors} />
        </div>
        <InputField name='phone' title='Phone Number' placeholder='+1 202-555-0136' type='tel' fullW={false} register={register} errors={errors} />
      </div>

      {/* second field */}
      <div className='flex w-full flex-col gap-6'>
        <label className='subTitle text-primary-orange'>shipping info</label>
        <InputField name='address' title='Address' placeholder='1137 Williams Avenue' type='text' fullW={true} register={register} errors={errors} />
        <div className='flex gap-4 max-sm:flex-col max-sm:gap-6'>
            <InputField name='zip' title='Zip Code' placeholder='10001' type='number' fullW={false} register={register} errors={errors} />
            <InputField name='city' title='City' placeholder='New York' type='text' fullW={false} register={register} errors={errors} />
        </div>
        <InputField name='country' title='Country' placeholder='United States' type='text' fullW={false} register={register} errors={errors} />
      </div>


        {/* third field */}
        <div className='flex max-w-[39.625rem] flex-col gap-6'>
          <p className='subTitle text-primary-orange'>payment details</p>
          <div className='flex justify-between max-sm:flex-col max-sm:gap-6'>
            <p className='input-label'>Payment Method</p>
            <div className='flex flex-col gap-4'>
              <div className={`input-field flex items-center gap-4 ${payment === 'e-money' ? 'border-primary-orange' : ''} ${errors.payment ? 'border-red-500' : ''} max-md:w-full max-sm:max-w-none`}>
                <input
                { ...register('payment', {required: 'required'})}
                 type="radio" id="e-money" name="payment" value="e-money" className='input-radio cursor-pointer' />
                <label htmlFor="e-money" className='input-label cursor-pointer'>e-Money</label>
              </div>
              <div className={`input-field flex items-center gap-4 ${payment === 'cash' ? 'border-primary-orange' : ''} ${errors.payment ? 'border-red-500' : ''} max-md:w-full max-sm:max-w-none`}>
                <input
                { ...register('payment', {required: 'required'})}
                 type="radio" id="cash" name="payment" value="cash" className='input-radio cursor-pointer' />
                <label htmlFor="cash" className='input-label cursor-pointer'>Cash On Delivery</label>
              </div>
            </div> 
          </div>
          {payment === 'e-money' && ( <div className='flex gap-4 max-sm:flex-col max-sm:gap-6'>
            <InputField name='e-money-number' title='e-Money Number' placeholder='238521993' type='number' fullW={false} register={register} errors={errors} />
            <InputField name='e-money-pin' title='e-Money Pin' placeholder='6891' type='number' fullW={false} register={register} errors={errors} />
          </div>)
          }
        </div>


    </div>
  );
}

export default CheckoutInputs;