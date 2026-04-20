"use client";
import styles from "../styles/AboutSection.module.css";

export function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>About Me</h2>

        <p className={styles.aboutText}>
          Nama saya Rahmat Al Ihsan. Saya berasal dari sebuah kota dingin di Lampung Barat. 
          Sejak kecil, saya sudah sangat terobsesi dengan teknologi, terutama dengan satu 
          pertanyaan besar yang terus menggelitik pikiran saya:{" "}
          <strong>“Bagaimana sebuah sistem dapat membantu kehidupan manusia?”</strong>
        </p>

        <p className={styles.aboutText}>
          Rasa penasaran itu membawa saya mendalami dunia pemrograman, pengembangan web, 
          Internet of Things (IoT), dan Artificial Intelligence. Bagi saya, teknologi bukan 
          hanya alat, melainkan medium untuk menciptakan solusi yang berdampak nyata bagi 
          masyarakat.
        </p>

        <blockquote className={styles.aboutQuote}>
          “Live with purpose, and you will know where you are going.”
          <span className={styles.quoteAuthor}>— Rahmat Al Ihsan</span>
        </blockquote>
      </div>
    </section>
  );
}