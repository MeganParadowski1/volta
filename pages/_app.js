import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
  return <Component {...pageProps} />;
}

export default MyApp;
