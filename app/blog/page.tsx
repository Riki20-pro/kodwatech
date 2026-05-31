"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";
import SafeImage from "@/components/SafeImage";

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 bg-white dark:bg-premium-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold mb-6 tracking-tight"
            >
              Wawasan <span className="text-primary-purple">Teknologi</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Kumpulan artikel menarik tentang perkembangan teknologi, desain,
              dan strategi bisnis digital.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block overflow-hidden aspect-[16/10]"
                >
                  <SafeImage
                    src={post.image}
                    alt={post.title}
                    fallbackTitle={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mb-4 font-medium">
                    <div className="flex items-center space-x-1 uppercase tracking-wider">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 uppercase tracking-wider">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary-purple transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-primary-purple font-bold group/btn transition-all duration-300"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-2 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
