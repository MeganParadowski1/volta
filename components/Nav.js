import Modal from "./Modal";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Popup from "./Popup";

const paths = {
  "/info": "02",
  "/work": "03",
};
const homePath = "/";

export default function Nav({ props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);
  const closePopup = () => setIsPopupOpen(false);

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
          <a href="https://vimeo.com/voltacollective" target="_blank">
            <img src="/vimeo-logo-white.png" className={styles.toprightImg} />
          </a>
        </div>
        <Modal open={isModalOpen} closeModal={closeModal} />
        {/* <Popup open={isPopupOpen} closePopup={closePopup} /> */}
      </div>
    );
  }

  return <div>{nav}</div>;
}
