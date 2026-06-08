"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ZoomIn, Info } from "lucide-react";
import { projects } from "@/lib/data";
import SafeImage from "./SafeImage";

const Portfolio = ({ isHome = false }: { isHome?: boolean }) => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [showLightbox, setShowLightbox] = useState(false);

  const displayProjects = isHome ? projects.slice(0, 4) : projects; // Display 4 projects on home, all on portfolio page

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-premium-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 tracking-tight"
            >
              Proyek Terbaru{" "}
              <span className="text-primary-purple">KODWA TECH</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 text-lg"
            >
              Kami telah membantu berbagai bisnis mencapai potensi maksimal
              mereka melalui solusi digital yang inovatif.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-primary-purple font-bold flex items-center space-x-2 border-b-2 border-primary-purple pb-1 hover:text-purple-700 hover:border-purple-700 transition-all"
          >
            <span>Lihat Semua Proyek</span>
            <ExternalLink size={18} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs font-medium border border-gray-100 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedProject(null);
                setShowLightbox(false);
              }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`project-card-${selectedProject.id}`}
              className="relative w-full max-w-6xl bg-white dark:bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setShowLightbox(false);
                }}
                className="absolute top-6 right-6 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-20 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-3/5 relative overflow-hidden bg-black group/modal">
                  <SafeImage
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fallbackTitle={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => setShowLightbox(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/modal:opacity-100 transition-opacity"
                  >
                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
                      <ZoomIn className="text-white" size={32} />
                    </div>
                  </button>
                </div>

                <div className="lg:w-2/5 p-8 md:p-12 overflow-y-auto flex flex-col">
                  <span className="text-primary-purple font-bold text-sm uppercase tracking-widest mb-4 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-extrabold mb-6 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Info size={18} className="text-gray-500" />
                    <span
                      className={`font-semibold ${selectedProject.hasDemo ? "text-green-500" : "text-red-500"}`}
                    >
                      {selectedProject.status}
                    </span>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-3">
                      Deskripsi Proyek
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="mb-10 mt-auto">
                    <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.hasDemo ? (
                    <a
                      href="#"
                      target="_blank"
                      className="w-full bg-primary-purple text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all mt-auto"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={20} />
                    </a>
                  ) : (
                    <div className="w-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 py-4 rounded-2xl font-semibold text-center text-sm mt-auto">
                      {selectedProject.status}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox Effect */}
      <AnimatePresence>
        {showLightbox && selectedProject && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full h-full p-4 md:p-10 flex items-center justify-center"
            >
              <button
                onClick={() => setShowLightbox(false)}
                className="absolute top-10 right-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[80]"
              >
                <X size={32} />
              </button>
              <SafeImage
                src={selectedProject.image}
                alt={selectedProject.title}
                fallbackTitle={selectedProject.title}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
