import { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Work.module.css";

export default function Work() {
  useEffect(() => {
    function loadVideo(video) {
      return new Promise((resolve) => {
        video.onloadeddata = () => {
          resolve(true);
          video.style.opacity = "100%";
        };
      });
    }

    const video1 = document.getElementById("frenzy");
    const video2 = document.getElementById("raptor");

    const videos = [video1, video2];
    videos.forEach((video) => {
      if (video.readyState === 4) {
        video.style.opacity = "100%";
      }
    });

    const promise1 = loadVideo(video1);
    const promise2 = loadVideo(video2);
    Promise.all([promise1, promise2]).then(() => {
      // Do something when they are both loaded
    });
  }, []);
  return (
    <Layout>
      <div className={styles.workMain}>
        <video
          id="frenzy"
          className={`${styles.video} ${styles.frenzy}`}
          src="/volta.mp4"
          autoPlay
          loop
          muted
          playsInline="False"
        />
        <video
          id="raptor"
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
