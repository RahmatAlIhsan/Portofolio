"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PROJECTS } from './constants';
import styles from '../styles/ProjectsSection.module.css';

export function ProjectsSection() {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.projectsContainer}>
        
        <div className={styles.projectsHeader}>
          <h2 className={styles.projectsTitle}>Selected Projects</h2>
          <p className={styles.projectsDescription}>
            Real solutions. Real impact.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true }}
            >
              <div className={styles.projectInner}>
                {/* Content Kiri */}
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  
                  <p className={styles.projectDescription}>
                    {project.desc}
                  </p>

                  <div className={styles.projectTech}>
                    {project.tech.split(' • ').map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Image Kanan - UKURAN SAMA SEMUA */}
                {project.image && (
                  <div className={styles.projectImageRight}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={520}           // sama untuk semua
                      height={310}          // sama untuk semua
                      className={styles.projectImageContent}
                      priority={project.featured}
                      style={{ objectFit: 'cover' }}   // penting!
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}