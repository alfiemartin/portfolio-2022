import Swiper from "swiper";
import RippleButton from "../RippleButton";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { motion } from "framer-motion";
import { pages } from "../../pages";

export type SlidesNavProps = {
  showNav: boolean;
  activeSlide: number;
  onMouseOver: (e: any) => void;
  onMouseLeave: (e: any) => void;
  changeActiveSlide: (i: number) => void;
};

export type SlidesButtonNavProps = {
  activeSlide: number;
  changeActiveSlide: (i: number) => void;
  swiper: Swiper | undefined;
  className?: string;
};

export const SlidesNav = ({
  showNav,
  onMouseOver,
  onMouseLeave,
  activeSlide,
  changeActiveSlide,
}: SlidesNavProps) => {
  return (
    <div
      className={`fixed ${
        showNav ? "bottom-0" : "-bottom-8"
      } transition-all ease-out duration-300 pt-4 w-[calc(100%-8px)] hidden lg:block z-20 container left-1/2 -translate-x-1/2`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-4 bg-gradient-to-t from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600 rounded-t-lg h-12 grid place-items-center">
        <ul className={`flex justify-center gap-20 shadow-inner`}>
          {pages.map((slide, i) => (
            <li key={i}>
              <motion.button
                whileHover={{ translateY: "-2px" }}
                className={`text-slate-200 hover:underline ${
                  activeSlide === i ? "underline" : ""
                }`}
                onClick={() => changeActiveSlide(i)}
              >
                {slide}
              </motion.button>
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
  swiper,
  className: extraClasses,
}: SlidesButtonNavProps) => {
  const breakpoint = useBreakpoints();
  const swiperButtonClasses =
    "py-2 px-6 bg-slate-800 flex gap-2 pointer-events-auto items-center text-slate-200 dark:text-slate-800 dark:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-300 transition-all";
  const swiperIconClasses =
    "inline-block text-xl fill-slate-200 dark:fill-slate-900 relative top-[-1px]";

  return (
    <div
      className={`${extraClasses} w-full container pointer-events-none fixed bottom-0 left-1/2 -translate-x-1/2 pb-8 transition-opacity duration-300 z-20`}
    >
      <div className="mx-4 flex justify-between items-end">
        <RippleButton
          className={`${swiperButtonClasses} ${
            activeSlide - 1 < 0 ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => changeActiveSlide(activeSlide - 1)}
        >
          <BiChevronLeft size={25} className={swiperIconClasses} />
          {breakpoint !== "xs" && pages[activeSlide - 1]}
        </RippleButton>
        <RippleButton
          className={`${swiperButtonClasses} ${
            swiper && activeSlide + 1 > swiper.slides?.length - 1
              ? "opacity-0"
              : "opacity-100"
          }`}
          onClick={() => changeActiveSlide(activeSlide + 1)}
        >
          {breakpoint !== "xs" && pages[activeSlide + 1]}
          <BiChevronRight size={25} className={swiperIconClasses} />
        </RippleButton>
      </div>
    </div>
  );
};
