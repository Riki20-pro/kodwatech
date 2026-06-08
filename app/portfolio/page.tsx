"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Info, Maximize2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import SafeImage from "@/components/SafeImage";
import { PageTransition } from "@/components/PageTransition";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleProjectSelect = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsPlaying(false);
    setIsLightboxOpen(false);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsPlaying(false);
    setIsLightboxOpen(false);
  };

  const isMobileLayout =
    selectedProject?.category?.toLowerCase().includes("mobile") ||
    selectedProject?.category?.toLowerCase().includes("ui-ux");

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageTransition>
        <section className="pt-32 pb-24 bg-white dark:bg-premium-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-extrabold mb-6 tracking-tight"
              >
                Showcase <span className="text-primary-purple">Proyek</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
              >
                Eksplorasi karya-karya terbaik kami dalam membantu klien
                mencapai kesuksesan digital.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layoutId={`project-card-${project.id}`}
                  onClick={() => handleProjectSelect(project)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-[2.5rem] cursor-pointer bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                >
                  <div className="aspect-video overflow-hidden">
                    <SafeImage
                      src={project.image}
                      alt={project.title}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-primary-purple font-bold text-xs uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-purple transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    {/* GANTI BAGIAN INI */}
                    <div className="flex flex-wrap gap-2">
                      {/* Gunakan 'project.techStack' agar dinamis sesuai isi data.ts */}
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs font-medium border border-gray-100 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}

                      {/* Cek panjang array dari 'project' yang sedang di-map */}
                      {project.techStack.length > 3 && (
                        <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs font-medium border border-gray-100 dark:border-gray-700 opacity-70">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              />

              {/* Kontainer Utama Modal */}
              <motion.div
                layoutId={`project-card-${selectedProject.id}`}
                className="relative w-full max-w-4xl block md:flex md:flex-row h-[90vh] md:h-[85vh] overflow-y-auto md:overflow-hidden bg-[#0d1117] rounded-2xl shadow-2xl z-10 text-white"
              >
                {/* Tombol Close */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black/90 text-white rounded-full z-30 transition-colors border border-gray-800"
                >
                  <X size={20} />
                </button>

                {/* AREA MEDIA (KIRI / ATAS) - SEKARANG TETAP md:w-1/2 BAGI DUA SAMA RATA */}
                <div
                  className={`w-full md:w-1/2 ${isMobileLayout ? "bg-white" : "bg-gray-950"} h-[260px] sm:h-[350px] md:h-full flex items-center justify-center p-2 sm:p-4 flex-shrink-0 cursor-pointer relative group/media`}
                  onClick={() => {
                    if (selectedProject.video) {
                      setIsPlaying(!isPlaying);
                    } else {
                      setIsLightboxOpen(true);
                    }
                  }}
                >
                  {selectedProject.video && isPlaying ? (
                    <video
                      src={selectedProject.video}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full max-h-[240px] sm:max-h-[320px] md:max-h-[75vh] object-contain mx-auto"
                    />
                  ) : (
                    <>
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full max-h-[240px] sm:max-h-[320px] md:max-h-[75vh] object-contain mx-auto"
                      />
                      {!selectedProject.video && (
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/media:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <div className="bg-black/60 p-3 rounded-xl flex items-center space-x-2 text-xs font-medium">
                            <Maximize2 size={16} />
                            <span>Klik untuk memperbesar</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* AREA KONTEN TEKS (KANAN / BAWAH) - DIALOKASIKAN md:w-1/2 */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between md:h-full md:overflow-y-auto bg-[#0d1117]">
                  <div>
                    <span className="text-primary-purple font-bold text-sm uppercase tracking-widest mb-2 block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
                      {selectedProject.title}
                    </h2>

                    <div className="flex items-center space-x-3 text-sm text-gray-400 mb-6">
                      <Info size={18} className="text-gray-500" />
                      <span
                        className={`font-semibold ${selectedProject.hasDemo ? "text-green-500" : "text-red-500"}`}
                      >
                        {selectedProject.status}
                      </span>
                    </div>

                    {/* Deskripsi & Detail */}
                    <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                      <div>
                        <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-2">
                          Deskripsi Proyek
                        </h4>
                        <p>{selectedProject.description}</p>
                      </div>

                      {selectedProject.details && (
                        <div className="space-y-4">
                          <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-1">
                            Detail Proyek
                          </h4>
                          {selectedProject.details.challenge && (
                            <div>
                              <h5 className="text-sm font-bold text-white mb-1">
                                Tantangan (Challenge)
                              </h5>
                              <p>{selectedProject.details.challenge}</p>
                            </div>
                          )}
                          {selectedProject.details.solution && (
                            <div>
                              <h5 className="text-sm font-bold text-white mb-1">
                                Solusi (Solution)
                              </h5>
                              <p>{selectedProject.details.solution}</p>
                            </div>
                          )}
                          {selectedProject.details.results &&
                            selectedProject.details.results.length > 0 && (
                              <div>
                                <h5 className="text-sm font-bold text-white mb-1">
                                  Hasil (Results)
                                </h5>
                                <ul className="list-disc list-inside space-y-1">
                                  {selectedProject.details.results.map(
                                    (result, i) => (
                                      <li key={i}>{result}</li>
                                    ),
                                  )}
                                </ul>
                              </div>
                            )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bagian Bawah: Tech Stack & Button */}
                  <div className="mt-8 space-y-6">
                    <div className="pt-4 border-t border-gray-800">
                      <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 text-gray-200 rounded-lg text-xs font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.tags &&
                      selectedProject.tags.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-2">
                            Tags
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    {selectedProject.hasDemo ? (
                      <a
                        // Menggunakan demoUrl yang sudah kita buat, bukan video
                        href={
                          selectedProject.demoUrl &&
                          selectedProject.demoUrl !== ""
                            ? selectedProject.demoUrl
                            : "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary-purple text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={20} />
                      </a>
                    ) : (
                      <div className="w-full bg-gray-800 text-gray-400 py-4 rounded-2xl font-semibold text-center text-sm">
                        {selectedProject.status}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* LIGHTBOX POPUP */}
        <AnimatePresence>
          {isLightboxOpen && selectedProject && (
            <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-2 sm:p-4 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-full max-h-full flex items-center justify-center"
              >
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="fixed top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[80] border border-white/20"
                >
                  <X size={24} />
                </button>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-zoom-out"
                  onClick={() => setIsLightboxOpen(false)}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </PageTransition>
      <Footer />
    </main>
  );
}
