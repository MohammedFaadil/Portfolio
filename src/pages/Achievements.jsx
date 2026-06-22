import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PageTransition } from '../components/layout/PageTransition';
import { achievementsData } from '../data/achievements';
import { Trophy, ShieldCheck, Award, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
  shield: ShieldCheck,
  award: Award,
  trophy: Trophy
};

export default function Achievements() {
  const certifications = achievementsData.filter(item => item.type === "certification");
  const awards = achievementsData.filter(item => item.type === "achievement");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

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

  const renderAchievementCard = (item, index) => {
    const Icon = iconMap[item.icon] || Trophy;
    const isZoomable = item.image && loadedImages[item.id] === true;

    return (
      <ScrollReveal key={item.id} delay={index * 0.05}>
        <motion.div 
          whileHover={isZoomable ? { rotate: -0.7, scale: 1.005, y: -4 } : { y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          onClick={() => {
            if (isZoomable) {
              setSelectedImage({ url: item.image, title: item.title });
            }
          }}
          className={`overflow-hidden rounded-xl border border-steel/20 bg-white dark:bg-carbon/50 flex flex-col md:flex-row items-stretch shadow-sm hover:shadow-md hover:border-aqua/50 transition-colors duration-300 ${
            isZoomable ? 'cursor-zoom-in' : 'cursor-default'
          }`}
        >
          {/* Left Column: Landscape Image / Fallback Placeholder */}
          <div className="md:w-72 w-full aspect-video relative bg-gradient-to-br from-carbon/90 to-carbon border-b md:border-b-0 md:border-r border-steel/15 flex-shrink-0 flex items-center justify-center overflow-hidden group">
            {item.image && (
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 h-full w-full object-cover hover:scale-[1.02] transition-transform duration-500 z-10"
                onLoad={() => setLoadedImages(prev => ({ ...prev, [item.id]: true }))}
                onError={(e) => {
                  e.target.style.display = 'none';
                  setLoadedImages(prev => ({ ...prev, [item.id]: false }));
                }}
              />
            )}
            
            {/* Themed Gradient Fallback Placeholder */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${
              item.type === 'achievement' 
                ? 'from-amber-600/30 via-amber-500/10 to-yellow-500/5' 
                : 'from-indigo-600/30 via-indigo-500/10 to-aqua/5'
            } flex flex-col items-center justify-center p-4 text-center`}>
              {/* Abstract grid mesh */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:12px_20px]"></div>
              <div className={`p-2.5 rounded-full ${
                item.type === 'achievement' ? 'bg-amber-500/10 text-amber-400' : 'bg-aqua/10 text-aqua'
              } mb-2`}>
                <Icon className="h-7 w-7 animate-pulse" />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-steel/60">
                {item.issuer}
              </span>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex-grow p-5 sm:p-6 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-mono text-[10px] font-semibold text-aqua tracking-wider uppercase bg-aqua/10 px-2 py-0.5 rounded-full">
                {item.date}
              </span>
              <span className="text-[11px] font-mono text-steel/60">
                {item.issuer}
              </span>
            </div>
            
            <h3 className="font-display text-lg sm:text-xl font-bold text-carbon dark:text-white mb-2 leading-snug">
              {item.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-steel dark:text-steel/90 leading-relaxed max-w-3xl">
              {item.description}
            </p>
          </div>
        </motion.div>
      </ScrollReveal>
    );
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Achievements & Certifications | Mohammed Faadil</title>
        <meta name="description" content="View certificates and competitive achievements of Mohammed Faadil in cybersecurity and AI." />
      </Helmet>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Achievements / Awards */}
        <div className="mb-16">
          <ScrollReveal>
            <SectionHeading 
              eyebrow="Milestones" 
              title="Awards & Recognition" 
              description="Recognitions received for project design, software engineering competence, and hackathon participation."
            />
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {awards.map((award, index) => renderAchievementCard(award, index))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <ScrollReveal>
            <SectionHeading 
              eyebrow="Education Verification" 
              title="Professional Certifications" 
              description="Industry recognized credentials validating my expertise in secure networks and AI workloads."
            />
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {certifications.map((cert, index) => renderAchievementCard(cert, index))}
          </div>
        </div>

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
                  <span className="text-sm font-mono text-steel uppercase tracking-wider truncate max-w-[80%]">
                    {selectedImage.title}
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
                    src={selectedImage.url}
                    alt={selectedImage.title}
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
