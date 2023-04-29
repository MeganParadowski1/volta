import styles from "../styles/Footer.module.css";

export default function FooterWhite() {
  return (
    <footer className={`${styles.footer} relative`}>
      <div className={styles.footerItem}>
        <button className="!text-black !bg-white !outline-white">
          <a target="_blank" href="http://eepurl.com/hXmbYz">
            Join our mailing list
          </a>
        </button>
      </div>
      <div className={styles.footerItem}>
        <div className="flex justify-end">
          <div className={styles.icons}>
            <a
              target="_blank"
              href="https://www.instagram.com/volta_collective/"
            >
              <img src="/insta-logo-white.png" />
            </a>
            <a target="_blank" href="https://vimeo.com/voltacollective">
              <img src="/vimeo-logo-white.png" />
            </a>
            <a href="mailto:info@voltacollective.com">
              <img src="/email_icon_white.png" />
            </a>
            <a target="_blank" href="https://voltacollective.com">
              <img src="/web-simple-white.png" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
