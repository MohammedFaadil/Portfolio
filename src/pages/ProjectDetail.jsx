import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Trophy, Calendar, Code, Shield, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PageTransition } from '../components/layout/PageTransition';
import { Github } from '../components/ui/SocialIcons';
import { projectsData } from '../data/projects';

const colorThemes = {
  indigo: "from-indigo-600/60 to-indigo-900/60 text-indigo-300 border-indigo-500/30",
  teal: "from-teal-600/60 to-teal-900/60 text-teal-300 border-teal-500/30",
  rose: "from-rose-600/60 to-rose-900/60 text-rose-300 border-rose-500/30",
  emerald: "from-emerald-600/60 to-emerald-900/60 text-emerald-300 border-emerald-500/30",
  amber: "from-amber-600/60 to-amber-900/60 text-amber-300 border-amber-500/30",
  violet: "from-violet-600/60 to-violet-900/60 text-violet-300 border-violet-500/30",
  sky: "from-sky-600/60 to-sky-900/60 text-sky-300 border-sky-500/30",
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const gradientClass = colorThemes[project.themeColor] || "from-gray-700/60 to-gray-900/60";

  return (
    <PageTransition>
      <Helmet>
        <title>{project.title} | Mohammed Faadil</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Back Button */}
        <ScrollReveal>
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-steel hover:text-carbon dark:hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Link>
        </ScrollReveal>

        {/* Live Demo / GitHub Actions */}
        {(project.liveUrl || project.githubUrl) && (
          <ScrollReveal delay={0.05} className="flex flex-wrap gap-3 mb-8">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span>View Source</span>
              </Button>
            )}
          </ScrollReveal>
        )}

        {/* Hero Header */}
        <ScrollReveal delay={0.1}>
          <div className={`h-64 sm:h-80 w-full bg-gradient-to-tr ${gradientClass} rounded-2xl relative p-8 sm:p-12 flex flex-col justify-between overflow-hidden mb-12`}>
            {/* Cover Image background overlay */}
            {project.coverImage && (
              <img 
                src={project.coverImage} 
                alt=""
                className={`absolute inset-0 h-full w-full mix-blend-overlay opacity-60 ${
                  project.coverImageFit === 'contain' ? 'object-contain' : 'object-cover'
                }`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            {/* Decorative Grid Mesh */}
            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            
            <div className="z-10 flex items-start justify-between">
              <Badge variant="primary" className="bg-carbon/60 text-aqua border-carbon px-3 py-1">
                {project.category}
              </Badge>
              {project.award && (
                <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border border-amber-500/40 px-3.5 py-1.5 flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.15)] rounded-full text-xs font-mono tracking-wider uppercase font-semibold">
                  <Trophy className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                  <span>{project.award}</span>
                </div>
              )}
            </div>

            <div className="z-10 max-w-3xl">
              <span className="font-mono text-xs uppercase text-white/50 tracking-widest block mb-2">
                Project Case Study
              </span>
              <h1 className="text-white font-display font-bold text-2xl sm:text-4xl leading-tight">
                {project.title}
              </h1>
            </div>
          </div>
        </ScrollReveal>

        {/* Project Meta Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Main Info */}
          <div className="md:col-span-2">
            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-2xl font-bold text-carbon dark:text-white mb-6">
                Overview & Architecture
              </h2>
              <div className="space-y-6 text-steel dark:text-steel/90 text-lg leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div>
            <ScrollReveal delay={0.3}>
              <div className="bg-white dark:bg-carbon/30 border border-steel/20 rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="text-xs font-mono text-steel uppercase tracking-wider mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="default" className="px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-steel/10 space-y-4">
                  <div className="flex items-center gap-3 text-steel dark:text-steel/90">
                    <Calendar className="h-5 w-5 text-aqua" />
                    <div>
                      <p className="text-[10px] font-mono uppercase text-steel/60">Timeline</p>
                      <p className="text-sm font-semibold text-carbon dark:text-white">Completed {project.year || 2024}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-steel dark:text-steel/90">
                    <Code className="h-5 w-5 text-aqua" />
                    <div>
                      <p className="text-[10px] font-mono uppercase text-steel/60">Focus Area</p>
                      <p className="text-sm font-semibold text-carbon dark:text-white">{project.category}</p>
                    </div>
                  </div>

                  {project.award && (
                    <div className="p-4 rounded-lg bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-500/20 flex items-center gap-3.5 shadow-sm">
                      <div className="p-2 rounded-md bg-amber-500/15 text-amber-400">
                        <Trophy className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase text-amber-400/80 tracking-wider">Recognition</p>
                        <p className="text-sm font-bold text-carbon dark:text-white leading-tight mt-0.5">{project.award}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Project Screenshots Grid */}
        {project.detailImages && project.detailImages.length > 0 && (
          <ScrollReveal delay={0.4} className="pt-12 border-t border-steel/10">
            <h2 className="font-display text-2xl font-bold text-carbon dark:text-white mb-6">
              Project Interface & Workflows
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.detailImages.map((imgUrl, i) => (
                <div 
                  key={i} 
                  className={`overflow-hidden rounded-xl border border-steel/20 bg-white dark:bg-carbon/30 aspect-video relative group cursor-zoom-in ${
                    project.detailImages.length % 2 !== 0 && i === project.detailImages.length - 1 
                      ? 'md:col-span-2' 
                      : ''
                  }`}
                  onClick={() => setSelectedImage(imgUrl)}
                >
                  <img 
                    src={imgUrl} 
                    alt={`${project.title} snapshot ${i + 1}`}
                    className={`w-full h-full hover:scale-[1.03] transition-transform duration-300 ${
                      imgUrl.includes('case1') ? 'object-contain bg-black/10 dark:bg-black/20' : 'object-cover object-top'
                    }`}
                    onError={(e) => {
                      // Hide card container if the image doesn't exist yet
                      e.target.parentElement.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
        {/* Lightbox Popup Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-carbon/90 backdrop-blur-md p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-white dark:bg-carbon border border-steel/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-steel/10">
                  <span className="text-sm font-mono text-steel uppercase tracking-wider">
                    {project.title} &middot; Interface View
                  </span>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-1 rounded-lg text-steel hover:text-carbon dark:hover:text-white hover:bg-steel/10 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Image display */}
                <div className="p-4 bg-black/5 dark:bg-black/20 flex items-center justify-center max-h-[75vh] min-h-[300px]">
                  <img
                    src={selectedImage}
                    alt="Enlarged screenshot"
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-md"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  );
}
