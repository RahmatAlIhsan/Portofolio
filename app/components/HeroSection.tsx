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

  const smoothImageY = useSpring(imageY, { stiffness: 60, damping: 25 });
  const smoothTextY = useSpring(textY, { stiffness: 70, damping: 30 });

  return (
    <section ref={heroRef} className={styles.heroSection}>
      <div className={styles.heroContainer}>
        
        {/* Left - Photo */}
        <div className={styles.photoSection}>
          <Image
            src="/xsann.png"
            alt="Rahmat Al Ihsan"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className={styles.photoImage}
          />
          <div className={styles.gradientOverlay} />
          <div className={styles.gradientOverlayBottom} />
        </div>

        {/* Right - Text */}
        <motion.div style={{ y: smoothTextY }} className={styles.textSection}>
          <div className={styles.textContent}>
            <h1 className={styles.heading}>
              Hi, I'm{" "}
              <span className={styles.gradient}>Rahmat</span>
            </h1>
            <p className={styles.subtitle}>Web Developer</p>

            <p className={styles.description}>
              Membantu bisnis dan individu memiliki website yang cepat, menarik, dan efektif untuk meningkatkan pengalaman pengguna dan performa digital.
            </p>

            <div className={styles.buttonContainer}>
              <a href="#projects" className={styles.primaryButton}>
                View Projects
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Let's Talk
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000, // 1 tahun
  },
};

export default nextConfig;