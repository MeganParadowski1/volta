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
            <div className={styles.title}>VOLTA X Museum of Neon Art</div>
            <div className={styles.text}>March 3rd to 6th</div>
            <div className={styles.subtext}>
              An in-person, immersive performance in MONA's galleries
            </div>
            <button
              style={{ width: 120, margin: "auto" }}
              onClick={() =>
                window.open("https://www.inliquidlight.info", "_blank")
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
