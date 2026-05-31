"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const AboutPageHero = () => {
  return (
    <section className="relative min-height-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-premium-dark">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary-purple/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800/50 px-4 py-2 rounded-full mb-8"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary-purple">
              KODWA TECH Journey
            </span>
            <ChevronRight size={14} className="text-gray-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tighter"
          >
            Membangun Masa Depan <br />
            <span className="text-gradient">Digital Bersama Anda</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            KODWA TECH adalah agensi transformasi digital yang didedikasikan
            untuk menghadirkan solusi inovatif dan berkelanjutan. Kami
            menggabungkan keahlian teknis dengan pemahaman bisnis untuk
            menciptakan produk digital yang tidak hanya berfungsi, tetapi juga
            berkembang dan beradaptasi dengan kebutuhan pasar.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHero;
