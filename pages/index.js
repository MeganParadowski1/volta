import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

import dynamic from "next/dynamic";

const GlitchVideo = dynamic(() => import("../components/GlitchVideo"), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <div className={styles.titleContainer}>
        <img className={styles.logo} src="/volta_white_logo.png" />
        <div className={styles.subtitle}>collective</div>
      </div>
      <GlitchVideo />
      <div className={styles.videoOverlay} />
    </Layout>
  );
}
