import { useState } from 'react';
import { Calendar, Layers, Clock, TrendingUp } from 'lucide-react';
import { caseStudiesData } from '../data';
import { Language } from '../types';

interface CasesProps {
  currentLanguage: Language;
}

export default function Cases({ currentLanguage }: CasesProps) {
  const isRTL = currentLanguage === 'ar';
  const [activeCaseId, setActiveCaseId] = useState<string>(caseStudiesData[0].id);

  const activeCase = caseStudiesData.find(c => c.id === activeCaseId) || caseStudiesData[0];

  return (
    <section id="cases" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-ice/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3.5 py-1.5 rounded-full">
            {isRTL ? "قصص نجاح طبية" : "Clinical Case Studies"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-4 mb-4">
            {isRTL ? "نتائج حقيقية لمرضانا" : "Proven Results from Nour Clinic"}
          </h2>
          <p className="text-slate-500 text-sm">
            {isRTL 
              ? "نستعرض بكل فخر نماذج من نتائج العلاجات لزراعة الشعر للرجال وعلاج الجروح المزمنة المتقدمة، مع الحفاظ التام على خصوصية المرضى."
              : "We proudly present verified outcomes of male hair transplantation and chronic wound care, honoring patient privacy at all times."}
          </p>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" id="case-selector-tabs">
          {caseStudiesData.map((caseStudy) => (
            <button
              key={caseStudy.id}
              onClick={() => setActiveCaseId(caseStudy.id)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                activeCaseId === caseStudy.id
                  ? 'bg-brand-navy text-white border-brand-navy shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-brand-navy'
              }`}
              id={`tab-case-${caseStudy.id}`}
            >
              {isRTL ? caseStudy.title.ar : caseStudy.title.en}
            </button>
          ))}
        </div>

        {/* Main Interactive Case Study Display */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100/80 overflow-hidden" id="case-study-details-container">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visuals Column */}
            <div className="lg:col-span-7 bg-slate-900 p-6 flex flex-col justify-center items-center relative">
              
              <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={activeCase.beforeImage} 
                  alt={isRTL ? activeCase.title.ar : activeCase.title.en} 
                  className="w-full h-auto object-cover max-h-[480px]"
                  referrerPolicy="no-referrer"
                  id={`case-active-img-${activeCase.id}`}
                />
                
                {/* Image Overlay Label */}
                <div className="absolute top-4 left-4 bg-brand-navy/90 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold border border-white/10">
                  {isRTL ? "الحالة العلاجية والنتائج" : "Procedure Outcome"}
                </div>
              </div>

              {/* Description under image */}
              <div className="mt-4 text-center">
                <p className="text-slate-400 text-xs sm:text-sm font-light italic">
                  {isRTL ? "*تم التصوير بموافقة المريض الخطية لغايات التوعية الطبية" : "*Images published with explicit patient written consent for medical awareness."}
                </p>
              </div>
            </div>

            {/* Facts / Analysis Column */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-white to-slate-50/20">
              
              <div>
                {/* Category Badge */}
                <span className="text-[10px] font-extrabold text-brand-primary tracking-widest bg-brand-ice/60 px-3 py-1 rounded-full uppercase">
                  {activeCase.category === 'hair-transplant' ? (isRTL ? "زراعة الشعر الطبيعي" : "Hair Restoration") : (isRTL ? "قسم علاج الجروح" : "Wound Care Clinic")}
                </span>

                <h3 className="text-2xl font-bold text-brand-navy mt-4 mb-3">
                  {isRTL ? activeCase.title.ar : activeCase.title.en}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {isRTL ? activeCase.description.ar : activeCase.description.en}
                </p>

                {/* Technical details Checklist */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-brand-navy border-b border-slate-100 pb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mx-2 text-brand-primary shrink-0" />
                    <span>{isRTL ? "تفاصيل الخطة العلاجية والبروتوكول" : "Treatment Logs & Diagnostics"}</span>
                  </h4>

                  <ul className="space-y-3.5">
                    {activeCase.details[currentLanguage].map((detail, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-ice text-brand-primary font-bold text-xs mt-0.5 mx-2 shrink-0">
                          ✓
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Consultation reminder CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100 bg-brand-ice/30 p-4 rounded-xl">
                <p className="text-xs text-brand-navy leading-relaxed font-semibold">
                  {isRTL 
                    ? "هل تعاني من حالة مشابهة وتريد رأي أ.د. أحمد عادل عاجلاً؟" 
                    : "Do you have a similar condition and seek Prof. Dr. Ahmed's opinion?"}
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  {isRTL 
                    ? "خدمة الاستشارات الطبية الرقمية متوفرة لدينا مجاناً لتقييم حالتك بسرعة وبشكل سري تماماً." 
                    : "Our digital consultation portal is open for swift, secure, and fully confidential diagnosis."}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
