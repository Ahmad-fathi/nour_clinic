import { Service, CaseStudy, Doctor, FAQItem, Testimonial } from './types';

export const doctorData: Doctor = {
  name: {
    ar: "أ.د. أحمد عادل نور الدين",
    en: "Prof. Dr. Ahmed Adel Nour-Eldin"
  },
  title: {
    ar: "أستاذ متفرغ جراحة التجميل وزراعة الشعر",
    en: "Professor Emeritus of Plastic Surgery & Hair Restoration"
  },
  subtitle: {
    ar: "رائد جراحة التجميل وزراعة الشعر والترميم في الشرق الأوسط",
    en: "Pioneer of Plastic Surgery & Hair Restoration in the Middle East"
  },
  bio: {
    ar: "تأسست عيادة نور منذ أكثر من ثلاثين عاماً في عام 1988 على يد البروفيسور المتميز أحمد عادل نور الدين. وتعتبر العيادة من أقدم الصروح الطبية وأكثرها عراقة في تقديم الخدمات التجميلية وزراعة الشعر في مصر والشرق الأوسط. لقد كرس البروفيسور أحمد عادل حياته المهنية ليس فقط لخدمة المرضى بأعلى معايير الرعاية الطبية، بل وأيضاً لتدريب أجيال متعاقبة من الأطباء وتقديم أحدث الابتكارات الطبية.",
    en: "Established over thirty years ago in 1988 by the inimitable Prof. Ahmed Adel Nour-Eldin, Nour Clinic is one of the longest standing and most prestigious establishments when it comes to Cosmetic Services and Hair Restoration in Egypt and the Middle East. Prof. Ahmed has dedicated his career to delivering the highest standards of clinical excellence while training promising generations of doctors and pioneering the latest innovations."
  },
  achievements: {
    ar: [
      "خبرة تزيد عن 38 عاماً في الجراحات التجميلية وزراعة الشعر الطبيعي.",
      "رئيس الجمعية المصرية لجراحي التجميل والإصلاح (سابقاً).",
      "مؤسس مركز نور لتدريب الأطباء على أحدث تقنيات زراعة الشعر التجميلية.",
      "أدخل تقنيات الاقتطاف الحديثة FUE وDHI إلى مصر والوطن العربي كبديل آمن للجراحة.",
      "مبتكر بروتوكولات ليزرية متقدمة لعلاج الجروح المعقدة والحروق الصعبة."
    ],
    en: [
      "Over 38 years of experience in plastic surgery and natural hair transplantation.",
      "Former President of the Egyptian Society of Plastic and Reconstructive Surgeons (ESPRS).",
      "Founder of the Nour Training Center for advanced micro-grafting and hair restoration.",
      "Pioneered FUE and DHI transplantation techniques in Egypt and the region as safe surgical alternatives.",
      "Developed advanced laser protocols for chronic wounds, diabetic feet, and complex burn scars."
    ]
  },
  image: "/images/doctor_ahmed_1784210177919.jpg"
};

