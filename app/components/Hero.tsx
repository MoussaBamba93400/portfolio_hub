import { PROFILE } from "../data";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.glow} aria-hidden />
      <div className={`container ${styles.content}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>Disponible pour de nouveaux projets</p>
        <h1 className={styles.title}>
          {PROFILE.title.split(" ").map((word, i) => (
            <span key={i} style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className={styles.tagline}>{PROFILE.tagline}</p>
        <div className={styles.actions}>
          <a href="#projects" className="btn btn-primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn-ghost">
            Me contacter
          </a>
        </div>
      </div>
      <a href="#about" className={styles.scroll} aria-label="Faire défiler">
        <span />
      </a>
    </section>
  );
}
