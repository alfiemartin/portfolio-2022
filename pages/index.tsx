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
import { Contact } from "../components/Contact";
import PageTemplate from "../components/PageTemplate";

export const pages = ['Introduction', 'Professional Experience', 'Projects', 'Contact']
const joinedPageNames = pages.map(name => name.split(' ').join(''))
const pageComponents = [Introduction, WorkExperience, Projects, Contact]

const Home: NextPage = () => {
  const globalState = useGlobalContext();
  const [showNav, setShowNav] = useState(true);
  const [swiper, setSwiper] = useState<SwiperType>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [allowScroll, setAllowScroll] = useState(false);

  useEffect(() => {
    document.querySelector('main')?.scrollTo({ top: 0, behavior: 'auto' })
  }, [allowScroll])

  const setScroll = (index: number) => {
    setAllowScroll(index === 2 ? true : false)
  };

  const handleSlideChange = ({ activeIndex }: SwiperType) => {
    const pageTitle = pages[activeIndex];
    setScroll(activeIndex);

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
      <main className={`container mx-auto h-full flex flex-col justify-between pt-4 hide-scrollbar sm:pt-8 overflow-y-hidden ${allowScroll && 'overflow-y-scroll' } md:pt-10 opacity-0 ${swiper?.activeIndex !== undefined && 'opacity-100'}`}>
        <div>
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            spaceBetween={50}
            noSwipingSelector="div"
            modules={[HashNavigation]}
            hashNavigation={{ watchState: true }}
          >
            {pageComponents.map((Page, i) => (
              <SwiperSlide key={i} data-hash={joinedPageNames[i]}>
                <PageTemplate title={i > 0 ? pages[i] : undefined} >
                  <Page />
                </PageTemplate>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <SlidesButtonNav
          className={showNav ? "opacity-0" : "opacity-100"}
          activeSlide={activeSlide}
          changeActiveSlide={changeActiveSlide}
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
