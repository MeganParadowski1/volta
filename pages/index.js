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
      <div className={styles.infoBlurb}>
        A dance theatre company directed by Megan Paradowski & Mamie Green
      </div>
      <div className={styles.titleContainer}>
        <img className={styles.logo} src="/volta_white_logo.png" />
        <div className={styles.subtitle}>collective</div>
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
