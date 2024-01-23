'use client';
import { signOut } from 'next-auth/react';

function Logout() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
      className="fixed bottom-16 right-4 z-[998] cursor-pointer rounded-md border border-black bg-primary-orange px-3 py-1 font-bold hover:bg-primary-blackish hover:text-primary-orange max-sm:bottom-8"
    >
      Log out
    </button>
  );
}

export default Logout;
