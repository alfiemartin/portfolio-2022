import Image from "next/image";
import chevronDown from "../../public/chevron-down.svg";
import { useEffect, useRef, useState } from "react";

export const ProjectCard = () => {
  const [expanded, setExpanded] = useState(false);
  const innerSection = useRef<HTMLDivElement>(null);
  const [innerSectionHeight, setInnerSectionHeight] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (innerSection.current?.scrollHeight) {
      setInnerSectionHeight(innerSection.current.scrollHeight);
    }
  }, []);

  return (
    <div
      onClick={() => setExpanded((expanded) => !expanded)}
      className="bg-red-200 p-4 rounded-lg shadow-lg"
    >
      <div className="flex justify-between">
        <div>
          <h3>Socially Distant</h3>
          <h4 className="text-sm">
            At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app.
          </h4>
        </div>
        <Image alt="chevron" src={chevronDown} width={50} height={50} className={`transition-all duration-500 rotate-180 ${expanded && 'rotate-0'}`} />
      </div>
      <div
        ref={innerSection}
        style={expanded ? { maxHeight: `${innerSectionHeight}px` } : {}}
        className='overflow-hidden max-h-0 transition-all duration-500'
      >
        <div className="mt-4">
          <p>Other contentefd</p>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section>
      <h1>Projects</h1>
      <h3>Click a card to expand details</h3>
      <div className="mt-4 flex flex-col gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};
