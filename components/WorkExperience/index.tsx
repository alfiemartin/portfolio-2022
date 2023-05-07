import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { motion } from "framer-motion";
import { SlideTemplate } from "../Foundations";
import { useMousePositionInElement } from "../../hooks/useMousePositions";

interface WorkButtonProps {
  title: string;
  date: string;
  setPositions: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setInButton: Dispatch<SetStateAction<boolean>>;
  setSelectedExperience: Dispatch<SetStateAction<string | null>>;
  classes?: string;
}

const WorkButton = ({
  title,
  setPositions,
  setInButton,
  setSelectedExperience,
  classes,
  date,
}: WorkButtonProps) => {
  const [positions, getPositions] = useMousePositionInElement();

  useEffect(() => {
    setPositions(positions);
  }, [positions, setPositions])

  return (
    <div>
      <p className="mb-4 text-slate-400 dark:text-slate-900">{date}</p>
      <button
        {...getPositions}
        onMouseEnter={() => {
          setSelectedExperience(title);
          setInButton(true);
        }}
        onMouseLeave={() => setInButton(false)}
        className={`shadow border-black w-full border-y-[6px] border-x-[7px] ${classes}`}
      >
        <div className="bg-slate-600 block p-2 scale-[1.02] rounded text-slate-200 cursor-pointer">
          {title}
        </div>
      </button>
    </div>
  );
};

export const WorkExperience = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [inButton, setInButton] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    null
  );

  return (
    <SlideTemplate>
      <h1>Professional Experience</h1>
      <div className="mt-10 flex flex-col gap-8">
        <div className="flex h-[calc(100vh-350px)] gap-8">
          <div className="flex flex-row gap-4">
            <div className="flex justify-center items-center relative">
              <div className="w-full h-full border-r-[7px] border-slate-300 dark:border-slate-900 border-dotted" />
            </div>
            <div className="flex flex-col justify-between">
              <WorkButton
                setInButton={setInButton}
                setPositions={setPositions}
                setSelectedExperience={setSelectedExperience}
                title="Self Employed"
                date="August 2020"
              />
              <WorkButton
                setInButton={setInButton}
                setPositions={setPositions}
                setSelectedExperience={setSelectedExperience}
                title="Remarkable Commerce"
                date="May 2021"
              />
              <WorkButton
                setInButton={setInButton}
                setPositions={setPositions}
                setSelectedExperience={setSelectedExperience}
                title="Experian"
                date="August 2022"
              />
            </div>
          </div>
          <motion.div
            className="shadow-default flex-grow border-black border-x-[11px] border-y-[10px]"
            animate={{
              x: positions.x * 10,
              y: positions.y * 10,
              opacity: inButton ? 100 : 0,
            }}
            transition={{ type: "tween" }}
          >
            <div className="bg-slate-600 p-4 py-2 rounded scale-[1.01] h-full">
              <h3>{selectedExperience}</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideTemplate>
  );
};
