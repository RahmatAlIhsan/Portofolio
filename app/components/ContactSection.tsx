"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/ContactSection.module.css";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const dataToSend = {
      ...formData,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_j5avv7f",
        "template_e56l2oj",
        dataToSend,
        "_EvNuoztkNhueGKbE"
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email Error:", error);
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setSubmitted(false), 3000);
      });
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Let's Build Something Great</h2>

        <p className={styles.contactDescription}>
          Open for freelance, collaborations, and full-time opportunities.
        </p>

        <form onSubmit={handleFormSubmit} className={styles.contactForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.formInput}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={styles.formInput}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={styles.formTextarea}
            required
          />

          <button type="submit" className={styles.submitButton}>
            {loading
              ? "Sending..."
              : submitted
              ? "Message Sent ✓"
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}