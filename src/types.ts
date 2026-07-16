export type Language = 'ar' | 'en';

export interface Service {
  id: string;
  title: { ar: string; en: string };
  shortDescription: { ar: string; en: string };
  fullDescription: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  image: string;
  iconName: string;
  benefits: { ar: string[]; en: string[] };
}

export interface CaseStudy {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  category: string;
  beforeImage: string;
  afterImage: string;
  details: { ar: string[]; en: string[] };
}

export interface Doctor {
  name: { ar: string; en: string };
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  bio: { ar: string; en: string };
  achievements: { ar: string[]; en: string[] };
  image: string;
}

export interface ConsultationRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  notes: string;
  uploadedPhoto?: string; // Base64 or mock file path
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface FAQItem {
  id: string;
  question: { ar: string; en: string };
  answer: { ar: string; en: string };
  category: string;
}

export interface Testimonial {
  id: string;
  name: { ar: string; en: string };
  age?: number;
  treatment: { ar: string; en: string };
  text: { ar: string; en: string };
  rating: number;
}
