'use client';
import { signUpSchema, signUpType } from '@/lib/zod/form/signUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

function SignUpForm() {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
    getValues,
    setError,
  } = useForm<signUpType>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch(`api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    if (response.ok) {
      await signIn('credentials', {
        email: data.email,
        password: data.password,
      });
      router.push('/');
      reset();
    }

    if (response.status === 409) {
      setError('email', {
        type: 'manual',
        message: 'email Already Exist',
      });
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        className="flex flex-col items-center justify-center gap-3"
      >
        <h1 className="h2-bold text-primary-white">Sign Up</h1>
        <input
          {...register('email', { required: 'email required' })}
          type="email"
          id="email"
          placeholder="email"
          className="h-[40px] w-[250px] rounded-lg p-2"
          autoComplete="false"
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message?.toString()}</p>
        )}
        <input
          {...register('password', {
            required: 'password required',
            minLength: {
              value: 8,
              message: '8 character or more',
            },
          })}
          type="password"
          id="password"
          placeholder="password"
          className="h-[40px] w-[250px] rounded-lg p-2"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message?.toString()}</p>
        )}
        <input
          {...register('confirmPassword', {
            required: 'password required',
            minLength: {
              value: 8,
              message: '8 character or more',
            },
            validate: (value) =>
              getValues('password') === value || 'passwords should match',
          })}
          type="password"
          id="confirmPassword"
          placeholder="confirm password"
          className="h-[40px] w-[250px] rounded-lg p-2"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">
            {errors.confirmPassword.message?.toString()}
          </p>
        )}
        <Link href={'/log-in'} className='text-white hover:text-primary-orange/60'>Sign In?</Link>
        <input
          type="submit"
          value="Sign Up"
          className="button-default-1 bg-primary-orange rounded-lg"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
}

export default SignUpForm;