export const servicesData: Service[] = [
  {
    id: "hair-transplant",
    title: {
      ar: "زراعة الشعر الطبيعي المتطورة (FUE & DHI)",
      en: "Advanced Hair Transplantation (FUE & DHI)"
    },
    shortDescription: {
      ar: "استعادة الشعر الطبيعي بكثافة عالية ومظهر طبيعي 100٪ بدون جروح أو ندوب باستخدام أحدث التقنيات العالمية للرجال.",
      en: "Restore natural hair density with a 100% natural hairline, free from visible scars using advanced global FUE & DHI micro-grafting."
    },
    fullDescription: {
      ar: "نقدم في عيادة نور حلولاً نهائية لتساقط الشعر والصلع الوراثي عند الرجال. نعتمد بشكل أساسي على تقنية اقتطاف وحدة البصيلة (FUE) وتقنية أقلام تشوي المباشرة (DHI)، مما يضمن استخلاص البصيلات الفردية بدقة متناهية وإعادة زراعتها بزوايا واتجاهات تطابق تماماً نمو الشعر الطبيعي. تتم العملية بأكملها تحت التخدير الموضعي المريح وبنسب نجاح تفوق الـ 98٪.",
      en: "At Nour Clinic, we provide definitive solutions for male pattern baldness and hair thinning. We specialize in Follicular Unit Excision (FUE) and Direct Hair Implantation (DHI) using Choi Implanter Pens. This ensures microscopic precision in graft extraction and placement at exact natural angles. The entire procedure is performed under comfortable local anesthesia with success rates exceeding 98%."
    },
    features: {
      ar: [
        "رسم خط أمامي طبيعي للشعر يتناسب بدقة مع ملامح الوجه وعمر المريض.",
        "استخلاص دقيق للبصيلات دون الإضرار بالمنطقة المانحة.",
        "زراعة البصيلات بأقلام DHI لتقليل وقت بقاء البصيلة خارج الجسم والحفاظ على حيويتها.",
        "متابعة دورية مكثفة وجلسات بلازما مجانية لتسريع نمو البصيلات المزروعة."
      ],
      en: [
        "Artistic hairline design tailored to individual facial anatomy and age.",
        "Microscopic graft extraction preserving the health of the donor area.",
        "DHI implantation reducing out-of-body time to maximize follicle survival.",
        "Comprehensive post-operative care and supportive PRP sessions to boost density."
      ]
    },
    image: "/images/hair_transplant_before_after_1784210189659.jpg",
    iconName: "Scissors",
    benefits: {
      ar: [
        "مظهر طبيعي تماماً غير ملحوظ.",
        "بدون خياطة جراحية وبدون آلام تذكر.",
        "فترة نقاهة سريعة لا تتعدى 3-5 أيام.",
        "شعر دائم مدى الحياة ينمو ويحلق بشكل طبيعي."
      ],
      en: [
        "Completely natural, indistinguishable hairline.",
        "No surgical stitches, minimal discomfort.",
        "Fast recovery, return to work in 3-5 days.",
        "Lifetime permanent hair that grows and behaves naturally."
      ]
    }
  },
  {
    id: "wound-care",
    title: {
      ar: "علاج الجروح المستعصية والترميم بالليزر",
      en: "Advanced Wound Care & Laser Rejuvenation"
    },
    shortDescription: {
      ar: "علاج متكامل ومتخصص للجروح المزمنة، قرح الفراش، القدم السكري، والندبات باستخدام أحدث تقنيات ليزر الترميم والطاقة الضوئية.",
      en: "Comprehensive treatment for chronic wounds, pressure sores, diabetic foot ulcers, and deep scars using advanced healing lasers."
    },
    fullDescription: {
      ar: "تتميز عيادة نور بقسم ريادي مجهز بأحدث أجهزة الليزر الطبي المصممة لتحفيز التئام الأنسجة الخلوية وتنشيط الدورة الدموية الدقيقة في خلايا الجروح المزمنة. نجمع بين الغيارات الطبية الذكية الحديثة والعلاج بالليزر البارد والنبضي عالي الكثافة لتسريع الشفاء وإعادة بناء طبقات الجلد المصابة بشكل صحي، مما يقلل بشكل كبير من احتمالات حدوث مضاعفات أو تشوهات في الندوب.",
      en: "Nour Clinic features a pioneering department equipped with high-performance medical laser systems designed to bio-stimulate tissue regeneration and enhance microcirculation. By combining advanced smart dressings with low-level cold lasers and high-intensity pulsed laser therapies, we accelerate healing, reduce the risk of infection, and minimize scar contractures and deformities."
    },
    features: {
      ar: [
        "برامج خاصة ومتكاملة لعلاج قرح القدم السكري لمنع البتر وتطهير الأنسجة.",
        "جلسات ليزر بارد لتحفيز الكولاجين ونمو الخلايا الطلائية في منطقة القرح الجلدي.",
        "إزالة وتسطيح ندبات العمليات الجراحية القديمة وآثار الحروق بالليزر الكربوني الجزئي.",
        "فريق تمريضي متخصص في الغيارات والتعقيم الطبي الدقيق."
      ],
      en: [
        "Specialized protocol for diabetic foot ulcers to prevent complications and amputations.",
        "Cold laser biostimulation to prompt cellular ATP and prompt epithelial growth.",
        "Carbon dioxide fractional laser resurfacing for severe surgical and burn scars.",
        "Highly specialized nursing team trained in strict sterile wound debridement and dressings."
      ]
    },
    image: "/images/laser_wound_treatment_1784210204459.jpg",
    iconName: "Activity",
    benefits: {
      ar: [
        "تسريع التئام الجروح بنسبة تصل إلى 3 أضعاف مقارنة بالطرق التقليدية.",
        "تقليل الألم والالتهاب بشكل فوري من أولى الجلسات.",
        "تحسين مرونة ومظهر الجلد المصاب بشكل جمالي ملحوظ.",
        "تقليل الحاجة للتدخلات الجراحية الرقعية المعقدة."
      ],
      en: [
        "Accelerates tissue healing up to 3 times faster than conventional treatments.",
        "Immediate relief from localized neuropathic or inflammatory pain.",
        "Drastically improves skin flexibility, texture, and aesthetic outcomes.",
        "Minimizes the requirement for complex reconstructive skin grafts."
      ]
    }
  },
  {
    id: "cosmetic-dermatology",
    title: {
      ar: "العلاجات الجلدية التجميلية للرجال",
      en: "Clinical Aesthetic & Regenerative Procedures"
    },
    shortDescription: {
      ar: "علاجات طبية متطورة لتجديد شباب البشرة وعلاج الندبات، التصبغات، وآثار حب الشباب بالليزر وحقن البلازما الغنية بالصفائح.",
      en: "Innovative aesthetic therapies for skin rejuvenation, acne scars, hyperpigmentation, and hair thinning with specialized medical lasers and PRP."
    },
    fullDescription: {
      ar: "نقدم في عيادة نور مجموعة راقية من الإجراءات التجميلية والترميمية للوجه والجلد بشكل علمي ومدروس، مع التركيز على المحافظة على الملامح الطبيعية والصحية. تشمل خدماتنا علاج ندبات حب الشباب العميقة بالفراكشنال ليزر، وحقن البلازما الغنية بالصفائح الدموية (PRP) والخلية الجذعية لتجديد خلايا الوجه وتحفيز بصيلات الشعر الضعيفة للحد من تساقط الشعر وزيادة كثافته.",
      en: "We offer a carefully curated spectrum of clinical aesthetic and regenerative procedures, emphasizing natural harmony and medical safety. Our treatments include fractional laser resurfacing for deep acne scars, platelet-rich plasma (PRP) micro-injections for facial rejuvenation, and advanced clinical mesotherapy tailored to enhance tissue vigor and counter early-stage alopecia."
    },
    features: {
      ar: [
        "علاج حفر الجلد وآثار الشباب بتقنيات التقشير الليزري الكربوني المتطور CO2.",
        "حقن البلازما الممتازة (Ultra-PRP) لتعزيز صحة ومقاومة البشرة والشعر.",
        "إزالة التصبغات والوشم بتقنية الكيو-سويتش ليزر بدقة وأمان.",
        "برامج علاجية آمنة خالية من المظاهر الاصطناعية غير الطبيعية."
      ],
      en: [
        "Advanced CO2 fractional laser to treat deep-set acne pits and uneven skin texture.",
        "Premium Ultra-PRP injections to stimulate active cellular growth and skin vitality.",
        "Targeted Q-Switched laser therapy for pigmentation and tattoo removal.",
        "Natural, subtle rejuvenation plans avoiding artificial and overfilled looks."
      ]
    },
    image: "/images/clinic_reception_hero_1784210242698.jpg",
    iconName: "Sparkles",
    benefits: {
      ar: [
        "بشرة صحية، متوازنة وخالية من الندوب البارزة.",
        "إجراءات آمنة تماماً تحت إشراف أخصائيين معتمدين.",
        "نتائج تدريجية طبيعية ومستمرة لفترات طويلة.",
        "جلسات سريعة وسهلة لا تؤثر على روتين الحياة اليومي."
      ],
      en: [
        "Healthy, balanced skin cleared of distressing lesions or scars.",
        "Completely safe procedures led by board-certified clinical dermatologists.",
        "Gradual, elegant, and lasting improvements that build up naturally.",
        "Quick sessions with no downtime, easily fitting busy routines."
      ]
    }
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "case-1",
    title: {
      ar: "زراعة شعر طبيعي متكاملة (حالة صلع من الدرجة الخامسة)",
      en: "Comprehensive Hair Restoration (Class V Male Pattern Baldness)"
    },
    description: {
      ar: "مريض يبلغ من العمر 34 عاماً يعاني من صلع وراثي حاد وتراجع كبير في خط الشعر الأمامي والتاج. تم إجراء عملية زراعة بـ 3800 بصيلة بتقنية FUE الحديثة.",
      en: "A 34-year-old male with severe androgenetic alopecia and significant hairline recession. 3,800 micro-grafts transplanted via advanced FUE."
    },
    category: "hair-transplant",
    beforeImage: "/images/hair_transplant_before_after_1784210189659.jpg", // Contains before and after
    afterImage: "/images/hair_transplant_before_after_1784210189659.jpg",
    details: {
      ar: [
        "عدد البصيلات: 3800 بصيلة طبيعية.",
        "التقنية: اقتطاف البصيلات FUE الدقيق مع فتح القنوات المجهرية.",
        "مدة العملية: 7 ساعات تحت التخدير الموضعي المريح.",
        "النتيجة المرفقة: بعد 9 أشهر من العملية يظهر نمو الشعر طبيعياً وكثيفاً بالكامل."
      ],
      en: [
        "Total grafts: 3,800 natural hair follicles.",
        "Technique: FUE micro-grafting with precision micro-channels.",
        "Duration: 7 hours under comfortable local anesthesia.",
        "Outcome: Outstanding density and natural hair flow visible after 9 months."
      ]
    }
  },
  {
    id: "case-2",
    title: {
      ar: "علاج قرحة قدم سكري عميقة وحرجة بجهاز الليزر البارد",
      en: "Healing of Chronic Diabetic Foot Ulcer with Cold Laser Therapy"
    },
    description: {
      ar: "مريض يبلغ من العمر 58 عاماً مصاب بداء السكري يعاني من قرحة عميقة بالقدم لم تلتئم لمدة 6 أشهر. تم تطبيق بروتوكول العلاج بالليزر مع الضمادات الذكية.",
      en: "A 58-year-old diabetic patient with a deep, non-healing foot ulcer of 6 months. Treated with combined bio-stimulating laser and cellular smart dressing protocols."
    },
    category: "wound-care",
    beforeImage: "/images/laser_wound_treatment_1784210204459.jpg",
    afterImage: "/images/laser_wound_treatment_1784210204459.jpg",
    details: {
      ar: [
        "مدة العلاج: 8 أسابيع بمعدل جلستين في الأسبوع.",
        "التقنية: ليزر بارد منخفض الكثافة لتنشيط خلايا الالتئام السريع + تعقيم حراري ليزري للعدوى البكتيرية.",
        "الملاحظة الطبية: التئام كامل للقرحة بنسبة 100٪ مع استعادة مرونة الجلد ومنع خطر بتر الأصابع.",
        "المتابعة: مظهر الجلد سليم وخالٍ من الالتهابات المزمنة."
      ],
      en: [
        "Treatment course: 8 weeks (2 clinical sessions per week).",
        "Technique: Low-Level Laser Therapy (LLLT) to prompt rapid cell mitosis + laser sterilization.",
        "Clinical result: 100% complete wound closure, healthy skin granulation, and elimination of amputation risk.",
        "Status: Intact, robust skin coverage with no localized recurrence."
      ]
    }
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "hair-transplant",
    question: {
      ar: "هل عملية زراعة الشعر مؤلمة؟ وما هي مدة الشفاء؟",
      en: "Is hair transplantation painful? And what is the recovery time?"
    },
    answer: {
      ar: "العملية غير مؤلمة على الإطلاق لأنها تتم تحت تأثير التخدير الموضعي المتقدم للمنطقتين المانحة والمستقبلة. بعد العملية، قد يشعر المريض ببعض الشد البسيط أو التنميل المؤقت، وهو أمر طبيعي يزول بمسكنات الألم الخفيفة. تلتئم ثقوب الاقتطاف الدقيقة خلال 3 إلى 5 أيام، وبإمكانك العودة لعملك ونشاطك المعتاد في غضون أيام قليلة.",
      en: "The procedure is virtually painless as it is conducted under comfortable local anesthesia. Post-operative tightness or temporary numbness is easily managed with mild painkillers. The micro-incisions heal within 3 to 5 days, and most patients comfortably return to work within a few days."
    }
  },
  {
    id: "faq-2",
    category: "hair-transplant",
    question: {
      ar: "متى تظهر النتائج النهائية لعملية زراعة الشعر؟",
      en: "When will I see the final results of my hair transplant?"
    },
    answer: {
      ar: "يتساقط الشعر المزروع مؤقتاً خلال أول شهرين بعد العملية (وهي مرحلة طبيعية تسمى تساقط الصدمة)، لتبدأ البصيلات المزروعة في إنتاج شعر جديد دائم بعد الشهر الثالث. تظهر النتائج الأولية الكثيفة بعد 6 أشهر، بينما تكتمل كثافة ومظهر الشعر النهائي الممتاز بعد مرور 9 إلى 12 شهراً.",
      en: "The transplanted hair temporarily sheds in the first two months (called shock loss), which is completely normal. New permanent shafts begin growing around month 3. Initial density is visible at 6 months, and the ultimate, mature outcome is achieved by 9 to 12 months."
    }
  },
  {
    id: "faq-3",
    category: "wound-care",
    question: {
      ar: "كيف يساعد الليزر في علاج قرح السكري والجروح القديمة؟",
      en: "How does laser therapy help in treating diabetic ulcers and old wounds?"
    },
    answer: {
      ar: "يعمل الليزر البارد (LLLT) على إرسال فوتونات ضوئية لطيفة تخترق الأنسجة وتصل مباشرة للميتوكوندريا في الخلايا المصابة، مما يحفز إنتاج الطاقة الخلوية (ATP) ويسرع انقسام الخلايا وبناء الألياف والضمادات الحيوية. كما أنه ينشط الأوعية الدموية الدقيقة لتوصيل الأكسجين والغذاء للمنطقة المصابة ويقتل البكتيريا المانعة للالتئام.",
      en: "Low-level cold laser therapy (LLLT) delivers light photons that penetrate deep tissue to stimulate cellular ATP production. This accelerates cell proliferation, fibroblast activity, and collagen synthesis. It also boosts micro-circulation to supply oxygenated blood and sterilizes bacteria that hinder natural healing."
    }
  },
  {
    id: "faq-4",
    category: "wound-care",
    question: {
      ar: "هل يمكن إزالة الندوب القديمة الناتجة عن الحروق أو العمليات بالكامل؟",
      en: "Can old surgical or burn scars be completely removed?"
    },
    answer: {
      ar: "على الرغم من أنه لا توجد طريقة في الطب تخفي الندبة العميقة بنسبة 100٪ لتصبح كأن لم تكن، إلا أن تقنيات الفراكشنال ليزر المتطورة وجلسات تقطيع الألياف بإشراف أ.د. أحمد عادل تحقق تحسناً هائلاً يتراوح بين 70٪ إلى 90٪ في مظهر الندبة، حيث يتم تسويتها مع الجلد المحيط، تقليل احمرارها، واستعادة نعومة الجلد ومرونته.",
      en: "While clinical science cannot erase a deep scar to 100% perfection, advanced Fractional CO2 lasers and subcision protocols by Prof. Dr. Ahmed Adel achieve a massive 70% to 90% aesthetic improvement. It flattens the scar tissue, blends its color with surrounding skin, and restores natural skin elasticity."
    }
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t-1",
    name: { ar: "م. كريم عبد الرحمن", en: "Eng. Karim Abdel-Rahman" },
    age: 38,
    treatment: { ar: "زراعة الشعر بتقنية FUE", en: "Hair Restoration via FUE" },
    text: {
      ar: "بعد سنوات من المعاناة مع تساقط الشعر والتردد، قمت بزيارة عيادة نور. البروفيسور أحمد عادل طمأنني وشرح لي أدق تفاصيل العملية. النتيجة تفوقت على كل توقعاتي، الخط الأمامي طبيعي جداً والكثافة رائعة، والجميع يثني على مظهري الجديد الذي أعاد لي ثقتي بنفسي.",
      en: "After years of hair loss and hesitation, I visited Nour Clinic. Prof. Ahmed Adel reassured me and explained every technical detail. The results exceeded all my hopes; the hairline is incredibly natural, and my self-confidence is fully restored."
    },
    rating: 5
  },
  {
    id: "t-2",
    name: { ar: "الأستاذ خالد الدوسري", en: "Mr. Khaled Al-Dossari" },
    age: 52,
    treatment: { ar: "علاج قدم سكري بالليزر", en: "Laser Diabetic Foot Ulcer Healing" },
    text: {
      ar: "كنت على وشك مواجهة جراحة بتر لإصبع القدم بسبب قرحة سكرية مزمنة دامت لأشهر بدون تحسن. بفضل الله ثم خبرة الدكتور أحمد عادل وجلسات ليزر الترميم في عيادة نور، التأمت القرحة تماماً خلال 8 أسابيع فقط. طاقم طبي في غاية الاحتراف والضمير والرحمة.",
      en: "I was facing a potential partial amputation due to a chronic diabetic ulcer that would not heal. Thanks to Prof. Ahmed Adel and the laser sessions at Nour Clinic, the ulcer closed completely in just 8 weeks. Truly a compassionate and highly skilled medical team."
    },
    rating: 5
  }
];
