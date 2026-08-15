import React from 'react';
import { FileText, Zap, Flame, Leaf, Sparkles, Award } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './SupplementFacts.module.css';

export const SupplementFacts = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Supplement Facts",
      tableHeaders: ["Amount Serving", "% Daily Value"],
      ingredients: [
        { name: "Chromium (as Chromium Picolinate)", details: "", amount: "200 mcg", dv: "571%", iconType: "zap" },
        { name: "Garcinia Cambogia Extract", details: "(Standardized to 60% Hydroxycitric Acid)", amount: "300 mg", dv: "†", iconType: "flame" },
        { name: "Green Tea Extract", details: "(Standardized to 98% Polyphenols & 50% EGCG)", amount: "100 mg", dv: "†", iconType: "leaf" },
        { name: "Green Coffee Bean Extract", details: "(Standardized to 50% Chlorogenic Acids)", amount: "100 mg", dv: "†", iconType: "sparkles" },
        { name: "CBL-T®", details: "(Caralluma Fimbriata, Bitter Orange Peels, L-Tyrosine)", amount: "300 mg", dv: "†", iconType: "award" },
      ],
      footnote: "† Daily Value (DV) not established.",
      btnText: "B2B Request"
    },
    ar: {
      title: "الحقائق الغذائية",
      tableHeaders: ["الكمية لكل حصة", "القيمة اليومية %"],
      ingredients: [
        { name: "كروميوم (Chromium Picolinate)", details: "", amount: "200 mcg", dv: "571%", iconType: "zap" },
        { name: "مستخلص غارسينيا كامبوجيا", details: "(موحد بنسبة 60% حمض هيدروكسي سيتريك)", amount: "300 mg", dv: "†", iconType: "flame" },
        { name: "مستخلص الشاي الأخضر", details: "(موحد بنسبة 98% بوليفينول و 50% EGCG)", amount: "100 mg", dv: "†", iconType: "leaf" },
        { name: "مستخلص حبوب القهوة الخضراء", details: "(موحد بنسبة 50% أحماض الكلوروجينيك)", amount: "100 mg", dv: "†", iconType: "sparkles" },
        { name: "CBL-T®", details: "(Caralluma Fimbriata, Bitter Orange Peels, L-Tyrosine / كارالوما فيمبرياتا، قشور البرتقال المر، ل-تايروسين)", amount: "300 mg", dv: "†", iconType: "award" },
      ],
      footnote: "† القيمة اليومية (DV) غير محددة.",
      btnText: "طلب تعاقد للأطباء"
    }
  }[language];

  const getIngredientIcon = (type) => {
    switch (type) {
      case 'zap':
        return <Zap size={18} className={styles.ingredientIcon} />;
      case 'flame':
        return <Flame size={18} className={styles.ingredientIcon} />;
      case 'leaf':
        return <Leaf size={18} className={styles.ingredientIcon} />;
      case 'sparkles':
        return <Sparkles size={18} className={styles.ingredientIcon} />;
      case 'award':
      default:
        return <Award size={18} className={styles.ingredientIcon} />;
    }
  };

  return (
    <section className={styles.factsSection} id="facts">
      <div className="app-container">
        <div className={styles.tableContainer}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              <FileText size={22} className={styles.headerIcon} />
              <span>{content.title}</span>
            </h2>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>{content.tableHeaders[0]}</th>
                <th>{content.tableHeaders[1]}</th>
              </tr>
            </thead>
            <tbody>
              {content.ingredients.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <div className={styles.ingredientCell}>
                      {getIngredientIcon(item.iconType)}
                      <div className={styles.ingredientText}>
                        <strong>{item.name}</strong>
                        {item.details && <span className={styles.details}>• {item.details}</span>}
                      </div>
                    </div>
                  </td>
                  <td className={styles.amount}>{item.amount}</td>
                  <td className={styles.dv}>{item.dv}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.footer}>
            <p>{content.footnote}</p>
          </div>
        </div>

        <div className={styles.actionContainer}>
          <button
            className={styles.b2bBtn}
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {content.btnText}
          </button>
        </div>
      </div>
    </section>
  );
};
