import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Head>
        <title>VOLTA</title>
        <meta name="description" content="Volta Collective" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600;700;800&family=Montserrat:wght@200;300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      {children}
    </div>
  );
}
