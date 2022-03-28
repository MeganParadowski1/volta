import Layout from "../components/Layout";
import styles from "../styles/Pitch.module.css";

export default function Pitch() {
  return (
    <Layout>
      <div className={styles.container}>
        <img className={styles.pitch} src="Mythology Pitch.png" />
        <div className={styles.subtext}>
          <a href="https://jeanettarich.cargo.site/About" target="_blank">
            More about Jeanetta Rich
          </a>
        </div>
      </div>
    </Layout>
  );
}
