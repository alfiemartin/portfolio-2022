import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppTemplate from "../components/Foundations";
import React, { StrictMode } from "react";
import GlobalContext from "../context/GlobalContext";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <StrictMode>
      <GlobalContext>
        <AppTemplate>
          <Component {...pageProps} />
        </AppTemplate>
      </GlobalContext>
    </StrictMode>
  );
}

export default MyApp;
