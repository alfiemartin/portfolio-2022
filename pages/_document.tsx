import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='en-GB' >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel='icon' href='/error.ico' />
        <meta name="title" content="Alfie Martin - Web Developer" />
        <meta name="description" content="Alfie's portfolio site, built using Next JS." />
        <meta name="keywords" content="web developer, software, sheffield, reactjs, react, typescript, javascript, portfolio, frontend developer, frontend, nextjs, node" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <body className='bg-slate-200 dark:bg-slate-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document