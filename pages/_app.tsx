import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppTemplate from "../components/Foundations";
import React from "react";
import GlobalContext from "../context/GlobalContext";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <GlobalContext>
      <AppTemplate>
        <Component {...pageProps} />
      </AppTemplate>
    </GlobalContext>
  );
}

export default MyApp;
