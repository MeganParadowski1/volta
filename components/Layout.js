import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Head>
        <title>VOLTA</title>
        <meta name="description" content="Volta Collective" />
        <link rel="icon" href="/favicon2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600;700;800&family=Montserrat:wght@200;300;400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="https://use.typekit.net/uyy5sgw.css" />
      </Head>
      <Nav />
      {children}
    </div>
  );
}
