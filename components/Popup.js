import Portal from "./Portal";
import styles from "../styles/Popup.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

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
        <div>
          <div
            className={`${styles.popup} ${animationStyle}`}
            onAnimationEnd={onAnimationEnd}
          >
            <div className={styles.exit} onClick={closePopup}>
              X
            </div>
            <div className="accentFont uppercase text-center text-5xl pb-4">
              Volta Co-Lab
            </div>
            <div className="pb-4 text-sm">
              A workshop series that celebrates inclusive and innovative
              dance-making.
            </div>
            <div className="pb-6 text-sm">
              Saturday, January 14th | 12-4pm |{" "}
              <div className="inline underline underline-offset-4 decoration-1">
                <a href="https://brockusprojectdance.org/space" target="_blank">
                  Brockus Dance Project
                </a>
              </div>{" "}
              | Sliding scale $25-50
            </div>
            <div>
              <Link href="co-lab">
                <button className="buttonSecondary">More</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
}
