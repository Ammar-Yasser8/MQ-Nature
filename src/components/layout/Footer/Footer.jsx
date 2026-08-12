import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './Footer.module.css';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      desc: "Your smarter partner for healthy weight management.",
      links: ["Home", "Products", "About Us", "Contact"],
      rights: "© 2026 MQ Nature. All rights reserved."
    },
    ar: {
      desc: "شريكك الأذكى لإدارة الوزن بطريقة صحية.",
      links: ["الرئيسية", "المنتجات", "من نحن", "اتصل بنا"],
      rights: "© 2026 MQ Nature. جميع الحقوق محفوظة."
    }
  }[language];

  return (
    <footer className={styles.footer}>
      <div className={`app-container ${styles.footerContainer}`}>
        <div className={styles.brandInfo}>
          <div className={styles.logo}>
            <img src="/images/logo-removebg-preview.png" alt="MQ Nature Logo" className={styles.logoImg} />
            <span className={styles.brandName}>MQ Nature</span>
          </div>
          <p className={styles.desc}>{content.desc}</p>
        </div>
        
        <div className={styles.links}>
          {content.links.map((link, i) => (
            <a key={i} href="#" className={styles.link}>{link}</a>
          ))}
          <a href="tel:01080898888" className={styles.link}>📞 01080898888</a>
          <a 
            href="https://wa.me/201080898888" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.whatsappFooterLink}
          >
            WhatsApp ↗
          </a>
          <a 
            href="https://www.facebook.com/share/1CwFtHf6S7/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.facebookFooterLink}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <FacebookIcon size={18} />
            Facebook
          </a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="app-container">
          <p>{content.rights}</p>
        </div>
      </div>
    </footer>
  );
};
