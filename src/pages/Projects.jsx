import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/ui/ProjectCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PageTransition } from '../components/layout/PageTransition';
import { projectsData, projectCategories } from '../data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => {
        if (selectedCategory === "AI/ML") return project.category === "AI/ML";
        if (selectedCategory === "Backend") return project.tags.includes("FastAPI") || project.tags.includes("Django") || project.category === "Backend";
        if (selectedCategory === "Cybersecurity") return project.category === "Cybersecurity" || project.tags.includes("Cybersecurity");
        if (selectedCategory === "Full Stack") return project.tags.includes("Full Stack Development") || project.category === "Full Stack";
        return true;
      });

  return (
    <PageTransition>
      <Helmet>
        <title>Projects | Mohammed Faadil</title>
        <meta name="description" content="Explore portfolio projects by Mohammed Faadil in AI/ML, backend engineering, and cybersecurity." />
      </Helmet>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <ScrollReveal>
          <SectionHeading 
            eyebrow="My Work" 
            title="Projects & Case Studies" 
            description="Explore some of the key platforms I've designed and built, ranging from intelligent NLP architectures to secure cybersecurity simulation environments."
          />
        </ScrollReveal>

        {/* Categories Tab Bar */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12 border-b border-steel/10 pb-6">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua ${
                  selectedCategory === category
                    ? 'bg-aqua text-carbon font-semibold'
                    : 'text-steel hover:text-carbon dark:hover:text-white hover:bg-steel/5 dark:hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
