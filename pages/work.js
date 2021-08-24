import Hoverable from "../components/Hoverable";
import Layout from "../components/Layout";
import styles from "../styles/Layout.module.css";

export default function Work() {
  return (
    <Layout>
      <h1 className={styles.subtitle}>Work</h1>
      <Hoverable titleDiv={<img></img>} popupDiv={<div>This is the work page :)</div>}></Hoverable>
    </Layout>
  );
}
