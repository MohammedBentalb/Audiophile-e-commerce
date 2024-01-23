'use client';

import { signInType, singInSchema } from '@/lib/zod/form/signInSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';

function SignInForm() {
  const router = useRouter();

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
    register,
  } = useForm<signInType>({
    resolver: zodResolver(singInSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (response?.error) throw new Error("can't register1");

      router.push('/');
      router.refresh();

      reset();
    } catch (e) {
      setError('email', {
        type: 'manual',
        message: 'Invalid Email or Password',
      });
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  /* const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });
    console.log(response);
    if (!response?.error) {
      router.push('/');
      router.refresh();
    }
  }; */

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        className="flex flex-col items-center justify-center gap-3"
      >
        <h1 className="h2-bold text-primary-white">Sign In</h1>
        {errors?.email && (
          <p className="text-red-500">{errors.email.message?.toString()}</p>
        )}
        {errors?.password && (
          <p className="text-red-500">{errors.password.message?.toString()}</p>
        )}
        <input
          {...register('email', { required: 'email required' })}
          type="email"
          id="email"
          placeholder="email"
          required
          className="h-[40px] w-[250px] rounded-lg p-2"
        />
        <input
          {...register('password', {
            required: 'password required',
            minLength: { value: 8, message: 'Invalid Password' },
          })}
          type="password"
          id="password"
          placeholder="password"
          required
          className="h-[40px] w-[250px] rounded-lg p-2"
        />
        <Link
          href={'/register'}
          className="text-white hover:text-primary-orange/60"
        >
          Sign Up?
        </Link>
        <input
          type="submit"
          value="Log In"
          className="button-default-1 rounded-lg bg-primary-orange"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
}

export default SignInForm;
