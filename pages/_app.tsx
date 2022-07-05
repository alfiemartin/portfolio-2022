import "../styles/globals.css";
import type { AppProps } from "next/app";
import PageTemplate from "../components/Foundations";
import React, { StrictMode, useContext, useEffect, useState } from "react";

interface GlobalContext {
  pageTitle: string;
  setPageTitle: React.Dispatch<React.SetStateAction<string>>;
  isDark: boolean | null;
  setIsDark: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const GlobalContext = React.createContext<GlobalContext | null>(null);
export const useGlobalContext = () => useContext(GlobalContext) as GlobalContext;

function MyApp({ Component, pageProps }: AppProps) {
  const [pageTitle, setPageTitle] = useState("Welcome");
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(localStorage.getItem("dark-mode") == "true");
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
      console.log("set true");
    } else if (isDark != null) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
      console.log("set false");
    }
  }, [isDark]);

  return (
    <StrictMode>
      <GlobalContext.Provider value={{ pageTitle, setPageTitle, isDark, setIsDark }}>
        <PageTemplate>
          <Component {...pageProps} />
        </PageTemplate>
      </GlobalContext.Provider>
    </StrictMode>
  );
}

export default MyApp;
