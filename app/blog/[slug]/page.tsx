"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";
import SafeImage from "@/components/SafeImage";

export default function BlogDetailPage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
          <Link href="/blog" className="text-primary-purple font-bold">
            Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-24 bg-white dark:bg-premium-dark">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-gray-500 hover:text-primary-purple transition-colors mb-8 font-medium"
            >
              <ArrowLeft size={18} />
              <span>Kembali ke Blog</span>
            </Link>

            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
              <div className="flex items-center space-x-1 uppercase tracking-widest">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1 uppercase tracking-widest">
                <User size={14} />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="rounded-[3rem] overflow-hidden mb-16 aspect-video">
              <SafeImage
                src={post.image}
                alt={post.title}
                fallbackTitle={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-3/4">
                <div
                  className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              <div className="md:w-1/4">
                <div className="sticky top-32 space-y-10">
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-6 pb-2 border-b">
                      Bagikan
                    </h4>
                    <div className="flex space-x-4">
                      <button className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-purple hover:text-white transition-all">
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="bg-primary-purple/5 p-8 rounded-[2rem] border border-primary-purple/10">
                    <h4 className="font-bold mb-4">Butuh Solusi Serupa?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                      Konsultasikan kebutuhan digital Anda dengan tim ahli KODWA
                      TECH.
                    </p>
                    <Link
                      href="/contact"
                      className="block text-center bg-primary-purple text-white py-3 rounded-xl font-bold text-sm"
                    >
                      Hubungi Kami
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
