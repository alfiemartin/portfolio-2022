import React, {MouseEvent, useEffect, useState} from "react";
import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import type {Swiper as SwiperType} from 'swiper/types';
import { useGlobalContext } from "./_app";
import { Introduction } from "../components/Introduction";
import 'swiper/css';
import { Projects } from "../components/Projects";
import { WorkExperience } from "../components/WorkExperience";
import { SlidesNav } from "../components/SlidesNav";

const Home: NextPage = () => {
  const globalState = useGlobalContext();
  const [showNav, setShowNav] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = ({activeIndex}: SwiperType) => {
    let pageTitle: string;

    switch(activeIndex) {
      case 0:
        pageTitle = 'Welcome';
        break;
      case 1: 
        pageTitle = 'Projects';
        break;
      default: 
        pageTitle = 'Professional Experience';
    }

    setActiveSlide(activeIndex);
    if(globalState.setPageTitle) globalState.setPageTitle(pageTitle);
  }

  const handleNavHover = (e: MouseEvent<HTMLDivElement>) => {
    if(!showNav) setShowNav(true);
  }

  const handleNavLeave = (e: MouseEvent<HTMLDivElement>) => {
    setTimeout(() => {
      setShowNav(false);
    }, 300);
  }

  const showNavTemp = () => {
    setShowNav(true);

    setTimeout(() => {
      setShowNav(false);
    }, 5000)
  }

  useEffect(() => {
    setTimeout(() => {
      setShowNav(false);
    }, 5000);
  }, [])

  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
      <Swiper onSlideChange={handleSlideChange} onSliderMove={showNavTemp} >
        <SwiperSlide>
          <Introduction />
        </SwiperSlide>
        <SwiperSlide>
          <Projects />
        </SwiperSlide>
        <SwiperSlide>
          <WorkExperience />
        </SwiperSlide>
        <SlidesNav showNav={showNav} onMouseOver={handleNavHover} onMouseLeave={handleNavLeave} activeSlide={activeSlide} />
      </Swiper>
    </div>
  );
};

export default Home;
