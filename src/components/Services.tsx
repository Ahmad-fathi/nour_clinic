import { useState } from 'react';
import { Scissors, Activity, Sparkles, ChevronDown, ChevronUp, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { servicesData } from '../data';
import { Language, Service } from '../types';

interface ServicesProps {
  currentLanguage: Language;
  onSelectService: (serviceId: string) => void;
}

export default function Services({ currentLanguage, onSelectService }: ServicesProps) {
  const isRTL = currentLanguage === 'ar';
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const toggleExpand = (serviceId: string) => {
    if (expandedServiceId === serviceId) {
      setExpandedServiceId(null);
    } else {
      setExpandedServiceId(serviceId);
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3.5 py-1.5 rounded-full">
            {isRTL ? "خدماتنا المتخصصة" : "Our Medical Departments"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-4 mb-4">
            {isRTL ? "الريادة والتميز في الرعاية العلاجية" : "Pioneering Treatments & Specializations"}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            {isRTL 
              ? "نقدم خدمات طبية متطورة تجمع بين التشخيص الدقيق والبروتوكولات العلاجية الفريدة لضمان سلامتك التامة وتحقيق أفضل مظهر طبيعي."
              : "We provide high-tech medical protocols combining accurate diagnosis with custom treatments to secure your health and deliver natural aesthetics."}
          </p>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Services List/Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="services-grid">
          {servicesData.map((service) => {
            const isExpanded = expandedServiceId === service.id;
            
            return (
              <div 
                key={service.id} 
                className={`bg-slate-50 rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isExpanded 
                    ? 'shadow-lg border-brand-primary/40 ring-1 ring-brand-primary/20 scale-101' 
                    : 'shadow-sm border-slate-100 hover:border-brand-primary/20 hover:shadow-md'
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Header Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={isRTL ? service.title.ar : service.title.en} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                    id={`service-img-${service.id}`}
                  />
                  
                  {/* Category Badge Icon overlay */}
                  <div className="absolute top-4 right-4 bg-brand-navy/90 text-white p-3 rounded-xl shadow-md border border-white/10">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                      {isRTL ? service.title.ar : service.title.en}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {isRTL ? service.shortDescription.ar : service.shortDescription.en}
                    </p>

                    {/* Expandable detailed content */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-200/60 space-y-5" id={`expanded-content-${service.id}`}>
                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-light">
                          {isRTL ? service.fullDescription.ar : service.fullDescription.en}
                        </p>

                        {/* Features List */}
                        <div>
                          <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                            {isRTL ? "البروتوكولات والميزات الطبية" : "Clinical Protocols & Features"}
                          </h4>
                          <ul className="space-y-2">
                            {service.features[currentLanguage].map((feat, i) => (
                              <li key={i} className="flex items-start text-xs text-slate-600">
                                <span className="inline-flex items-center justify-center w-4.5 h-4.5 rounded bg-brand-primary/10 text-brand-primary font-bold mr-1 ml-2 mt-0.5">
                                  ✓
                                </span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits List */}
                        <div>
                          <h4 className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
                            {isRTL ? "النتائج والفوائد المتوقعة" : "Expected Results & Benefits"}
                          </h4>
                          <ul className="grid grid-cols-1 gap-2">
                            {service.benefits[currentLanguage].map((benefit, i) => (
                              <li key={i} className="flex items-center text-xs text-slate-600 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mx-2 shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="w-full sm:w-auto flex items-center justify-center text-xs font-bold text-slate-600 hover:text-brand-primary py-2 px-3 rounded-lg hover:bg-slate-100/80 transition-all cursor-pointer"
                      id={`btn-expand-${service.id}`}
                    >
                      <span>{isExpanded ? (isRTL ? "تفاصيل أقل" : "Less Details") : (isRTL ? "المزيد من التفاصيل" : "More Details")}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 mx-1" /> : <ChevronDown className="w-4 h-4 mx-1" />}
                    </button>

                    <button
                      onClick={() => onSelectService(service.id)}
                      className="w-full flex-grow flex items-center justify-center space-x-1.5 space-x-reverse bg-brand-navy hover:bg-brand-primary text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-sm transition-all cursor-pointer"
                      id={`btn-book-${service.id}`}
                    >
                      <span>{isRTL ? "احجز موعداً لهذا القسم" : "Book This Department"}</span>
                      {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
