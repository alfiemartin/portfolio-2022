import Head from "next/head";
import React, { ReactNode } from "react";
import { Header } from "../Header";
import { useGlobalContext } from "../../context/GlobalContext";
import { Modal } from "../Modal";

const AppTemplate = ({ children }: { children: ReactNode }) => {
  const { loadedSwiper, modal, setModal } = useGlobalContext();

  const hideModal = () => {
    setModal(modal =>  ({ ...modal, show: false }));
  }

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
        <div className="main-content hide-scrollbar pt-[64px] h-[calc(100vh-85px)] min-h-[-webkit-fill-available] overflow-scroll font-poppins px-2 sm:px-0">
          {children}
          <div className="absolute w-full h-8 container bottom-0 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-b from-transparent dark:to-slate-800 to-slate-200"></div>
        </div>
      </div>
      <Modal show={modal.show} hideModal={hideModal} >{modal.render}</Modal>
    </>
  );
};

export default AppTemplate;
