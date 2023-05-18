import "../styles/globals.css";
import type { AppProps } from "next/app";
import PageTemplate from "../components/Foundations";
import React, { StrictMode } from "react";
import GlobalContext from "../context/GlobalContext";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <StrictMode>
      <GlobalContext>
        <PageTemplate>
          <Component {...pageProps} />
        </PageTemplate>
      </GlobalContext>
    </StrictMode>
  );
}

export default MyApp;
