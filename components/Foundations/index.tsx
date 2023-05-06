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
      <Header />
      <div
        className={`opacity-0 transition-opacity duration-300 relative ease-out ${
          loadedSwiper && "opacity-100"
        }`}
      >
        <div className="main-content pt-[64px] h-[calc(100vh-85px)] overflow-scroll font-poppins px-2 sm:px-0">
          {children}
          <div className="absolute w-full h-8 container bottom-0 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-b from-transparent dark:to-gray-800 to-gray-200"></div>
        </div>
      </div>
    </>
  );
};

interface SlideTemplateProps {
  className?: string;
}

const SlideTemplate: React.FC<SlideTemplateProps> = ({ children, className }) => (
  <section className={`px-4 ${className}`}>
    {children}
  </section>
)

export default PageTemplate;
export { SlideTemplate };
