import Hoverable from "../components/Hoverable";
import Layout from "../components/Layout";
import styles from "../styles/Info.module.css";

export default function Info() {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.infoMain}>
          <div className={styles.pageTitle}>Hi, we're Volta</div>
          <div className={styles.infoText}>
            Directed by Mamie Green and Megan Paradowski, Volta is a dance
            theatre company that aims to fuse physicality, theatricality and a
            multidisciplinary approach to creation and performance. Both Mamie
            and Megan believe that the body is the most honest and singular mode
            of communication and expression. We believe that by using the body,
            we can take the experience of being human and convey these shared
            feelings to an audience. For Volta, art is a means of communication;
            communal anger, joy, fear, and love that connects us all.
          </div>
        </div>
      </div>
    </Layout>
  );
}
