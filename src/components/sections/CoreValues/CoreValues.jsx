import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './CoreValues.module.css';

export const CoreValues = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Our Core Values",
      values: [
        { title: "Science-Driven Efficacy", desc: "MQNature advanced nutritional supplements." },
        { title: "Ultra-Premium Quality", desc: "Develop ultra-premium human supplements." },
        { title: "Compliance & Integrity", desc: "Adheres to globally recognized US quality standards." },
        { title: "Exclusive Partnership", desc: "Support medical professionals." }
      ]
    },
    ar: {
      title: "قيمنا الأساسية",
      values: [
        { title: "العلم والدليل أولاً", desc: "مكملات غذائية متقدمة من MQNature." },
        { title: "الجودة فائقة المستوى", desc: "تطوير مكملات غذائية بشرية فائقة الجودة." },
        { title: "الامتثال والنزاهة", desc: "الالتزام بمعايير الجودة الأمريكية المعروفة عالمياً." },
        { title: "الشراكة الحصرية", desc: "دعم المتخصصين في المجال الطبي." }
      ]
    }
  }[language];

  return (
    <section className={styles.coreValues}>
      <div className="app-container">
        <h2 className={styles.title}>{content.title}</h2>
        <div className={styles.grid}>
          {content.values.map((val, idx) => (
            <motion.div
              key={idx}
              className={styles.valueCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className={styles.cardTitle}>{val.title}</h3>
              <p className={styles.cardDesc}>{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
