import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  content: JSX.Element;
}

export const ProjectCard = ({ content, title }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const innerSection = useRef<HTMLDivElement>(null);
  const [innerSectionHeight, setInnerSectionHeight] = useState<number | null>(
    null
  );
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (innerSection.current?.scrollHeight) {
      setInnerSectionHeight(innerSection.current.scrollHeight);
    }
  }, []);

  return (
    <div
      className="border-black border-x-8 border-y-[10px] shadow-lg group"
      onClick={() => setExpanded((expanded) => !expanded)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="bg-slate-600 text-slate-200 p-4 py-2 rounded scale-y-105 cursor-pointer">
        <div className="flex justify-between items-center">
          <div>
            <motion.h3
              animate={{ scale: hovered ? 1.02 : 1.0 }}
              transition={{ type: "spring" }}
            >
              {title}
            </motion.h3>
            <motion.h4
              className="text-sm"
              animate={{ scale: hovered ? 1.02 : 1.0 }}
              transition={{ type: "spring", delay: 0.08 }}
            >
              {title}
            </motion.h4>
          </div>
          <motion.div 
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <BiChevronDown
              size={100}
            />
          </motion.div>
        </div>
        <div
          ref={innerSection}
          style={expanded ? { maxHeight: `${innerSectionHeight}px` } : {}}
          className="overflow-hidden max-h-0 transition-all duration-500"
        >
          <div className="mt-4">{content}</div>
        </div>
      </div>
    </div>
  );
};
