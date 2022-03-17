import Head from "next/head";
import React, { ReactNode } from "react";

const PageTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Alfie Martin - Web Developer</title>
        <meta name='description' content='Front end developer portfolio site. 2022 update.' />
        <link rel='icon' href='/error.ico' />
      </Head>
      {children}
    </>
  );
};

export default PageTemplate;
