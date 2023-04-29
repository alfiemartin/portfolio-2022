import Head from "next/head";
import React, { ReactNode } from "react";
import { Header } from "../Header";

const PageTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Alfie Martin - Web Developer</title>
      </Head>
      <Header />
      <div className='main-content pt-[64px] h-[calc(100vh-100px)] overflow-scroll font-poppins px-2 sm:px-0'>{children}</div>
    </>
  );
};

export default PageTemplate;
