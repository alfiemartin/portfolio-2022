import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import { useHeadroom } from "../../hooks/useHeadroom";
import siteLogo from "../../public/error.ico";
import moonImage from "../../public/moon.png";
import sunImage from "../../public/sun.png";
import Cookies from "js-cookie";
import { useGlobalContext } from "../../pages/_app";

export const Header = () => {
  const scrollingDown = useHeadroom();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const globalState = useGlobalContext();
  const [pageTitle, setPageTitle] = useState(globalState.pageTitle);

  useEffect(() => {
    setIsDarkMode(Cookies.get('dark-mode') === 'true' ? true : false)
  }, [])

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');

      const longExpiryDate = new Date(new Date().getTime() * 2)
      Cookies.set('dark-mode', 'true', {expires: longExpiryDate});
    } else {
      document.documentElement.classList.remove('dark');
      Cookies.remove('dark-mode');
    }
  }, [isDarkMode])

  useEffect(() => {
    setPageTitle(globalState.pageTitle);
  }, [globalState.pageTitle])

  return (
    <header className='w-full dark:text-white'>
      <nav className={`flex items-center bg-gray-300 dark:bg-gray-900 fixed w-full z-10 shadow-md ${scrollingDown ? 'p-2' : 'p-3'}`}>
        <div className='flex flex-1 items-center'>
          <picture className="w-[40px] mr-3">
            <Image src={siteLogo} layout='responsive' alt='Site Logo' />
          </picture>
        </div>
        <div>
          <h5 className="dark:text-gray-100">{pageTitle}</h5>
        </div>
        <div className='flex justify-end flex-1 gap-3'>
          <ul className='flex gap-3'>
          </ul>
          <ReactSwitch onChange={() => setIsDarkMode(prev => !prev)} checked={isDarkMode} checkedHandleIcon={Checked} uncheckedHandleIcon={Unchecked} checkedIcon={<></>} uncheckedIcon={<></>} />
        </div>
      </nav>
    </header>
  );
};

const Checked = <Image src={moonImage} layout='responsive' alt='moon' />
const Unchecked = <Image src={sunImage} layout='responsive' alt='sun' />


