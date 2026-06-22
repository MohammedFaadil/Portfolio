import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Timeline, TimelineItem } from '../components/ui/Timeline';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PageTransition } from '../components/layout/PageTransition';
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
  "Programming Languages": Terminal,
  "Backend Development": Server,
  "AI/ML": Cpu,
  "Testing & Automation": CheckSquare,
  "Frontend & Full Stack": Layers,
  "Databases": Database,
  "DevOps & Tools": Wrench,
  "Cybersecurity": Shield
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
                title="Secure. Intelligent. Scalable."
                description="I build robust backend systems, train advanced AI models, and ensure system-level security."
              />
              <div className="space-y-6 text-steel dark:text-steel/90 text-lg leading-relaxed">
                <p>
                  I am a final-year B.Tech Computer Science Engineering student with a deep passion for building secure, scalable, and intelligent systems. My technical foundation spans across Backend Engineering, AI/ML, and Cybersecurity, allowing me to approach problems from a holistic, systems-level perspective.
                </p>
                <p>
                  Currently, I am working as a Backend Intern at Prudent AI, where I develop enterprise backend systems using Django and FastAPI. Previously, I was a Cybersecurity Research Intern at IIT Madras CYSTAR Lab, focusing on secure architecture design and AI-assisted tools.
                </p>
                <p>
                  I thrive at the intersection of AI and security, constantly seeking to build products that are not only powerful and efficient but also deeply secure and resilient.
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
                      <span>Backend systems at Prudent AI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-aqua">❯</span>
                      <span>Exploring secure AI architectures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-aqua">❯</span>
                      <span>Optimizing REST & FastAPIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-aqua">❯</span>
                      <span>Completing final-year B.Tech CSE</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((categoryData, index) => {
              const Icon = iconMap[categoryData.category] || Terminal;
              return (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <Card className="h-full border border-steel/20 bg-white dark:bg-carbon/50">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <div className="p-2 rounded-md bg-aqua/10 text-aqua">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-display">{categoryData.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {categoryData.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="default" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
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
