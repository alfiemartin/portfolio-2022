import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import chevronDown from "../../public/chevron-down.svg";

interface ProjectCardProps {
    title: string;
    description: string;
    content: JSX.Element;
  }
  
  export const ProjectCard = ({
    content,
    description,
    title,
  }: ProjectCardProps) => {
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
        className="bg-slate-600 text-slate-200 p-4 rounded-lg shadow-lg cursor-pointer"
      >
        <div className="flex justify-between">
          <div>
            <h3>{title}</h3>
            <h4 className="text-sm">{description}</h4>
          </div>
          <Image
            alt="chevron"
            src={chevronDown}
            width={50}
            height={50}
            className={`transition-all duration-500 rotate-180 ${
              expanded && "rotate-0"
            }`}
          />
        </div>
        <div
          ref={innerSection}
          style={expanded ? { maxHeight: `${innerSectionHeight}px` } : {}}
          className="overflow-hidden max-h-0 transition-all duration-500"
        >
          <div className="mt-4">
            {content}
          </div>
        </div>
      </div>
    );
  };
  