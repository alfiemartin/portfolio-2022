import type { NextPage } from "next";
import Image from "next/image";
import alfieImage from "../public/alfie-full.jpg";

const Introduction = () => {
  return(
    <div className="h-100-accom flex justify-center items-center">
      <div className="flex gap-4">
        <div className="w-[600px] p-2 bg-black shadow-lg">
          <Image src={alfieImage} layout="responsive" className="rounded" alt='Checking alt tags i see 😩' />
        </div>
        <div className="flex flex-col">
          <h1>Alfie Martin</h1>
          <h3 className="mb-4">Front-end Developer</h3>
          <h4>Check out what i&apos;ve been doing ⬇️</h4>
          <h4 className="mt-auto">.... Or play a quick game?</h4>
        </div>
      </div>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 xl:px-32'>
        <Introduction />
        <div className="h-[2000px]" />
      </div>
    </>
  );
};

export default Home;
