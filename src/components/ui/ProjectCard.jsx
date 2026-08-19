import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Badge } from './Badge';
import { ArrowRight, ExternalLink, Trophy } from 'lucide-react';
import { Github } from './SocialIcons';

const colorThemes = {
  indigo: "from-indigo-600/60 to-indigo-900/60",
  teal: "from-teal-600/60 to-teal-900/60",
  rose: "from-rose-600/60 to-rose-900/60",
  emerald: "from-emerald-600/60 to-emerald-900/60",
  amber: "from-amber-600/60 to-amber-900/60",
  violet: "from-violet-600/60 to-violet-900/60",
  sky: "from-sky-600/60 to-sky-900/60",
};

export const ProjectCard = ({ project }) => {
  const gradientClass = colorThemes[project.themeColor] || "from-gray-700/60 to-gray-900/60";

  return (
    <Card className="flex flex-col overflow-hidden h-full">
      {/* Abstract Gradient Header instead of Stock Images */}
      <div className={`h-40 w-full bg-gradient-to-tr ${gradientClass} relative p-6 flex flex-col justify-between overflow-hidden group`}>
        {project.coverImage && (
          <img
            src={project.coverImage}
            alt={project.title}
            className={`absolute inset-0 h-full w-full mix-blend-overlay opacity-60 transition-transform duration-500 group-hover:scale-105 ${project.coverImageFit === 'contain' ? 'object-contain' : 'object-cover'
              }`}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}
        {/* Decorative Grid Mesh */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <div className="z-10 flex items-start justify-between">
          <Badge variant="primary" className="bg-carbon/60 text-aqua border-carbon">
            {project.category}
          </Badge>
          {project.award && (
            <div className="bg-gradient-to-r from-amber-500/25 to-yellow-500/30 text-amber-300 border border-amber-500/30 px-2.5 py-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase rounded-full shadow-[0_0_10px_rgba(245,158,11,0.15)] backdrop-blur-sm z-10">
              <Trophy className="h-3 w-3 text-amber-400" />
              <span>{project.award}</span>
            </div>
          )}
        </div>

        <div className="z-10">
          <span className="font-mono text-[10px] uppercase text-white/50 tracking-widest">
            Case Study
          </span>
          <h4 className="text-white font-display font-bold text-lg truncate">
            {project.title}
          </h4>
        </div>
      </div>

      <CardHeader className="p-6 pb-2">
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
      </CardHeader>

      <CardContent className="p-6 pt-0 pb-4 flex-grow">
        <CardDescription className="line-clamp-3 mb-4">
          {project.shortDescription}
        </CardDescription>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="default" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 border-t border-steel/10 mt-auto flex items-center justify-between">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-aqua hover:text-aqua/80 transition-colors mt-4 group"
        >
          <span>View Case Study</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <div className="flex items-center gap-1 mt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-md text-steel hover:text-aqua hover:bg-aqua/10 transition-colors"
              aria-label="Live Demo"
              title="Live Demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-md text-steel hover:text-aqua hover:bg-aqua/10 transition-colors"
              aria-label="GitHub Repository"
              title="GitHub Repository"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
