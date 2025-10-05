'use client';

import { motion } from 'framer-motion';

/**
 * ProjectCard component
 * Displays project information with title, description, and technology tags
 */

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

const tagColorClasses = [
  'bg-blue-100 text-blue-700 border-blue-200',
  'bg-emerald-100 text-emerald-700 border-emerald-200',
  'bg-purple-100 text-purple-700 border-purple-200',
  'bg-amber-100 text-amber-700 border-amber-200',
  'bg-rose-100 text-rose-700 border-rose-200',
  'bg-sky-100 text-sky-700 border-sky-200',
];

const getTagColorClass = (tag: string) => {
  const normalized = tag.toLowerCase();
  const hash = normalized.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return tagColorClasses[hash % tagColorClasses.length];
};

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative h-full overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-6 shadow-[0_25px_45px_-30px_rgba(59,130,246,0.9)] transition-all duration-300 hover:shadow-[0_35px_60px_-30px_rgba(99,102,241,0.6)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/90 via-white/90 to-indigo-50/80" />
      <div className="absolute -top-16 -right-10 h-32 w-32 rounded-full bg-blue-200/40 blur-2xl" />
      <div className="absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-indigo-200/40 blur-2xl" />

      {/* Project Title */}
      <div className="relative">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>

      {/* Project Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

      {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-sm rounded-full border shadow-sm ${getTagColorClass(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
