import Layout from "../components/Layout";
import styles from "../styles/Layout.module.css";

export default function Info() {
  return (
    <Layout>
      <h1 className={styles.subtitle}>Hi. We're Volta.</h1>
      <div>Mamie and Meg met in LA and blah blah blah</div>
    </Layout>
  );
}
