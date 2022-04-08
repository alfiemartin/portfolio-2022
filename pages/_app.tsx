import "../styles/globals.css";
import type { AppProps } from "next/app";
import PageTemplate from "../components/Foundations";
import React, { useContext, useState } from "react";
import Cookies from "js-cookie";

type GlobalContext = {
  pageTitle?: string;
  setPageTitle?: React.Dispatch<React.SetStateAction<string>>;
};
const GlobalContext = React.createContext<GlobalContext>({});
export const useGlobalContext = () => useContext(GlobalContext);

function MyApp({ Component, pageProps }: AppProps) {
  const [pageTitle, setPageTitle] = useState("Welcome");
  const [isDark, setIsDark] = useState(Cookies.get("dark-mode") === "true" ? true : false);

  return (
    <GlobalContext.Provider value={{ pageTitle, setPageTitle }}>
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </GlobalContext.Provider>
  );
}

export default MyApp;
