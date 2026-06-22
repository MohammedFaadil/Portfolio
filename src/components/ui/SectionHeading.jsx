import React from 'react';
import { cn } from '../../lib/utils';

export const SectionHeading = ({ eyebrow, title, description, className }) => {
  return (
    <div className={cn("mb-12 max-w-3xl", className)}>
      {eyebrow && (
        <p className="mb-3 font-mono text-sm font-semibold tracking-wider text-aqua uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-carbon dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-steel dark:text-steel/90 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
