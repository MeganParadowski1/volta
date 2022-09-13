import Portal from "./Portal";
import styles from "../styles/Popup.module.css";
import { useEffect, useState } from "react";

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
            <div className={styles.title}>
              VOLTA X Institute of Art and Olfaction: MILK
            </div>
            <div className={styles.text}>Nov 10-12, 2022</div>
            <div className={styles.subtext}>Institute of Art and Olfaction</div>
            <button
              style={{ width: 120, margin: "auto" }}
              onClick={() =>
                window.open("https://tickets.voltacollective.com", "_blank")
              }
              className={styles.ticketLink}
            >
              Buy Tickets
            </button>
          </div>
        </div>
      )}
    </Portal>
  );
}
