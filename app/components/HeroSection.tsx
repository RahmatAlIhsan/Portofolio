"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import styles from "../styles/HeroSection.module.css";

export function HeroSection() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const smoothTextY = useSpring(textY, {
    stiffness: 70,
    damping: 30,
  });

  return (
    <section ref={heroRef} className={styles.heroSection}>
      <div className={styles.heroContainer}>
        
        {/* LEFT: IMAGE */}
        <div className={styles.photoSection}>
          <Image
            src="/xsann.png"
            alt="Rahmat Al Ihsan"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={styles.photoImage}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className={styles.gradientOverlay} />
          <div className={styles.gradientOverlayBottom} />
        </div>

        {/* RIGHT: TEXT */}
        <motion.div style={{ y: smoothTextY }} className={styles.textSection}>
          <div className={styles.textContent}>
            
            <h1 className={styles.heading}>
              I&apos;m{" "}
              <span className={styles.gradient}>Rahmat</span>
            </h1>

            <p className={styles.subtitle}>Web Developer</p>

            <p className={styles.description}>
              Membantu bisnis dan individu memiliki website yang cepat, menarik,
              dan efektif untuk meningkatkan pengalaman pengguna dan performa
              digital.
            </p>

            <div className={styles.buttonContainer}>
              <a href="#projects" className={styles.primaryButton}>
                View Projects
              </a>

              <a href="#contact" className={styles.secondaryButton}>
                Let&apos;s Talk
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}