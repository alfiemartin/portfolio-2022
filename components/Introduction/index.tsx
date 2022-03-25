import alfieImage from "../../public/alfie-full.jpg";
import Image from "next/image";
import { useState } from "react";
import { useGlobalContext } from "../../pages/_app";
import { GameModal } from "../GameModal";

export const Introduction = () => {
  const [showGame, setShowGame] = useState(false);
  const [revealGame, setRevealGame] = useState(false);
  const {setPageTitle} = useGlobalContext();

  const handleModalClose = () => {
    if(setPageTitle) setPageTitle('Welcome');
    
    setRevealGame(false);

    setTimeout(() => {
      setShowGame(false);
    }, 700)
  }

  const handleAfterModalOpen = () => {
    if(setPageTitle) setPageTitle('My First Game');

    setRevealGame(true);
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
            <button className="underline cursor-pointer hover:text-blue-800 dark:hover:text-blue-500 transition-colors" onClick={() => setShowGame(true)}>game?</button>
          </h5>
        </div>
      </div>
      <GameModal handleAfterModalOpen={handleAfterModalOpen} handleModalClose={handleModalClose} revealGame={revealGame} showGame={showGame} />
    </div>
  );
};