import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Moon, Sun, Lock } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useTheme } from '../../../contexts/ThemeContext';
import { Button } from '../../ui/Button/Button';
import styles from './Header.module.css';

export const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = {
    en: { 
      topBar: 'Hospital & Clinic Exclusive Product',
      home: 'Home', 
      trials: 'Clinical Trials', 
      howItWorks: 'How It Works', 
      facts: 'Supplement Facts', 
      contact: 'Contact Us' 
    },
    ar: { 
      topBar: 'منتج حصري للمستشفيات والمراكز الطبية المعتمدة',
      home: 'الرئيسية', 
      trials: 'التجارب السريرية', 
      howItWorks: 'آلية العمل', 
      facts: 'الحقائق الغذائية', 
      contact: 'تواصل معنا' 
    }
  }[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Exclusive Top Bar */}
      <div className={styles.topBar}>
        <div className={`app-container ${styles.topBarContainer}`}>
          <span className={styles.topBarText}>
            <Lock size={14} className={styles.lockIcon} />
            {t.topBar}
          </span>
        </div>
      </div>

      <div className={`app-container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <img src="/images/logo-removebg-preview.png" alt="MQ Nature Logo" className={styles.logoImg} />
          <span className={styles.brandName}>MQ Nature</span>
        </div>

        <nav className={styles.desktopNav}>
          <a href="#home">{t.home}</a>
          <a href="#about">{t.trials}</a>
          <a href="#advantage">{t.howItWorks}</a>
          <a href="#facts">{t.facts}</a>
          <a href="#order">{t.contact}</a>
        </nav>

        <div className={styles.actions}>
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className={styles.langToggle}>
            <Globe size={18} />
            {language === 'en' ? 'عربي' : 'EN'}
          </Button>
          
          <button className={styles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav 
            className={styles.mobileNav}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>{t.home}</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>{t.trials}</a>
            <a href="#advantage" onClick={() => setIsMobileMenuOpen(false)}>{t.howItWorks}</a>
            <a href="#facts" onClick={() => setIsMobileMenuOpen(false)}>{t.facts}</a>
            <a href="#order" onClick={() => setIsMobileMenuOpen(false)}>{t.contact}</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

