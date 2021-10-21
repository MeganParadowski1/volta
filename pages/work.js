import { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Work.module.css";

const works = [
  {
    title: '"Frenzy"',
    text: "Debuted in Sizzle! Dance & Film Online Festival",
    vimeo: "https://vimeo.com/616193285",
  },
  {
    title: "VOLTA X teh Raptor",
    text: "Live at the Lash Social in Los Angeles",
    vimeo: "https://vimeo.com/629671033",
  },
  {
    title: '"Bite"',
    text: "Live at Gallery Sade in Los Angeles",
    vimeo: "https://vimeo.com/voltacollective",
  },
];

export default function Work() {
  // useEffect(() => {
  //   function loadVideo(video) {
  //     return new Promise((resolve) => {
  //       video.onloadeddata = () => {
  //         resolve(true);
  //         video.style.opacity = "100%";
  //       };
  //     });
  //   }

  //   const video1 = document.getElementById("frenzy");
  //   const video2 = document.getElementById("raptor");
  //   const video3 = document.getElementById("bite");

  //   const videos = [video1, video2, video3];
  //   videos.forEach((video) => {
  //     if (video.readyState === 4) {
  //       video.style.opacity = "60%";
  //     }
  //   });

  //   const promise1 = loadVideo(video1);
  //   const promise2 = loadVideo(video2);
  //   const promise3 = loadVideo(video3);
  //   Promise.all([promise1, promise2, promise3]).then(() => {
  //     // Do something when they are all loaded
  //   });
  // }, []);
  return (
    <Layout>
      <div className={styles.workMain}>
        {/* <div className={styles.videoOverlay} />
        <img
          id="bite"
          className={`${styles.img} ${styles.bite}`}
          src="/photo-37.jpg"
        />
        <img
          id="frenzy"
          className={`${styles.img} ${styles.frenzy}`}
          src="/frenzy2.png"
        />
        <img
          id="raptor"
          className={`${styles.img} ${styles.raptor}`}
          src="/voltaxraptor.jpg"
        /> */}
        <div className={styles.block}>
          {works.map((work) => (
            <div className={styles.item}>
              <a href={work.vimeo} target="_blank">
                <div className={styles.workTitle}>{work.title}</div>
              </a>
              <div className={styles.workText}>{work.text}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
