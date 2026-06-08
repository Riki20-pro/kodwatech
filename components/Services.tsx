"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Zap,
  Shield,
  Maximize,
  Smartphone,
  MessageCircle,
} from "lucide-react";
import { servicesData } from "@/lib/data";

const Services = ({ isHome = false }: { isHome?: boolean }) => {
  const displayServices = isHome ? servicesData.slice(0, 3) : servicesData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      className={`py-24 ${isHome ? "bg-gray-50 dark:bg-black" : "bg-white dark:bg-premium-dark"}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 tracking-tight"
          >
            {isHome ? "Layanan Unggulan Kami" : "Solusi Teknologi Komprehensif"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Kami menyediakan berbagai solusi teknologi yang dirancang khusus
            untuk mempercepat pertumbuhan bisnis Anda di era digital.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all group"
            >
              <div className="mb-6 bg-purple-50 dark:bg-purple-900/20 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary-purple transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300 text-primary-purple">
                  <service.icon size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {!isHome && (
                <ul className="space-y-3 pt-6 border-t border-gray-100 dark:border-gray-800">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-3 text-sm font-medium"
                    >
                      <div className="bg-primary-purple/10 p-1 rounded-full text-primary-purple">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

        {!isHome && (
          <>
            {/* Tech Stack & Quality Section */}
            <div className="mt-32">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">
                  Standar Kualitas & Teknologi
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  Setiap infrastruktur digital dan solusi yang kami bangun
                  dirancang dengan cermat untuk memastikan bisnis Anda berjalan
                  lebih efisien, aman, dan siap bersaing di era digital.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800">
                  <div className="bg-primary-purple/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <Zap size={28} className="text-primary-purple" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">
                    Performa & Optimasi Tinggi
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Optimasi performa tingkat lanjut dan arsitektur modern untuk
                    memastikan aplikasi, website, dan sistem otomatisasi Anda
                    berjalan super cepat, responsif, serta memberikan pengalaman
                    pengguna yang mulus.
                  </p>
                </div>

                <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800">
                  <div className="bg-primary-purple/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <Shield size={28} className="text-primary-purple" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">
                    Keamanan & Privasi Data
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Implementasi protokol keamanan berlapis, enkripsi data
                    end-to-end, dan konfigurasi sistem yang ketat untuk menjamin
                    keamanan database serta kerahasiaan data sensitif bisnis
                    Anda.
                  </p>
                </div>

                <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800">
                  <div className="bg-primary-purple/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <Maximize size={28} className="text-primary-purple" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">
                    Arsitektur Skalabel & Integrasi
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Struktur kode yang modular dan clean code memudahkan
                    platform digital Anda bertransformasi tanpa batas, siap
                    menerima lonjakan data besar, serta fleksibel untuk
                    diintegrasikan dengan fitur baru kapan saja.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-32 relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-black via-premium-dark to-primary-purple p-12 md:p-20 text-center">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
                  Punya Ide Proyek Luar Biasa?
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Mari wujudkan bersama{" "}
                  <span className="font-bold text-white uppercase tracking-wider">
                    KODWA TECH
                  </span>
                  . Konsultasikan kebutuhan bisnis Anda secara gratis dengan tim
                  ahli kami sekarang.
                </p>
                <a
                  href="https://wa.me/628567336883"
                  target="_blank"
                  className="inline-flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-2xl"
                >
                  <MessageCircle size={24} />
                  <span>Konsultasi via WhatsApp</span>
                </a>
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary-purple rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[100px]" />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Services;
