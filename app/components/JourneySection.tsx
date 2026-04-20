"use client";
import { motion } from 'framer-motion';
import { JOURNEY } from './constants';
import styles from '../styles/JourneySection.module.css';

export function JourneySection() {
  return (
    <section className={styles.journeySection} id="journey">
      <div className={styles.journeyContainer}>
        
        <div className={styles.journeyHeader}>
          <motion.h2 
            className={styles.journeyTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.h2>
        </div>

        <div className={styles.journeyTimeline}>
          {JOURNEY.map((item, index) => (
            <motion.div
              key={item.year}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={styles.timelineYear}>{item.year}</div>

              <div className={styles.timelineContent}>
                <h3 className={styles.timelineItemTitle}>{item.title}</h3>
                <p className={styles.timelineItemDesc}>{item.desc}</p>
                <span className={styles.timelineItemCategory}>{item.category}</span>
              </div>

              <div className={styles.timelineDot} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}