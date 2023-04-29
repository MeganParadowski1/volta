import Portal from "./Portal";
import styles from "../styles/Popup.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Popup({ open, closePopup }) {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    if (open) {
      setDisplay(true);
    }
  }, [open]);

  const animationStyle = open ? styles.modalExpand : styles.modalRetract;

  const onAnimationEnd = () => !open && setDisplay(false);

  return (
    <Portal selector="#modal">
      {display && (
        <div className="text-white">
          <div
            className={`${styles.popup} ${animationStyle}`}
            onAnimationEnd={onAnimationEnd}
          >
            <div className={styles.exit} onClick={closePopup}>
              X
            </div>
            <div className="accentFont uppercase text-center text-6xl pb-4">
              SALT
            </div>
            <Image
              className="brightness-75 z-[-1] rounded-[30px]"
              src="/salt.jpg"
              layout="fill"
              objectFit="cover"
              priority
            />
            {/* <div className="pb-4 text-sm">
              Witness a woman's unraveling and choose a side.
            </div> */}
            <div className="pb-6 text-sm z-10">
              <div>June 11th at 4pm, 12th and 13th at 7pm</div>
              <div className="inline underline underline-offset-4 decoration-1">
                <a href="https://www.2220arts.org/" target="_blank">
                  2220 Arts + Archives
                </a>
              </div>
            </div>
            <div className="z-10">
              <Link href="salt">
                <button className="buttonTertiary !text-black !bg-white !outline-white">
                  Info & Tickets
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
}
