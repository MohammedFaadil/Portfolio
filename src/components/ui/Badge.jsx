import React from 'react';
import { cn } from '../../lib/utils';

export const Badge = ({ children, className, variant = "default", ...props }) => {
  const variants = {
    default: "bg-grape/10 text-carbon dark:text-white border border-grape/20",
    primary: "bg-aqua/20 text-aqua border border-aqua/30",
    outline: "border border-steel/30 text-steel",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
