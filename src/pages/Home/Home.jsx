import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Award, Leaf } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/Button/Button';
import { Card } from '../../components/ui/Card/Card';
import { About } from '../../components/sections/About/About';
import { CoreValues } from '../../components/sections/CoreValues/CoreValues';
import { SupplementFacts } from '../../components/sections/SupplementFacts/SupplementFacts';
import { OrderForm } from '../../components/sections/OrderForm/OrderForm';
import styles from './Home.module.css';

export const Home = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState("/images/main.png");

  const content = {
    en: {
      heroTitle: "Advanced Weight Management,\nPowered by Nature.",
      heroSubtitle: "Discover QZENDA, MQ Nature's premium weight management formula, carefully developed with scientifically selected ingredients to support healthy weight goals.",
      shopBtn: "Shop QZENDA",
      learnBtn: "Learn More",
      badges: ["Formulated in the USA", "cGMP Manufactured", "Non-GMO Ingredients"],
      featuresTitle: "Why Choose QZENDA?",
      features: [
        { title: "Potent Ingredients", desc: "Clinically recognized ingredients." },
        { title: "Boost Metabolism", desc: "Supports your body's natural metabolic activity." },
        { title: "Promotes Satiety", desc: "Helps you stay satisfied longer." }
      ],
      galleryTitle: "Discover the QZENDA Difference",
      gallerySubtitle: "QZENDA is MQ Nature's flagship weight management formula. Formulated in the USA and cGMP certified, combining 5 synergistic natural extracts to support metabolism, control appetite, and sustain daily energy."
    },
    ar: {
      heroTitle: "إدارة وزن متقدمة،\nمدفوعة بالطبيعة.",
      heroSubtitle: "اكتشف QZENDA، تركيبة MQ Nature المتميزة لإدارة الوزن، والمطورة بعناية باستخدام مكونات مختارة علمياً لدعم أهداف الوزن الصحي.",
      shopBtn: "تسوق QZENDA",
      learnBtn: "اعرف المزيد",
      badges: ["تمت صياغته في الولايات المتحدة", "مصنع وفق معايير cGMP", "مكونات غير معدلة وراثيًا"],
      featuresTitle: "لماذا تختار QZENDA؟",
      features: [
        { title: "مكونات فعالة", desc: "مكونات معروفة سريريًا." },
        { title: "دعم الأيض", desc: "يدعم النشاط الطبيعي لعملية الأيض." },
        { title: "تعزيز الشبع", desc: "يساعدك على الشعور بالشبع لفترة أطول." }
      ],
      galleryTitle: "اكتشف فرق QZENDA",
      gallerySubtitle: "QZENDA هي تركيبة MQ Nature الرائدة لإدارة الوزن. صُممت في الولايات المتحدة ومعتمدة وفق معايير cGMP، تجمع بين 5 خلاصة طبيعية لدعم الأيض والتحكم بالشهية."
    }
  }[language];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero} id="home">
        <div className={`app-container ${styles.heroContainer}`}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>{content.heroTitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</h1>
            <p className={styles.subtitle}>
              {content.heroSubtitle.split('QZENDA').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-gradient" style={{ color: 'var(--color-accent)' }}>QZENDA</span>}
                </React.Fragment>
              ))}
            </p>

            <div className={styles.actions}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {content.shopBtn}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {content.learnBtn}
              </Button>
            </div>

            <div className={styles.badges}>
              {content.badges.map((badge, idx) => {
                const icons = [<ShieldCheck size={20} key={0} />, <Award size={20} key={1} />, <Leaf size={20} key={2} />];
                return (
                  <div key={idx} className={styles.badgeCard}>
                    <div className={styles.badgeHeader}>
                      <span className={styles.badgeIcon}>{icons[idx]}</span>
                      <span className={styles.badgeNum}>0{idx + 1}</span>
                    </div>
                    <strong className={styles.badgeText}>{badge}</strong>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/images/main.png"
              alt="QZENDA Product"
              className={styles.heroImage}
              onClick={() => setSelectedImage("/images/main.png")}
              style={{ cursor: 'pointer' }}
            />
            <div className={styles.backdropGlow}></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Features Section */}
      <section className={styles.features} id="products">
        <div className="app-container">
          <h2 className={styles.sectionTitle}>{content.featuresTitle}</h2>
          <div className={styles.grid}>
            {content.features.map((feature, idx) => (
              <Card key={idx} hoverable>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <CoreValues />

      {/* Supplement Facts Section */}
      <SupplementFacts />

      {/* Image Gallery Section */}
      <section className={styles.gallery}>
        <div className="app-container">
          <div className={styles.galleryHeader}>
            <h2>{content.galleryTitle}</h2>
            <p>{content.gallerySubtitle}</p>
          </div>
          <div className={styles.galleryShowcase}>
            <div className={styles.mainImageContainer}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeGalleryImage}
                  src={activeGalleryImage}
                  alt="QZENDA Product Showcase"
                  className={styles.mainGalleryImage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(activeGalleryImage)}
                />
              </AnimatePresence>
            </div>

            <div className={styles.thumbnailList}>
              {["/images/main.png", "/images/new 1.png", "/images/new 2.png", "/images/mew 4.png", "/images/Selected1.png"].map((src, idx) => (
                <button
                  key={idx}
                  className={`${styles.thumbnailBtn} ${activeGalleryImage === src ? styles.activeThumbnail : ''}`}
                  onClick={() => setActiveGalleryImage(src)}
                >
                  <img src={src} alt={`Thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <OrderForm />

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className={styles.modalClose} onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              className={styles.modalImage}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
