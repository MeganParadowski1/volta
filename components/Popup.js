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
            <div className={styles.title}>VOLTA X Peter Kalisch: Backwash</div>
            <div className={styles.text}>June 12</div>
            <div className={styles.subtext}>Navel LA</div>
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
