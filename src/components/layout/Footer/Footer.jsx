import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './Footer.module.css';

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
            <img src="/images/logo.jpeg" alt="MQ Nature Logo" className={styles.logoImg} />
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
          >
            Facebook ↗
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
