import "../styles/globals.css";
import type { AppProps } from "next/app";
import PageTemplate from "../components/Foundations";
import React, { StrictMode, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

type GlobalContext = {
  pageTitle: string;
  setPageTitle: React.Dispatch<React.SetStateAction<string>>;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};
const GlobalContext = React.createContext<GlobalContext | null>(null);
export const useGlobalContext = () => useContext(GlobalContext) as GlobalContext;

function MyApp({ Component, pageProps }: AppProps) {
  const [pageTitle, setPageTitle] = useState("Welcome");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(Cookies.get("dark-mode") === "true");
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");

      const longExpiryDate = new Date(new Date().getTime() * 2);
      Cookies.set("dark-mode", "true", { expires: longExpiryDate });
    } else {
      document.documentElement.classList.remove("dark");
      Cookies.remove("dark-mode");
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
