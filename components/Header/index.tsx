import Image from "next/image";
import ReactSwitch from "react-switch";
import siteLogo from "../../public/error.ico";
import moonImage from "../../public/moon.png";
import sunImage from "../../public/sun.png";
import { useGlobalContext } from "../../pages/_app";

export const Header = () => {
  const { isDark, pageTitle, setIsDark } = useGlobalContext();

  return (
    <header className='w-full dark:text-white'>
      <nav
        className={`flex items-center bg-gray-300 dark:bg-gray-900 fixed w-full z-10 shadow-md p-3`}
      >
        <div className='flex flex-1 items-center'>
          <picture className='w-[40px] mr-3'>
            <Image src={siteLogo} layout='responsive' alt='Site Logo' />
          </picture>
        </div>
        <div>
          <h5 className='dark:text-gray-100'>{pageTitle}</h5>
        </div>
        <div className='flex justify-end flex-1 gap-3'>
          <ul className='flex gap-3'></ul>
          <ReactSwitch
            onChange={() => setIsDark((prev) => !prev)}
            checked={isDark}
            checkedHandleIcon={Checked}
            uncheckedHandleIcon={Unchecked}
            checkedIcon={<></>}
            uncheckedIcon={<></>}
          />
        </div>
      </nav>
    </header>
  );
};

const Checked = <Image src={moonImage} layout='responsive' alt='moon' />;
const Unchecked = <Image src={sunImage} layout='responsive' alt='sun' />;
