import React, { MouseEvent, useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashNavigation } from 'swiper';
import type { Swiper as SwiperType } from "swiper/types";
import { useGlobalContext } from "../context/GlobalContext";
import { Introduction } from "../components/Introduction";
import { Projects } from "../components/Projects";
import { WorkExperience } from "../components/WorkExperience";
import { SlidesButtonNav, SlidesNav } from "../components/SlidesNav";
import "swiper/css";

export const pages = ['introduction', 'projects', 'professional-experience']

const Home: NextPage = () => {
  const globalState = useGlobalContext();
  const [showNav, setShowNav] = useState(true);
  const [swiper, setSwiper] = useState<SwiperType>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [allowScroll, setAllowScroll] = useState(false);

  const getPageTitle = (index: number) => {
    let pageTitle: string;

    switch (index) {
      case 0:
        setAllowScroll(false);
        pageTitle = "Welcome";
        break;
      case 1:
        setAllowScroll(true);
        pageTitle = "Projects";
        break;
      case 2:
        setAllowScroll(false);
        pageTitle = "Professional Experience";
        break;
      default:
        pageTitle = globalState.pageTitle ?? "";
        //TODO
    }

    return pageTitle;
  };

  const handleSlideChange = ({ activeIndex }: SwiperType) => {
    const pageTitle = getPageTitle(activeIndex);

    setActiveSlide(activeIndex);
    if (globalState.setPageTitle) globalState.setPageTitle(pageTitle);
  };

  const handleNavHover = (e: MouseEvent<HTMLDivElement>) => {
    if (!showNav) setShowNav(true);
  };

  const handleNavLeave = (e: MouseEvent<HTMLDivElement>) => {
    setTimeout(() => {
      setShowNav(false);
    }, 200);
  };

  const changeActiveSlide = (i: number) => {
    if (!swiper) return;
    if (i < 0 || i > swiper.slides.length - 1) return;

    swiper.slideTo(i);
  };

  useEffect(() => {
    if(swiper?.activeIndex !== undefined) {
      globalState.setLoadedSwiper(true)
    }
  }, [swiper?.activeIndex, globalState])

  useEffect(() => {
    setTimeout(() => {
      setShowNav(false);
    }, 1500);
  }, []);

  return (
    <>
      <main className={`container mx-auto h-full flex flex-col justify-between pt-8 ${allowScroll && 'overflow-y-hidden' } md:pt-10 opacity-0 ${swiper?.activeIndex !== undefined && 'opacity-100'}`}>
        <div>
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            spaceBetween={50}
            noSwipingSelector="div"
            modules={[HashNavigation]}
            hashNavigation={{ watchState: true }}
          >
            <SwiperSlide data-hash={pages[0]}> 
              <Introduction />
            </SwiperSlide>
            <SwiperSlide data-hash={pages[1]}>
              <Projects />
            </SwiperSlide>
            <SwiperSlide data-hash={pages[2]}>
              <WorkExperience />
            </SwiperSlide>
          </Swiper>
        </div>
        <SlidesButtonNav
          className={showNav ? "opacity-0" : "opacity-100"}
          activeSlide={activeSlide}
          changeActiveSlide={changeActiveSlide}
          getPageTitle={getPageTitle}
          swiper={swiper}
        />
        <SlidesNav
          showNav={showNav}
          onMouseOver={handleNavHover}
          onMouseLeave={handleNavLeave}
          activeSlide={activeSlide}
          changeActiveSlide={changeActiveSlide}
        />
      </main>
    </>
  );
};

export default Home;
