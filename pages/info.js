import Hoverable from "../components/Hoverable";
import Layout from "../components/Layout";
import styles from "../styles/Info.module.css";

export default function Info() {
  return (
    <Layout>
      <div className={styles.infoMain}>
        <div className={styles.pageTitle}>Hi, we're Volta</div>
        <div className={styles.infoText}>
          Directed by Mamie Green and Megan Paradowski, Volta is a dance theatre
          company that aims to fuse physicality, theatricality and a
          multidisciplinary approach to creation and performance. We have been
          deeply shaped and inspired by dance artists we have worked with who
          use theatricality, improvisation, and break the boundaries of
          contemporary dance. Our mentors include Pascal Merighi, Lisi Estaras,
          Shannon Gillen, Johannes Wieland, and Alex Ketley who all use
          multidisciplinary approaches to dance that have inspired and informed
          Mamie and Megan’s current practice.
        </div>
        <img className={styles.photo} />
      </div>
    </Layout>
  );
}
