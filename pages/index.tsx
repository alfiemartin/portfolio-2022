import * as THREE from "three";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import { useGlobalContext } from "../context/GlobalContext";
import { Introduction } from "../components/Introduction";
import { Projects } from "../components/Projects";
import { WorkExperience } from "../components/WorkExperience";
import { SlidesButtonNav, SlidesNav } from "../components/SlidesNav";
import "swiper/css";

const Home: NextPage = () => {
  const globalState = useGlobalContext();
  const [showNav, setShowNav] = useState(true);
  const [swiper, setSwiper] = useState<SwiperType>();
  const [activeSlide, setActiveSlide] = useState(0);

  const getPageTitle = (index: number) => {
    let pageTitle: string;

    switch (index) {
      case 0:
        pageTitle = "Welcome";
        break;
      case 1:
        pageTitle = "Projects";
        break;
      case 2:
        pageTitle = "Professional Experience";
        break;
      default:
        pageTitle = globalState.pageTitle ?? "";
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
    setTimeout(() => {
      setShowNav(false);
    }, 1500);
  }, []);

  return (
    <>
      <main className='container mx-auto h-full flex flex-col justify-between pt-8 md:pt-24'>
        <div>
          <Swiper onSwiper={setSwiper} onSlideChange={handleSlideChange}>
            <SwiperSlide>
              <Introduction />
            </SwiperSlide>
            <SwiperSlide>
              <Projects />
            </SwiperSlide>
            <SwiperSlide>
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
      </main>
      <SlidesNav
        showNav={showNav}
        onMouseOver={handleNavHover}
        onMouseLeave={handleNavLeave}
        activeSlide={activeSlide}
        changeActiveSlide={changeActiveSlide}
      />
      {/* <div className='absolute w-screen h-screen inset-0'>
        {typeof window !== "undefined" && (
          <Canvas style={{ backgroundColor: "none" }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Text3D font={font as any} bevelEnabled bevelSize={0.1}>
              Projects
              <meshStandardMaterial color={"hotpink"} />
            </Text3D>
          </Canvas>
        )}
      </div> */}
    </>
  );
};

export default Home;
