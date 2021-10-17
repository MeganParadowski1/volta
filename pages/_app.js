import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    // backgroundColor: "transparent",
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
  useEffect(() => {
    Array.from(
      document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')
    ).forEach((node) => {
      node.removeAttribute("data-n-p");
    });
    const mutationHandler = (mutations) => {
      mutations.forEach(({ target }) => {
        if (target.nodeName === "STYLE") {
          if (target.getAttribute("media") === "x") {
            target.removeAttribute("media");
          }
        }
      });
    };
    const observer = new MutationObserver(mutationHandler);
    observer.observe(document.head, {
      subtree: true,
      attributeFilter: ["media"],
    });
    return () => {
      observer.disconnect();
    };
  }, []);
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
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>{" "}
      <AnimatePresence exitBeforeEnter>
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
