import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

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
      {loading && (
        <div className={styles.loading}>
          <div className={styles.titleContainer}>
            <img className={styles.logo} src="/volta_white_logo.png" />
          </div>
        </div>
      )}
      <div className={styles.titleContainer}>
        <img className={styles.logo} src="/volta_white_logo.png" />
        <div className={styles.subtitle}>collective</div>
      </div>
      <GlitchVideo doneLoading={doneLoading} />
      <div className={styles.videoOverlay} />
    </Layout>
  );
}
