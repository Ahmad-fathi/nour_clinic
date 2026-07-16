import { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cases from './components/Cases';
import ConsultationForm from './components/ConsultationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Language } from './types';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ar');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('hair-transplant');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Set page title and dir attribute based on chosen language
  useEffect(() => {
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    document.title = currentLanguage === 'ar' 
      ? 'عيادة نور | زراعة الشعر، علاج الجروح، والتجميل الطبي' 
      : 'Nour Clinic | Hair Restoration, Laser Wound Care & Aesthetics';
  }, [currentLanguage]);

  // Handle active navigation scrolling
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Select department from services grid and scroll to booking form
  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleNavigate('booking');
  };

  const isRTL = currentLanguage === 'ar';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-brand-primary selection:text-white" id="nour-clinic-root">
      
      {/* Header Navigation */}
      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage} 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="pb-0">
        
        {/* Hero Banner Section */}
        <Hero 
          currentLanguage={currentLanguage} 
          onNavigate={handleNavigate} 
        />

        {/* Doctor Founder biography Section */}
        <About currentLanguage={currentLanguage} />

        {/* Services & Specializations Section */}
        <Services 
          currentLanguage={currentLanguage} 
          onSelectService={handleSelectService} 
        />

        {/* Real Clinical Outcomes Section */}
        <Cases currentLanguage={currentLanguage} />

        {/* Intelligent Booking & Interactive Dashboard Section */}
        <ConsultationForm 
          currentLanguage={currentLanguage}
          selectedServiceId={selectedServiceId}
          onSelectServiceId={setSelectedServiceId}
        />

        {/* Medical FAQs Section */}
        <FAQ currentLanguage={currentLanguage} />

      </main>

      {/* Footer Section */}
      <Footer 
        currentLanguage={currentLanguage} 
        onNavigate={handleNavigate} 
      />

      {/* Floating Medical Help desk Widget (WhatsApp/Phone) */}
      <div 
        className={`fixed bottom-6 z-50 flex flex-col space-y-3 ${
          isRTL ? 'left-6' : 'right-6'
        }`}
        id="floating-clinic-widget"
      >
        {/* WhatsApp Float Button */}
        <a 
          href="https://wa.me/201001234567" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 space-x-reverse bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-all text-sm border border-emerald-400"
          title={isRTL ? "تواصل معنا عبر واتساب" : "Chat with us on WhatsApp"}
          id="float-whatsapp-link"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline">
            {isRTL ? "استشارة واتساب" : "WhatsApp Chat"}
          </span>
        </a>

        {/* Phone Float Button */}
        <a 
          href="tel:+201001234567" 
          className="flex items-center justify-center bg-brand-primary hover:bg-brand-primary/95 text-white font-bold p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-all text-sm border border-brand-primary/20"
          title={isRTL ? "اتصل بنا الآن" : "Call us directly"}
          id="float-phone-link"
        >
          <Phone className="w-5 h-5 sm:ml-2 sm:mr-0.5" />
          <span className="hidden sm:inline font-mono">
            {isRTL ? "اتصل بنا" : "Call Us"}
          </span>
        </a>
      </div>

    </div>
  );
}
