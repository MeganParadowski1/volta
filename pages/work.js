import { PositionalAudio } from "three";
import Hoverable from "../components/Hoverable";
import Layout from "../components/Layout";
import styles from "../styles/Work.module.css";

export default function Work() {
  return (
    <Layout>
      <div className={styles.workMain}>
        <div className={styles.frenzy}>
          <div className={styles.workTitle}>"Frenzy"</div>
          <div className={styles.workText}>
            Choreographed and performed by Mamie Green and Megan Paradowski
          </div>
          <div className={styles.workText}>Shot by Ariel Klevecz</div>
          <div className={styles.workText}>
            Debuted in Sizzle! Dance & Film Online Festival
          </div>
          <a href="https://vimeo.com/589567244">
            <img className={styles.vimeoLogo} src="/vimeo-logo-green.png" />
          </a>
        </div>
      </div>
    </Layout>
  );
}
