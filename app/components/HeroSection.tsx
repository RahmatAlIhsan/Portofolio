"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "../styles/HeroSection.module.css";

export function HeroSection() {
  const heroRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger entrance animation after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const smoothTextY = useSpring(textY, {
    stiffness: 70,
    damping: 30,
  });

  const socialLinks = [
    { icon: "bi bi-github", href: "https://github.com/rahmatAlIhsan", label: "GitHub" },
    { icon: "bi bi-linkedin", href: "https://linkedin.com/in/rahmat-al-ihsan", label: "LinkedIn" },
    { icon: "bi bi-instagram", href: "https://instagram.com/rahmat_alihsan", label: "Instagram" },
    { icon: "bi bi-envelope-fill", href: "mailto:rahmatalihsaan@gmail.com", label: "Email" },
    {
      href: "https://www.credly.com/users/rahmat-al-ihsan",
      label: "Credly",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12 L11 15 L16 9" />
          <path d="M9 12 L11 14 L15 10" opacity="0.4" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={heroRef} className={styles.heroSection}>
      <div className={styles.heroContainer}>
        
        {/* LEFT: IMAGE */}
        <motion.div
          className={styles.photoSection}
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.photoWrapper}>
            <Image
              src="/xsann.png"
              alt="Rahmat Al Ihsan"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.photoImage}
              style={{
                objectFit: "cover",
                objectPosition: "center 25%",
              }}
            />
          </div>
          <div className={styles.gradientOverlay} />
          <div className={styles.gradientOverlayBottom} />
        </motion.div>

        {/* RIGHT: TEXT */}
        <motion.div style={{ y: smoothTextY }} className={styles.textSection}>
          <div className={styles.textContent}>
            
            {/* Greeting Heading */}
            <motion.h1
              className={styles.heading}
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Hi, I&apos;m{" "}
              <span className={styles.gradient}>Rahmat</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Web Developer
            </motion.p>

            {/* Description */}
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Membantu bisnis dan individu memiliki website yang cepat, menarik,
              dan efektif untuk meningkatkan pengalaman pengguna dan performa
              digital.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className={styles.buttonContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <a href="#projects" className={styles.primaryButton}>
                <i className="bi bi-folder2-open"></i> View Projects
              </a>

              <a href="#contact" className={styles.secondaryButton}>
                <i className="bi bi-chat-dots"></i> Let&apos;s Talk
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0, y: 15 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.svg ? link.svg : <i className={link.icon}></i>}
                </a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className={styles.scrollIndicator}
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className={styles.scrollMouse}>
                <div className={styles.scrollWheel} />
              </div>
              <span>Scroll to explore</span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
