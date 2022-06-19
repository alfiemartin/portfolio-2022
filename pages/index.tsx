import * as THREE from "three";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import { useGlobalContext } from "./_app";
import { Introduction } from "../components/Introduction";
import { Projects } from "../components/Projects";
import { WorkExperience } from "../components/WorkExperience";
import { SlidesButtonNav, SlidesNav } from "../components/SlidesNav";
import "swiper/css";
import { Canvas, useFrame } from "@react-three/fiber";

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
    }, 300);
  };

  const changeActiveSlide = (i: number) => {
    if (!swiper) return;
    if (i < 0 || i > swiper.slides.length - 1) return;

    swiper.slideTo(i);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowNav(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className='container mx-auto pt-8 h-100-accom flex flex-col md:pt-0'>
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
        <SlidesButtonNav
          className={showNav ? "opacity-0" : "opacity-100"}
          activeSlide={activeSlide}
          changeActiveSlide={changeActiveSlide}
          getPageTitle={getPageTitle}
          swiper={swiper}
        />
      </div>
      <SlidesNav
        showNav={showNav}
        onMouseOver={handleNavHover}
        onMouseLeave={handleNavLeave}
        activeSlide={activeSlide}
        changeActiveSlide={changeActiveSlide}
      />
      <div className='absolute w-screen h-screen inset-0'>
        {typeof window !== "undefined" && (
          <Canvas style={{ backgroundColor: "none" }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]} />
          </Canvas>
        )}
      </div>
    </>
  );
};

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    ref.current.rotation.z += 0.01;
  });

  return (
    <mesh {...props} ref={ref} scale={clicked ? 1.5 : 1} onClick={(event) => click(!clicked)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}

export default Home;
