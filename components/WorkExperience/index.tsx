import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  MouseEvent,
} from "react";
import { motion, useAnimate } from "framer-motion";
import { useMousePositionInElement } from "../../hooks/useMousePositions";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { useGlobalContext } from "../../context/GlobalContext";

interface WorkButtonProps {
  title: string;
  date: string;
  setPositions: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setInButton: Dispatch<SetStateAction<boolean>>;
  setSelectedExperience: Dispatch<SetStateAction<string | null>>;
  classes?: string;
  onClickMobile?: (e: MouseEvent) => void;
  play: boolean;
}

const WorkButton = ({
  title,
  setPositions,
  setInButton,
  setSelectedExperience,
  classes,
  date,
  onClickMobile,
  play,
}: WorkButtonProps) => {
  const [positions, getPositions] = useMousePositionInElement();
  const breakpoint = useBreakpoints();

  useEffect(() => {
    setPositions(positions);
  }, [positions, setPositions]);

  const onClickWithGuard = (e: MouseEvent) => {
    if (
      (breakpoint === "xs" || breakpoint === "sm") &&
      typeof onClickMobile === "function"
    ) {
      onClickMobile(e);
    }
  };

  const [scope, animateFn] = useAnimate();

  useEffect(() => {
    if(breakpoint && ['xs', 'sm'].includes(breakpoint)) {
      animateFn("*", { y: play ? [0, 3, 0] : 0 }, { duration: 0.5 });
    }
  }, [play]);

  return (
    <div>
      <p className="mb-4 text-slate-400 dark:text-slate-900">{date}</p>
      <button
        {...getPositions}
        onClick={onClickWithGuard}
        onMouseEnter={() => {
          setSelectedExperience(title);
          setInButton(true);
        }}
        onMouseLeave={() => setInButton(false)}
        className={`shadow border-black w-full border-y-[6px] border-x-[7px] ${classes}`}
      >
        <div className="bg-slate-600 block p-2 scale-[1.02] rounded text-slate-200 cursor-pointer">
          <motion.div ref={scope} whileTap={{ y: [0, 3, 0] }} transition={{duration: 0.5 }}>
            <p className="text-slate-200">{title}</p>
          </motion.div>
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
  const { setModal } = useGlobalContext();
  const breakpoint = useBreakpoints();
  const [playIndex, setPlayIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayIndex((prevRandom) => {
        const random = Math.round(Math.random() * (3 - 1));
        return random === prevRandom ? random - 1 : random;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex h-[calc(100vh-350px)] gap-8">
        <div className="flex flex-row gap-4 flex-1 md:flex-none">
          <div className="flex justify-center items-center relative">
            <div className="w-full h-full border-r-[7px] border-slate-300 dark:border-slate-900 border-dotted" />
          </div>
          <div className="flex flex-col justify-between flex-1 md:flex-none">
            <WorkButton
              setInButton={setInButton}
              setPositions={setPositions}
              setSelectedExperience={setSelectedExperience}
              onClickMobile={() =>
                setModal({ show: true, render: <div>Self Employed</div> })
              }
              title="Self Employed"
              date="August 2020"
              play={0 === playIndex}
            />
            <WorkButton
              setInButton={setInButton}
              setPositions={setPositions}
              setSelectedExperience={setSelectedExperience}
              onClickMobile={() =>
                setModal({ show: true, render: <div>Remarkable Commerce</div> })
              }
              title="Remarkable Commerce"
              date="May 2021"
              play={1 === playIndex}
            />
            <WorkButton
              setInButton={setInButton}
              setPositions={setPositions}
              setSelectedExperience={setSelectedExperience}
              onClickMobile={() =>
                setModal({ show: true, render: <div>Experian</div> })
              }
              title="Experian"
              date="August 2022"
              play={['2', '-1'].includes(playIndex.toString())}
            />
          </div>
        </div>
        {breakpoint !== "xs" && breakpoint !== "sm" && (
          <motion.div
            className="shadow-default flex-grow border-black border-x-[11px] border-y-[10px] hidden md:block"
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
        )}
      </div>
    </div>
  );
};
