import { PROJECTS } from "../data";
import Reveal from "./Reveal";
import ProjectMockup from "./ProjectMockup";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Projets sélectionnés</p>
          <h2 className={styles.heading}>Quatre produits, une exigence</h2>
          <p className={styles.intro}>
            Deux applications fullstack et deux sites vitrines, chacun déployé et
            fonctionnel de manière indépendante.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 2) * 100}
              className={styles.cardWrap}
            >
              <article
                className={styles.card}
                style={{ ["--card-accent" as string]: p.accent }}
              >
                <div className={styles.preview}>
                  <ProjectMockup slug={p.slug} />
                </div>

                <div className={styles.bodyArea}>
                  <div className={styles.cardHead}>
                    <h3 className={styles.name}>{p.name}</h3>
                    <span
                      className={`${styles.kind} ${
                        p.kind === "Fullstack" ? styles.kindFull : styles.kindVitrine
                      }`}
                    >
                      {p.kind === "Fullstack" ? "● " : "○ "}
                      {p.kind}
                    </span>
                  </div>

                  <p className={styles.desc}>{p.description}</p>

                  <ul className={styles.tags}>
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <div className={styles.actions}>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.primaryLink}
                    >
                      Voir le projet <span aria-hidden>→</span>
                    </a>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.repoLink}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
