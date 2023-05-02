import {
  Dispatch,
  SetStateAction,
  useState,
  MouseEventHandler,
  useEffect,
} from "react";

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

    const percentX = (0.5 * width - positionX) / width;
    const percentY = (0.5 * height - positionY) / height;

    setPositions({ x: percentX, y: percentY });
  };

  return (
    <button
      onMouseMove={getPosition}
      onMouseEnter={() => setInButton(true)}
      onMouseLeave={() => setInButton(false)}
      className="p-4 bg-blue-400 rounded-lg shadow-md"
    >
      {title}
    </button>
  );
};

export const WorkExperience = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [inButton, setInButton] = useState(false);

  return (
    <div>
      <h1>Professional Experience</h1>
      <div className="mt-4 flex flex-col gap-8">
        <div className="grid grid-cols-3 grid-rows-6 gap-x-16 gap-y-8">
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
          <div
            style={{
              transform: `translate3d(${positions.x * 50}px, ${
                positions.y * 50
              }px, 0)`,
            }}
            className={`bg-blue-200 col-span-3 row-span-4 transition-transform duration-50 opacity-0 ${
              inButton && "opacity-100"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};
