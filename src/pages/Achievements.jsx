import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PageTransition } from '../components/layout/PageTransition';
import { achievementsData } from '../data/achievements';
import { Trophy, ShieldCheck, Award } from 'lucide-react';

const iconMap = {
  shield: ShieldCheck,
  award: Award,
  trophy: Trophy
};

export default function Achievements() {
  const certifications = achievementsData.filter(item => item.type === "certification");
  const awards = achievementsData.filter(item => item.type === "achievement");

  return (
    <PageTransition>
      <Helmet>
        <title>Achievements & Certifications | Mohammed Faadil</title>
        <meta name="description" content="View certificates and competitive achievements of Mohammed Faadil in cybersecurity and AI." />
      </Helmet>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Achievements / Awards */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionHeading 
              eyebrow="Milestones" 
              title="Awards & Recognition" 
              description="Recognitions received for project design, software engineering competence, and hackathon participation."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => {
              const Icon = iconMap[award.icon] || Trophy;
              return (
                <ScrollReveal key={award.id} delay={index * 0.05}>
                  <Card className="h-full border border-steel/20 bg-white dark:bg-carbon/50 flex flex-col sm:flex-row items-start p-6 gap-5">
                    <div className="p-4 rounded-xl bg-yellow-500/10 text-yellow-500 dark:text-yellow-400 self-start sm:self-center">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs text-aqua">{award.date}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-carbon dark:text-white mb-2">{award.title}</h3>
                      <p className="text-sm font-semibold text-steel mb-2">{award.issuer}</p>
                      {award.description && (
                        <p className="text-sm text-steel/95 dark:text-steel/80">{award.description}</p>
                      )}
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = iconMap[cert.icon] || Award;
              return (
                <ScrollReveal key={cert.id} delay={index * 0.05}>
                  <Card className="h-full border border-steel/20 bg-white dark:bg-carbon/50 flex items-center p-6 gap-4">
                    <div className="p-3 rounded-lg bg-aqua/10 text-aqua">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-carbon dark:text-white leading-tight mb-1">{cert.title}</h3>
                      <p className="text-xs text-steel font-mono">{cert.issuer} &middot; {cert.date}</p>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
