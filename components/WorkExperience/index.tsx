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
import { CardLink } from "../Projects";

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
    if (breakpoint && ["xs", "sm"].includes(breakpoint)) {
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
          <motion.div
            ref={scope}
            whileTap={{ y: [0, 3, 0] }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate-200">{title}</p>
          </motion.div>
        </div>
      </button>
    </div>
  );
};

const SelfEmployed = () => (
  <div>
    <h3>Self Employed</h3>
    <p>
      After finishing university, the COVID lockdowns were in full force and i
      was unsure on my next steps in life.
    </p>
    <p>
      My brother approached me to start a business and this is what introduced
      me to frontend development.
    </p>
    <ul className="list-disc mt-4 ml-4">
      <li>
        Started with basic WordPress/ Elementor page building for the company
        site.
      </li>
      <li>Navigated to plain HTML, CSS and Javascript.</li>
      <li>Started exploring frontend frameworks, specifically React.</li>
      <li>
        Used react for several projects including a schema based quiz renderer
        used for content creation. This was originaly developed in PHP before i
        was introduced to React.
      </li>
      <li>
        Skills developed and i became interested in full time employement.
      </li>
      <li>
        Continued with personal projects until i was able to secure a first job
        as Junior Frontend Developer.
      </li>
    </ul>
  </div>
);

const Remarkable = () => (
  <div>
    <h3>Remarkable Commerce</h3>
    <p>
      My first professional role where i became much more confident in my skills
      and was able to work with a number of technologies.{" "}
      <CardLink text="Remarkable Commerce" href="https://remarkable.net/" />
     {" "}
      has numerous high-profile e-commerce clients and provides a CMS to each
      client.
    </p>
    <ul className="list-disc mt-4 ml-4">
      <li>
        Began by managing the at-time WordPress managed company website,
        creating new reusable components for other teammates to use.
      </li>
      <li>Used Docker when working on the WordPress site.</li>
      <li>
        Transitioned to manage the legacy .Net webapps which used Razor to
        render the webpages. SASS and plain Javascript was also used for these
        sites.
      </li>
      <li>
        Explored React Native and began adding small additions to the POC mobile
        app.
      </li>
      <li>
        Introduced to AGILE/ SCRUM methodology: daily standups, retros, Gitlab
        and code reviews.
      </li>
      <li>Using GIT for version control.</li>
      <li>
        Worked on the NextJS POC app for the new API driven platform that was
        being worked on.
      </li>
      <li>
        Ended up as the main developer for the{" "}
        <CardLink text="Yours Clothing" href="https://www.yoursclothing.co.uk/" />
        {" "}
        brand. This projects is 4 sites in one, using .Net and Razor.
      </li>
    </ul>
  </div>
);

const Experian = () => (
  <div>
    <h3>Experian</h3>
    <p>
      After around 1.5 years at my previous company, i landed a job for Experian Comsumer Services. Within the first month
      the senior developer next to me left, leaving me as the main Frontend developer across two different teams.
    </p>
    <ul className="list-disc mt-4 ml-4">
      <li>Working on the new NextJS project which involved user sign-in and account management.</li>
      <li>Strong component driven arcitecture.</li>
      <li>Styled components for styling.</li>
      <li>Strong emphasis on testing, including Jest and cypress.</li>
      <li>AWS for debugging pipelines, pushing builds and deploying to production.</li>
      <li>Typescript.</li>
      <li>Fixing security flaws when needed.</li>
      <li>Context API and useReducer for managing state.</li>
      <li>GA event tagging using Ensighten.</li>
      <li>Transitioned the app to use the new company frontend component library and contributed to it.</li>
      <li>Jira and Confluence for project management.</li>
    </ul>
  </div>
);

export const WorkExperience = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [inButton, setInButton] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState<JSX.Element | null>(null);
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
              setSelectedExperience={() =>
                setSelectedExperience(<SelfEmployed />)
              }
              onClickMobile={() =>
                setModal({ show: true, render: <SelfEmployed /> })
              }
              title="Self Employed"
              date="August 2020"
              play={0 === playIndex}
            />
            <WorkButton
              setInButton={setInButton}
              setPositions={setPositions}
              setSelectedExperience={() =>
                setSelectedExperience(<Remarkable />)
              }
              onClickMobile={() =>
                setModal({ show: true, render: <Remarkable /> })
              }
              title="Remarkable Commerce"
              date="May 2021"
              play={1 === playIndex}
            />
            <WorkButton
              setInButton={setInButton}
              setPositions={setPositions}
              setSelectedExperience={() => setSelectedExperience(<Experian />)}
              onClickMobile={() =>
                setModal({ show: true, render: <Experian /> })
              }
              title="Experian"
              date="August 2022"
              play={["2", "-1"].includes(playIndex.toString())}
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
              {selectedExperience}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
