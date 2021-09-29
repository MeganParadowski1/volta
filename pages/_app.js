import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

import "../styles/Info.module.css";
import "../styles/Work.module.css";

const pageVariants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    backgroundColor: "transparent",
    opacity: 1,
  },
  pageExit: {
    opacity: 0,
  },
};

const pageMotionProps = {
  initial: "pageInitial",
  animate: "pageAnimate",
  exit: "pageExit",
  variants: pageVariants,
};

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
      <AnimatePresence exitBeforeEnter>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0;"
          />
        </Head>
        <motion.div
          key={router.route}
          {...pageMotionProps}
          style={{ height: "100%" }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
