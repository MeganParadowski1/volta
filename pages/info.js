import Layout from "../components/Layout";
import styles from "../styles/Info.module.css";

export default function Info() {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.infoMain}>
          <div className={styles.pageTitle}>Hi, we're Volta</div>
          <div className={styles.infoText}>
            Directed by Mamie Green and Megan Paradowski, Volta fuses
            physicality, theatricality and multidisciplinary approaches to
            performance. Volta is passionate about presenting dance in
            accessible, nontraditional spaces, often collaborating with artists
            across mediums. Volta's work expresses the communal rage, wonder,
            and love that connects us all.
          </div>
        </div>
      </div>
    </Layout>
  );
}
