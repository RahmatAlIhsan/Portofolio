"use client";
import styles from "../styles/SkillsSection.module.css";

export function SkillsSection() {
  const skills = [
    {
      icon: "bi bi-code-slash",
      name: "Programming",
      desc: "JavaScript, TypeScript, Python, PHP",
    },
    {
      icon: "bi bi-globe",
      name: "Web Development",
      desc: "React, Next.js, Tailwind CSS",
    },
    {
      icon: "bi bi-cpu",
      name: "Internet of Things",
      desc: "Arduino, ESP32, MQTT, Sensor",
    },
    {
      icon: "bi bi-robot",
      name: "Artificial Intelligence",
      desc: "Machine Learning, TensorFlow",
    },
    {
      icon: "bi bi-gear",
      name: "Automation",
      desc: "CI/CD, GitHub Actions, Workflow Automation",
    },
    {
      icon: "bi bi-shield-lock",
      name: "Security",
      desc: "Web Security, JWT, OAuth, Basic Pentesting",
    },
    {
      icon: "bi bi-git",
      name: "Version Control",
      desc: "Git & GitHub",
    },
    {
      icon: "bi bi-tools",
      name: "Tools & Others",
      desc: "Figma, Docker, Linux, Firebase",
    },
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.skillsContainer}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <i className={`${skill.icon} ${styles.skillIcon}`}></i>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <p className={styles.skillDesc}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}