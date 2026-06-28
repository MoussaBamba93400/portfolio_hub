import { PROFILE, SKILLS } from "../data";
import Reveal from "./Reveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.left}>
          <p className="eyebrow">À propos</p>
          <h2 className={styles.heading}>
            Ingénierie et design, <span>sous le même toit.</span>
          </h2>
        </Reveal>

        <div className={styles.right}>
          {PROFILE.about.map((para, i) => (
            <Reveal as="p" key={i} delay={i * 80} className={styles.para}>
              {para}
            </Reveal>
          ))}

          <Reveal className={styles.skills} delay={120}>
            <span className={styles.skillsLabel}>Technologies</span>
            <ul className={styles.badges}>
              {SKILLS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
