import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiGraphql,
  SiApollographql,
  SiNodedotjs,
} from "react-icons/si";
import { getTheme } from "../../utils";

interface IconsProps {
  size?: number;
}

export const IReact = ({ size }: IconsProps) => {
  return (
    <motion.div whileHover={{ rotateZ: 360 }} transition={{ type: "spring" }}>
      <SiReact size={size} />
    </motion.div>
  );
};

export const IMongoDb = ({
  size,
  defaultColour,
}: IconsProps & { defaultColour: string }) => (
  <motion.div
    initial={{ "--colour": defaultColour } as any}
    whileHover={
      {
        rotateZ: 30,
        "--colour": getTheme()?.colors.green["700"],
      } as any
    }
    transition={{ type: "spring", bounce: 0.6 }}
    key={defaultColour}
  >
    <SiMongodb style={{ fill: "var(--colour)" }} key={"3"} size={size} />
  </motion.div>
);

export const IGraphQL = ({ size }: IconsProps) => (
  <motion.div whileHover={{ rotateZ: 360 }} transition={{ type: "spring" }}>
    <SiGraphql size={size} />
  </motion.div>
);

export const IApollo = ({ size }: IconsProps) => (
  <motion.div whileHover={{ rotateZ: -360 }} transition={{ type: "spring" }}>
    <SiApollographql size={size} />
  </motion.div>
);

export const IExpress = ({ size }: IconsProps) => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    transition={{ type: "spring", bounce: 0.6 }}
  >
    <SiExpress size={size} />
  </motion.div>
);

export const INodeJS = ({ size }: IconsProps) => (
  <motion.div whileHover={{ rotateZ: 360 }} transition={{ type: "spring" }}>
    <SiNodedotjs size={size} />
  </motion.div>
);

export const ITypescript = ({ size }: IconsProps) => {
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
