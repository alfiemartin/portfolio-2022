import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from 'react-icons/bi'
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
        className="bg-slate-600 border-black border-8 text-slate-200 p-4 py-2 rounded-lg shadow-lg cursor-pointer"
      >
        <div className="flex justify-between items-center">
          <div>
            <h3>{title}</h3>
            <h4 className="text-sm">{description}</h4>
          </div>
          <BiChevronDown
            size={100}
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
  