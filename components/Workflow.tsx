"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  LayoutGrid,
  Code,
  CheckCircle,
  LifeBuoy,
} from "lucide-react";

const steps = [
  {
    title: "Konsultasi & Strategi",
    description:
      "Mendengarkan secara seksama kebutuhan bisnis, tujuan, dan tantangan klien untuk merumuskan strategi digital yang paling efektif.",
    icon: <Lightbulb size={24} className="text-primary-purple" />,
  },
  {
    title: "Perancangan & UI/UX",
    description:
      "Membuat mockup, wireframe, dan desain antarmuka yang intuitif dan menarik secara visual untuk memastikan pengalaman pengguna yang optimal.",
    icon: <LayoutGrid size={24} className="text-primary-purple" />,
  },
  {
    title: "Pengembangan Kode",
    description:
      "Menerjemahkan desain menjadi fungsionalitas nyata menggunakan teknologi modern seperti Next.js, native PHP, dan integrasi Supabase yang kuat.",
    icon: <Code size={24} className="text-primary-purple" />,
  },
  {
    title: "Pengujian & Peluncuran",
    description:
      "Melakukan serangkaian pengujian ketat (QA) untuk memastikan kualitas, performa, dan keamanan sebelum produk digital diluncurkan ke publik.",
    icon: <CheckCircle size={24} className="text-primary-purple" />,
  },
  {
    title: "Dukungan Berkelanjutan",
    description:
      "Menyediakan layanan maintenance, pembaruan, dan optimasi berkala untuk memastikan produk digital tetap relevan dan berkinerja optimal.",
    icon: <LifeBuoy size={24} className="text-primary-purple" />,
  },
];

const Workflow = () => {
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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl font-bold mb-6 tracking-tight"
          >
            Alur Kerja <span className="text-primary-purple">Kami</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Pendekatan terstruktur kami memastikan setiap proyek berjalan
            lancar, transparan, dan menghasilkan solusi digital terbaik.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 md:gap-x-8 lg:gap-x-6"
        >
          {/* Timeline Connector Lines */}
          <div className="absolute hidden lg:block inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-200 dark:bg-gray-800" />
          <div className="absolute hidden lg:block inset-y-0 w-full flex justify-between px-[calc(100%/10)]">
            {Array.from({ length: steps.length - 1 }).map((_, i) => (
              <div
                key={i}
                className={`absolute top-[calc(100%/${steps.length - 1}*${i} + 6rem)] w-full h-0.5 bg-gray-200 dark:bg-gray-800`}
                style={{
                  width: `calc(100% / ${steps.length - 1})`,
                  left: `calc(100% / ${steps.length - 1} * ${i})`,
                }}
              />
            ))}
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative text-center lg:text-left p-4"
            >
              <div className="relative z-10 flex flex-col items-center lg:items-start mb-6">
                <div className="w-12 h-12 bg-primary-purple text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg ring-4 ring-white dark:ring-black">
                  {index + 1}
                </div>
                {/* Icon Placeholder */}
                {/* <div className="bg-primary-purple/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  {step.icon}
                </div> */}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
