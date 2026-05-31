import { Code, Smartphone, Layout, BarChart, Shield, Zap } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "E-Commerce Premium",
    category: "Web Development",
    description:
      "Platform belanja online dengan fitur manajemen stok otomatis, integrasi payment gateway, dan dashboard admin yang komprehensif.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "Stripe"],
    image: "/images/portfolio/ecommerce-premium.jpg",
  },
  {
    id: 2,
    title: "Healthcare App",
    category: "Mobile App",
    description:
      "Aplikasi kesehatan yang memudahkan pasien berkonsultasi dengan dokter secara online dan membuat janji temu rumah sakit.",
    techStack: ["React Native", "Firebase", "Node.js"],
    image: "/images/portfolio/healthcare-app.jpg",
  },
  {
    id: 3,
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    description:
      "Visualisasi data keuangan yang kompleks menjadi dashboard yang intuitif dan mudah dipahami oleh pengguna awam.",
    techStack: ["Figma", "React", "D3.js"],
    image: "/images/portfolio/fintech-dashboard.jpg",
  },
  {
    id: 4,
    title: "Real Estate Portal",
    category: "Web Development",
    description:
      "Situs pencarian properti dengan fitur filter canggih, peta interaktif, dan tur virtual 360 derajat.",
    techStack: ["Next.js", "PostgreSQL", "Google Maps API"],
    image: "/images/portfolio/real-estate-portal.jpg",
  },
];

export const blogPosts = [
  {
    slug: "meningkatkan-roi-dengan-website-modern",
    title: "Meningkatkan ROI dengan Website Modern",
    excerpt:
      "Bagaimana transformasi digital dapat memberikan dampak langsung pada keuntungan bisnis Anda melalui efisiensi dan jangkauan pasar yang lebih luas.",
    content: `
      <p>Dalam era digital yang berkembang pesat, website bukan lagi sekadar kartu nama digital. Ia adalah mesin pertumbuhan bisnis yang vital. Banyak perusahaan masih memandang pembuatan website sebagai biaya, padahal seharusnya dilihat sebagai investasi strategis yang mampu memberikan Return on Investment (ROI) yang signifikan.</p>
      
      <h3>1. Kecepatan adalah Kunci</h3>
      <p>Penelitian menunjukkan bahwa penundaan satu detik dalam waktu muat halaman dapat mengurangi konversi sebesar 7%. Website modern yang dibangun dengan teknologi seperti Next.js memastikan performa maksimal yang membuat pengunjung betah.</p>
      
      <h3>2. Optimasi Mobile-First</h3>
      <p>Lebih dari 60% lalu lintas web berasal dari perangkat seluler. Website yang responsif dan dioptimalkan untuk mobile bukan lagi pilihan, melainkan keharusan untuk menjangkau audiens yang lebih luas.</p>
      
      <h3>3. Keamanan yang Membangun Kepercayaan</h3>
      <p>Dengan meningkatnya ancaman siber, pelanggan sangat berhati-hati dalam memberikan data mereka. Integrasi keamanan tingkat tinggi seperti yang ditawarkan oleh Supabase memberikan ketenangan pikiran bagi pemilik bisnis dan pelanggan.</p>
    `,
    date: "25 Mei 2026",
    author: "Admin KODWA",
    image: "/images/blog/roi-website.jpg",
  },
  {
    slug: "tren-ui-ux-2026",
    title: "Tren UI/UX yang Wajib Diperhatikan di 2026",
    excerpt:
      "Panduan lengkap mengenai desain antarmuka yang akan mendominasi pasar tahun ini, mulai dari bento grid hingga micro-interactions.",
    content: `
      <p>Dunia desain terus berevolusi. Tahun 2026 membawa pergeseran menarik dalam cara kita berinteraksi dengan antarmuka digital. Berikut adalah beberapa tren utama yang kami terapkan di KODWA TECH.</p>
      
      <h3>Bento Grid Layout</h3>
      <p>Terinspirasi oleh kotak makan siang Jepang, tata letak bento grid memberikan struktur yang bersih dan terorganisir untuk menampilkan informasi yang beragam dalam satu layar tanpa terlihat berantakan.</p>
      
      <h3>Micro-Interactions yang Bermakna</h3>
      <p>Animasi kecil yang memberikan umpan balik kepada pengguna saat melakukan aksi tertentu (seperti menekan tombol atau scroll) membuat pengalaman digital terasa lebih "hidup" dan intuitif.</p>
      
      <h3>AI-Driven Personalization</h3>
      <p>Antarmuka yang secara cerdas menyesuaikan konten dan tata letak berdasarkan preferensi dan perilaku pengguna secara real-time.</p>
    `,
    date: "18 Mei 2026",
    author: "Design Team",
    image: "/images/blog/ui-ux-trends.jpg",
  },
  {
    slug: "keamanan-data-ecommerce",
    title: "Pentingnya Keamanan Data untuk E-Commerce",
    excerpt:
      "Lindungi data pelanggan Anda dan bangun kepercayaan melalui sistem keamanan yang kokoh dan enkripsi data tingkat tinggi.",
    content: `
      <p>Bagi bisnis e-commerce, data pelanggan adalah aset sekaligus tanggung jawab terbesar. Kebocoran data tidak hanya merugikan secara finansial tetapi juga dapat menghancurkan reputasi brand yang telah dibangun bertahun-tahun.</p>
      
      <h3>Enkripsi End-to-End</h3>
      <p>Memastikan bahwa informasi sensitif seperti detail kartu kredit dan data pribadi dienkripsi sejak dikirim oleh pengguna hingga disimpan di database.</p>
      
      <h3>Otentikasi Multi-Faktor (MFA)</h3>
      <p>Menambahkan lapisan perlindungan ekstra untuk akun pengguna guna mencegah akses yang tidak sah.</p>
      
      <h3>Kepatuhan Regulasi</h3>
      <p>Memastikan sistem mematuhi standar internasional seperti GDPR atau regulasi perlindungan data lokal untuk menjamin legalitas dan keamanan operasional.</p>
    `,
    date: "10 Mei 2026",
    author: "Security Expert",
    image: "/images/blog/ecommerce-security.jpg",
  },
];

