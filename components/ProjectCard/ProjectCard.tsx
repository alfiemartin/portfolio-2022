import { ReactNode, useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  content: JSX.Element;
  icons?: ReactNode[];
}

export const ProjectCard = ({
  content,
  title,
  description,
  icons,
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
      className={`border-black border-x-[10px] border-y-[10px] group max-w-3xl transition-all duration-200 shadow-none hover:shadow-default `}
      onClick={() => setExpanded((expanded) => !expanded)}
    >
      <div className="bg-slate-600 p-4 py-2 rounded scale-y-[1.01] scale-x-[1.005] cursor-pointer">
        <div className="flex justify-between">
          <div className="text-slate-200">
            <h3 className="text-inheri text-2xl md:text-3xl lg:text-4xl mb-1 font-semibold">{title}</h3>
            <h4 className="text-sm text-inherit">{description}</h4>
          </div>
          <motion.div
            className="flex-grow-0 flex justify-center items-center"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <BiChevronDown className="fill-slate-200 w-8 h-8 sm:w-12 sm:h-12" />
          </motion.div>
        </div>
        <motion.div
          animate={{ maxHeight: expanded ? `${innerSectionHeight}px` : "0px" }}
          transition={{ duration: 0.5, type: "spring" }}
          ref={innerSection}
          className="overflow-hidden"
        >
          <div>
            {content}
            <div className="flex flex-row justify-between">{icons}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

//show technology icons at bottom and animate cooly
