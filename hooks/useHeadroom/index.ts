import { useState, useEffect } from "react";

export const useHeadroom = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [previousScrollHeight, setPreviousScrollHeight] = useState(0);

  useEffect(() => {
    const handleWindowScroll = () => {
      const scrollHeight = window.scrollY;
  
      if(scrollHeight < previousScrollHeight) {
        setScrollingDown(false);
      } else if(scrollHeight > 5) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
  
      setPreviousScrollHeight(scrollHeight);
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [previousScrollHeight])

  return scrollingDown;
}