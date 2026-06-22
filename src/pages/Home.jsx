import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Send, ArrowRightCircle, Terminal as TerminalIcon, Trophy } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { MetricsDisplay } from '../components/ui/MetricsDisplay';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ProjectCard } from '../components/ui/ProjectCard';
import { PageTransition } from '../components/layout/PageTransition';
import { profileData } from '../data/profile';
import { topSkills, skillsData } from '../data/skills';
import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';
import myImage from '../assets/myimage.jpeg';

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = profileData.roleSubtitle;
  const period = 2000;

  useEffect(() => {
    let timer;
    const currentRole = roles[currentRoleIndex];

    const tick = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setDisplayText((prev) => currentRole.slice(0, prev.length + 1));
      }

      let speed = 100 - Math.random() * 50;

      if (isDeleting) {
        speed /= 2;
      }

      if (!isDeleting && displayText === currentRole) {
        timer = setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timer = setTimeout(tick, speed);
      }
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const currentRole = experienceData.find(e => e.id === "prudent-ai-intern");
  const featuredProjects = projectsData.filter(p => p.featured);

  // Flat array of all skills for marquee
  const allSkills = skillsData.flatMap(c => c.skills);

  return (
    <PageTransition>
      <Helmet>
        <title>Mohammed Faadil | Portfolio</title>
        <meta name="description" content="Portfolio of Mohammed Faadil - Backend Engineer, AI/ML Developer, and Cybersecurity Researcher." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-grid-pattern">
        {/* Soft background glow meshes */}
        <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-aqua/5 blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-grape/10 blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal>
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-aqua uppercase block mb-3">
                  BACKEND ENGINEER · AI/ML · CYBERSECURITY
                </span>
                <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-carbon dark:text-white leading-tight">
                  Hi, I'm <span className="text-aqua">Mohammed Faadil</span>
                </h1>
                <div className="h-8 font-mono text-lg sm:text-2xl text-steel dark:text-steel/90 mt-2 flex items-center">
                  <span>{displayText}</span>
                  <span className="animate-pulse text-aqua">|</span>
                </div>
                <p className="text-lg text-steel dark:text-steel/90 leading-relaxed max-w-2xl mt-4">
                  {profileData.summary}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button to="/projects" variant="primary" className="flex items-center gap-2 group">
                    <span>View Projects</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  {/* 
                    Resume download placeholder: Replace '/resume.pdf' with actual path 
                    to your CV file when available.
                  */}
                  <Button
                    href="/mohammed-faadil-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Resume</span>
                  </Button>
                  <Button to="/contact" variant="ghost" className="flex items-center gap-2">
                    <span>Get in Touch</span>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Interactive Mockup (Terminal) */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.2} style="scale-up">
                <div className="rounded-xl border border-steel/20 bg-carbon text-left shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                  {/* Title bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-carbon/50 border-b border-steel/10">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-[10px] text-steel">bash &middot; mohammed@faadil</span>
                    <div className="w-10"></div>
                  </div>
                  {/* Terminal Body */}
                  <div className="p-6 space-y-4 text-steel">
                    <div>
                      <p className="text-white/60">$ whoami</p>
                      <p className="text-aqua mt-1">mohammedfaadil</p>
                    </div>
                    <div>
                      <p className="text-white/60">$ cat skills.json</p>
                      <pre className="text-green-400 mt-1 overflow-x-auto">
                        {`{
  "backend": ["Django", "FastAPI"],
  "ai_ml": ["ML", "DL", "NLP", "TensorFlow"],
  "security": ["Pentesting", "Vulnerabilities"],
  "devops": ["Docker", "Linux", "Git"]
}`}
                      </pre>
                    </div>
                    <div>
                      <p className="text-white/60">$ uptime</p>
                      <p className="text-white/80 mt-1">active: 4 internships, 4+ projects shipped</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-white/60">$</span>
                      <span className="animate-pulse text-aqua">█</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Quick Stat Strip */}
          <ScrollReveal delay={0.3} className="mt-20 pt-10 border-t border-steel/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {profileData.stats.map((stat, i) => (
                <MetricsDisplay
                  key={i}
                  end={parseFloat(stat.value)}
                  suffix={stat.value.includes('+') ? '+' : ''}
                  label={stat.label}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white/50 dark:bg-carbon/20 border-y border-steel/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <span className="font-mono text-xs font-semibold tracking-wider text-aqua uppercase block mb-3">
                  Background
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-carbon dark:text-white mb-6">
                  Synthesizing AI, Security, & Code
                </h2>
                <p className="text-lg text-steel dark:text-steel/90 leading-relaxed mb-6">
                  {profileData.aboutDetailed.split('\n\n')[0]}
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-aqua font-semibold hover:text-aqua/85 transition-colors group">
                  <span>Read full biography</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
              <ScrollReveal delay={0.15} className="w-full max-w-[320px]">
                <div className="relative group overflow-hidden rounded-2xl border border-steel/20 bg-carbon/50 w-full aspect-[4/5] shadow-2xl">
                  {/* Floating Aqua Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent opacity-80 z-10"></div>
                  <div className="absolute inset-0 border-2 border-aqua/10 group-hover:border-aqua/30 rounded-2xl z-20 transition-all duration-300"></div>
                  <img 
                    src={myImage} 
                    alt="Mohammed Faadil" 
                    className="h-full w-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="w-full max-w-[320px]">
                <Card className="border border-steel/20 bg-white dark:bg-carbon/50 p-6">
                  <h3 className="font-display text-lg font-bold mb-4">Core Skill Snapshot</h3>
                  <div className="flex flex-wrap gap-2">
                    {topSkills.map((skill, i) => (
                      <Badge key={i} variant="primary" className="px-3 py-1 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Current Role Highlight Card */}
      {currentRole && (
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-10">
                <span className="font-mono text-xs font-semibold tracking-wider text-aqua uppercase block mb-2">
                  Active Work
                </span>
                <h2 className="font-display text-3xl font-bold text-carbon dark:text-white">Current Engagement</h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card className="border-2 border-aqua/30 bg-white dark:bg-carbon/80 shadow-lg relative overflow-hidden">
                {/* Visual pulse */}
                <div className="absolute top-0 right-0 h-24 w-24 bg-aqua/5 rounded-full blur-xl animate-pulse"></div>
                <CardHeader className="flex sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-xs font-mono text-aqua tracking-wider uppercase block mb-1">
                      {currentRole.startDate} &ndash; {currentRole.endDate}
                    </span>
                    <CardTitle className="text-2xl font-bold">{currentRole.role}</CardTitle>
                    <CardContent className="p-0 text-sm font-semibold text-steel/90 mt-1">
                      {currentRole.company} &middot; {currentRole.location}
                    </CardContent>
                  </div>
                  <Badge variant="primary" className="bg-aqua/20 text-aqua border-aqua/30 animate-pulse">
                    Active Role
                  </Badge>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-steel dark:text-steel/95 leading-relaxed mb-6">
                    {currentRole.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentRole.tags.map((tag, i) => (
                      <Badge key={i} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 border-t border-steel/10 flex justify-end">
                  <Link to="/experience" className="inline-flex items-center gap-2 text-sm font-semibold text-aqua group">
                    <span>View full experience timeline</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      <section className="py-20 bg-white/50 dark:bg-carbon/20 border-y border-steel/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-aqua uppercase block mb-3">
                  Selected Work
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-carbon dark:text-white">
                  Featured Projects
                </h2>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-2 text-aqua font-semibold hover:text-aqua/85 transition-colors group">
                <span>See all projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Marquee Row */}
      <section className="py-16 overflow-hidden">
        <div className="relative flex max-w-full items-center">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap py-4">
            {allSkills.concat(allSkills).map((skill, index) => (
              <span
                key={index}
                className="text-2xl sm:text-3xl font-display font-semibold text-steel/30 dark:text-steel/20 uppercase tracking-widest hover:text-aqua transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Strip */}
      <section className="py-20 bg-white/50 dark:bg-carbon/20 border-y border-steel/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="font-mono text-xs font-semibold tracking-wider text-aqua uppercase block mb-2">
                Milestones
              </span>
              <h2 className="font-display text-3xl font-bold text-carbon dark:text-white">Featured Achievements</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0.05}>
              <div className="p-6 rounded-xl border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent text-center flex flex-col items-center shadow-[0_0_15px_rgba(245,158,11,0.05)] relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-12 h-12 bg-amber-500/10 rounded-full blur-md group-hover:scale-150 transition-transform duration-500"></div>
                <span className="text-[10px] font-mono text-amber-500 font-semibold tracking-wider mb-2">PROJECT EXPO</span>
                <h4 className="font-display font-bold text-base leading-tight mb-2 text-carbon dark:text-white flex items-center gap-1.5 justify-center">
                  <Trophy className="h-4 w-4 text-amber-500 inline animate-pulse" />
                  <span>1st Position</span>
                </h4>
                <p className="text-xs text-steel">MindCare AI Mental Health platform</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-xl border border-steel/15 bg-white dark:bg-carbon/40 text-center flex flex-col items-center">
                <span className="text-xs font-mono text-aqua mb-2">CERTIFICATION</span>
                <h4 className="font-display font-bold text-base leading-tight mb-2">Google Cybersecurity</h4>
                <p className="text-xs text-steel">Professional Certificate</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="p-6 rounded-xl border border-steel/15 bg-white dark:bg-carbon/40 text-center flex flex-col items-center">
                <span className="text-xs font-mono text-aqua mb-2">RESEARCH</span>
                <h4 className="font-display font-bold text-base leading-tight mb-2">CYSTAR IIT Madras</h4>
                <p className="text-xs text-steel">Cybersecurity Research Intern</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-xl border border-steel/15 bg-white dark:bg-carbon/40 text-center flex flex-col items-center">
                <span className="text-xs font-mono text-aqua mb-2">HACKATHON</span>
                <h4 className="font-display font-bold text-base leading-tight mb-2">SIH Participant</h4>
                <p className="text-xs text-steel">Smart India Hackathon</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-aqua/5 blur-3xl"></div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-carbon dark:text-white mb-6">
              Let's build something secure and intelligent together
            </h2>
            <p className="text-lg text-steel dark:text-steel/90 mb-8 max-w-xl mx-auto">
              If you have projects, opportunities, or ideas at the intersection of backend scalability and AI security, I'm ready.
            </p>
            <Button to="/contact" variant="primary" className="flex items-center gap-2 mx-auto group">
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
