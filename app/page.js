
"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Draggable dark mode toggle
import { useEffect } from "react";

// Dummy data for timeline, portfolio, and skills
const timeline = [
  { year: "2023", desc: "The beginning of the journey, laying strong foundations." },
  { year: "2024", desc: "A year of exploration, learning, and adaptation." },
  { year: "2025", desc: "Growth and expansion with new opportunities." },
  { year: "2026", desc: "Innovation and transformation through creativity and technology." },
  { year: "2027", desc: "Achievement and sustainability, shaping a strong future." },
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
  const [darkMode, setDarkMode] = useState(false);
  const [openYear, setOpenYear] = useState(null);
  // Draggable toggle
  const [togglePos, setTogglePos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const toggleRef = useRef(null);
  useEffect(() => {
    function onMouseMove(e) {
      if (!dragging) return;
      setTogglePos(pos => ({ x: pos.x + e.movementX, y: pos.y + e.movementY }));
    }
    function onMouseUp() { setDragging(false); }
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging]);
  return (
    <main className={`min-h-screen w-full font-sans transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}> 
      {/* Draggable dark mode toggle */}
      <div
        ref={toggleRef}
        style={{ position: 'fixed', top: 16 + togglePos.y, right: 16 - togglePos.x, zIndex: 100, cursor: dragging ? 'grabbing' : 'grab', userSelect: 'none' }}
        onMouseDown={() => setDragging(true)}
        aria-label="Toggle dark mode"
        tabIndex={0}
        role="button"
        onClick={() => setDarkMode(d => !d)}
      >
        <div className={`w-12 h-12 flex items-center justify-center rounded-full border shadow transition-colors ${darkMode ? 'border-white bg-black' : 'border-black bg-white'}`}
          title={darkMode ? 'Light Mode' : 'Dark Mode'}>
          {darkMode ? (
            // Sun icon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
          ) : (
            // Moon icon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
          )}
        </div>
      </div>
      {/* Hero Section */}
  <section className={`${darkMode ? 'bg-black' : 'bg-white'} min-h-screen flex flex-col justify-center`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center py-16 px-4 gap-10">
          {/* Kiri: Foto */}
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-1/2">
            <img
              src="/xsann.svg"
              alt="Foto Rahmat"
              className="rounded-full border-4 border-black w-64 h-64 object-cover shadow-xl"
            />
          </div>
          {/* Kanan: Teks */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className={`text-3xl sm:text-5xl font-extrabold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Rahmat Al Ihsan</h1>
            <h2 className={`text-lg sm:text-xl font-medium mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
              Mahasiswa Teknologi Rekayasa Internet | Politeknik Negeri Lampung
            </h2>
            <p className={`text-base sm:text-lg max-w-xl transition-colors ${darkMode ? 'text-gray-200 hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`}>
              Saya berasal dari kota dingin di Lampung Barat. Seorang mahasiswa yang senang untuk belajar dan berkembang di dunia teknologi. Ketertarikan saya mencakup pemrograman, Web Developer, Internet Of Things, serta pengembangan kecerdasan buatan. Saya percaya bahwa teknologi dapat membantu menyelesaikan banyak tantangan di sekitar kita.
            </p>
            <p className={`mt-4 text-xs italic border-l-4 pl-3 font-serif ${darkMode ? 'text-gray-400 border-white' : 'text-gray-500 border-black'}`}>"sesuatu yang besar dimulai dari yang kecil"</p>
          </div>
        </div>
      </section>

      {/* 3. Tentang Saya / Journey Hidup */}
  <section className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-black' : 'bg-white'} px-2 sm:px-0`} id="about">
        <div className="mb-2 text-center">
          <span className={`italic text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>A five-year journey timeline</span>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="flex flex-col items-center">
            {/* Timeline garis dan node */}
            <div className="relative flex flex-row flex-nowrap items-center gap-2 sm:gap-0 py-8 px-2 min-w-[700px]" style={{justifyContent: 'flex-start'}}>
              {/* Garis lurus menyesuaikan dark mode */}
              <div className={`absolute top-1/2 left-0 right-0 h-0.5 z-0 ${darkMode ? 'bg-white' : 'bg-black'}`} style={{height: 2}} />
              {timeline.map((item, i) => (
                <div key={item.year} className="relative flex flex-col items-center z-10" style={{minWidth: 70}}>
                  {/* Node bulat interaktif */}
                  <button
                    onClick={() => setOpenYear(openYear === i ? null : i)}
                    className={`transition-all duration-200 rounded-full flex items-center justify-center focus:outline-none ${openYear === i ? 'scale-110 shadow-lg' : ''} ${item.year === '2025' ? 'w-10 h-10' : 'w-7 h-7'} mx-0 border-2 ${darkMode ? 'border-white bg-black' : 'border-black bg-white'}`}
                    style={{zIndex: 2}}
                    aria-label={`Buka detail ${item.year}`}
                  >
                    <div className={`${item.year === '2025' ? 'w-4 h-4' : 'w-3 h-3'} rounded-full ${darkMode ? 'bg-white' : 'bg-black'}`} />
                  </button>
                  {/* Tahun */}
                  <span className={`mt-2 text-base md:text-lg font-bold font-mono tracking-wide select-none ${darkMode ? 'text-white' : 'text-black'}`}>
                    {item.year}
                  </span>
                  {/* Detail accordion */}
                  <motion.div
                    initial={false}
                    animate={{ height: openYear === i ? 'auto' : 0, opacity: openYear === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden w-44 md:w-56"
                  >
                    {openYear === i && (
                      <div className={`mt-2 mb-2 px-2 py-2 text-xs md:text-sm rounded shadow border ${darkMode ? 'text-white border-white bg-black' : 'text-black border-black bg-white'}`}>
                        {item.desc}
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Portofolio */}
  <section className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-black' : 'bg-white'} px-4 sm:px-0`} id="portfolio">
  <h2 className={`text-2xl xs:text-3xl font-bold mb-8 sm:mb-10 font-title text-center ${darkMode ? 'text-white' : 'text-black'}`}>Portofolio</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-xs xs:max-w-2xl lg:max-w-5xl">
          {portfolio.map((item, i) => {
            // All portfolio items show inline alert 'Coming soon'
            const [showInlineAlert, setShowInlineAlert] = useState(false);
            const handleClick = () => {
              setShowInlineAlert(true);
              setTimeout(() => setShowInlineAlert(false), 2000);
            };
            return (
              <div
                key={i}
                className="group bg-white border border-black rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-center p-6 cursor-pointer relative hover:bg-gray-100 transition-colors"
                tabIndex={0}
                onClick={handleClick}
                onKeyDown={e => { if (e.key === 'Enter') handleClick(); }}
                role="button"
                aria-label={`Lihat detail ${item.title}`}
              >
                <div className="w-full h-40 flex items-center justify-center overflow-hidden">
                  <Image src={item.img} alt={item.title} width={80} height={80} className="object-contain" />
                </div>
                <div className={`mt-4 text-xl font-bold group-hover:underline transition-all ${darkMode ? 'text-white' : 'text-black'}`}>{item.title}</div>
                <div className={`text-base transition-all ${darkMode ? 'text-gray-200 group-hover:text-white' : 'text-gray-700 group-hover:text-black'}`}>{item.desc}</div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-80 flex items-center justify-center transition-all duration-300">
                  <span className="text-white text-lg font-bold">Lihat Detail</span>
                </div>
                {/* Inline alert for all portfolio items */}
                {showInlineAlert && (
                  <div className={`absolute left-1/2 -translate-x-1/2 bottom-4 rounded-lg px-4 py-2 font-semibold shadow z-20 animate-fadeIn border ${darkMode ? 'bg-black border-white text-white' : 'bg-white border-black text-black'}`}>
                    Coming soon
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Skill / Teknologi */}
  <section className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-black' : 'bg-white'} px-4 sm:px-0`} id="skills">
        <h2 className="text-2xl xs:text-3xl font-bold mb-8 sm:mb-10 font-title text-center">Skill & Teknologi</h2>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-8">
          {skills.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center"
            >
              <Image src={item.img} alt={item.name} width={56} height={56} className="object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <div className={`mt-2 text-base font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Kerja Sama / Project Bareng */}
  <section className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-black' : 'bg-white'}`} id="contact">
        <h2 className={`text-3xl font-bold mb-10 font-title ${darkMode ? 'text-white' : 'text-black'}`}>Relationship</h2>
        <div className={`w-full max-w-md flex flex-col items-center gap-6 rounded-2xl shadow-xl p-8 border ${darkMode ? 'bg-black border-white' : 'bg-white border-black'}`}>
          <p className={`text-lg text-center ${darkMode ? 'text-white' : 'text-black'}`}>Tertarik kolaborasi atau project bareng? <br />DM saya langsung di Instagram atau email, yuk diskusi!</p>
          <div className="flex gap-6 mt-4">
            <a href="https://instagram.com/rhmtasn_" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg width="32" height="32" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17" cy="7" r="1.5"/></svg>
            </a>
            <a href="mailto:rahmatalihsaan@gmail.com" className="hover:scale-110 transition-transform">
              <svg width="32" height="32" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5l-7-3.5-7 3.5"/></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}