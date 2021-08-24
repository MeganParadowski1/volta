import Clickable from "../components/Clickable";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.titleContainer}>
        <Clickable
          titleDiv={<div className={styles.title}>VOLTA</div>}
          popupDiv={<div className={styles.subtitle}>COLLECTIVE</div>}
        />
      </div>
    </Layout>
  );
}
