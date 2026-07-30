import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

export const Card = ({ children, className, hoverable = false, ...props }) => {
  return (
    <motion.div
      className={clsx(styles.card, hoverable && styles.hoverable, className)}
      whileHover={hoverable ? { y: -4, transition: { duration: 0.2 } } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};
