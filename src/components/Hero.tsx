import { motion } from 'motion/react';
import { Calendar, Phone, Award, ShieldCheck, ThumbsUp } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  currentLanguage: Language;
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ currentLanguage, onNavigate }: HeroProps) {
  const isRTL = currentLanguage === 'ar';

  const stats = [
    {
      id: 'stat-1',
      icon: Award,
      num: '1988',
      ar: 'سنة التأسيس الخبرة الطبية',
      en: 'Founding Year of Practice'
    },
    {
      id: 'stat-2',
      icon: ThumbsUp,
      num: '+15,000',
      ar: 'عملية زراعة وترميم ناجحة',
      en: 'Successful Operations'
    },
    {
      id: 'stat-3',
      icon: ShieldCheck,
      num: '98%',
      ar: 'نسبة نجاح حيوية بصيلات الشعر',
      en: 'Graft Viability Rate'
    }
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden"
    >
      {/* Background Image with Deep Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/clinic_reception_hero_1784210242698.jpg" 
          alt="Nour Clinic Reception" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.25] contrast-[1.1]"
          referrerPolicy="no-referrer"
          id="hero-bg-img"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/30 via-transparent to-brand-navy/30 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto"
          id="hero-heading"
        >
          {isRTL ? (
            <>
              استعد <span className="text-brand-sky bg-gradient-to-r from-brand-sky to-brand-ice bg-clip-text text-transparent">ثقتك وشبابك</span> بأعلى درجات الأمان والخبرة الطبية
            </>
          ) : (
            <>
              Restore Your <span className="text-brand-sky bg-gradient-to-r from-brand-sky to-brand-ice bg-clip-text text-transparent">Confidence & Vitality</span> with World-Class Medical Expertise
            </>
          )}
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          id="hero-subtext"
        >
          {isRTL 
            ? "نحن ندمج بين عراقة ثلاثين عاماً من الخبرة الجراحية وجراحة التجميل والترميم وأحدث تقنيات الليزر وزراعة الشعر للرجال بإشراف الأستاذ الدكتور أحمد عادل نور الدين."
            : "We combine 35+ years of clinical excellence in cosmetic and reconstructive surgery with cutting-edge hair transplantation and non-invasive laser therapies, led by Prof. Ahmed Adel Nour-Eldin."}
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
          id="hero-actions"
        >
          <button
            onClick={() => onNavigate('booking')}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 space-x-reverse bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/20 transition-all hover:scale-102 cursor-pointer"
            id="hero-btn-booking"
          >
            <Calendar className="w-5 h-5" />
            <span>{isRTL ? "احجز استشارتك المجانية الآن" : "Schedule Free Consultation"}</span>
          </button>
          
          <button
            onClick={() => onNavigate('services')}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 space-x-reverse bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold px-8 py-4 rounded-xl transition-all hover:bg-white/20 cursor-pointer"
            id="hero-btn-services"
          >
            <span>{isRTL ? "اكتشف تخصصاتنا وخدماتنا" : "Explore Services & Treatments"}</span>
          </button>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto border-t border-white/10 pt-10"
          id="hero-stats-grid"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="flex flex-col items-center text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-sky mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl md:text-4xl font-extrabold text-white mb-1 font-mono tracking-tight">{stat.num}</span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                  {isRTL ? stat.ar : stat.en}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
