import Image from 'next/image';
import React from 'react';
import { links, logo, socials } from '../../../public';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="mt-[12.5rem] flex min-h-[22.8125rem]  justify-center bg-primary-blackish">
      <div className="grid-area max-content  mx-6 mb-12 w-full gap-6 pt-[4.7rem] max-sm:gap-12">
        <Link
          href={'/'}
          className="one relative h-[1.5625rem] w-[8.9375rem] max-sm:m-auto"
          role="link"
          aria-label="main page route"
        >
          <Image
            src={logo}
            width={143}
            height={25}
            alt="logo"
            priority
            className="h-[1.5625rem] w-[8.9375rem] select-none"
          />
        </Link>

        <nav className="two flex max-sm:justify-center min-[800px]:justify-end">
          <ul
            role="menu"
            className=" flex items-center gap-[34px] max-sm:flex-col"
          >
            {links?.map((link, index: number) => (
              <li key={index} role="menuitem">
                <Link
                  href={link.href}
                  className="nav-anchors text-primary-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="three paragraph max-w-[33.75rem] max-sm:w-full max-sm:text-center lg:mt-2">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>

        <p className="four paragraph font-bold max-sm:text-center lg:mt-8">
          Copyright 2021. All Rights Reserved
        </p>

        <div className="five flex justify-end gap-4 max-sm:justify-center min-[800px]:mb-[7px] min-[800px]:items-end">
          <a href="">
            <Image
              alt="facebook"
              src={socials.facebook}
              className="cursor-pointer select-none"
            />
          </a>
          <a href="">
            {' '}
            <Image
              alt="twitter"
              src={socials.twitter}
              className="cursor-pointer select-none"
            />
          </a>
          <a href="">
            <Image
              alt="instagram"
              src={socials.instagram}
              className="cursor-pointer select-none"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
