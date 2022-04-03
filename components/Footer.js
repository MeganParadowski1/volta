import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerColumn}>
        <div className={styles.footerTitle}>Connect</div>
        <div className={styles.footerLink}>
          <a target="_blank" href="https://www.instagram.com/volta_collective/">
            Instagram
          </a>
        </div>
        <div className={styles.footerLink}>
          <a target="_blank" href="https://vimeo.com/voltacollective">
            Vimeo
          </a>
        </div>
        <div className={styles.footerLink}>
          <a target="_blank" href="mailto:info@voltacollective.com">
            Email
          </a>
        </div>
      </div>
      <div className={styles.footerColumn}>
        <div className={styles.buttonWrapper}>
          <button>
            <a target="_blank" href="http://eepurl.com/hXmbYz">
              Join our mailing list
            </a>
          </button>
        </div>
      </div>
      <div className={styles.footerColumn}></div>
    </div>
  );
}
