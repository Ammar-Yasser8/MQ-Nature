import React from 'react';
import styles from './BotanicalBackground.module.css';

export const BotanicalBackground = () => {
  return (
    <div className={styles.botanicalWrapper} aria-hidden="true">
      {/* Top Left Leaf Pattern */}
      <svg
        className={`${styles.leafSvg} ${styles.topLeft}`}
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -50 0 C 120 40 220 180 180 320 C 150 420 40 500 -80 520"
          stroke="url(#goldGrad1)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Leaf 1 */}
        <path
          d="M 180 320 C 260 280 340 330 310 420 C 270 480 200 420 180 320 Z"
          stroke="url(#goldGrad1)"
          strokeWidth="1.5"
          fill="url(#goldFill)"
        />
        <path d="M 180 320 Q 250 380 310 420" stroke="url(#goldGrad1)" strokeWidth="1" />
        <path d="M 220 345 Q 260 330 280 310" stroke="url(#goldGrad1)" strokeWidth="0.8" />
        <path d="M 240 370 Q 280 370 300 360" stroke="url(#goldGrad1)" strokeWidth="0.8" />
        
        {/* Monstera Cutout Leaf */}
        <path
          d="M 80 120 C 180 60 280 130 260 240 C 230 320 120 310 80 120 Z"
          stroke="url(#goldGrad1)"
          strokeWidth="1.5"
          fill="url(#goldFill)"
        />
        <path d="M 80 120 C 160 190 260 240 260 240" stroke="url(#goldGrad1)" strokeWidth="1.2" />
        <path d="M 140 140 C 180 130 220 110 240 90" stroke="url(#goldGrad1)" strokeWidth="1" />
        <path d="M 170 175 C 220 180 250 170 270 150" stroke="url(#goldGrad1)" strokeWidth="1" />

        {/* Small decorative sprouts */}
        <path d="M 40 220 C 100 240 140 290 120 350" stroke="url(#goldGrad1)" strokeWidth="1.2" />
        <path d="M 120 350 Q 170 340 190 310" stroke="url(#goldGrad1)" strokeWidth="1" />

        <defs>
          <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dfb86c" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#ebd092" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#b58e43" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="goldFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dfb86c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#240d39" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Top Right Leaf Branch Pattern */}
      <svg
        className={`${styles.leafSvg} ${styles.topRight}`}
        viewBox="0 0 450 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 450 0 C 280 90 180 260 220 420 C 250 540 380 640 500 680"
          stroke="url(#goldGrad2)"
          strokeWidth="1.8"
        />
        {/* Palm Fronds Right */}
        <path d="M 220 420 C 120 390 40 440 60 520 C 80 580 180 520 220 420 Z" stroke="url(#goldGrad2)" strokeWidth="1.4" fill="url(#goldFill)" />
        <path d="M 220 420 Q 130 470 60 520" stroke="url(#goldGrad2)" strokeWidth="1" />
        
        <path d="M 260 280 C 160 230 110 150 160 90 C 220 50 280 180 260 280 Z" stroke="url(#goldGrad2)" strokeWidth="1.4" fill="url(#goldFill)" />
        <path d="M 260 280 Q 200 180 160 90" stroke="url(#goldGrad2)" strokeWidth="1" />

        <path d="M 310 160 C 230 80 240 0 320 -20" stroke="url(#goldGrad2)" strokeWidth="1.2" />

        <defs>
          <linearGradient id="goldGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ebd092" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#dfb86c" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#9a732a" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      {/* Mid Right Floating Leaf Art */}
      <svg
        className={`${styles.leafSvg} ${styles.midRight}`}
        viewBox="0 0 350 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 350 100 C 200 180 150 320 220 450 C 270 540 350 580 380 600" stroke="url(#goldGrad3)" strokeWidth="1.5" />
        <path d="M 220 450 C 130 420 80 480 110 540 C 150 590 200 520 220 450 Z" stroke="url(#goldGrad3)" strokeWidth="1.2" />
        <path d="M 240 310 C 160 260 120 180 170 120 C 220 80 260 200 240 310 Z" stroke="url(#goldGrad3)" strokeWidth="1.2" />

        <defs>
          <linearGradient id="goldGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dfb86c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#240d39" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ambient Radial Lights */}
      <div className={styles.radialGlowTopLeft}></div>
      <div className={styles.radialGlowBottomRight}></div>
    </div>
  );
};
