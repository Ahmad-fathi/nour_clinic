import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, Upload, CheckCircle, Trash2, Shield, CalendarCheck } from 'lucide-react';
import { servicesData } from '../data';
import { Language, ConsultationRequest } from '../types';

interface ConsultationFormProps {
  currentLanguage: Language;
  selectedServiceId: string;
  onSelectServiceId: (id: string) => void;
}

export default function ConsultationForm({
  currentLanguage,
  selectedServiceId,
  onSelectServiceId,
}: ConsultationFormProps) {
  const isRTL = currentLanguage === 'ar';
  
  // State for form
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [notes, setNotes] = useState('');
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consultations, setConsultations] = useState<ConsultationRequest[]>([]);
  const [latestBooking, setLatestBooking] = useState<ConsultationRequest | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const timeSlots = [
    { id: 't1', label: '10:00 AM - 12:00 PM' },
    { id: 't2', label: '12:00 PM - 02:00 PM' },
    { id: 't3', label: '03:00 PM - 05:00 PM' },
    { id: 't4', label: '05:00 PM - 08:00 PM' },
  ];

  // Load consultations from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('nour_clinic_consultations');
      if (stored) {
        setConsultations(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Could not load consultations", e);
    }
  }, []);

  // Handle Photo Attachment
  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert(isRTL ? "يرجى تحميل صورة صالحة فقط (JPEG / PNG)" : "Please upload a valid image file only (JPEG/PNG)");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setUploadedPhoto(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  // Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim() || !selectedServiceId || !date || !timeSlot) {
      alert(isRTL ? "يرجى ملء جميع الحقول المطلوبة المميزة بنجمة (*)" : "Please fill in all mandatory fields (*)");
      return;
    }

    const newRequest: ConsultationRequest = {
      id: `booking-${Date.now()}`,
      name,
      phone,
      email,
      serviceId: selectedServiceId,
      date,
      timeSlot,
      notes,
      uploadedPhoto: uploadedPhoto || undefined,
      status: 'confirmed', // Auto-confirm on client side for premium experience
      createdAt: new Date().toLocaleDateString(currentLanguage === 'ar' ? 'ar-EG' : 'en-US'),
    };

    const updated = [newRequest, ...consultations];
    setConsultations(updated);
    setLatestBooking(newRequest);
    localStorage.setItem('nour_clinic_consultations', JSON.stringify(updated));

    // Reset Form State
    setName('');
    setPhone('');
    setEmail('');
    setDate('');
    setTimeSlot('');
    setNotes('');
    setUploadedPhoto(null);
    setIsSubmitted(true);
  };

  // Cancel Appointment
  const handleCancelBooking = (bookingId: string) => {
    const confirmation = window.confirm(isRTL ? "هل أنت متأكد من رغبتك في إلغاء هذا الحجز؟" : "Are you sure you want to cancel this booking?");
    if (!confirmation) return;

    const updated = consultations.map(c => 
      c.id === bookingId ? { ...c, status: 'cancelled' as const } : c
    );
    setConsultations(updated);
    localStorage.setItem('nour_clinic_consultations', JSON.stringify(updated));
  };

  // Delete booking from history
  const handleDeleteBooking = (bookingId: string) => {
    const updated = consultations.filter(c => c.id !== bookingId);
    setConsultations(updated);
    localStorage.setItem('nour_clinic_consultations', JSON.stringify(updated));
  };

  // Get service title helper
  const getServiceTitle = (id: string) => {
    const s = servicesData.find(item => item.id === id);
    return s ? s.title[currentLanguage] : id;
  };

  // Get tomorrow's date for minimum calendar restriction
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3.5 py-1.5 rounded-full">
            {isRTL ? "الاستشارات الطبية والرقمية" : "Online Medical Booking"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-4 mb-4">
            {isRTL ? "احجز استشارتك المجانية مع أ.د. أحمد عادل" : "Book Your Free Clinical Evaluation"}
          </h2>
          <p className="text-slate-500 text-sm">
            {isRTL 
              ? "املأ استمارة التقييم الطبي وسيقوم الفريق الطبي المتخصص بالتواصل معك لجدولة موعد حضورك أو إفادتك بخطة علاجية فورية."
              : "Complete our evaluation form and our medical coordinators will contact you to finalize your clinical plan."}
          </p>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Booking Form Panel */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl shadow-slate-100/40" id="main-booking-form-card">
            
            {isSubmitted && latestBooking ? (
              <div className="text-center py-8" id="booking-success-message">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">
                  {isRTL ? "تم إرسال حجزك بنجاح!" : "Appointment Scheduled Successfully!"}
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                  {isRTL 
                    ? `مرحباً بك يا ${latestBooking.name}. تم تأكيد موعدك المبدئي ليوم ${latestBooking.date} خلال الفترة (${latestBooking.timeSlot}). يتواصل معك فريقنا هاتفياً قريباً.`
                    : `Thank you, ${latestBooking.name}. Your booking for ${latestBooking.date} (${latestBooking.timeSlot}) is preliminary confirmed. Our clinical coordinator will reach out to you shortly.`}
                </p>

                {/* Patient booking receipt details */}
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm max-w-sm mx-auto text-right mb-8">
                  <h4 className="text-xs font-extrabold text-slate-400 mb-3 uppercase text-center border-b pb-2">
                    {isRTL ? "تفاصيل الحجز الطبي" : "MEDICAL BOOKING DETAILS"}
                  </h4>
                  <div className="space-y-2 text-xs text-slate-700">
                    <p><strong>{isRTL ? "القسم المطلوب: " : "Department: "}</strong> {getServiceTitle(latestBooking.serviceId)}</p>
                    <p><strong>{isRTL ? "تاريخ الحضور: " : "Date: "}</strong> {latestBooking.date}</p>
                    <p><strong>{isRTL ? "الفترة الزمنية: " : "Time Slot: "}</strong> {latestBooking.timeSlot}</p>
                    <p><strong>{isRTL ? "رقم الجوال: " : "Phone: "}</strong> {latestBooking.phone}</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3 px-8 rounded-xl transition-all cursor-pointer"
                >
                  {isRTL ? "حجز موعد جديد" : "Book Another Appointment"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="booking-inner-form">
                
                {/* Section Title */}
                <div className="border-b border-slate-200 pb-4 mb-6">
                  <h3 className="text-lg font-bold text-brand-navy">
                    {isRTL ? "استمارة التشخيص المبدئي" : "Clinical Diagnosis Form"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {isRTL ? "* الحقول المميزة بنجمة مطلوبة للتشخيص" : "* Fields with star are mandatory for diagnostics"}
                  </p>
                </div>

                {/* Service Department Select */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    {isRTL ? "1. حدد القسم الطبي المطلوب *" : "1. Choose Medical Department *"}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" id="department-select-buttons">
                    {servicesData.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => onSelectServiceId(service.id)}
                        className={`p-4 rounded-xl text-xs font-bold border text-right transition-all cursor-pointer ${
                          selectedServiceId === service.id
                            ? 'bg-brand-navy text-white border-brand-navy shadow-md ring-2 ring-brand-sky/30'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-brand-navy'
                        }`}
                        id={`btn-form-select-${service.id}`}
                      >
                        {isRTL ? service.title.ar : service.title.en}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date Input */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {isRTL ? "2. تاريخ الموعد المقترح *" : "2. Suggested Date *"}
                    </label>
                    <div className="relative">
                      <Calendar className="absolute top-3.5 right-3.5 text-slate-400 w-5 h-5 z-10 pointer-events-none" />
                      <input
                        type="date"
                        min={getMinDate()}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:border-brand-primary"
                        required
                        id="form-input-date"
                      />
                    </div>
                  </div>

                  {/* Time Slot Select */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {isRTL ? "3. اختر الفترة الزمنية المناسبة *" : "3. Suggested Time Slot *"}
                    </label>
                    <div className="relative">
                      <Clock className="absolute top-3.5 right-3.5 text-slate-400 w-5 h-5 z-10 pointer-events-none" />
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:border-brand-primary appearance-none cursor-pointer"
                        required
                        id="form-select-timeslot"
                      >
                        <option value="">{isRTL ? "-- اختر فترة --" : "-- Select Time Slot --"}</option>
                        {timeSlots.map((slot) => (
                          <option key={slot.id} value={slot.label}>{slot.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {isRTL ? "الاسم الكامل للمريض *" : "Patient Full Name *"}
                    </label>
                    <div className="relative">
                      <User className="absolute top-3.5 right-3.5 text-slate-400 w-5 h-5 z-10 pointer-events-none" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={isRTL ? "أحمد محمد ..." : "Ahmed Ali ..."}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:border-brand-primary"
                        required
                        id="form-input-name"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {isRTL ? "رقم جوال المريض للتواصل المباشر *" : "Phone Number *"}
                    </label>
                    <div className="relative">
                      <Phone className="absolute top-3.5 right-3.5 text-slate-400 w-5 h-5 z-10 pointer-events-none" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+20 100..."
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:border-brand-primary"
                        required
                        id="form-input-phone"
                      />
                    </div>
                  </div>
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {isRTL ? "البريد الإلكتروني (اختياري)" : "Email Address (Optional)"}
                  </label>
                  <div className="relative">
                    <Mail className="absolute top-3.5 right-3.5 text-slate-400 w-5 h-5 z-10 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="patient@example.com"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:border-brand-primary"
                      id="form-input-email"
                    />
                  </div>
                </div>

                {/* Notes/Symptom details */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {isRTL ? "اشرح حالتك الطبية باختصار" : "Brief Condition Summary"}
                  </label>
                  <div className="relative">
                    <FileText className="absolute top-3.5 right-3.5 text-slate-400 w-5 h-5 z-10 pointer-events-none" />
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={isRTL ? "مثال: تساقط شعر وراثي في المنطقة الأمامية منذ سنتين، أو قرحة قدم مزمنة..." : "Example: Hair thinning on front hairline since 2 years, or chronic heel ulcer..."}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:border-brand-primary min-h-[100px] resize-y"
                      id="form-textarea-notes"
                    />
                  </div>
                </div>

                {/* Drag and Drop Image Uploader */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {isRTL ? "تحميل صورة للمنطقة المصابة (اختياري للتشخيص الفوري)" : "Attach Photo of Target Area (Optional for instant evaluation)"}
                  </label>
                  
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                      isDragging 
                        ? 'border-brand-primary bg-brand-ice/40' 
                        : 'border-slate-300 bg-white hover:border-brand-primary hover:bg-slate-50'
                    }`}
                    id="file-drag-drop-zone"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                      id="form-file-hidden-input"
                    />

                    {uploadedPhoto ? (
                      <div className="flex flex-col items-center">
                        <img 
                          src={uploadedPhoto} 
                          alt="Uploaded area preview" 
                          className="w-24 h-24 object-cover rounded-xl border-2 border-brand-primary shadow-md mb-3"
                          id="form-uploaded-preview"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setUploadedPhoto(null);
                          }}
                          className="flex items-center text-xs text-rose-500 font-bold hover:text-rose-700 cursor-pointer"
                          id="form-uploaded-remove-btn"
                        >
                          <Trash2 className="w-3.5 h-3.5 mx-1" />
                          <span>{isRTL ? "إزالة الصورة" : "Remove Photo"}</span>
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload className="w-10 h-10 text-slate-400 mb-2" />
                        <p className="text-xs sm:text-sm font-bold text-slate-700 mb-1">
                          {isRTL ? "اسحب الصورة وأفلتها هنا، أو اضغط للتصفح" : "Drag and drop your photo here, or click to browse"}
                        </p>
                        <p className="text-[11px] text-slate-400 font-light">
                          {isRTL ? "يدعم الصيغ: JPG, PNG (حد أقصى 5 ميجا)" : "Supports JPG, PNG (Max 5MB)"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>



                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary/95 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-primary/20 transition-all cursor-pointer"
                  id="form-submit-btn"
                >
                  {isRTL ? "إرسال البيانات وتأكيد الموعد" : "Submit & Confirm Appointment"}
                </button>

              </form>
            )}
          </div>

          {/* Side Dashboard Panel (Persisted History) */}
          <div className="lg:col-span-5 flex flex-col space-y-6 w-full" id="booking-side-dashboard">
            
            {/* Information Cards */}
            <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <CalendarCheck className="w-5 h-5 mx-2 text-brand-sky shrink-0" />
                <span>{isRTL ? "مواعيد وجدول عيادة نور" : "Clinic Working Hours"}</span>
              </h3>
              
              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-300">{isRTL ? "السبت - الأربعاء" : "Saturday - Wednesday"}</span>
                  <span className="font-bold text-brand-sky">12:00 PM - 09:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-300">{isRTL ? "الخميس" : "Thursday"}</span>
                  <span className="font-bold text-brand-sky">12:00 PM - 06:00 PM</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span className="text-slate-300">{isRTL ? "الجمعة" : "Friday"}</span>
                  <span className="font-bold text-rose-300">{isRTL ? "مغلق (عطلة رسمية)" : "Closed (Off)"}</span>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-white/10 text-xs text-slate-300">
                <p><strong>{isRTL ? "العنوان بالتفصيل: " : "Detailed Location: "}</strong> {isRTL ? "شارع الطيران، مدينة نصر، القاهرة، مصر" : "El-Tayaran St, Nasr City, Cairo, Egypt"}</p>
              </div>
            </div>

            {/* History Portal Dashboard */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-lg">
              <h3 className="text-base font-bold text-brand-navy mb-4 flex items-center justify-between">
                <span>{isRTL ? "حجوزاتك السابقة بالعيادة" : "Your Consultation History"}</span>
                <span className="text-xs bg-brand-primary/10 text-brand-primary px-2.5 py-1 rounded-full font-bold">
                  {consultations.length} {isRTL ? "حجز" : "Bookings"}
                </span>
              </h3>

              {consultations.length === 0 ? (
                <div className="text-center py-8 bg-white rounded-2xl border border-slate-200/50 p-4">
                  <p className="text-xs text-slate-500">
                    {isRTL ? "لا توجد حجوزات سابقة مسجلة على هذا المتصفح." : "No prior clinic evaluations found on this browser."}
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1" id="consultation-history-list">
                  {consultations.map((booking) => (
                    <div 
                      key={booking.id} 
                      className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between"
                      id={`history-item-${booking.id}`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="text-right">
                          <p className="text-xs font-bold text-brand-navy">{booking.name}</p>
                          <p className="text-[10px] text-brand-primary font-bold mt-1">
                            {getServiceTitle(booking.serviceId)}
                          </p>
                          <p className="text-[10px] text-slate-500 mt-1">
                            {booking.date} | {booking.timeSlot}
                          </p>
                        </div>
                        
                        <span className={`text-[9px] font-extrabold px-2 py-1 rounded-full uppercase shrink-0 ${
                          booking.status === 'confirmed' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-slate-100 text-slate-500 line-through'
                        }`}>
                          {booking.status === 'confirmed' ? (isRTL ? "مؤكد مبدئياً" : "Confirmed") : (isRTL ? "ملغي" : "Cancelled")}
                        </span>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-[11px]">
                        <span className="text-[10px] text-slate-400">
                          ID: {booking.id.replace('booking-', '')}
                        </span>
                        
                        <div className="flex space-x-2 space-x-reverse">
                          {booking.status === 'confirmed' && (
                            <button
                              onClick={() => handleCancelBooking(booking.id)}
                              className="text-amber-600 hover:text-amber-800 font-bold transition-all cursor-pointer"
                              id={`cancel-btn-${booking.id}`}
                            >
                              {isRTL ? "إلغاء الموعد" : "Cancel"}
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteBooking(booking.id)}
                            className="text-rose-500 hover:text-rose-700 p-1 rounded hover:bg-rose-50 cursor-pointer"
                            title={isRTL ? "حذف السجل" : "Delete Log"}
                            id={`delete-btn-${booking.id}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
