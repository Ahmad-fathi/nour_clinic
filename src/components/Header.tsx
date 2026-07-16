import { useState } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({
  currentLanguage,
  onLanguageChange,
  activeSection,
  onNavigate,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'hero', ar: 'الرئيسية', en: 'Home' },
    { id: 'about', ar: 'من نحن', en: 'About' },
    { id: 'services', ar: 'خدماتنا', en: 'Services' },
    { id: 'cases', ar: 'حالات علاجية', en: 'Case Studies' },
    { id: 'booking', ar: 'حجز استشارة', en: 'Book Consultation' },
    { id: 'faq', ar: 'الأسئلة الشائعة', en: 'FAQs' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  const isRTL = currentLanguage === 'ar';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand area */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleItemClick('hero')}
            id="header-brand-logo"
          >
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-brand-navy">
                {isRTL ? "عـيادة نـور" : "NOUR CLINIC"}
              </span>
              <span className="text-[10px] text-brand-primary font-medium tracking-widest leading-none">
                {isRTL ? "لـزراعة الشـعر والتجـميل" : "HAIR & COSMETIC CLINIC"}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-sm font-semibold transition-all duration-200 py-2 relative cursor-pointer ${
                  activeSection === item.id
                    ? 'text-brand-primary font-bold'
                    : 'text-slate-600 hover:text-brand-primary'
                }`}
                id={`nav-${item.id}`}
              >
                {isRTL ? item.ar : item.en}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full transition-all duration-300" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Quick call link */}
            <a 
              href="tel:+20102345678" 
              className="flex items-center text-xs font-bold text-brand-navy bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-lg border border-slate-200/80 transition-all"
              id="header-phone-link"
            >
              <Phone className="w-3.5 h-3.5 mx-1" />
              <span>+20 100 123 4567</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(isRTL ? 'en' : 'ar')}
              className="flex items-center space-x-1.5 space-x-reverse text-sm font-bold text-brand-primary hover:text-brand-navy transition-all px-3 py-2 rounded-lg hover:bg-brand-ice/40 cursor-pointer"
              title={isRTL ? "Switch to English" : "تغيير للغة العربية"}
              id="header-lang-btn"
            >
              <Globe className="w-4 h-4 text-brand-primary" />
              <span>{isRTL ? "English" : "العربية"}</span>
            </button>

            {/* CTA button */}
            <button
              onClick={() => handleItemClick('booking')}
              className="bg-brand-primary hover:bg-brand-primary/95 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm shadow-brand-primary/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              id="header-cta-booking"
            >
              {isRTL ? "احجز استشارتك الآن" : "Book Free Consultation"}
            </button>
          </div>

          {/* Mobile menu button & Mobile Lang Switch */}
          <div className="flex items-center lg:hidden gap-3">
            {/* Direct Phone */}
            <a 
              href="tel:+20102345678" 
              className="p-2 rounded-lg text-brand-navy hover:bg-slate-100"
              id="mobile-call-icon"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Lang Switch */}
            <button
              onClick={() => onLanguageChange(isRTL ? 'en' : 'ar')}
              className="p-2 rounded-lg text-brand-primary font-bold text-xs flex items-center hover:bg-slate-100"
              id="mobile-lang-icon"
            >
              <Globe className="w-4 h-4 mx-0.5" />
              <span>{isRTL ? "EN" : "عربي"}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-2 shadow-inner" id="mobile-navigation-panel">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`block w-full text-right px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                activeSection === item.id
                  ? 'bg-brand-ice/60 text-brand-primary font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
              id={`mobile-nav-${item.id}`}
            >
              {isRTL ? item.ar : item.en}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
            <button
              onClick={() => handleItemClick('booking')}
              className="w-full text-center bg-brand-primary hover:bg-brand-primary/95 text-white font-bold py-3 rounded-lg shadow-md"
              id="mobile-booking-cta"
            >
              {isRTL ? "احجز استشارتك مجاناً" : "Book Free Consultation"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
