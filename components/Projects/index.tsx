import { SlideTemplate } from "../Foundations";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { getTheme } from "../../utils";
import { useGlobalContext } from "../../context/GlobalContext";
import {
  IApollo,
  IExpress,
  IMongoDb,
  INodeJS,
  IReact,
  ITypescript,
} from "../Icons";
import { IGraphQL } from "../Icons/index";

export const Projects = () => {
  const { isDark } = useGlobalContext();
  const defaultColour = isDark
    ? getTheme()?.colors.slate["200"]
    : getTheme()?.colors.slate["800"];

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
            <IGraphQL key={"3"} size={50} />,
            <IMongoDb key={"4"} defaultColour={defaultColour} size={50} />,
            <IApollo key={"5"} size={50} />,
            <IExpress key={"6"} size={50} />,
            <INodeJS key={"7"} size={50} />,
          ]}
        />
        <ProjectCard
          title="Pressure Precision"
          description="At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app."
          content={<div></div>}
        />
        <h3 className="mt-8">&apos;Older Projects&apos;</h3>
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
