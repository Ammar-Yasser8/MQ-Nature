import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
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
    en: { home: 'Home', products: 'Products', about: 'About', contact: 'Contact' },
    ar: { home: 'الرئيسية', products: 'المنتجات', about: 'من نحن', contact: 'اتصل بنا' }
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
      <div className={`app-container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <img src="/images/logo.jpeg" alt="MQ Nature Logo" className={styles.logoImg} />
          <span className={styles.brandName}>MQ Nature</span>
        </div>

        <nav className={styles.desktopNav}>
          <a href="#home">{t.home}</a>
          <a href="#products">{t.products}</a>
          <a href="#about">{t.about}</a>
          <a href="#contact">{t.contact}</a>
        </nav>

        <div className={styles.actions}>
          <Button variant="ghost" size="sm" onClick={toggleTheme} className={styles.themeToggle}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
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
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>{t.products}</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>{t.about}</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t.contact}</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
