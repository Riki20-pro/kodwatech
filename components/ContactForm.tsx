"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Guard clause to prevent multiple submissions or empty critical fields
    if (loading || !formData.email || !formData.name) return;

    setLoading(true);
    setError("");

    try {
      const { error: supabaseError } = await supabase.from("leads").insert([
        {
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          company: formData.company,
          description: formData.description,
          created_at: new Date().toISOString(),
        },
      ]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        company: "",
        description: "",
      });
    } catch (err: any) {
      console.error("Error submitting form:", err.message);
      setError("Gagal mengirim pesan. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-purple font-bold uppercase tracking-widest text-sm mb-4"
            >
              Hubungi Kami
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight"
            >
              Siap Memulai Proyek{" "}
              <span className="text-gradient">Impian Anda?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed"
            >
              Konsultasikan kebutuhan teknologi bisnis Anda dengan tim ahli kami
              secara gratis. Kami akan memberikan solusi terbaik yang sesuai
              dengan anggaran dan target Anda.
            </motion.p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-full shadow-md">
                  <Send className="text-primary-purple" size={24} />
                </div>
                <div>
                  <h5 className="font-bold">Email</h5>
                  <p className="text-gray-500 dark:text-gray-400">
                    techkodwa@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="text-green-500 w-20 h-20" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Terima Kasih!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Pesan Anda telah berhasil dikirim. Tim kami akan segera
                  menghubungi Anda melalui WhatsApp atau Email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary-purple font-bold hover:underline"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Nama Lengkap
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-purple transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Alamat Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="budi@perusahaan.com"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-purple transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Nomor WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="08567336883"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-purple transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Nama Perusahaan
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="PT. Maju Bersama"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-purple transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Deskripsi Proyek
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Ceritakan sedikit tentang proyek yang ingin Anda bangun..."
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-purple transition-all resize-none"
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-primary-purple text-white py-5 rounded-xl font-bold flex items-center justify-center space-x-3 hover:bg-opacity-90 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:transform-none"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Kirim Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
