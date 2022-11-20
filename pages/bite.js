import Footer from "../components/Footer";
import Layout from "../components/Layout";
import styles from "../styles/Pitch.module.css";

export default function Bite() {
  return (
    <Layout>
      <div className={styles.container}>
        <img className={styles.pitch} src="BiteII.jpg" />
      </div>
      <Footer />
    </Layout>
  );
}
