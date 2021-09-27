import Modal from "./Modal";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";

const paths = {
  "/info": "02",
  "/work": "03",
};
const homePath = "/";

export default function Nav({ props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  var popup = (
    <div className={styles.hovertext}>
      <div className={styles.hoveritem}>Say hello :-)</div>
      <a className={styles.hoveritem} href="mailto:volta@email.com">
        volta@email.com
      </a>
    </div>
  );

  const router = useRouter();
  let path = router.asPath;
  const showAlternateNav = path !== homePath;
  if (showAlternateNav) {
    var nav = (
      <div className={styles.nav}>
        <div className={`${styles.topright} ${styles.navbg}`}>
          {paths[path]}
        </div>
        <Link href="/">
          <a className={`${styles.topleft} ${styles.alternateNav}`}>Home</a>
        </Link>
      </div>
    );
  } else {
    var nav = (
      <div className={styles.nav}>
        <div className={`${styles.topleft} ${styles.navbg}`}>01</div>
        <div className={styles.topleft} onClick={() => setIsModalOpen(true)}>
          Connect
        </div>
        <div className={`${styles.bottomleft} ${styles.navbg}`}>02</div>
        <Link href="/info">
          <a className={styles.bottomleft}>Info</a>
        </Link>
        <div className={`${styles.bottomright} ${styles.navbg}`}>03</div>
        <Link href="/work">
          <a className={styles.bottomright}>Work</a>
        </Link>
        <div className={styles.topright}>
          <a href="https://www.instagram.com/volta_collective/" target="_blank">
            <img src="/insta-logo-white.png" className={styles.toprightImg} />
          </a>
          <a href="https://vimeo.com/589567244" target="_blank">
            <img src="/vimeo-logo-white.png" className={styles.toprightImg} />
          </a>
        </div>
        <Modal open={isModalOpen} closeModal={closeModal} />
      </div>
    );
  }

  return <div>{nav}</div>;
}
