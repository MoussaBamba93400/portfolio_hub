"use client";

import { useState, type FormEvent } from "react";
import { PROFILE } from "../data";
import Reveal from "./Reveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Frontend-only : on ouvre le client mail pré-rempli puis on confirme.
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`);
    const bodyText = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${bodyText}`;
    setSent(true);
  };

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section className={styles.section} id="contact">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.left}>
          <p className="eyebrow">Contact</p>
          <h2 className={styles.heading}>Construisons quelque chose ensemble.</h2>
          <p className={styles.lead}>
            Une idée de projet, une opportunité, ou simplement envie d&apos;échanger ?
            Écrivez-moi, je réponds rapidement.
          </p>

          <ul className={styles.links}>
            <li>
              <span className={styles.linkLabel}>Email</span>
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            </li>
            <li>
              <span className={styles.linkLabel}>GitHub</span>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                Voir mon GitHub ↗
              </a>
            </li>
            <li>
              <span className={styles.linkLabel}>LinkedIn</span>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                Voir mon LinkedIn ↗
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal className={styles.right} delay={120}>
          {sent ? (
            <div className={styles.confirm} role="status">
              <span className={styles.check}>✓</span>
              <h3>Merci, {form.name || "à bientôt"} !</h3>
              <p>
                Votre client mail s&apos;est ouvert avec le message pré-rempli. Si rien
                ne s&apos;est passé, écrivez-moi directement à{" "}
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
              </p>
              <button className="btn btn-ghost" onClick={() => setSent(false)}>
                Nouveau message
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">Nom</label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  autoComplete="name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  autoComplete="email"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={update("message")}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Envoyer le message
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
