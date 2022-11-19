import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://voltacollective.com"
        target="_blank"
        className={styles.footerItem}
      >
        <img className={styles.logo} src="/volta.png" />
      </a>
      <div className={styles.footerItem}>
        <div className="flex justify-center">
          <button>
            <a target="_blank" href="http://eepurl.com/hXmbYz">
              Join our mailing list
            </a>
          </button>
        </div>
      </div>
      <div className={styles.footerItem}>
        <div className="flex justify-end">
          <div className={styles.icons}>
            <a
              target="_blank"
              href="https://www.instagram.com/volta_collective/"
            >
              <img src="/insta-logo.png" />
            </a>
            <a target="_blank" href="https://vimeo.com/voltacollective">
              <img src="/vimeo-logo-black.png" />
            </a>
            <a href="mailto:info@voltacollective.com">
              <img src="/email_icon_black.png" />
            </a>
            <a target="_blank" href="https://voltacollective.com">
              <img src="/web-simple.jpeg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
