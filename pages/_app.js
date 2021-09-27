import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.asPath;
  useEffect(() => {
    if (path == "/") {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [path]);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0;"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
