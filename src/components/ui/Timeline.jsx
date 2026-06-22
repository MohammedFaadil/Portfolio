import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const Timeline = ({ children, className }) => {
  return (
    <div className={cn("relative border-l border-steel/20 ml-3", className)}>
      {children}
    </div>
  );
};

export const TimelineItem = ({ 
  title, 
  subtitle, 
  date, 
  description, 
  bullets = [], 
  tags = [], 
  icon,
  className 
}) => {
  return (
    <motion.div 
      className={cn("mb-10 ml-8 relative", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-carbon dark:bg-white border-2 border-aqua"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
        <h3 className="text-xl font-display font-semibold text-carbon dark:text-white">{title}</h3>
        <span className="text-sm font-mono text-aqua mt-1 sm:mt-0">{date}</span>
      </div>
      
      <h4 className="text-md font-medium text-steel dark:text-steel/90 mb-3">{subtitle}</h4>
      
      {description && <p className="text-carbon/80 dark:text-white/80 mb-4">{description}</p>}
      
      {bullets.length > 0 && (
        <ul className="list-disc list-inside text-carbon/80 dark:text-white/80 mb-4 space-y-1">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-sm">{bullet}</li>
          ))}
        </ul>
      )}
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <span key={i} className="inline-flex items-center rounded-md bg-grape/10 px-2 py-1 text-xs font-medium text-carbon dark:text-white border border-grape/20">
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};
