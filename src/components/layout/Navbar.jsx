import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Mail, FileText } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { Github, Linkedin } from '../ui/SocialIcons';
import { profileData } from '../../data/profile';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'bg-white/80 dark:bg-carbon/80 backdrop-blur-md border-b border-steel/10'
        : 'bg-transparent'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Initials */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-display text-xl font-bold tracking-wider">
              <span className="text-steel/50 dark:text-steel/40">&lt;</span>
              <span className="text-carbon dark:text-white">Faadil</span>
              <span className="text-aqua">.dev</span>
              <span className="text-steel/50 dark:text-steel/40">&nbsp;/&gt;</span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                    ? 'text-aqua'
                    : 'text-steel hover:text-carbon dark:hover:text-white hover:bg-steel/5 dark:hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Section (Resume, Theme, Socials) */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex items-center space-x-2">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-steel hover:text-carbon dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-steel hover:text-carbon dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            {/* 
              Resume download: Points to public/mohammed-faadil-cv.pdf
            */}
            <Button
              href="/mohammed-faadil-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-steel hover:text-carbon dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer — portaled to <body> so it can't be broken by the
          sticky/backdrop-blur header creating its own containing block */}
      {isOpen && createPortal(
        <div className="md:hidden fixed inset-0 top-16 z-[100] bg-white dark:bg-carbon border-t border-steel/10">
          <nav className="flex flex-col p-6 space-y-4 h-full overflow-y-auto bg-white dark:bg-carbon">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-lg font-medium transition-colors ${isActive
                    ? 'text-aqua bg-aqua/5'
                    : 'text-steel hover:text-carbon dark:hover:text-white hover:bg-steel/5 dark:hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-6 border-t border-steel/10 flex flex-col space-y-4">
              <div className="flex items-center space-x-4 justify-center">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-steel hover:text-carbon dark:hover:text-white"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-steel hover:text-carbon dark:hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
              <Button
                href="/mohammed-faadil-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FileText className="h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </nav>
        </div>,
        document.body
      )}
    </header>
  );
};
