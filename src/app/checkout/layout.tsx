import Footer from '@/components/home/Footer';
import React, { ReactNode } from 'react'


export const generateMetadata = () => {
    return { title: `Frontend Mentor | checkout` };
  };
function layout({children}: {children: ReactNode}) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default layout
