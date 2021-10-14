import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

const GlitchVideo = dynamic(() => import("../components/GlitchVideo"), {
  ssr: false,
});

let firstLoad = true;
export default function Home() {
  const [loading, setLoading] = useState(true);
  const doneLoading = () => {
    if (firstLoad) {
      setLoading(false);
      firstLoad = false;
    }
  };
  return (
    <Layout>
      <AnimatePresence>
        {loading && firstLoad && (
          <motion.div
            // initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className={styles.loading}
          >
            <div className={styles.titleContainer}>
              <img className={styles.logo} src="/volta_white_logo.png" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.titleContainer}>
        <img className={styles.logo} src="/volta_white_logo.png" />
        <div className={styles.subtitle}>collective</div>
      </div>
      <GlitchVideo doneLoading={doneLoading} />
      <div className={styles.videoOverlay} />
      <video
        className={`${styles.video} ${styles.frenzy}`}
        id="frenzy"
        src="/volta.mp4"
        autoPlay
        loop
        muted
        playsInline="False"
        style={{ display: "none" }}
      />
      <video
        className={`${styles.video} ${styles.raptor}`}
        id="raptor"
        src="/volta_cut_2.mp4"
        autoPlay
        loop
        muted
        playsInline="False"
        style={{ display: "none" }}
      />
    </Layout>
  );
}
