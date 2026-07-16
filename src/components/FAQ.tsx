import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqData } from '../data';
import { Language } from '../types';

interface FAQProps {
  currentLanguage: Language;
}

export default function FAQ({ currentLanguage }: FAQProps) {
  const isRTL = currentLanguage === 'ar';
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-ice/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3.5 py-1.5 rounded-full">
            {isRTL ? "تساؤلات شائعة" : "Information Desk"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-4 mb-4">
            {isRTL ? "الأسئلة الطبية الشائعة وإجاباتها" : "Frequently Asked Questions"}
          </h2>
          <p className="text-slate-500 text-sm">
            {isRTL 
              ? "إجابات طبية دقيقة ومبسطة يقدمها لكم البروفيسور أحمد عادل وفريقه حول زراعة الشعر الطبيعي وعلاج الجروح المتطور."
              : "Clear, medically accurate guidelines from Prof. Dr. Ahmed Adel and his clinical associates."}
          </p>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Accordions List */}
        <div className="space-y-4" id="faq-accordions-list">
          {faqData.map((faq) => {
            const isExpanded = expandedId === faq.id;
            
            return (
              <div 
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/60 shadow-sm transition-all overflow-hidden"
                id={`faq-item-${faq.id}`}
              >
                {/* Trigger Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-right flex justify-between items-center gap-4 hover:bg-slate-50/50 cursor-pointer"
                  id={`btn-faq-trigger-${faq.id}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-primary shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-brand-navy">
                      {isRTL ? faq.question.ar : faq.question.en}
                    </span>
                  </div>
                  <span className="shrink-0 text-slate-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-brand-primary" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {/* Answer Box */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-100 bg-slate-50/30" id={`faq-answer-${faq.id}`}>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {isRTL ? faq.answer.ar : faq.answer.en}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
