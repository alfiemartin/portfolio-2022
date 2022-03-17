import type { NextPage } from "next";

const Header = () => {
  return (
    <header className='w-100'>
      <nav className='flex p-4 bg-gray-400 fixed w-100'>
        <div className='flex-1'>
          <p>Alfie Martin</p>
        </div>
        <div className='flex-1'>
          <ul className='flex'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className='container mx-auto'>
        <div>
          <h1 className='text-5xl font-semibold'>Introduction</h1>
        </div>
        <div className='h-[2000px]'></div>
      </div>
    </div>
  );
};

export default Home;
