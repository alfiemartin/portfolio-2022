import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import { TailwindConfig } from "tailwindcss/tailwind-config";


const fullConfig = resolveConfig(tailwindConfig as TailwindConfig);

export const getBreakpoints = () => {
    return fullConfig.theme.screens as unknown;
}

export const getCurrentBreakpoint = () => {
    const screenWidth = window.innerWidth;
    const breakpoints = getBreakpoints() as Record<string, string>;

    return breakpoints;
}