export const servicesData = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Website modern, responsif, dan SEO-friendly menggunakan teknologi terbaru.",
    icon: Code,
    features: [
      "Include Next.js/PHP",
      "Supabase Integration",
      "SEO Optimized",
      "Responsive Design",
    ],
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description:
      "Aplikasi Android dan iOS yang intuitif dengan performa tinggi.",
    icon: Smartphone,
    features: [
      "Android & iOS",
      "Smooth UI Animation",
      "API Integration",
      "Push Notifications",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang elegan dan pengalaman pengguna yang mulus.",
    icon: Layout,
    features: [
      "Figma Wireframing",
      "Modern Typography",
      "User-Centric Design",
      "Interactive Prototyping",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Strategi pemasaran digital yang tepat sasaran untuk bisnis Anda.",
    icon: BarChart,
    features: [
      "Social Media Ads",
      "Google Ads (SEM)",
      "Content Strategy",
      "Performance Tracking",
    ],
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description:
      "Perlindungan data dan sistem yang ketat untuk keamanan bisnis.",
    icon: Shield,
    features: [
      "Data Encryption",
      "Secure Database",
      "SSL Certification",
      "Vulnerability Assessment",
    ],
  },
  {
    id: "system-integration",
    title: "System Integration",
    description: "Integrasi sistem yang efisien untuk operasional perusahaan.",
    icon: Zap,
    features: [
      "Third-party API",
      "Workflow Automation",
      "Legacy System Migration",
      "Cloud Solutions",
    ],
  },
];
