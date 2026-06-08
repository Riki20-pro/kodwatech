import { Code, Smartphone, Layout, BarChart, Shield, Zap } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "CV Sinar Fajar – One Sheet Specialist Landing Page",
    category: "LANDING PAGE USAHA",
    status: "Live Demo",
    hasDemo: true,
    description:
      "Landing page komersial publik untuk CV Sinar Fajar guna mempromosikan jasa pemasangan dan maintenance one sheet dengan garansi 3 bulan, serta dilengkapi fitur integrasi konsultasi WhatsApp langsung ke admin.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Shadcn UI",
      "Framer Motion",
    ],
    image: "/images/portfolio/sinar-fajar.png",
    demoUrl: "https://sinar-fajar-71h3.vercel.app/",
  },
  {
    id: 2,
    title: "Financeus – Multi-User Financial Management",
    category: "APLIKASI WEB INTERNAL",
    status: "Private Client",
    hasDemo: false,
    description:
      "Aplikasi manajemen keuangan internal berbasis web multi-user untuk pencatatan transaksi masuk dan keluar secara real-time, transparansi saldo total antar anggota tim, dan pembatasan hak akses data demi keamanan finansial.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Shadcn UI",
      "Framer Motion",
    ],
    image: "/images/portfolio/financeus.png",
  },
  {
    id: 3,
    title: "Coffee Senja – POS & Inventory System v2.0",
    category: "POS SYSTEM",
    status: "Internal System",
    hasDemo: false,
    description:
      "Sistem Point of Sale (Kasir) internal yang digunakan oleh coffee shop untuk pencatatan kasir, transaksi harian, manajemen produk/kategori, analitik laporan pendapatan bulanan, serta integrasi metode pembayaran modern (Transfer & Midtrans). Akses dibatasi untuk operasional internal bisnis.",
    techStack: ["PHP Native", "Tailwind CSS", "MySQL"],
    image: "/images/portfolio/coffee-senja.png",
  },
  {
    id: 4,
    title: "PT-MAR – Manufacturing & Production Dashboard",
    category: "COMPANY PROFILE & MANAGEMENT",
    status: "Internal System",
    hasDemo: false,
    description:
      "Dashboard manajemen dan statistik internal untuk PT-MAR yang melacak penjualan kotor, margin keuntungan, perintah produksi barang, katalog produk, serta diagram statistik penjualan mingguan secara akurat. Bersifat rahasia dan tidak tersedia untuk publik.",
    techStack: ["Laravel", "Tailwind CSS", "MySQL"],
    image: "/images/portfolio/pt-mar.png",
  },
  {
    id: 5,
    title: "Vastara Property – Real Estate Platform",
    category: "REAL ESTATE WEBSITE",
    status: "Prototype / Concept",
    hasDemo: false,
    description:
      "Website pencarian properti interaktif (rumah, apartemen, villa, ruko) yang dilengkapi dengan showcase counter statistik (500+ properti terjual, 1000+ klien puas) serta formulir pemesanan unit dan konsultasi gratis.",
    techStack: ["PHP Native", "Tailwind CSS", "MySQL"],
    image: "/images/portfolio/vastara.png",
  },
  {
    id: 6,
    title: "Liwet POS - Android & iOS Kasir Restoran",
    category: "Mobile App Development",
    status: "Internal System",
    hasDemo: false,
    description:
      "Aplikasi Point of Sale (POS) internal berbasis mobile untuk efisiensi operasional Restoran Nasi Liwet Nusantara.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "WebIntoApp"],
    image: "/images/portfolio/liwet-pos-mockup.png",
    video: "/videos/portfolio/liwet-pos-demo.mp4",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "WebIntoApp"],
    details: {
      challenge:
        "Restoran Nasi Liwet Nusantara membutuhkan sistem kasir mobile internal yang cepat, andal, dan mudah dioperasikan oleh staf di lapangan tanpa kerumitan instalasi server lokal. Sistem juga harus merekam data keuangan secara real-time demi menghindari selisih laporan harian.",
      solution:
        "Kami membangun Liwet POS menggunakan Next.js dan Tailwind CSS yang dioptimasi untuk antarmuka mobile, lalu dibundel menjadi aplikasi Android & iOS menggunakan WebIntoApp. Backend ditenagai oleh Supabase Cloud Database untuk manajemen menu, sinkronisasi transaksi instan, serta kalkulasi otomatis pendapatan harian.",
      results: [
        "Sistem kasir berbasis mobile yang responsif dengan fitur kategori menu instan (Paket Liwet, Lauk Satuan, Minuman).",
        "Sinkronisasi real-time tipe pesanan (Dine-in/Takeaway) dan nomor meja langsung ke database pusat.",
        "Dashboard analitik internal yang menampilkan total pendapatan, jumlah transaksi, serta daftar menu terlaris secara akurat.",
        "Distribusi aplikasi internal yang praktis dan efisien untuk perangkat operasional restoran.",
      ],
    },
  },
  {
    id: 7,
    title: "Zenith Analytics - AI Digital Marketing Dashboard",
    category: "UI/UX Design",
    status: "Project Concept",
    hasDemo: true,
    description:
      "Dashboard analitik performa pemasaran digital yang ditenagai oleh AI untuk memberikan insight pasar secara real-time.",
    techStack: ["Figma", "Prototyping", "UX Research", "Data Visualization"],
    image: "/images/portfolio/zenith-analytics-1.png",
    video: "",
    demoUrl:
      "https://www.figma.com/proto/OOd0uQ8ha0dBVj1DaEvdJP/Untitled?node-id=1-2&p=f&t=bRoWlkmA7AuYevwD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    tags: ["UI/UX", "AI", "Dashboard", "Analytics"],
    details: {
      challenge:
        "Membuat visualisasi data yang kompleks menjadi mudah dipahami dan intuitif bagi manajer pemasaran.",
      solution:
        "Menggunakan sistem desain modern dengan pendekatan dark-mode, visualisasi grafik interaktif, dan notifikasi AI yang proaktif.",
      results: [
        "Desain antarmuka dashboard yang futuristik dan bersih.",
        "Integrasi notifikasi AI yang intuitif untuk pengambilan keputusan cepat.",
        "Prototipe interaktif dengan transisi yang halus menggunakan Smart Animate.",
      ],
    },
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
      "Website modern, responsif, dan performa tinggi menggunakan teknologi mutakhir.",
    icon: Code,
    features: [
      "Fullstack Next.js / Laravel",
      "PHP Native & MySQL Support",
      "Supabase & API Integration",
      "High Performance & Responsive",
    ],
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description:
      "Aplikasi Android dan iOS yang intuitif dengan performa tinggi dan lancar.",
    icon: Smartphone,
    features: [
      "Cross-Platform Android & iOS",
      "Smooth UI Animation",
      "Secure API Integration",
      "App Store Optimization (ASO)",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang elegan dan pengalaman pengguna yang mulus serta interaktif.",
    icon: Layout,
    features: [
      "Figma Wireframing & Prototyping",
      "Modern Typography & Brand Identity",
      "User-Centric Design System",
      "Interactive Micro-interactions",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    description:
      "Strategi pemasaran digital dan optimasi mesin pencari untuk melejitkan traffic serta penjualan bisnis Anda.",
    icon: BarChart,
    features: [
      "Advanced Google & Meta Ads",
      "Full-Suite SEO (On-Page & Technical)",
      "Search Authority (Off-Page) & Local SEO",
      "High-Conversion Analytics Tracking",
    ],
  },
  {
    id: "maintenance-security",
    title: "Maintenance & Security",
    description:
      "Layanan perawatan berkala dan proteksi ketat untuk menjaga sistem tetap prima.",
    icon: Shield,
    features: [
      "Daily Cloud Backup & Recovery",
      "Real-time Uptime Monitoring",
      "SSL & Vulnerability Protection",
      "24/7 Bug Fixing & MySQL Optimization",
    ],
  },
  {
    id: "system-integration",
    title: "System Integration",
    description:
      "Integrasi dan otomatisasi sistem yang efisien untuk memangkas proses operasional.",
    icon: Zap,
    features: [
      "Workflow Automation (n8n Expert)",
      "Third-party API Integration",
      "Legacy System Migration",
      "Scalable Cloud Solutions",
    ],
  },
];
