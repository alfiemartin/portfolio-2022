import Image from "next/image";
import { useEffect, useState } from "react";
import siteLogo from "../../public/error.ico";

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [previousScrollHeight, setPreviousScrollHeight] = useState(0);

  useEffect(() => {
    const handleWindowScroll = () => {
      const scrollHeight = window.scrollY;
  
      if(scrollHeight < previousScrollHeight) {
        setHidden(false);
      } else if(scrollHeight > 5) {
        setHidden(true);
      } else {
        setHidden(false);
      }
  
      setPreviousScrollHeight(scrollHeight);
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [previousScrollHeight])

  return (
    <header className='w-full'>
      <nav className={`flex items-center bg-gray-300 fixed w-full z-10 shadow-md ${hidden ? 'p-2' : 'p-3'}`}>
        <div className='flex flex-1 items-center'>
          <picture className="w-[40px] mr-3">
            <Image src={siteLogo} layout='responsive' alt='Site Logo' />
          </picture>
          <p>Alfie Martin</p>
        </div>
        <div className='flex-1'>
          <ul className='flex gap-3'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};