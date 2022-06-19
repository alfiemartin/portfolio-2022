import alfieImage from "../../public/alfie-full.jpg";
import Image from "next/image";

export const Introduction = () => {
  return (
    <div className='flex justify-center items-start md:items-center'>
      <div className='flex gap-4 flex-col-reverse md:flex-row'>
        <div className='w-100 md:w-[600px] p-2 bg-black shadow-lg overflow-hidden'>
          <Image
            src={alfieImage}
            layout='responsive'
            className='rounded z-0'
            priority
            alt='Checking alt tags i see 😩'
          />
        </div>
        <div className='flex flex-col dark:text-gray-200'>
          <h1>Alfie Martin</h1>
          <h3 className='mb-10'>Front-end Developer</h3>
          <h5 className=''>Check out what i&apos;ve been doing ➡️</h5>
        </div>
      </div>
    </div>
  );
};
