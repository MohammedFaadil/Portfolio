import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from '../ui/SocialIcons';
import { profileData } from '../../data/profile';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-carbon border-t border-steel/10 mt-auto py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="text-center md:text-left">
            <Link to="/" className="font-display text-lg font-bold text-aqua tracking-wider mb-2 block">
              Mohammed Faadil
            </Link>
            <p className="text-sm text-steel">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Socials & Built Credit */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex space-x-4">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel hover:text-carbon dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel hover:text-carbon dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="text-steel hover:text-carbon dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-steel font-mono">
              Built with React + Vite + Tailwind CSS + Framer Motion
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-steel hover:text-carbon dark:hover:text-white transition-colors p-2 rounded-md hover:bg-steel/5 dark:hover:bg-white/5"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
