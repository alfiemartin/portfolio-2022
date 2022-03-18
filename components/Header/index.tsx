import Image from "next/image";
import { useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import { useHeadroom } from "../../hooks/useHeadroom";
import siteLogo from "../../public/error.ico";
import moonImage from "../../public/moon.png";
import sunImage from "../../public/sun.png";
import Cookies from "js-cookie";

export const Header = () => {
  const scrollingDown = useHeadroom();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(Cookies.get('dark-mode') === 'true' ? true : false)
  }, [])

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
      Cookies.set('dark-mode', 'true', {expires: new Date(new Date().getTime() * 2)});
    } else {
      document.documentElement.classList.remove('dark');
      Cookies.remove('dark-mode');
    }
  }, [isDarkMode])

  return (
    <header className='w-full dark:text-white'>
      <nav className={`flex items-center bg-gray-300 dark:bg-gray-900 fixed w-full z-10 shadow-md ${scrollingDown ? 'p-2' : 'p-3'}`}>
        <div className='flex flex-1 items-center'>
          <picture className="w-[40px] mr-3">
            <Image src={siteLogo} layout='responsive' alt='Site Logo' />
          </picture>
          <p>Alfie Martin</p>
        </div>
        <div className='flex justify-end flex-1 gap-3'>
          <ul className='flex gap-3'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <ReactSwitch onChange={() => setIsDarkMode(prev => !prev)} checked={isDarkMode} checkedHandleIcon={checked()} uncheckedHandleIcon={unchecked()} checkedIcon={emptyEl()} uncheckedIcon={emptyEl()} />
        </div>
      </nav>
    </header>
  );
};

const checked = () => {
  return <Image src={moonImage} layout='responsive' alt='moon' />
}

const unchecked = () => {
  return <Image src={sunImage} layout='responsive' alt='sun' />
}

const emptyEl = () => {
  return <></>
}