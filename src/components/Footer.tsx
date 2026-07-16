import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  currentLanguage: Language;
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ currentLanguage, onNavigate }: FooterProps) {
  const isRTL = currentLanguage === 'ar';

  const quickLinks = [
    { id: 'hero', ar: 'الرئيسية', en: 'Home' },
    { id: 'about', ar: 'من نحن', en: 'About Founder' },
    { id: 'services', ar: 'خدماتنا العلاجية', en: 'Our Services' },
    { id: 'cases', ar: 'الحالات والنتائج', en: 'Case Studies' },
    { id: 'booking', ar: 'حجز موعد جديد', en: 'Book Consultation' },
    { id: 'faq', ar: 'الأسئلة الشائعة', en: 'FAQs Desk' },
  ];

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-8 border-t border-slate-800" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Clinic Brand Column (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white tracking-wide">
                  {isRTL ? "عـيادة نـور" : "NOUR CLINIC"}
                </span>
                <span className="text-[10px] text-brand-sky font-medium tracking-widest leading-none">
                  {isRTL ? "مركز البروفيسور أحمد عادل" : "PROF. AHMED ADEL CENTER"}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mt-2">
              {isRTL 
                ? "تأسس المركز عام 1988 كأول صرح طبي تخصصي مكرس لزراعة الشعر التجميلية للرجال وعلاجات الليزر والترميم المتقدمة للجروح وقرح السكري الصعبة."
                : "Established in 1988 as Egypt's premier medical hub specialized in male hair restoration and non-invasive laser wound debridement protocols."}
            </p>

            {/* Quality Badges */}
            <div className="pt-4 flex items-center space-x-3 space-x-reverse">
              <ShieldCheck className="w-5 h-5 text-brand-primary" />
              <span className="text-[11px] text-slate-400 uppercase tracking-widest">
                {isRTL ? "مؤسسة طبية مرخصة بالكامل" : "Fully Licensed Healthcare Provider"}
              </span>
            </div>
          </div>

          {/* Quick links Column (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              {isRTL ? "روابط سريعة" : "Navigation Links"}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-right block"
                    id={`footer-link-${link.id}`}
                  >
                    {isRTL ? link.ar : link.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              {isRTL ? "معلومات الاتصال" : "Contact Desk"}
            </h4>
            
            <ul className="space-y-4 text-xs">
              <li className="flex items-start">
                <MapPin className="w-4.5 h-4.5 text-brand-primary shrink-0 ml-2 mr-1" />
                <span>
                  {isRTL 
                    ? "شارع الطيران، بجوار مستشفى التأمين الصحي، مدينة نصر، القاهرة، مصر" 
                    : "El-Tayaran St, Adjacent to Health Insurance Hospital, Nasr City, Cairo, Egypt"}
                </span>
              </li>
              
              <li className="flex items-center">
                <Phone className="w-4.5 h-4.5 text-brand-primary shrink-0 ml-2 mr-1" />
                <a href="tel:+20102345678" className="hover:text-white transition-colors">
                  +20 100 123 4567
                </a>
              </li>

              <li className="flex items-center">
                <Mail className="w-4.5 h-4.5 text-brand-primary shrink-0 ml-2 mr-1" />
                <a href="mailto:info@nour-clinic.com" className="hover:text-white transition-colors">
                  info@nour-clinic.com
                </a>
              </li>

              <li className="flex items-start">
                <Clock className="w-4.5 h-4.5 text-brand-primary shrink-0 ml-2 mr-1" />
                <div>
                  <p className="font-semibold text-white">{isRTL ? "مواعيد العمل الرسمية:" : "Active Hours:"}</p>
                  <p className="text-slate-400 mt-1">{isRTL ? "السبت - الأربعاء (12 مساءً - 9 مساءً)" : "Sat - Wed (12:00 PM - 09:00 PM)"}</p>
                  <p className="text-slate-400">{isRTL ? "الخميس (12 مساءً - 6 مساءً)" : "Thu (12:00 PM - 06:00 PM)"}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Maps Block (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4" id="footer-map-column">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              {isRTL ? "خريطة الوصول للعيادة" : "Clinical Map Location"}
            </h4>
            <div className="w-full h-40 rounded-xl overflow-hidden border border-slate-800 shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.9231454593444!2d31.3283287!3d30.0605174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e44510065a3%3A0xc4897f1fbc711da!2sTayaran%20St%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                id="google-maps-iframe"
                title="Nour Clinic Cairo Location Map"
              />
            </div>
          </div>

        </div>

        {/* Sub-footer copyright */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 text-center sm:text-right" id="sub-footer-copyright-panel">
          <p>
            &copy; {new Date().getFullYear()} {isRTL ? "عيادة نور للتجميل وزراعة الشعر. جميع الحقوق محفوظة." : "Nour Cosmetic & Hair Restoration Clinic. All rights reserved."}
          </p>
          <p className="flex items-center justify-center mt-2 sm:mt-0 gap-1.5">
            <span>{isRTL ? "رعاية طبية تجميلية بامتياز وشرف مهني" : "Ethical, premium cosmetic healthcare since 1988"}</span>
            <Heart className="w-3.5 h-3.5 text-brand-primary fill-brand-primary" />
          </p>
        </div>

      </div>
    </footer>
  );
}
