import alfieImage from "../../public/alfie-full.jpg";
import Modal from "react-modal";
import Image from "next/image";
import { useEffect, useState } from "react";
import { swiperButtonClasses } from "../SlidesNav";

export const Introduction = () => {
  const [showGame, setShowGame] = useState(false);
  const [revealGame, setRevealGame] = useState(false);

  const handleModalClose = () => {
    setRevealGame(false);

    setTimeout(() => {
      setShowGame(false);
    }, 1000)
  }

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
          <h5 className="">Check out what i&apos;ve been doing ➡️</h5>
          <h5 className="mt-auto">
            .... Or play a quick{' '} 
            <button className="underline cursor-pointer" onClick={() => setShowGame(true)}>game?</button>
          </h5>
        </div>
      </div>
      <Modal isOpen={showGame} onAfterOpen={() => setRevealGame(true)} className={"bottom-0 absolute w-screen h-100-accom z-20"} overlayClassName="z-20">
        <div className={`w-full h-full transition-opacity duration-1000 ${revealGame ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-100-accom absolute bottom-0 flex justify-between items-end p-12 pointer-events-none">
            <button className={`${swiperButtonClasses} pointer-events-auto`} onClick={handleModalClose} >Quit Game</button>
            <button className={`${swiperButtonClasses} pointer-events-auto`}>About This Projects</button>
          </div>
          <iframe height={'100%'} width={'100%'} src='https://tapflash-77edb.web.app/' />
        </div>
      </Modal>
    </div>
  );
};