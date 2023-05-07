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
import { motion } from "framer-motion";

const IReact = ({ size = 50 }: { size?: number }) => {
  return (
    <motion.div
      style={{ rotateZ: 0 }}
      whileHover={{ rotateZ: 360 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <SiReact size={size} />
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
            <SiTypescript key={"2"} size={50} />,
            <SiMongodb key={"3"} size={50} />,
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
