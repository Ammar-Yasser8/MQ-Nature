import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

export const Button = React.forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  asChild,
  ...props 
}, ref) => {
  const Component = asChild ? motion.div : motion.button;
  
  return (
    <Component
      ref={ref}
      className={clsx(styles.button, styles[variant], styles[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';
