export type SlidesNavProps = {
  showNav: boolean;
  activeSlide: number;
  onMouseOver: (e: any) => void;
  onMouseLeave: (e: any) => void;
  changeActiveSlide: (i: number) => void;
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
      } transition-all duration-300 z-10 pt-4 w-full `}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-gray-600 text-gray-100 rounded-t-lg h-12 grid place-items-center">
        <ul className="flex justify-center gap-20 shadow-inner">
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
