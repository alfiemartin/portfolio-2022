import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import {Swiper as SwiperType} from 'swiper/types';
import { useGlobalContext } from "./_app";
import { Introduction } from "../components/Introduction";
import 'swiper/css';
import { Projects } from "../components/Projects";
import { WorkExperience } from "../components/WorkExperience";



const Home: NextPage = () => {
  const globalState = useGlobalContext();

  const setPageTitle = ({activeIndex}: SwiperType) => {
    let pageTitle: string;

    switch(activeIndex) {
      case 0:
        pageTitle = 'Welcome';
        break;
      case 1: 
        pageTitle = 'test';
        break;
      default: 
        pageTitle = 'Welcome';
    }

    if(globalState.setPageTitle) globalState.setPageTitle(pageTitle);
  }

  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
      <Swiper onSlideChange={setPageTitle}>
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
  );
};

export default Home;
