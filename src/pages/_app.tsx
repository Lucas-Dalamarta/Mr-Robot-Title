import Head from "next/head";

import GlobalStyles from '../styles/globals'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>MR ROBOT TITLE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
