import type { NextPage } from "next";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import alfieImage from "../public/alfie-full.jpg";

const Introduction = () => {
  return (
    <div className="h-100-accom flex justify-center items-center">
      <div className="flex gap-4">
        <div className="w-[600px] p-2 bg-black shadow-lg overflow-hidden">
          <Image
            src={alfieImage}
            layout="responsive"
            className="rounded z-0"
            priority
            alt="Checking alt tags i see 😩"
          />
        </div>
        <div className="flex flex-col dark:text-gray-200">
          <h1>Alfie Martin</h1>
          <h3 className="mb-10">Front-end Developer</h3>
          <h5 className="">Check out what i&apos;ve been doing ⬇️</h5>
          <h5 className="mt-auto">
            .... Or play a quick{" "}
            <span className="underline cursor-pointer">game?</span>
          </h5>
        </div>
      </div>
      {/* scroll to top of page to reveal message like sc refresh. */}
      {/* have it how it is now but like a  slideshow */}
      {/* Have the top nav bar to display the page title with navigational arrows */}
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
        <Swiper onSlideChange={(s) => console.log(s.activeIndex)}>
          <SwiperSlide>
            <Introduction />
          </SwiperSlide>
          <SwiperSlide>
            <Introduction />
          </SwiperSlide>
          <SwiperSlide>
            <Introduction />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
