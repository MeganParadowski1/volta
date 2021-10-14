import Portal from "./Portal";
import styles from "../styles/Modal.module.css";
import { useEffect, useState } from "react";

export default function Modal({ open, closeModal }) {
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
        <>
          <div>
            <div
              className={`${styles.contactModal} ${animationStyle}`}
              onAnimationEnd={onAnimationEnd}
            >
              <div className={styles.exit} onClick={closeModal}>
                X
              </div>
              <div className={styles.modalTitle}>Say hello</div>
              <a href="mailto:info@voltacollective.com">
                <img className={styles.modalImg} src="/email_icon_blue.png" />
              </a>
            </div>
          </div>
          <div
            className={`${styles.contactModalBg} ${
              open ? styles.modalBgExpand : styles.modalBgRetract
            }`}
            onClick={closeModal}
          />
        </>
      )}
    </Portal>
  );
}
