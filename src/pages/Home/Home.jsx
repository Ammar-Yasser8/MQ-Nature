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
      heroTitle: "Advanced Medical Formula\nfor Maximum Efficacy",
      heroSubtitle: "Scientifically formulated and clinically proven to support your metabolic goals with the highest standards of US purity.",
      shopBtn: "For Healthcare Professionals / Find Clinic",
      learnBtn: "Clinical Trials",
      badges: ["Formulated in USA", "cGMP Certified", "Non-GMO Project"],
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
          img: "/images/1.png"
        },
        {
          id: 2,
          title: "Daily Wellness Routine",
          desc: "Designed for seamless incorporation into your daily health regimen.",
          img: "/images/2.jpeg"
        },
        {
          id: 3,
          title: "Pure Capsule Showcase",
          desc: "Precision manufacturing with 100% bioavailable ingredients.",
          img: "/images/3.png"
        }
      ]
    },
    ar: {
      heroTitle: "تركيبة طبية متطورة\nلأقصى درجات الفعالية",
      heroSubtitle: "مُصمم علمياً ومثبت سريرياً بأعلى معايير النقاء والجودة الأمريكية لدعم أهدافك الصحية.",
      shopBtn: "ابحث عن عيادة معتمدة / للمتخصصين",
      learnBtn: "التجارب السريرية",
      badges: ["Formulated in USA", "cGMP Certified", "Non-GMO Project"],
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
          img: "/images/1.png"
        },
        {
          id: 2,
          title: "الاستخدام اليومي والصحي",
          desc: "مصمم ليتوافق بسلاسة مع نظامك الغذائي اليومي.",
          img: "/images/2.jpeg"
        },
        {
          id: 3,
          title: "عرض الكبسولة النقية",
          desc: "تصنيع دقيق بمكونات طبيعية 100% عالية الامتصاص.",
          img: "/images/3.png"
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


