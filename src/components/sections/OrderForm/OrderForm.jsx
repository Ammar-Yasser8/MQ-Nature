import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './OrderForm.module.css';

export const OrderForm = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Place an Order",
      subtitle: "Interested in QZENDA for your clinic or personal use? Reach out to us.",
      contactEmail: "Email us at: ",
      contactPhone: "Call or WhatsApp: ",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        quantity: "Quantity",
        message: "Message / Additional Notes",
        submit: "Submit Order Request"
      }
    },
    ar: {
      title: "اطلب الآن",
      subtitle: "هل أنت مهتم بتوفير QZENDA لعيادتك أو للاستخدام الشخصي؟ تواصل معنا.",
      contactEmail: "راسلنا على: ",
      contactPhone: "اتصل أو واتساب: ",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        quantity: "الكمية المطلوبة",
        message: "رسالة / ملاحظات إضافية",
        submit: "إرسال طلب الشراء"
      }
    }
  }[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const quantity = formData.get('quantity') || '1';
    const notes = formData.get('notes') || '';

    const text = language === 'ar' 
      ? `مرحباً، أود تقديم طلب شراء لمنتج QZENDA:\n\n👤 *الاسم:* ${name}\n📧 *البريد الإلكتروني:* ${email}\n📞 *رقم الهاتف:* ${phone}\n📦 *الكمية المطلوبة:* ${quantity}\n📝 *ملاحظات إضافية:* ${notes}`
      : `Hello, I would like to place an order for QZENDA:\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📞 *Phone:* ${phone}\n📦 *Quantity:* ${quantity}\n📝 *Notes:* ${notes}`;

    const whatsappUrl = `https://wa.me/201080898888?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={styles.orderSection} id="order">
      <div className={`app-container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
          <div className={styles.contactLinks}>
            <p className={styles.phoneText}>
              <Phone size={18} />
              <span>{content.contactPhone}</span>
              <a href="tel:01080898888" className={styles.phoneLink}>01080898888</a>
            </p>
            
            <a 
              href="https://wa.me/201080898888" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappBtn}
            >
              <MessageSquare size={18} />
              <span>Chat on WhatsApp</span>
            </a>

            <p className={styles.emailText}>
              {content.contactEmail} 
              <a href="mailto:mqnature@outlook.com" className={styles.emailLink}>mqnature@outlook.com</a>
            </p>

            <p className={styles.socialText}>
              <a 
                href="https://www.facebook.com/share/1CwFtHf6S7/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.facebookLink}
              >
                Facebook Page ↗
              </a>
            </p>
          </div>
        </div>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>{content.form.name}</label>
              <input type="text" name="name" required placeholder="John Doe" />
            </div>
            <div className={styles.field}>
              <label>{content.form.email}</label>
              <input type="email" name="email" required placeholder="john@example.com" />
            </div>
          </div>
          
          <div className={styles.row}>
            <div className={styles.field}>
              <label>{content.form.phone}</label>
              <input type="tel" name="phone" required placeholder="01080898888" />
            </div>
            <div className={styles.field}>
              <label>{content.form.quantity}</label>
              <input type="number" name="quantity" min="1" defaultValue="1" required />
            </div>
          </div>

          <div className={styles.field}>
            <label>{content.form.message}</label>
            <textarea name="notes" rows="4" placeholder="..."></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>{content.form.submit}</button>
        </form>
      </div>
    </section>
  );
};
