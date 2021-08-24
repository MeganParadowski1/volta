import Clickable from "./Clickable";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Nav.module.css";

export default function Nav({ props }) {
  var popup = (
    <div className={styles.hovertext}>
      <div className={styles.hoveritem}>Say hello :-)</div>
      <a className={styles.hoveritem} href="mailto:volta@email.com">
        volta@email.com
      </a>
      <a
        className={styles.hoveritem}
        href="http://instagram.com"
        target="_blank"
      >
        Instagram
      </a>
    </div>
  );

  return (
    <div className={styles.nav}>
      <Link href="/">
        <a className={styles.navitem}>Home</a>
      </Link>
      <Link href="/info">
        <a className={styles.navitem}>Info</a>
      </Link>
      <Link href="/work">
        <a className={styles.navitem}>Work</a>
      </Link>
      <Clickable
        titleDiv={<div className={styles.navitem}>Connect</div>}
        popupDiv={popup}
      />
    </div>
  );
}
