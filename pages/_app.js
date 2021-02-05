import "tailwindcss/tailwind.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <meta charSet="utf-8" />
  <link rel="manifest" href="/manifest.json" />
    <meta name="viewpoint" content="width=device-width, initial-scale=1"></meta>
    <link rel="apple-touch-icon" href="/icon.png"></link>
    <meta name="theme-color" content="#2563EB" />
    <meta name="background-color" content="#ffffff" />
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
