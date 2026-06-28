import { PROFILE } from "../data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          {PROFILE.name}
          <span className={styles.dot}>.</span>
        </a>
        <p className={styles.note}>
          © {new Date().getFullYear()} {PROFILE.fullName}. Conçu et développé avec
          Next.js.
        </p>
        <div className={styles.social}>
          <a href={`mailto:${PROFILE.email}`}>Email</a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
