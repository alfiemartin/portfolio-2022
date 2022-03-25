import { Ripple } from "@minimal_ui/react-ripple";
import Swiper from "swiper";

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
};

const slideNames = ["Welcome", "Projects", "Professional Experience"];

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
      } transition-all ease-out duration-300 z-10 pt-8 w-full `}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-gray-600 text-gray-100 rounded-t-lg h-12 grid place-items-center">
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
}: SlidesButtonNavProps) => {
  const swiperButtonClasses =
    "py-2 px-6 bg-gray-800 text-white dark:text-black dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 transition-all";

  return (
    <div className="w-full h-100-accom absolute bottom-0 flex justify-between items-end p-12">
      <Ripple>
        <button
          className={`${swiperButtonClasses} ${
            activeSlide - 1 < 0 ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => changeActiveSlide(activeSlide - 1)}
        >
          {getPageTitle(activeSlide - 1)}
        </button>
      </Ripple>
      <Ripple>
        <button
          className={`${swiperButtonClasses} ${
            swiper && activeSlide + 1 > swiper.slides.length - 1
              ? "opacity-0"
              : "opacity-100"
          }`}
          onClick={() => changeActiveSlide(activeSlide + 1)}
        >
          {getPageTitle(activeSlide + 1)}
        </button>
      </Ripple>
    </div>
  );
};