import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './About.module.css';

export const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      aboutTitle: "About Us",
      aboutHeadline: "Where Nature Meets Science",
      aboutDesc: "At MQ Nature, we believe that true wellness begins where the purity of nature meets the precision of modern science. We specialize in developing premium nutritional supplements designed to support healthier lives through innovative, science-backed formulations.",
      visionTitle: "Our Vision",
      visionDesc: "To become the gold standard and the most trusted name in premium nutritional and therapeutic supplements across the Middle East, establishing MQ Nature as a symbol of scientific credibility, manufacturing excellence, and clinically trusted results.",
      missionTitle: "Our Mission",
      missionDesc: "To empower people to achieve healthier lives by providing intelligent, integrated, evidence-based nutritional solutions. We are committed to supporting healthcare professionals and specialized medical centers through long-term strategic partnerships."
    },
    ar: {
      aboutTitle: "من نحن",
      aboutHeadline: "حيث تلتقي الطبيعة مع العلم",
      aboutDesc: "في MQ Nature نؤمن بأن العافية الحقيقية تبدأ عندما تلتقي نقاوة الطبيعة مع صرامة العلم الحديث. نحن شركة متخصصة في تطوير المكملات الغذائية الفاخرة، حيث نكرس جهودنا لتقديم حلول صحية مبتكرة تعتمد بالكامل على تركيبات علمية.",
      visionTitle: "رؤيتنا",
      visionDesc: "أن نصبح المعيار الذهبي والأكثر موثوقية في قطاع المكملات الغذائية والعلاجية البريميوم في منطقة الشرق الأوسط، وأن ترتبط الهوية المؤسسية لـ MQ Nature في أذهان الأطباء والمستهلكين بالشرعية العلمية المطلقة والفخامة التصنيعية.",
      missionTitle: "رسالتنا",
      missionDesc: "تمكين الأفراد من الارتقاء بجودة حياتهم الصحية عبر توفير حلول غذائية ذكية، متكاملة، ومبنية على الدليل العلمي. نتحرك بشغف لدعم المجتمع الطبي والمراكز العلاجية المعتمدة من خلال علاقات شراكة حصرية ومستدامة."
    }
  }[language];

  return (
    <section className={styles.aboutSection} id="about">
      <div className={`app-container ${styles.container}`}>
        
        {/* Main About Block */}
        <motion.div 
          className={styles.mainBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>{content.aboutTitle}</span>
          <h2 className={styles.headline}>{content.aboutHeadline}</h2>
          <p className={styles.desc}>{content.aboutDesc}</p>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className={styles.grid}>
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.iconWrapper}>
              {/* Optional SVG Icon for Vision */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3 className={styles.cardTitle}>{content.visionTitle}</h3>
            <p className={styles.cardDesc}>{content.visionDesc}</p>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.iconWrapper}>
              {/* Optional SVG Icon for Mission */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7 3-5"/><path d="m5 17 3 5"/><path d="m19 7-3-5"/><path d="m19 17-3 5"/></svg>
            </div>
            <h3 className={styles.cardTitle}>{content.missionTitle}</h3>
            <p className={styles.cardDesc}>{content.missionDesc}</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
