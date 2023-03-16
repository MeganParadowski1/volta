import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

const GlitchVideo = dynamic(() => import("../components/GlitchVideo"), {
  ssr: false,
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const doneLoading = () => {
    setLoading(false);
  };
  return (
    <Layout>
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className={styles.loading}
          />
        )}
      </AnimatePresence>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img className="md:w-[600px] w-[300px]" src="/volta_white_logo.png" />
        <div className={styles.infoBlurb}>
          A dance theatre company directed by Megan Paradowski & Mamie Green
          <div className="flex mt-2">
            <a
              href="https://www.instagram.com/volta_collective/"
              target="_blank"
              className={styles.iconLink}
            >
              <img src="/insta-logo-white.png" className="h-[16px]" />
            </a>
            <a
              href="https://vimeo.com/voltacollective"
              target="_blank"
              className={styles.iconLink}
            >
              <img src="/vimeo-logo-white.png" className="h-[16px] ml-[10px]" />
            </a>
            <a
              href="mailto:info@voltacollective.com"
              className={styles.iconLink}
            >
              <img src="/email_icon_white.png" className="h-[16px] ml-[10px]" />
            </a>
          </div>
        </div>
      </div>
      <GlitchVideo doneLoading={doneLoading} />
      <div className={styles.videoOverlay} />
      <video
        style={{ display: "none" }}
        className="lazy"
        autoPlay
        muted
        loop
        playsInline
      >
        <source data-src="/IMG_8344.mp4" type="video/mp4" />
      </video>
      <video
        style={{ display: "none" }}
        className="lazy"
        autoPlay
        muted
        loop
        playsInline
      >
        <source data-src="/IMG_8344.mp4" type="video/mp4" />
      </video>
    </Layout>
  );
}
