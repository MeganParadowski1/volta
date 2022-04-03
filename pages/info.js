import Footer from "../components/Footer";
import Layout from "../components/Layout";
import styles from "../styles/Info.module.css";

const quotes = [
  {
    text: "“… the cast of In Liquid Light demonstrated that their physical strength and choreography deserves to be seen.“",
    author: "- Jeff Slayton of LA Dance Chronicle",
  },
  {
    text: "“… the choreography and performance level … provided a deeper look into the excellent work one might see in the future from Volta Collective.”",
    author: "- Jeff Slayton of LA Dance Chronicle",
  },
  {
    text: "“It is very rare for artists to get to the core of something after a short period of time, and not only did you produce something that is aligned to the soul of our organization, you distilled it into  a powerful time and space based performance.”",
    author: "- Corrie Siegel of Museum of Neon Art",
  },
  {
    text: "“... TO THE INCREDIBLE VOLTA COLLECTIVE NEXT WAVE NARRATIVE DANCE GENIUSNESS“",
    author: "- Brian Lee Hughes of Gallery SADE",
  },
];

export default function Info() {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.infoMain}>
          <div className={styles.pageTitle}>About Volta</div>
          <div className={styles.infoText}>
            Directed by Mamie Green and Megan Paradowski, Volta fuses
            physicality, theatricality and multidisciplinary approaches to
            performance. Volta is passionate about presenting dance in
            accessible, nontraditional spaces, often collaborating with artists
            across mediums. Volta's work expresses the communal rage, wonder,
            and love that connects us all.
          </div>
        </div>
        <div className={styles.reviews}>
          <div className={styles.reviewTitle}>Recognition</div>
          {quotes.map((quote) => (
            <div>
              <div className={styles.line} />
              <div className={styles.quoteWrapper}>
                <div className={styles.quote}>{quote.text}</div>
                <div className={styles.credit}>{quote.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
