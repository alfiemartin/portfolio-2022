import { ProjectCard } from "../ProjectCard/ProjectCard";
import { getTheme } from "../../utils";
import { useGlobalContext } from "../../context/GlobalContext";
import {
  IApollo,
  IExpo,
  IExpress,
  IMongoDb,
  INodeJS,
  IReact,
  ITypescript,
  IVercel,
} from "../Icons";
import { IGraphQL } from "../Icons/index";

const CardLink = ({
  href,
  text,
  className,
}: {
  text: string;
  href: string;
  className?: string;
}) => (
  <a
    className={className}
    target="_blank"
    rel="noreferrer"
    href={href}
    onClick={(e) => e.stopPropagation()}
  >
    {text}
  </a>
);

export const Projects = () => {
  const { isDark } = useGlobalContext();
  const defaultColour = isDark
    ? getTheme()?.colors.slate["200"]
    : getTheme()?.colors.slate["800"];

  return (
    <div className="flex flex-col gap-8 pb-4">
      <ProjectCard
        title="Once"
        description="A new take on mobile dating apps. Source code currently privated to keep the concept hidden for now...
        built using Expo and React Native. Along with a frontend, the app has a custom Express backend which also uses Apollo and TypeORM
        to retreive the data from the Mongo database and to also consume the data on the frontend.
        "
        content={
          <div className="text-sm">
            <p>
              This app spawned from an old concept which is publicly available:
            </p>
            <div className="flex gap-4">
              <CardLink
                text="View server"
                href="https://github.com/alfiemartin/LensflareServer"
              />
              <CardLink
                text="View client"
                href="https://github.com/alfiemartin/LensflareIgnite/"
              />
            </div>
          </div>
        }
        icons={[
          <IReact key={"1"} />,
          <ITypescript key={"2"} />,
          <IGraphQL key={"3"} />,
          <IMongoDb key={"4"} defaultColour={defaultColour} />,
          <IApollo key={"5"} />,
          <IExpress key={"6"} />,
          <INodeJS key={"7"} />,
          <IExpo key={"8"} />,
        ]}
      />
      <ProjectCard
        title="Pressure Precision"
        description="A NextJS rebuild concept of a friends business site which was originally on Wordpress. 
        Uses NextJS and TailwindCSS. Built to highlight the performance difference of NextJS and Wordpress.
        Hosted on Vercel. Unfortunately this project was never completed as my friend was a Wordpress developer
        and wanted to keep full control over the site (it could have been great 😢).
        "
        content={
          <div className="flex gap-4">
            <CardLink
              text="View demo"
              href="http://pressure-precision.vercel.app/"
            />
            <CardLink
              text="View code"
              href="https://github.com/alfiemartin/pressure-precision"
            />
          </div>
        }
        icons={[
          <IReact key={"1"} />,
          <ITypescript key={"2"} />,
          <IVercel key={"3"} />,
        ]}
      />
      <h3 className="mt-8">&apos;Older Projects&apos;</h3>
      <ProjectCard
        title="Previous Portfolios"
        description="Funnily enough, most of my personal projects have probably been portfolios, attempting to show
        off my frontend skills through the portfolio itself rather than the individual projects. Doing this is
        surprisingly difficult when trying to maintain a good UX.
        "
        content={<div></div>}
      />
      <ProjectCard
        title="RDM Technology"
        description="A quick rebuild of my dad's portfolio website, built when i was just starting to get
        comfortable with frontend development using NextJS.
        "
        content={<div></div>}
      />
      <ProjectCard
        title="Socially Distant"
        description="At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app he built. The site was live for around a year
            and was a SPA which calculate the number of 'social interactions' missed due to the COVID lockdowns.
            "
        content={<div></div>}
      />
      <ProjectCard
        title="TapFlash"
        description="One of my very first projects and only game i've ever built on the web. Allows
        users to sign in with Google and post their score to the leaderboards. The objective of the game is to
        press the buttons in the correct sequence.
        "
        content={<div></div>}
      />
    </div>
  );
};
