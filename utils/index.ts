import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const getTheme = () => {
  const fullConfig = resolveConfig(tailwindConfig as any);
  return fullConfig.theme as any
}

export const getBreakpoints = () => {
  return getTheme().screens as unknown as Record<string, string>;
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
