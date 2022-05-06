import { useEffect } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import styles from "../styles/Work.module.css";

const works = [
  {
    title: '"In Liquid Light"',
    text1: "Live at the Museum of Modern Art in Los Angeles",
    text2:
      "Choreography by Mamie Green and Megan Paradowski, in collaboration with the dancers",
    text3: "",
    vimeo: "https://vimeo.com/689043359",
    thumbnail: "ILL.png",
  },
  {
    title: '"BITE"',
    text1: "Live at Gallery Sade in Los Angeles",
    text2: "Choreographed and performed by Mamie Green and Megan Paradowski",
    text3: "Live music by Ariel Klevecz",
    vimeo: "https://vimeo.com/641693637",
    thumbnail: "Bite.png",
  },
  {
    title: '"Frenzy"',
    text1: "Debuted in Sizzle! Dance & Film Online Festival",
    text2: "Choreographed and performed by Mamie Green and Megan Paradowski",
    text3: "Shot by Ariel Klevecz",
    vimeo: "https://vimeo.com/616193285",
    thumbnail: "Frenzy.png",
  },
  {
    title: "VOLTA X teh Raptor",
    text1: "Live at the Lash Social in Los Angeles",
    text2:
      "Created and performed by Mamie Green, Megan Paradowski, and teh Raptor",
    text3: "Captured by audience members",
    vimeo: "https://vimeo.com/629671033",
    thumbnail: "Raptor.png",
  },
  {
    title: '"MILIEU"',
    text1: "Live at the Lash Social in Los Angeles",
    text2:
      "Created and performed by Mamie Green and Megan Paradowski with sound by teh Raptor",
    text3: "Captured by Brenton Cooper",
    vimeo: "https://vimeo.com/658669181",
    thumbnail: "Milieu.png",
  },
  {
    title: "",
    text1: "",
    text2: "",
    text3: "",
    vimeo: "",
    thumbnail: "",
  },
];

export default function Work() {
  return (
    <Layout>
      <div className={styles.title}>Upcoming</div>
      <div className={styles.workMain}>
        <div className={styles.workBlock}>
          <div className={styles.item}>
            <a href="" target="_blank">
              <img src="/backwash.png" />
              <div className={styles.workTitle}>Backwash</div>
              <div className={styles.workText}>June 12, 8PM</div>
              <div className={styles.workText}>Navel LA</div>
              <a
                href="http://tickets.voltacollective.com"
                target="_blank"
                style={{ color: "red", marginTop: "10px" }}
              >
                BUY TICKETS
              </a>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.title}>Featured Works</div>
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
      <Footer />
    </Layout>
  );
}
