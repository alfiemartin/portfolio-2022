import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='en-GB' >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <meta name='description' content='Front end developer portfolio site. 2022 update.' />
        <link rel='icon' href='/error.ico' />
      </Head>
      <body className='bg-gray-200 dark:bg-gray-800 overflow-y-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document