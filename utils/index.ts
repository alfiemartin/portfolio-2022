import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import { TailwindConfig } from "tailwindcss/tailwind-config";


export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const getBreakpoints = () => {
  const fullConfig = resolveConfig(tailwindConfig as TailwindConfig);
  return fullConfig.theme.screens as unknown as Record<string, string>;
};

export const getCurrentBreakpoint = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const screenWidth = window.innerWidth;
  const breakpoints = getBreakpoints();
  const breakpointNames = Object.keys(breakpoints);
  const breakpointValues = Object.values(breakpoints).map((val) => parseInt(val.split("px")[0]));

  if (screenWidth < breakpointValues[0]) {
    return "xs";
  }

  const currentBreakpointIndex = breakpointValues.findIndex((val) => screenWidth < val);
  return breakpointNames[currentBreakpointIndex - 1] as Breakpoint;
};
