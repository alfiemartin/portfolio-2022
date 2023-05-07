import alfieImage from "../../public/alfie-full.jpg";
import Image from "next/image";
import { SlideTemplate } from "../Foundations";

export const Introduction = () => {
  return (
    <SlideTemplate className='flex justify-center items-start md:items-center'>
      <div className='flex gap-4 w-full flex-col-reverse justify-center md:flex-row'>
        <div className='w-full md:max-w-xl p-2 bg-black shadow-default overflow-hidden'>
          <Image
            src={alfieImage}
            layout='responsive'
            className='rounded z-0'
            priority
            alt='Checking alt tags i see 😩'
          />
        </div>
        <div className='flex flex-col'>
          <h1>Alfie Martin</h1>
          <h3 className='mb-10'>Frontend Developer</h3>
          <h5 className=''>Check out what i&apos;ve been doing ➡️</h5>
        </div>
      </div>
    </SlideTemplate>
  );
};
