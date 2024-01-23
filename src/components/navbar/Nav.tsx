'use client';

import Link from 'next/link';
import NavList from './NavList';
import Image from 'next/image';

import { links, logo } from '../../../public/index';
import { useEffect, useRef, useState } from 'react';
import NavCart from './NavCart';

function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const theTarget2 = useRef<HTMLDivElement>(null);
  const theTarget4 = useRef<HTMLDivElement>(null);

  /* scrolling use effect */
  useEffect(() => {
    if (window.scrollY > 20) {
      setScrolling(true);
    }

    const checkScrolling = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', checkScrolling);
    return () => {
      window.removeEventListener('scroll', checkScrolling);
    };
  }, []);

  /* prevent body scrolling use effect */
  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute('Scroll', 'false');
      document.documentElement.setAttribute('customScroll', "false")
    }
    if (!isOpen) {
      document.body.removeAttribute('Scroll');
      document.documentElement.setAttribute('customScroll', 'true')
    }
  }, [isOpen]);

  /** close nav when the view is on tablet of bigger screen */
  useEffect(() => {
    const closeWhenResize = () => {
      if (window.innerWidth > 764) setIsOpen(false);
    };
    window.addEventListener('resize', closeWhenResize);

    return () => {
      window.removeEventListener('resize', closeWhenResize);
    };
  });

  return (
    <div className="">
      <div
        className={`fixed top-0 z-[9999] w-full items-center transition-colors duration-300 ease-in-out max-xl:px-[2.475625rem] max-sm:px-0 ${
          scrolling ? ' bg-[#181818] max-[1120px]:bg-[#191919]' : ''
        }`}
      >
        <nav
          aria-label="Desktop Navigation menu"
          className=" max-content flex items-center border-b border-[#FFFFFF33] py-[2.15rem] text-primary-white  max-xl:justify-between max-lg:py-8 max-md:gap-[2.625rem] max-sm:mx-0 max-sm:px-[1.5rem] max-[300px]:gap-[1rem] xl:gap-[12.3125rem]"
        >
          <div
            role="button"
            aria-label="burger icon simulator"
            className="burger"
            ref={theTarget2}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
          <Link
            href={'/'}
            className="h-[1.5625rem] w-[8.9375rem]"
            role="link"
            aria-label="main page route"
          >
            <Image
              src={logo}
              width={143}
              height={25}
              alt="logo"
              priority
              className="h-[1.5625rem] w-[8.9375rem]"
            />
          </Link>
          <ul
            className=" flex items-center gap-[2.125rem] max-md:hidden"
            role="menu"
          >
            {links?.map((link, index: number) => (
              <li key={index} role="menuitem">
                <Link href={link.href} className="nav-anchors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <NavCart />
        </nav>
      </div>
      <div
        ref={theTarget4}
        className={`fixed inset-x-0 top-[90px] z-[9999] flex h-full flex-col items-start overflow-y-auto md:hidden ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <NavList
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          theTarget2={theTarget2}
          theTarget4={theTarget4}
        />
        <div className="h-full w-full bg-black/60"></div>
      </div>
    </div>
  );
}

export default Nav;
