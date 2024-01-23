/* category images */
import headphones from './assets/shared/desktop/image-category-thumbnail-headphones.png';
import earphones from './assets/shared/desktop/image-category-thumbnail-earphones.png';
import speakers from './assets/shared/desktop/image-category-thumbnail-speakers.png';
import rightArrow from './assets/shared/desktop/icon-arrow-right.svg';
import cart from './assets/shared/desktop/icon-cart.svg';
import logo from './assets/shared/desktop/logo.svg';

/* home */
import product from './assets/home/desktop/image-hero.jpg';

/* magazine Images */
import desktopSpeaker from './assets/home/desktop/image-speaker-zx9.png';
import tabletSpeaker from './assets/home/tablet/image-speaker-zx9.png';
import mobileSpeaker from './assets/home/mobile/image-speaker-zx9.png';
import circles from './assets/home/desktop/pattern-circles.svg';

import desktopSpeaker2 from './assets/home/desktop/image-speaker-zx7.jpg';
import tabletSpeaker2 from './assets/home/tablet/image-speaker-zx7.jpg';
import mobileSpeaker2 from './assets/home/mobile/image-speaker-zx7.jpg';

import desktopEarphones from './assets/home/desktop/image-earphones-yx1.jpg';
import tabletEarphones from './assets/home/tablet/image-earphones-yx1.jpg';
import mobileEarphones from './assets/home/mobile/image-earphones-yx1.jpg';

/** person Images */
import desktopPerson from './assets/shared/desktop/image-best-gear.jpg';
import tabletPerson from './assets/shared/tablet/image-best-gear.jpg';
import mobilePerson from './assets/shared/mobile/image-best-gear.jpg';

/** social Links */
import facebook from './assets/shared/desktop/icon-facebook.svg';
import instagram from './assets/shared/desktop/icon-instagram.svg';
import twitter from './assets/shared/desktop/icon-twitter.svg';


/** checkout */
import checkMark from './assets/checkout/icon-order-confirmation.svg'



const categoryItems = [
  { img: headphones, title: 'headphones', link: '/category/headphones' },
  { img: speakers, title: 'speakers', link: '/category/speakers' },
  { img: earphones, title: 'earphones', link: '/category/earphones' },
];

const links = [
  { name: 'home', href: '/' },
  { name: 'headphones', href: '/category/headphones' },
  { name: 'speakers', href: '/category/speakers' },
  { name: 'earphones', href: '/category/earphones' },
];

const personGallery = {
  desktop: desktopPerson,
  tablet: tabletPerson,
  mobile: mobilePerson,
};

const magazineImages = {
  desktop: desktopSpeaker,
  tablet: tabletSpeaker,
  mobile: mobileSpeaker,
};
const magazineImages2 = {
  desktop: desktopSpeaker2,
  tablet: tabletSpeaker2,
  mobile: mobileSpeaker2,
};
const magazineImages3 = {
  desktop: desktopEarphones,
  tablet: tabletEarphones,
  mobile: mobileEarphones,
};

const socials = { facebook, twitter, instagram };



export {
  categoryItems,
  links,
  rightArrow,
  cart,
  logo,
  product,
  magazineImages,
  magazineImages2,
  magazineImages3,
  circles,
  personGallery,
  socials,
  checkMark
};
