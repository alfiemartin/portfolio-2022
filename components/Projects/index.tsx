import { SlideTemplate } from "../Foundations";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiReact,
  SiGraphql,
  SiApollographql,
  SiNodedotjs,
} from "react-icons/si";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getTheme } from "../../utils";

const IReact = ({ size = 50 }: { size?: number }) => {
  return (
    <motion.div whileHover={{ rotateZ: 360 }} transition={{ type: "spring" }}>
      <SiReact size={size} />
    </motion.div>
  );
};

const ITypescript = ({ size = 50 }: { size?: number }) => {
  const [animate, setAnimate] = useState<"enter" | "leave" | null>(null);
  const [scope, animateFn] = useAnimate();

  const duration_ms = 200;
  const duration_s = duration_ms / 1000;

  useEffect(() => {
    if (animate) {
      const enterAnimation = [0, 10, -10, 0];

      animateFn(
        "*",
        {
          x:
            animate === "enter"
              ? enterAnimation
              : enterAnimation.map((x) => (x *= -1)),
        },
        { duration: duration_s, ease: [0, 0, 0, 0] }
      );
    }
  }, [animate]);

  return (
    <motion.div
      onMouseEnter={() => setAnimate("enter")}
      onMouseLeave={() => setAnimate("leave")}
      ref={scope}
    >
      <SiTypescript size={size} />
    </motion.div>
  );
};

const IMongo = ({ size = 50 }: { size?: number }) => {
  const [animate, setAnimate] = useState<"enter" | "leave" | null>(null);
  const [scope, animateFn] = useAnimate();

  const duration_ms = 200;
  const duration_s = duration_ms / 1000;

  const initialColour = useRef<string>();

  useEffect(() => {
    const element = (scope.current as HTMLDivElement).querySelector("svg");
    initialColour.current = window
      .getComputedStyle(element as any)
      .getPropertyValue("fill");
  }, []);

  useEffect(() => {
    if (animate && initialColour.current) {
      const greenColour = getTheme()?.colors.green["700"];

      animateFn(
        "*",
        {
          rotateZ: [0, 30, -30, 0],
          fill: animate == "enter" ? greenColour : initialColour.current,
        },
        { duration: duration_s, times: [0, 0.3, 0.6, 1] }
      );
    }
  }, [animate]);

  return (
    <motion.div
      onMouseEnter={() => setAnimate("enter")}
      onMouseLeave={() => setAnimate("leave")}
      ref={scope}
    >
      <SiMongodb size={size} />
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <SlideTemplate>
      <h1 className="mb-6">Projects</h1>
      <div className="mt-4 mb-8 flex flex-col gap-8">
        <ProjectCard
          title="Once"
          description="At the height on the COVID lockdown, me and my brother lauched a
          social media campain to promote a mental health app."
          content={<div></div>}
          icons={[
            <IReact key={"1"} size={50} />,
            <ITypescript key={"2"} size={50} />,
            <IMongo key={"3"} size={50} />,
            <SiExpress key={"4"} size={50} />,
            <SiGraphql key={"5"} size={50} />,
            <SiApollographql key={"6"} size={50} />,
            <SiNodedotjs key={"7"} size={50} />,
          ]}
        />
        <ProjectCard
          title="Pressure Precision"
          description="At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app."
          content={<div></div>}
        />
        <div className="mt-8">
          <h3>&apos;Older Projects&apos;</h3>
        </div>
        <ProjectCard
          title="Previous Portfolios"
          description="At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app."
          content={<div></div>}
        />
        <ProjectCard
          title="RDM Technology"
          description="At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app."
          content={<div></div>}
        />
        <ProjectCard
          title="Socially Distant"
          description="At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app."
          content={<div></div>}
        />
        <ProjectCard
          title="TapFlash"
          description="At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app."
          content={<div></div>}
        />
      </div>
    </SlideTemplate>
  );
};
