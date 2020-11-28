import { AppProps } from 'next/app'
import Head from "next/head";

import GlobalStyles from '../styles/globals'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>MR ROBOT TITLE</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Mr Robot's title recreation in ReactJS"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
