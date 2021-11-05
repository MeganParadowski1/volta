import { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Work.module.css";

const works = [
  {
    title: '"BITE"',
    text1: "Live at Gallery Sade in Los Angeles",
    text2: "Choreographed and performed by Megan Paradowski and Mamie Green",
    text3: "Live music by Ariel Klevecz",
    vimeo: "https://vimeo.com/641693637",
    thumbnail: "Bite.png",
  },
  {
    title: '"Frenzy"',
    text1: "Debuted in Sizzle! Dance & Film Online Festival",
    text2: "Choreographed and performed by Megan Paradowski and Mamie Green",
    text3: "Shot by Ariel Klevecz",
    vimeo: "https://vimeo.com/616193285",
    thumbnail: "Frenzy.png",
  },
  {
    title: "VOLTA X teh Raptor",
    text1: "Live at the Lash Social in Los Angeles",
    text2:
      "Created and performed by Megan Paradowski, Mamie Green, and teh Raptor",
    text3: "Captured by audience members",
    vimeo: "https://vimeo.com/629671033",
    thumbnail: "Raptor.png",
  },
];

export default function Work() {
  return (
    <Layout>
      <div className={styles.title}>Featured works X VOLTA</div>

      <div className={styles.workMain}>
        <div className={styles.workBlock}>
          {works.map((work) => (
            <div className={styles.item}>
              <a href={work.vimeo} target="_blank">
                <img src={work.thumbnail} />
                <div className={styles.workTitle}>{work.title}</div>
                <div className={styles.workText}>{work.text1}</div>
                <div className={styles.workSubtext}>{work.text2}</div>
                <div className={styles.workSubtext}>{work.text3}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
