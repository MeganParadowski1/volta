import Modal from "./Modal";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Popup from "./Popup";

const paths = {
  "/info": "01",
  "/work": "02",
  "/press": "03",
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
      <div className="absolute md:p-[3rem] p-[2rem] flex w-full">
        <Link href="/">
          <img className="h-[20px] cursor-pointer" src="/volta.png" />
        </Link>
        <div className="w-full flex justify-end items-center md:text-base text-xs">
          <Link href="/info">About</Link>
          <div className="md:pl-4 pl-2">
            <Link href="/work">Work</Link>
          </div>
          <div className="md:pl-4 pl-2">
            <Link href="/press">Press</Link>
          </div>
          <div className="md:pl-4 pl-2">
            <Link href="/co-lab">Teaching</Link>
          </div>
        </div>
      </div>
    );
  } else {
    var nav = (
      <div className={styles.nav}>
        <div className={`${styles.topleft} ${styles.navbg}`}>01</div>
        <div className={styles.topleft}>
          {/* <div className={styles.topleft} onClick={() => setIsModalOpen(true)}> */}
          <Link href="/info">About</Link>
        </div>
        <div className={`${styles.bottomleft} ${styles.navbg}`}>02</div>
        <Link href="/work">
          <a className={styles.bottomleft}>Work</a>
        </Link>
        <div className={`${styles.bottomright} ${styles.navbg}`}>03</div>
        <Link href="/press">
          <a className={styles.bottomright}>Press</a>
        </Link>
        <div className={`${styles.topright} ${styles.navbg}`}>04</div>
        <Link href="/co-lab">
          <a className={styles.topright}>Teaching</a>
        </Link>
        <Modal open={isModalOpen} closeModal={closeModal} />
        {/* <Popup open={isPopupOpen} closePopup={closePopup} /> */}
      </div>
    );
  }

  return <div>{nav}</div>;
}
