import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Timeline, TimelineItem } from '../components/ui/Timeline';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PageTransition } from '../components/layout/PageTransition';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <PageTransition>
      <Helmet>
        <title>Experience | Mohammed Faadil</title>
        <meta name="description" content="Read through Mohammed Faadil's professional journey, including backend development internships and cybersecurity research." />
      </Helmet>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Professional Journey"
            title="Work Experience"
            description="My professional development path, featuring hands-on internships in backend engineering, software product development, and cybersecurity research."
          />
        </ScrollReveal>

        <div className="max-w-4xl mt-12">
          <Timeline>
            {experienceData.map((exp) => (
              <TimelineItem
                key={exp.id}
                title={exp.role}
                subtitle={`${exp.company} (${exp.location})`}
                date={`${exp.startDate} – ${exp.endDate}`}
                bullets={exp.bullets}
                tags={exp.tags}
              />
            ))}
          </Timeline>
        </div>
      </main>
    </PageTransition>
  );
}
