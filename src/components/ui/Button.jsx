import React from 'react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

const buttonVariants = {
  primary: "bg-aqua text-carbon hover:bg-aqua/90 border border-transparent shadow-sm",
  secondary: "bg-grape text-white hover:bg-grape/90 border border-transparent shadow-sm",
  outline: "border border-aqua/50 text-aqua hover:bg-aqua/10",
  ghost: "hover:bg-steel/10 text-carbon dark:text-white dark:hover:bg-white/10",
  icon: "h-10 w-10 p-2 flex items-center justify-center rounded-full hover:bg-steel/10 dark:hover:bg-white/10 text-carbon dark:text-white"
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  default: "h-11 px-6 py-2",
  lg: "h-14 px-8 text-lg",
  icon: ""
};

export const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "default", 
  asChild = false, 
  href,
  to,
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua disabled:pointer-events-none disabled:opacity-50";
  const classes = cn(baseStyles, buttonVariants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes} ref={ref} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} ref={ref} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
