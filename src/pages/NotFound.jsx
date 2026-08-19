import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { AlertCircle } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export default function NotFound() {
  return (
    <PageTransition>
      <Helmet>
        <title>404 - Page Not Found | Mohammed Faadil</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center justify-center text-center">
        <ScrollReveal style="scale-up">
          <div className="p-4 rounded-full bg-red-500/10 text-red-500 mb-6 animate-pulse">
            <AlertCircle className="h-12 w-12" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-4xl font-bold tracking-tight text-carbon dark:text-white sm:text-5xl mb-4">
            404 - Page Not Found
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-lg text-steel dark:text-steel/80 max-w-md mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Button to="/" variant="primary">
            Return to Home
          </Button>
        </ScrollReveal>
      </main>
    </PageTransition>
  );
}
