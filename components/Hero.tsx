"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import SafeImage from "./SafeImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-height-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-premium-dark"
    >
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
              Digital Transformation Agency
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
            <span className="text-gradient">Digital Bisnis Anda</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            KODWA TECH menghadirkan solusi pembuatan website dan aplikasi mobile
            berkualitas tinggi dengan teknologi terkini untuk membantu bisnis
            Anda berkembang lebih cepat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-primary-purple text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 group hover:shadow-lg hover:shadow-primary-purple/25 transition-all transform hover:-translate-y-1"
            >
              <span>Mulai Konsultasi Gratis</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto border-2 border-gray-200 dark:border-gray-800 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all transform hover:-translate-y-1"
            >
              Lihat Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
