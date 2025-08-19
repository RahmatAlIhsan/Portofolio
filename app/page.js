



"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

// Dummy data for timeline, portfolio, and skills
const timeline = [
  { year: "2023", desc: "Masuk Politeknik Negeri Lampung" },
  { year: "2024", desc: "Belajar" },
  { year: "2025", desc: "Belajar" },
  { year: "2026", desc: "Belajar" },
  { year: "2027", desc: "Lulus" },

];
const portfolio = [
  { img: "/globe.svg", title: "Aplikasi Web", desc: "Web apps modern & responsif" },
  { img: "/file.svg", title: "Sertifikat", desc: "Sertifikat kompetensi & pelatihan" },
  { img: "/window.svg", title: "MyJurnal", desc: "Hasil Riset dan Penelitian" },
];
const skills = [
  { img: "/python.svg", name: "Python" },
  { img: "/colab.svg", name: "Google Colab" },
  { img: "/javascript.svg", name: "JavaScript" },
  { img: "/django.svg", name: "Django" },
  { img: "/datascience.svg", name: "Data Science" },
  { img: "/ml.svg", name: "Machine Learning" },
];


function Section({ children, className = "", ...props }) {
  // Fade-in and slide-up on scroll
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  if (inView) controls.start({ opacity: 1, y: 0 });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  // Typewriter effect for intro
  // (CSS only, see .typewriter in globals.css)
  return (
  <main className="bg-white text-black min-h-screen w-full font-sans">
      {/* 1. Intro Section */}
  <Section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden parallax-bg px-4 sm:px-0" id="intro">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <svg width="100%" height="100%" className="absolute left-0 top-0" style={{zIndex:0}}>
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#eee" strokeWidth="1" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#eee" strokeWidth="1" />
          </svg>
        </div>
        <motion.h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold text-center typewriter relative z-10 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Rahmat Al Ihsan
        </motion.h1>
        <motion.p
          className="mt-6 text-base xs:text-lg sm:text-2xl font-light text-center max-w-xs xs:max-w-md sm:max-w-xl relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Mahasiswa IT, tapi nggak IT-IT banget.
        </motion.p>
      </Section>

      {/* 2. Foto Diri / Profil */}
  <Section className="min-h-screen flex flex-col justify-center items-center bg-white px-4 sm:px-0" id="profile">
        <motion.div
          className="rounded-full border-4 border-black w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 overflow-hidden shadow-xl grayscale-hover transition-all duration-500"
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image src="/xsann.svg" alt="Foto Diri" width={192} height={192} className="object-cover w-full h-full" />
        </motion.div>
        <div className="mt-6 text-lg xs:text-xl font-semibold text-center">Rahmat Al Ihsan</div>
      </Section>

      {/* 3. Tentang Saya / Journey Hidup */}
  <Section className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-0" id="about">
  <h2 className="text-2xl xs:text-3xl font-bold mb-8 sm:mb-10 font-title text-center">Journey Hidup</h2>
  <div className="relative w-full max-w-xs xs:max-w-md sm:max-w-xl mx-auto flex flex-col gap-8 sm:gap-12">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 timeline-line" />
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="relative flex items-center gap-8"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <div className="w-1/2 text-right pr-8">
                <div className="text-lg font-bold">{item.year}</div>
              </div>
              <div className="timeline-dot" />
              <div className="w-1/2 text-left pl-8">
                <div className="text-base font-light">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. Portofolio */}
  <Section className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-0" id="portfolio">
  <h2 className="text-2xl xs:text-3xl font-bold mb-8 sm:mb-10 font-title text-center">Portofolio</h2>
  <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-xs xs:max-w-2xl lg:max-w-5xl">
          {portfolio.map((item, i) => (
            <motion.div
              key={i}
              className="group bg-white border border-black rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-center p-6 cursor-pointer relative"
              whileHover={{ scale: 1.04, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden">
                <Image src={item.img} alt={item.title} width={80} height={80} className="object-contain" />
              </div>
              <div className="mt-4 text-xl font-bold text-black group-hover:underline transition-all">{item.title}</div>
              <div className="text-base text-gray-700 group-hover:text-black transition-all">{item.desc}</div>
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-80 flex items-center justify-center transition-all duration-300">
                <span className="text-white text-lg font-bold">Lihat Detail</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. Skill / Teknologi */}
  <Section className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-0" id="skills">
  <h2 className="text-2xl xs:text-3xl font-bold mb-8 sm:mb-10 font-title text-center">Skill & Teknologi</h2>
  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-8">
          {skills.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center"
              whileHover={{ rotateY: 180 }}
              style={{ perspective: 600 }}
              transition={{ duration: 0.7 }}
            >
              <Image src={item.img} alt={item.name} width={56} height={56} className="object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="mt-2 text-base font-semibold text-black">{item.name}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 6. Kontak */}
      <Section className="min-h-screen flex flex-col items-center justify-center bg-white" id="contact">
        <h2 className="text-3xl font-bold mb-10 font-title">Kontak</h2>
        <form className="w-full max-w-md flex flex-col gap-6 bg-white border border-black rounded-2xl shadow-xl p-8">
          <input type="text" placeholder="Nama" className="rounded-lg border border-black px-4 py-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all" />
          <input type="email" placeholder="Email" className="rounded-lg border border-black px-4 py-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all" />
          <textarea placeholder="Pesan" rows={4} className="rounded-lg border border-black px-4 py-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all" />
          <button type="submit" className="rounded-full bg-black text-white px-6 py-3 font-bold shadow-xl ripple transition-all hover:bg-white hover:text-black border border-black">
            Kirim Pesan
          </button>
        </form>
        <div className="flex gap-6 mt-8">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <svg width="32" height="32" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 7.43c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
          </a>
          <a href="mailto:rahmatalihsaan@gmail.com" className="hover:scale-110 transition-transform">
            <svg width="32" height="32" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5l-7-3.5-7 3.5"/></svg>
          </a>
        </div>
      </Section>
    </main>
  );
}
