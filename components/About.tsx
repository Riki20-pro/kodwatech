"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SafeImage from "./SafeImage";
import Link from "next/link";

const About = () => {
  const points = [
    "Pengalaman lebih dari 5 tahun di industri teknologi.",
    "Tim ahli yang berdedikasi dan profesional.",
    "Solusi yang disesuaikan dengan kebutuhan bisnis unik Anda.",
    "Dukungan teknis berkelanjutan dan terpercaya.",
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-black overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <SafeImage
                src="/images/about/team.jpg"
                alt="Tim KODWA TECH"
                fallbackTitle="Tim KODWA TECH"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-purple/20 rounded-full blur-3xl z-0" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl z-0" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 left-10 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl z-20 border border-gray-100 dark:border-gray-800"
            >
              <span className="text-4xl font-bold text-primary-purple block mb-1">
                99%
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Kepuasan Klien
              </span>
            </motion.div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-purple font-bold uppercase tracking-widest text-sm mb-4"
            >
              Tentang Kami
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight"
            >
              Partner Teknologi Terpercaya untuk{" "}
              <span className="text-gradient">Kesuksesan Anda</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed"
            >
              KODWA TECH lahir dari semangat untuk membantu UMKM hingga
              korporasi dalam melakukan transformasi digital. Kami percaya bahwa
              teknologi yang tepat dapat menjadi pembeda utama dalam persaingan
              bisnis global saat ini.
            </motion.p>

            <div className="space-y-4 mb-10">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="text-primary-purple w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="#"
              className="bg-primary-purple text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-primary-purple/20 inline-block"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
