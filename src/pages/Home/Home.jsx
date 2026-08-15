import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Award, Leaf, ZoomIn } from 'lucide-react';
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

  const content = {
    en: {
      heroTitle: "The Ultimate Dual-Action Formula for Maximum Satiety and Metabolic Rate",
      heroSubtitle: "Formulated & Certified by US FDA",
      shopBtn: "For Healthcare Professionals / Find Clinic",
      learnBtn: "Clinical Trials",
      badges: [
        { title: "KETO APPROVED", desc: "Keto Friendly Seal", iconType: "keto" },
        { title: "cGMP Certified", desc: "Current Good Practice", iconType: "cgmp" },
        { title: "NON-GMO Project", desc: "Verified Non-GMO", iconType: "nongmo" },
        { title: "Formulated in USA", desc: "US Quality Standards", iconType: "usa" }
      ],
      advantageTitle: "The Qzenda Advantage: Science & Purity",
      advantageCards: [
        {
          title: "Metabolic Acceleration",
          img: "/images/Metabolic.png",
          alt: "Metabolic Acceleration Diagram"
        },
        {
          title: "Appetite Regulation",
          img: "/images/AppetiteRegultion.png",
          alt: "Appetite Regulation Diagram"
        },
        {
          title: "Bioavailable Ingredients",
          img: "/images/BioavilableIngredilents.png",
          alt: "Bioavailable Ingredients Diagram"
        },
        {
          title: "Natural Origins",
          img: "/images/NaturalOrigins.png",
          alt: "Natural Origins Diagram"
        }
      ],
      featuresTitle: "Why Choose QZENDA?",
      features: [
        { title: "Targeted Mechanism of Action", desc: "Clinically recognized targeted formula." },
        { title: "Pharmaceutical Grade Purity", desc: "Highest standards of US manufacturing & purity." },
        { title: "#1 Doctor Recommended", desc: "Trusted by specialized healthcare professionals." }
      ],
      galleryTitle: "Discover the QZENDA Difference",
      gallerySubtitle: "QZENDA is MQ Nature's flagship medical-grade formula. Formulated in the USA and cGMP certified, combining 5 synergistic natural extracts to support metabolism, control appetite, and sustain daily energy.",
      galleryItems: [
        {
          id: 1,
          title: "Complete Composition & Facts",
          desc: "Full formula breakdown with blister capsule packaging.",
          img: "/images/new_image1.PNG"
        },
        {
          id: 2,
          title: "Daily Wellness Routine",
          desc: "Designed for seamless incorporation into your daily health regimen.",
          img: "/images/newimage2.PNG"
        },
        {
          id: 3,
          title: "Pure Capsule Showcase",
          desc: "Precision manufacturing with 100% bioavailable ingredients.",
          img: "/images/newimge3.PNG"
        }
      ]
    },
    ar: {
      heroTitle: "التركيبة المثالية مزدوجة المفعول لتحقيق أقصى درجات الشبع وتعزيز حرق الدهون",
      heroSubtitle: "مُطوَّرة ومعتمدة من قِبَل إدارة الغذاء والدواء الأمريكية (FDA).",
      shopBtn: "ابحث عن عيادة معتمدة / للمتخصصين",
      learnBtn: "التجارب السريرية",
      badges: [
        { title: "KETO APPROVED", desc: "معتمد كيتو", iconType: "keto" },
        { title: "cGMP Certified", desc: "معيار جودة التصنيع الدوائي", iconType: "cgmp" },
        { title: "NON-GMO Project", desc: "خالٍ من التعديل الوراثي", iconType: "nongmo" },
        { title: "Formulated in USA", desc: "معتمد ومصنع بالولايات المتحدة", iconType: "usa" }
      ],
      advantageTitle: "آلية العمل | نقاء دوائي فائق",
      advantageCards: [
        {
          title: "تسريع عملية الأيض",
          img: "/images/Metabolic.png",
          alt: "تسريع عملية الأيض"
        },
        {
          title: "تنظيم الشهية",
          img: "/images/AppetiteRegultion.png",
          alt: "تنظيم الشهية"
        },
        {
          title: "مكونات عالية الامتصاص",
          img: "/images/BioavilableIngredilents.png",
          alt: "مكونات عالية الامتصاص"
        },
        {
          title: "مصادر طبيعية 100%",
          img: "/images/NaturalOrigins.png",
          alt: "مصادر طبيعية"
        }
      ],
      featuresTitle: "لماذا تختار QZENDA؟",
      features: [
        { title: "آلية عمل موجهة", desc: "تركيبة محددة الأهداف ومثبتة سريرياً." },
        { title: "نقاء دوائي فائق", desc: "أعلى معايير النقاء والجودة الأمريكية." },
        { title: "الخيار الأول للأطباء", desc: "موثوق من قبل الأطباء والمتخصصين في الرعاية الصحية." }
      ],
      galleryTitle: "اكتشف فرق QZENDA",
      gallerySubtitle: "QZENDA هي تركيبة MQ Nature الرائدة لإدارة الوزن. صُممت في الولايات المتحدة ومعتمدة وفق معايير cGMP، تجمع بين 5 خلاصة طبيعية لدعم الأيض والتحكم بالشهية.",
      galleryItems: [
        {
          id: 1,
          title: "التركيبة الشاملة والحقائق الغذائية",
          desc: "عرض تفصيلي للغلاف والشريط الدوائي المعتمد.",
          img: "/images/new_image1.PNG"
        },
        {
          id: 2,
          title: "الاستخدام اليومي والصحي",
          desc: "مصمم ليتوافق بسلاسة مع نظامك الغذائي اليومي.",
          img: "/images/newimage2.PNG"
        },
        {
          id: 3,
          title: "عرض الكبسولة النقية",
          desc: "تصنيع دقيق بمكونات طبيعية 100% عالية الامتصاص.",
          img: "/images/newimge3.PNG"
        }
      ]
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
                  {i < arr.length - 1 && <span className="text-gradient" style={{ color: 'var(--color-gold)' }}>QZENDA</span>}
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
                const getLogoIcon = (type) => {
                  switch (type) {
                    case 'keto':
                      return <img src="/images/slogan.PNG" alt="Keto Approved Logo" style={{ width: '42px', height: '42px', objectFit: 'contain' }} />;
                    case 'cgmp':
                      return <img src="/images/GMPSlogan.png" alt="cGMP Certified Logo" style={{ width: '42px', height: '42px', objectFit: 'contain' }} />;
                    case 'nongmo':
                      return <img src="/images/nonGemo.png" alt="NON-GMO Project Logo" style={{ width: '42px', height: '42px', objectFit: 'contain' }} />;
                    case 'usa':
                    default:
                      return (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="5" width="20" height="14" rx="2" />
                          <line x1="2" y1="10" x2="22" y2="10" />
                          <line x1="2" y1="14" x2="22" y2="14" />
                          <rect x="2" y="5" width="8" height="5" fill="currentColor" opacity="0.3" />
                        </svg>
                      );
                  }
                };

                return (
                  <div key={idx} className={styles.badgeCard}>
                    <div className={styles.badgeHeader}>
                      <span className={styles.badgeIcon}>{getLogoIcon(badge.iconType)}</span>
                      <span className={styles.badgeNum}>0{idx + 1}</span>
                    </div>
                    <strong className={styles.badgeText}>{badge.title}</strong>
                    <span className={styles.badgeDesc}>{badge.desc}</span>
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
              src="/images/HomeImage.png"
              alt="QZENDA Product"
              className={styles.heroImage}
              onClick={() => setSelectedImage("/images/HomeImage.png")}
              style={{ cursor: 'pointer' }}
            />
            <div className={styles.backdropGlow}></div>
          </motion.div>
        </div>
      </section>

      {/* The Qzenda Advantage: Science & Purity Section */}
      <section className={styles.advantageSection} id="advantage">
        <div className="app-container">
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            {content.advantageTitle}
          </motion.h2>

          <div className={styles.advantageGrid}>
            {content.advantageCards.map((card, idx) => (
              <motion.div
                key={idx}
                className={styles.advantageCard}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onClick={() => setSelectedImage(card.img)}
              >
                <div className={styles.advantageImgContainer}>
                  <img src={card.img} alt={card.alt} className={styles.advantageImg} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Why Choose QZENDA Features Section */}
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
      <div id="facts">
        <SupplementFacts />
      </div>

      {/* Discover the QZENDA Difference Section - Premium 3-Image Showcase (1, 2, 3) */}
      <section className={styles.differenceGallery}>
        <div className="app-container">
          <div className={styles.galleryHeader}>
            <h2>{content.galleryTitle}</h2>
            <p>{content.gallerySubtitle}</p>
          </div>

          <div className={styles.threeCardGrid}>
            {content.galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                className={styles.showcaseCard}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onClick={() => setSelectedImage(item.img)}
              >
                <div className={styles.showcaseBadge}>Image 0{item.id}</div>
                <div className={styles.showcaseImgWrapper}>
                  <img src={item.img} alt={item.title} className={styles.showcaseImg} />
                  <div className={styles.zoomHoverOverlay}>
                    <ZoomIn size={28} className={styles.zoomIcon} />
                  </div>
                </div>
                <div className={styles.showcaseContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
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


