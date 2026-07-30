import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './SupplementFacts.module.css';

export const SupplementFacts = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Supplement Facts",
      tableHeaders: ["Amount Serving", "% Daily Value"],
      ingredients: [
        { name: "Chromium (as Chromium Picolinate)", details: "", amount: "200 mcg", dv: "571%" },
        { name: "Garcinia Cambogia Extract", details: "(Standardized to 60% Hydroxycitric Acid)", amount: "300 mg", dv: "†" },
        { name: "Green Tea Extract", details: "(Standardized to 98% Polyphenols & 50% EGCG)", amount: "100 mg", dv: "†" },
        { name: "Green Coffee Bean Extract", details: "(Standardized to 50% Chlorogenic Acids)", amount: "100 mg", dv: "†" },
        { name: "CBL-T®", details: "", amount: "300 mg", dv: "†" },
      ],
      footnote: "† Daily Value (DV) not established.",
      btnText: "B2B Request"
    },
    ar: {
      title: "حقائق المكمل الغذائي",
      tableHeaders: ["الكمية لكل حصة", "القيمة اليومية %"],
      ingredients: [
        { name: "كروميوم (Chromium Picolinate)", details: "", amount: "200 mcg", dv: "571%" },
        { name: "مستخلص غارسينيا كامبوجيا", details: "(موحد بنسبة 60% حمض هيدروكسي سيتريك)", amount: "300 mg", dv: "†" },
        { name: "مستخلص الشاي الأخضر", details: "(موحد بنسبة 98% بوليفينول و 50% EGCG)", amount: "100 mg", dv: "†" },
        { name: "مستخلص حبوب القهوة الخضراء", details: "(موحد بنسبة 50% أحماض الكلوروجينيك)", amount: "100 mg", dv: "†" },
        { name: "CBL-T®", details: "", amount: "300 mg", dv: "†" },
      ],
      footnote: "† القيمة اليومية (DV) غير محددة.",
      btnText: "طلب تعاقد للأطباء"
    }
  }[language];

  return (
    <section className={styles.factsSection}>
      <div className="app-container">
        <div className={styles.tableContainer}>
          <div className={styles.header}>
            <h2 className={styles.title}>{content.title}</h2>
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
                    <strong>{item.name}</strong>
                    {item.details && <span className={styles.details}>• {item.details}</span>}
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
