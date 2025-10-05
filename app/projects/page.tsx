'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/lib/translations';
import { projects } from '@/lib/projects';

/**
 * Projects Page
 * Showcases all projects with descriptions and technology tags
 */

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const localizedProjects = projects.map((project) => ({
    title: language === 'en' ? project.title : project.titleFr,
    description: language === 'en' ? project.description : project.descriptionFr,
    tags: project.tags,
  }));

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-white/80" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_65%)]" />
      <div className="absolute -top-24 -left-16 h-56 w-56 rounded-full bg-blue-200/50 blur-[100px] -z-30" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-200/50 blur-[100px] -z-30" />
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-12 overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-10 shadow-[0_25px_55px_-30px_rgba(59,130,246,0.6)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/80 via-white/90 to-indigo-100/80" />
        <div className="absolute -top-20 -left-14 h-44 w-44 rounded-full bg-blue-200/40 blur-2xl" />
        <div className="absolute -bottom-24 -right-20 h-48 w-48 rounded-full bg-indigo-200/40 blur-2xl" />
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.projectsPage.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.projectsPage.subtitle}
          </p>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {localizedProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
