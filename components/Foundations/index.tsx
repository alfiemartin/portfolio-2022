import Head from "next/head";
import React, { ReactNode } from "react";
import { Header } from "../Header";
import { useGlobalContext } from "../../context/GlobalContext";

const PageTemplate = ({ children }: { children: ReactNode }) => {
  const { loadedSwiper } = useGlobalContext();

  return (
    <>
      <Head>
        <title>Alfie Martin - Web Developer</title>
      </Head>
      <div className={`opacity-0 transition-opacity duration-300 ease-out ${loadedSwiper && 'opacity-100'}`}>
        <Header />
        <div className='main-content pt-[64px] h-[calc(100vh-100px)] overflow-hidden font-poppins px-2 sm:px-0'>{children}</div>
      </div>
    </>
  );//overflow-scroll
};

export default PageTemplate;
