"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-white dark:bg-premium-dark">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-lg"
          >
            <div className="bg-primary-purple/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
              <Eye className="text-primary-purple" size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-4">Visi</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Menjadi agensi transformasi digital terkemuka yang diakui secara
              global karena inovasi, kualitas, dan dampak positif terhadap
              bisnis dan masyarakat.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-lg"
          >
            <div className="bg-primary-purple/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
              <Target className="text-primary-purple" size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-4">Misi</h3>
            <ul className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-3">
              <li>
                Membangun produk digital berkualitas tinggi dan berkelanjutan.
              </li>
              <li>
                Memberdayakan klien dengan solusi teknologi yang relevan dan
                efektif.
              </li>
              <li>Mendorong inovasi dan kreativitas dalam setiap proyek.</li>
              <li>
                Menciptakan lingkungan kerja yang kolaboratif dan suportif bagi
                tim.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
