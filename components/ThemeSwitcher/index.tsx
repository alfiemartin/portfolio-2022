import ReactSwitch from "react-switch"
import Image from "next/image";
import moonImage from "../../public/moon.png";
import sunImage from "../../public/sun.png";

const checked = () => {
  return <Image src={moonImage} layout='responsive' alt='moon' />
}

const unchecked = () => {
  return <Image src={sunImage} layout='responsive' alt='sun' />
}

export const ThemeSwitcher = () => {
  return <ReactSwitch onChange={() => setIsDarkMode(prev => !prev)} checked={isDarkMode} checkedHandleIcon={checked()} uncheckedHandleIcon={unchecked()} />
}
