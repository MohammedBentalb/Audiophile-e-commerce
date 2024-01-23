import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from 'react';
import NavCategories from './NavCategory';

function NavList({
  setIsOpen,
  isOpen,
  theTarget2,
  theTarget4,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  theTarget2: RefObject<HTMLDivElement>;
  theTarget4: RefObject<HTMLDivElement>;
}) {
  const theTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        theTarget.current &&
        theTarget2.current &&
        theTarget4.current &&
        !theTarget.current.contains(event.target as Node) &&
        !theTarget2.current.contains(event.target as Node) &&
        !theTarget4.current.contains(event.target as Node) 
        /* event.target !== document && */
        /* !(event.target instanceof HTMLDivElement) */
      ) {
        setIsOpen((prev) => false);
      }
   };

    window.addEventListener('mousedown', handleOutSideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [setIsOpen, isOpen, theTarget2, theTarget4]);

  return (
    <nav
      role="menu"
      aria-label="Mobile Navigation"
      className="w-full bg-white px-6 pt-5 md:hidden"
      ref={theTarget}
      id="responsive-nav"
      >
      <NavCategories  setIsOpen={setIsOpen} />
    </nav>
    
  );
}

export default NavList;
