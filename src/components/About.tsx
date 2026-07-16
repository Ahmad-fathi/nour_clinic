import { motion } from 'motion/react';
import { Award, ShieldCheck, GraduationCap, Users } from 'lucide-react';
import { doctorData } from '../data';
import { Language } from '../types';

interface AboutProps {
  currentLanguage: Language;
}

export default function About({ currentLanguage }: AboutProps) {
  const isRTL = currentLanguage === 'ar';

  const iconsList = [GraduationCap, Award, Users, ShieldCheck];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-ice/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3.5 py-1.5 rounded-full">
            {isRTL ? "مؤسس عيادة نور" : "Nour Clinic Founder"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-4 mb-4">
            {isRTL ? "من نحن وما نؤمن به" : "Who We Are & What We Stand For"}
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        </div>

        {/* Founder Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Doctor Portrait Image */}
          <div className="lg:col-span-5 flex justify-center" id="founder-photo-container">
            <div className="relative w-full max-w-md">
              {/* Outer frame */}
              <div className="absolute inset-4 border-2 border-brand-sky rounded-2xl -z-10 translate-x-4 translate-y-4" />
              
              <img 
                src={doctorData.image} 
                alt={isRTL ? doctorData.name.ar : doctorData.name.en} 
                className="w-full h-auto object-cover rounded-2xl shadow-xl border border-white"
                referrerPolicy="no-referrer"
                id="doctor-portrait-img"
              />
              
              <div className="absolute bottom-4 right-4 left-4 bg-brand-navy/95 backdrop-blur-sm text-white px-5 py-4 rounded-xl shadow-lg border border-white/10 text-right">
                <p className="text-base font-bold leading-tight text-white">{isRTL ? doctorData.name.ar : doctorData.name.en}</p>
                <p className="text-[11px] text-brand-sky mt-1">{isRTL ? doctorData.title.ar : doctorData.title.en}</p>
              </div>
            </div>
          </div>

          {/* Bio & Professional Experience */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="founder-bio-text">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">
              {isRTL ? doctorData.name.ar : doctorData.name.en}
            </h3>
            <p className="text-sm font-bold text-brand-primary mb-6">
              {isRTL ? doctorData.title.ar : doctorData.title.en}
            </p>
            
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              {isRTL ? doctorData.bio.ar : doctorData.bio.en}
            </p>

            {/* Achievements Checklist */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-brand-navy border-b border-slate-200 pb-2">
                {isRTL ? "أبرز الإنجازات والاعتمادات الطبية" : "Key Clinical Achievements"}
              </h4>
              <ul className="space-y-3">
                {doctorData.achievements[currentLanguage].map((ach, idx) => {
                  return (
                    <li key={`ach-${idx}`} className="flex items-start text-sm text-slate-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-ice text-brand-primary font-bold text-xs mt-0.5 mx-3 shrink-0">
                        ✓
                      </span>
                      <span>{ach}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

        </div>

        {/* Heritage Section (Clinic Gold Logo block) */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Logo Image Column */}
            <div className="relative min-h-[300px]" id="logo-mockup-column">
              <img 
                src="/src/assets/images/nour_clinic_logo_1784210220026.jpg" 
                alt="Nour Clinic Heritage" 
                className="absolute inset-0 w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                id="gold-logo-img"
              />
              <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply" />
            </div>

            {/* Text details */}
            <div className="p-8 sm:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-slate-50/50">
              <span className="text-[10px] uppercase font-bold text-brand-steel tracking-widest mb-2 block">
                {isRTL ? "عراقة وجودة تجميلية" : "LUXURY & CLINICAL HERITAGE"}
              </span>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                {isRTL ? "شعارنا: رعاية طبية تجميلية بلمسة فنية ممتازة" : "Nour Clinic - A Brief Overview"}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {isRTL 
                  ? "على مدى ثلاثة عقود، التزمنا في عيادة نور بأعلى معايير التميز الطبي والإنساني. نسعى دوماً لتوسيع نطاق خدماتنا وتوفير أحدث التقنيات لنضمن لمرضانا تجربة علاجية مريحة آمنة تنعكس إيجاباً على جودة حياتهم، من خلال فريق طبي استشاري وتمريضي على أعلى مستوى من التدريب."
                  : "For over three decades, we have remained strictly committed to the highest standards of professional excellence. Our dedicated team continues to widen the scope of medical and regenerative services offered to reflect the evolving needs of our vast array of patients."}
              </p>

              {/* Grid of micro stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-brand-primary text-lg font-bold">1988</span>
                  <span className="text-xs text-slate-500">{isRTL ? "انطلاق المسيرة" : "Year of Inception"}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-brand-primary text-lg font-bold">+15,000</span>
                  <span className="text-xs text-slate-500">{isRTL ? "حالة سعيدة" : "Happy Patients"}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
