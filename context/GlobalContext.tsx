import React, { ReactNode, useContext, useEffect, useState } from "react";

interface IModal {
  show: boolean;
  render?: JSX.Element;
}

interface GlobalContext {
  pageTitle: string;
  setPageTitle: React.Dispatch<React.SetStateAction<string>>;
  isDark: boolean | null;
  setIsDark: React.Dispatch<React.SetStateAction<boolean | null>>;
  loadedSwiper: boolean | null;
  setLoadedSwiper: React.Dispatch<React.SetStateAction<boolean | null>>;
  modal: IModal;
  setModal: React.Dispatch<React.SetStateAction<IModal>>;
}

const _GlobalContext = React.createContext<GlobalContext | null>(null);

export const useGlobalContext = () =>
  useContext(_GlobalContext) as GlobalContext;

const GlobalContext = ({ children }: { children: ReactNode }) => {
  const [pageTitle, setPageTitle] = useState("Welcome");
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const [loadedSwiper, setLoadedSwiper] = useState<boolean | null>(null);
  const [modal, setModal] = useState<IModal>({ show: false, render: <></> });

  const state = {
    pageTitle,
    setPageTitle,
    isDark,
    setIsDark,
    loadedSwiper,
    setLoadedSwiper,
    modal,
    setModal
  };

  useEffect(() => {
    setIsDark(localStorage.getItem("dark-mode") == "true");
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else if (isDark != null) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [isDark]);


  return (
    <_GlobalContext.Provider value={state}>{children}</_GlobalContext.Provider>
  );
};

export default GlobalContext;
