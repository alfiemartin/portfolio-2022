import Swiper from "swiper";
import RippleButton from "../RippleButton";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useBreakpoints } from "../../hooks/useBreakpoints";

export type SlidesNavProps = {
  showNav: boolean;
  activeSlide: number;
  onMouseOver: (e: any) => void;
  onMouseLeave: (e: any) => void;
  changeActiveSlide: (i: number) => void;
};

export type SlidesButtonNavProps = {
  activeSlide: number;
  getPageTitle: (index: number) => string;
  changeActiveSlide: (i: number) => void;
  swiper: Swiper | undefined;
  className?: string;
};

const slideNames = ["Welcome", "Projects", "Professional Experience"];
export const swiperButtonClasses =
  "py-2 px-6 bg-gray-800 text-white dark:text-black dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 transition-all";

export const SlidesNav = ({
  showNav,
  onMouseOver,
  onMouseLeave,
  activeSlide,
  changeActiveSlide,
}: SlidesNavProps) => {
  return (
    <div
      className={`absolute ${
        showNav ? "bottom-0" : "-bottom-8"
      } transition-all ease-out duration-300 pt-8 w-full hidden lg:block z-10 container left-1/2 -translate-x-1/2`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className='bg-gray-600 text-gray-100 rounded-t-lg h-12 grid place-items-center'>
        <ul className={`flex justify-center gap-20 shadow-inner`}>
          {slideNames.map((slide, i) => (
            <li key={i}>
              <button
                className={`hover:text-gray-100 hover:underline ${
                  activeSlide === i ? "underline" : "text-gray-300"
                }`}
                onClick={() => changeActiveSlide(i)}
              >
                {slide}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const SlidesButtonNav = ({
  activeSlide,
  changeActiveSlide,
  getPageTitle,
  swiper,
  className: extraClasses,
}: SlidesButtonNavProps) => {
  const breakpoint = useBreakpoints();

  return (
    <div
      className={`${extraClasses} w-full flex justify-between items-end p-2 sm:p-8 md:p-12 transition-opacity duration-300 z-10 lg:z-0`}
    >
      <RippleButton
        className={`${swiperButtonClasses} ${activeSlide - 1 < 0 ? "opacity-0" : "opacity-100"}`}
        onClick={() => changeActiveSlide(activeSlide - 1)}
      >
        <FaAngleLeft className='inline-block mr-2 text-xl text-gray-100 dark:text-gray-900 relative top-[-1px]' />
        {breakpoint !== "xs" && getPageTitle(activeSlide - 1)}
      </RippleButton>
      <RippleButton
        className={`${swiperButtonClasses} ${
          swiper && activeSlide + 1 > swiper.slides?.length - 1 ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => changeActiveSlide(activeSlide + 1)}
      >
        {breakpoint !== "xs" && getPageTitle(activeSlide + 1)}
        <FaAngleRight className='inline-block ml-2 text-xl text-gray-100 dark:text-gray-900 relative top-[-1px]' />
      </RippleButton>
    </div>
  );
};
