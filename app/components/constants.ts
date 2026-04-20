// =======================
// TYPES
// =======================

export type Skill = {
  img: string;
  name: string;
};

export type Project = {
  title: string;
  desc: string;
  tech: string;
  image: string;
  featured?: boolean;
  award?: string;
};

export type Journey = {
  year: string;
  title: string;
  desc: string;
  category: "Education" | "Skills" | "AI" | "Internship";
};

// =======================
// SKILLS
// =======================

export const SKILLS: Skill[] = [
  { img: "/python.svg", name: "Python" },
  { img: "/colab.svg", name: "Colab" },
  { img: "/javascript.svg", name: "JavaScript" },
  { img: "/django.svg", name: "Django" },
  { img: "/datascience.svg", name: "Data Science" },
  { img: "/ml.svg", name: "Machine Learning" },
];

// =======================
// PROJECTS
// =======================

export const PROJECTS: Project[] = [
  {
    title: "AR Parfume - Management System",
    desc: "Sistem manajemen toko parfum dengan fitur stok real-time, pengelolaan keuangan, kalkulator formula parfum, dan perhitungan gaji karyawan.",
    tech: "Next.js • TypeScript • Tailwind CSS • PostgreSQL",
    image: "/arparfume.jpeg",
    featured: true,
  },
  {
    title: "Clustering-Based Anomaly Detection for River Monitoring and Early Flood Warning",
    desc: "Sistem pemantauan sungai real-time berbasis Machine Learning untuk deteksi dini banjir menggunakan algoritma clustering.",
    tech: "Python • Scikit-learn • IoT • Real-time Analytics",
    image: "/icsit.jpg",
    award: "Category Excellence Awards - Outstanding Potential in Real-Time Disaster Mitigation",
    featured: true,
  },
  {
    title: "Techno Data Solusindo",
    desc: "Perusahaan solusi TI yang menyediakan layanan pembuatan website, penjualan & perawatan komputer, instalasi CCTV, jaringan komputer, dan technical support.",
    tech: "WordPress • PHP • MySQL • Hardware • Networking",
    image: "/technodata.png",
    featured: true,
  },
  {
    title: "Smart System with IoT and Classification Algorithm",
    desc: "Sistem otomasi rumah pintar berbasis IoT dengan sensor Sigma-T untuk mendeteksi suhu, gas, dan kelembapan secara real-time.",
    tech: "Next.js • Python • Machine Learning • IoT",
    image: "/iotsmart.png",
  },
  {
    title: "n8n Automation - Pencatatan Keuangan Telegram",
    desc: "Automation n8n untuk mencatat pemasukan dan pengeluaran melalui Telegram, terhubung dengan Google Sheets secara real-time.",
    tech: "n8n • Telegram Bot • Google Sheets • Webhook • Automation",
    image: "/automation.jpeg",
    featured: true,
  },
  {
    title: "Alumni Management System",
    desc: "Platform web untuk mengelola data alumni dengan fitur filtering berdasarkan jurusan, angkatan, dan pekerjaan.",
    tech: "Django • Python • PostgreSQL",
    image: "/alumni.jpeg",
    featured: true,
  },
];

// ======================
// JOURNEY
// ======================
export const JOURNEY = [
  {
    year: "2023",
    title: "Awal Perjalanan",
    desc:
      "Memulai perjalanan di dunia teknologi sebagai mahasiswa dengan fokus pada pemahaman dasar komputer, jaringan, serta logika pemrograman.",
    category: "Education",
  },
  {
    year: "2024",
    title: "Membangun Fondasi",
    desc:
      "Mengembangkan keterampilan di berbagai bidang, termasuk Web Development, Programming, Internet of Things (IoT), dan Data Science sebagai fondasi karier di dunia teknologi.",
    category: "Skills",
  },
  {
    year: "2025",
    title: "Eksplorasi Artificial Intelligence",
    desc:
      "Memperdalam pengetahuan di bidang Artificial Intelligence dan Machine Learning serta mulai mengimplementasikan AI dalam berbagai proyek automation dan analisis data.",
    category: "AI",
  },
  {
    year: "2026",
    title: "Pengalaman Profesional",
    desc:
      "Menjalani magang sebagai Web Developer di PT Technodatasolusindo dengan berkontribusi dalam pengembangan, optimasi performa, serta pemeliharaan aplikasi web berbasis kebutuhan klien.",
    category: "Internship",
  },
];