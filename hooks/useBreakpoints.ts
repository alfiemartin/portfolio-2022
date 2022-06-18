import { useState, useEffect } from "react";
import { Breakpoint, getCurrentBreakpoint } from "../utils";

export const useBreakpoints = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>();

  const updateBreakpoints = () => {
    setCurrentBreakpoint(getCurrentBreakpoint());
  };

  useEffect(() => {
    updateBreakpoints();

    window.addEventListener("resize", updateBreakpoints);
    return () => window.removeEventListener("resize", updateBreakpoints);
  }, []);

  return currentBreakpoint;
};
