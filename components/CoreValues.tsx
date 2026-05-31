"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, TrendingUp } from "lucide-react";

const values = [
  {
    title: "Integritas & Transparansi",
    description:
      "Kami menjunjung tinggi kejujuran dan keterbukaan dalam setiap langkah proyek, memastikan kepercayaan dan kepuasan klien.",
    icon: <ShieldCheck size={28} className="text-primary-purple" />,
  },
  {
    title: "Berorientasi Solusi",
    description:
      "Fokus utama kami adalah memahami dan menyelesaikan masalah bisnis nyata klien dengan solusi teknologi yang inovatif dan efektif.",
    icon: <Lightbulb size={28} className="text-primary-purple" />,
  },
  {
    title: "Kecepatan & Kualitas",
    description:
      "Menyediakan kode yang optimal, cepat diakses, dan selesai tepat waktu, tanpa mengorbankan standar kualitas tertinggi.",
    icon: <TrendingUp size={28} className="text-primary-purple" />,
  },
];

const CoreValues = () => {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-white dark:bg-premium-dark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl font-bold mb-6 tracking-tight"
          >
            Nilai <span className="text-primary-purple">Inti Kami</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Pilar-pilar yang membimbing setiap keputusan dan tindakan kami dalam
            membangun kesuksesan digital Anda.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-lg text-center"
            >
              <div className="bg-primary-purple/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
