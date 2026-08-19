import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Timeline, TimelineItem } from '../components/ui/Timeline';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PageTransition } from '../components/layout/PageTransition';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { educationData } from '../data/education';
import { skillsData } from '../data/skills';
import {
  Terminal,
  Server,
  Cpu,
  CheckSquare,
  Layers,
  Database,
  Wrench,
  Shield
} from 'lucide-react';

const iconMap = {
  "Languages": Terminal,
  "AI, LLM & Agents": Cpu,
  "Backend & Systems": Server,
  "Frontend & Full-Stack": Layers,
  "Databases & Caching": Database,
  "Cloud, DevOps & Infra": Wrench,
  "Testing & Tools": CheckSquare,
  "Cybersecurity & Net": Shield
};

export default function About() {
  return (
    <PageTransition>
      <Helmet>
        <title>About | Mohammed Faadil</title>
        <meta name="description" content="Learn more about Mohammed Faadil's background, education, technical skills, and experience in AI/ML, Backend Engineering, and Cybersecurity." />
      </Helmet>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Biography"
                title="Agentic. Full-Stack. Secure."
                description="I build production-grade AI applications, resilient full-stack platforms, and secure system architectures."
              />
              <div className="space-y-6 text-steel dark:text-steel/90 text-lg leading-relaxed">
                <p>
                  I am a product-focused AI Application Developer and Full-Stack Engineer with a proven track record of independently designing and shipping complex, production-grade platforms — from responsive Next.js/React frontends to high-concurrency Node.js/FastAPI microservices and multi-tenant architectures across PostgreSQL and MongoDB.
                </p>
                <p>
                  Currently, I'm driving the core AI architectural transformation at Techwaukee (Go Recruit AI), integrating Small Language Models and multi-source Agentic RAG pipelines into an enterprise recruitment platform. Previously, I was a Backend Engineer at Prudent AI architecting scalable FastAPI/Django services, and a Research Engineer at IIT Madras CYSTAR Lab under Prof. Chester Rebeiro, working on secure system architectures and static code vulnerability analysis.
                </p>
                <p>
                  I thrive at the intersection of full-stack engineering, applied AI, and security — bridging deterministic business logic with multi-agent frameworks like LangGraph and hybrid retrieval pipelines to ship resilient, zero-hallucination applications.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={0.2}>
              <Card className="h-full border border-steel/20 bg-white dark:bg-carbon/50">
                <CardHeader>
                  <CardTitle className="text-xl">Currently Focused On</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 font-mono text-sm text-steel dark:text-steel/90">
                    <li className="flex items-start gap-2">
                      <span className="text-aqua">❯</span>
                      <span>Agentic RAG pipelines at Techwaukee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-aqua">❯</span>
                      <span>Fine-tuning SLMs & LLMs for production inference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-aqua">❯</span>
                      <span>Shipping zero-hallucination full-stack platforms</span>
                    </li>
                  </ul>
                  <div className="pt-6 border-t border-steel/10">
                    <h4 className="text-sm font-semibold mb-3">Languages Spoken</h4>
                    <div className="flex flex-wrap gap-2">
                      {profileData.languages.map((lang, index) => (
                        <Badge key={index} variant="default">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Technical Stack"
              title="Expertise & Tools"
              description="A categorized breakdown of my technical capabilities and the technologies I work with daily."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((categoryData, index) => {
              const Icon = iconMap[categoryData.category] || Terminal;
              return (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <motion.div
                    whileHover={{
                      x: 5,
                      y: 5,
                      boxShadow: "0px 0px 0px 0px #84DCC6",
                      borderColor: "#84DCC6"
                    }}
                    transition={{ type: "spring", stiffness: 450, damping: 16 }}
                    className="h-full border-2 border-carbon dark:border-steel/20 bg-white dark:bg-carbon/70 p-6 shadow-[5px_5px_0px_0px_#84DCC6] flex flex-col transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="p-2 border border-carbon dark:border-steel/30 bg-aqua/10 text-aqua flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-carbon dark:text-white leading-tight">
                        {categoryData.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 flex-grow items-start">
                      {categoryData.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2.5 py-1 text-xs font-mono border border-steel/15 bg-carbon/5 dark:bg-carbon/40 text-steel dark:text-steel/90 rounded-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Education"
              title="Academic Background"
              description="My structured academic history and achievements."
            />
          </ScrollReveal>

          <div className="max-w-4xl">
            <Timeline>
              {educationData.map((edu) => (
                <TimelineItem
                  key={edu.id}
                  title={edu.institution}
                  subtitle={`${edu.degree} (${edu.location})`}
                  date={`${edu.startDate} – ${edu.endDate}`}
                  description={edu.description}
                  bullets={edu.score ? [`Academic Score: ${edu.score}`] : []}
                />
              ))}
            </Timeline>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
