import { useEffect, useState } from "react";

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
      <nav className={`flex p-4 bg-gray-400 fixed w-full shadow ${hidden ? 'p-2' : null}`}>
        <div className='flex-1'>
          <p>Alfie Martin</p>
        </div>
        <div className='flex-1'>
          <ul className='flex'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};