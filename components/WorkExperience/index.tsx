import {
  Dispatch,
  SetStateAction,
  useState,
  MouseEventHandler,
  useEffect,
} from "react";
import { motion, useMotionValue, useVelocity } from "framer-motion";

interface WorkButtonProps {
  title: string;
  setPositions: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setInButton: Dispatch<SetStateAction<boolean>>;
}

const WorkButton = ({ title, setPositions, setInButton }: WorkButtonProps) => {
  const getPosition: MouseEventHandler<HTMLButtonElement> = (e) => {
    const positionX = e.nativeEvent.offsetX;
    const positionY = e.nativeEvent.offsetY;
    const width = (e.target as HTMLButtonElement).clientWidth;
    const height = (e.target as HTMLButtonElement).clientHeight;

    const percentX = (width - 2 * positionX) / width;
    const percentY = (height - 2 * positionY) / height;

    setPositions({ x: percentX, y: percentY });
  };

  return (
    <button
      onMouseMove={getPosition}
      onMouseEnter={() => setInButton(true)}
      onMouseLeave={() => setInButton(false)}
      className="p-4 bg-blue-400 rounded-lg shadow-xl"
    >
      {title}
    </button>
  );
};

export const WorkExperience = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [inButton, setInButton] = useState(false);

  useEffect(() => {
    console.log(positions);
  }, [positions]);

  return (
    <div>
      <h1>Professional Experience</h1>
      <div className="mt-10 flex flex-col gap-8">
        <div className="grid grid-cols-3 grid-rows-6 gap-x-16 gap-y-10">
          <WorkButton
            setInButton={setInButton}
            setPositions={setPositions}
            title="Self Employed"
          />
          <WorkButton
            setInButton={setInButton}
            setPositions={setPositions}
            title="Remarkable Commerce"
          />
          <WorkButton
            setInButton={setInButton}
            setPositions={setPositions}
            title="Experian"
          />
          <motion.div
            className={`bg-blue-200 shadow-lg mx-16 col-span-3 row-span-4 duration-200 transition-opacity opacity-0 ${
              inButton && "opacity-100"
            }`}
            animate={{ x: positions.x * 10, y: positions.y * 10 }}
            transition={{ type: "tween" }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
