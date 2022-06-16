import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function NextTwApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS with TailwindCSS starter</title>
        <meta name="description" content="NextJS with TailwindCSS starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default NextTwApp;
