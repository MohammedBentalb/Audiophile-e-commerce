'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
  const navigation = useRouter();

  useEffect(() => {
      navigation.push('/')
  })

  return (
    <>
    </>
  );
}
