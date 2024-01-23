import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import React from 'react';
import Nav from '@/components/navbar/Nav';
import { getServerSession } from 'next-auth';
import Logout from '@/components/authentication/Logout';
import { CartContextProvider } from '@/context/CartContext';
import { Toaster } from 'react-hot-toast';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Mentor | Audiophile e-commerce website',
  description: 'Your path to the new audio realm',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </head>
      <CartContextProvider>
        <body className={manrope.className}>
          {session && <Logout />}
          <div className="w-full overflow-x-hidden">
            <Nav />
            {children}
            <Toaster position="top-right" />
          </div>
        </body>
      </CartContextProvider>
    </html>
  );
}
