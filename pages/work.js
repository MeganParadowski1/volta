import { PositionalAudio } from "three";
import Hoverable from "../components/Hoverable";
import Layout from "../components/Layout";
import styles from "../styles/Work.module.css";

export default function Work() {
  return (
    <Layout>
      <div className={styles.workMain}>
        <video
          className={`${styles.video} ${styles.frenzy}`}
          src="/volta.mp4"
          autoPlay
          loop
          muted
          playsInline="False"
        />
        <video
          className={`${styles.video} ${styles.raptor}`}
          src="/volta_cut_2.mp4"
          autoPlay
          loop
          muted
          playsInline="False"
        />
        <div className={styles.block}>
          <div className={styles.item}>
            <a href="https://vimeo.com/616193285" target="_blank">
              <div className={styles.workTitle}>"Frenzy"</div>
            </a>
            <div className={styles.workText}>
              Debuted in Sizzle! Dance & Film Online Festival
            </div>
          </div>
          <div className={styles.item}>
            <a href="https://vimeo.com/629671033" target="_blank">
              <div className={styles.workTitle}>VOLTA X teh Raptor</div>
              <div className={styles.workText}>
                Live at the Lash Social in Los Angeles
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
