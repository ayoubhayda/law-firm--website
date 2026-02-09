export interface Service {
  slug: string
  icon: string
  title: {
    ar: string
    en: string
  }
  description: {
    ar: string
    en: string
  }
  features: {
    ar: string[]
    en: string[]
  }
  detailedContent: {
    ar: {
      overview: string
      approach: string
      benefits: string[]
      process: string[]
    }
    en: {
      overview: string
      approach: string
      benefits: string[]
      process: string[]
    }
  }
  relatedServices: string[]
}

export const services: Service[] = [
  {
    slug: "family-law",
    icon: "Users",
    title: {
      ar: "قانون الأسرة",
      en: "Family Law",
    },
    description: {
      ar: "نقدم استشارات شاملة في جميع قضايا الأسرة بما في ذلك الزواج والطلاق وحضانة الأطفال والنفقة وتقسيم الممتلكات. نحن نفهم حساسية هذه القضايا ونعمل بتفهم ومهنية عالية.",
      en: "We provide comprehensive consultation on all family matters including marriage, divorce, child custody, alimony, and property division. We understand the sensitivity of these cases and work with understanding and high professionalism.",
    },
    features: {
      ar: ["قضايا الطلاق والخلع", "حضانة الأطفال", "النفقة والمؤخر", "تقسيم الممتلكات"],
      en: ["Divorce and Khula Cases", "Child Custody", "Alimony and Deferred Dower", "Property Division"],
    },
    detailedContent: {
      ar: {
        overview:
          "قانون الأسرة هو أحد أهم فروع القانون التي تتطلب خبرة عميقة وحساسية عالية في التعامل مع القضايا الشخصية والعائلية. نحن نقدم خدمات قانونية متخصصة تغطي جميع جوانب قانون الأسرة، من الزواج إلى الطلاق وما بعده، مع التركيز على حماية مصالح جميع أفراد الأسرة، خاصة الأطفال.",
        approach:
          "نتبع منهجاً شاملاً يجمع بين الخبرة القانونية والفهم العميق للديناميكيات الأسرية. نسعى دائماً للوصول إلى حلول ودية عندما يكون ذلك ممكناً، مع الاستعداد للدفاع بقوة عن حقوق عملائنا في المحاكم عند الضرورة.",
        benefits: [
          "خبرة واسعة في جميع جوانب قانون الأسرة",
          "نهج حساس ومتفهم للقضايا الشخصية",
          "سعي للحلول الودية قبل اللجوء للمحاكم",
          "حماية مصالح الأطفال كأولوية قصوى",
          "استشارات مجانية للتقييم الأولي",
          "متابعة مستمرة حتى انتهاء القضية",
        ],
        process: [
          "استشارة أولية مجانية لفهم الوضع",
          "تحليل شامل للحالة القانونية والشخصية",
          "وضع استراتيجية قانونية مخصصة",
          "محاولة الوصول لحلول ودية",
          "التمثيل القانوني أمام المحاكم إذا لزم الأمر",
          "متابعة تنفيذ الأحكام والقرارات",
        ],
      },
      en: {
        overview:
          "Family law is one of the most important branches of law that requires deep expertise and high sensitivity in dealing with personal and family issues. We provide specialized legal services covering all aspects of family law, from marriage to divorce and beyond, with a focus on protecting the interests of all family members, especially children.",
        approach:
          "We follow a comprehensive approach that combines legal expertise with deep understanding of family dynamics. We always strive to reach amicable solutions when possible, while being prepared to strongly defend our clients' rights in court when necessary.",
        benefits: [
          "Extensive experience in all aspects of family law",
          "Sensitive and understanding approach to personal issues",
          "Pursuit of amicable solutions before resorting to courts",
          "Protection of children's interests as top priority",
          "Free consultations for initial assessment",
          "Continuous follow-up until case completion",
        ],
        process: [
          "Free initial consultation to understand the situation",
          "Comprehensive analysis of legal and personal status",
          "Development of customized legal strategy",
          "Attempt to reach amicable solutions",
          "Legal representation in courts if necessary",
          "Follow-up on implementation of judgments and decisions",
        ],
      },
    },
    relatedServices: ["contract-drafting", "litigation-arbitration"],
  },
  {
    slug: "real-estate",
    icon: "Home",
    title: {
      ar: "العقارات",
      en: "Real Estate",
    },
    description: {
      ar: "خدمات قانونية متكاملة في المعاملات العقارية تشمل البيع والشراء والإيجار والاستثمار العقاري. نساعدكم في حماية استثماراتكم العقارية وضمان سلامة المعاملات.",
      en: "Complete legal services in real estate transactions including buying, selling, leasing, and real estate investment. We help you protect your real estate investments and ensure transaction safety.",
    },
    features: {
      ar: ["عقود البيع والشراء", "عقود الإيجار", "النزاعات العقارية", "الاستثمار العقاري"],
      en: ["Sale and Purchase Contracts", "Lease Agreements", "Real Estate Disputes", "Real Estate Investment"],
    },
    detailedContent: {
      ar: {
        overview:
          "العقارات تمثل أحد أهم أشكال الاستثمار والثروة، لذلك تتطلب خبرة قانونية متخصصة لضمان حماية هذه الاستثمارات. نقدم خدمات قانونية شاملة تغطي جميع جوانب القانون العقاري، من المعاملات البسيطة إلى المشاريع الاستثمارية الكبرى.",
        approach:
          "نتبع منهجاً استباقياً يركز على الوقاية من المشاكل القانونية قبل حدوثها، من خلال الفحص الدقيق للوثائق والعقود، والتأكد من سلامة جميع الإجراءات القانونية.",
        benefits: [
          "خبرة عميقة في القانون العقاري المحلي والدولي",
          "فحص شامل للوثائق والسندات",
          "صياغة عقود محكمة تحمي مصالح العملاء",
          "متابعة إجراءات التسجيل والنقل",
          "حل النزاعات العقارية بكفاءة",
          "استشارات استثمارية عقارية",
        ],
        process: [
          "تقييم أولي للمعاملة العقارية",
          "فحص الوثائق والسندات القانونية",
          "صياغة أو مراجعة العقود",
          "متابعة الإجراءات الحكومية",
          "ضمان نقل الملكية بشكل قانوني",
          "تقديم الدعم القانوني المستمر",
        ],
      },
      en: {
        overview:
          "Real estate represents one of the most important forms of investment and wealth, therefore requiring specialized legal expertise to ensure protection of these investments. We provide comprehensive legal services covering all aspects of real estate law, from simple transactions to major investment projects.",
        approach:
          "We follow a proactive approach that focuses on preventing legal problems before they occur, through careful examination of documents and contracts, and ensuring the integrity of all legal procedures.",
        benefits: [
          "Deep expertise in local and international real estate law",
          "Comprehensive examination of documents and deeds",
          "Drafting solid contracts that protect clients' interests",
          "Follow-up on registration and transfer procedures",
          "Efficient resolution of real estate disputes",
          "Real estate investment consultations",
        ],
        process: [
          "Initial assessment of real estate transaction",
          "Examination of legal documents and deeds",
          "Drafting or reviewing contracts",
          "Follow-up on government procedures",
          "Ensuring legal transfer of ownership",
          "Providing continuous legal support",
        ],
      },
    },
    relatedServices: ["contract-drafting", "business-law"],
  },
  {
    slug: "business-law",
    icon: "Briefcase",
    title: {
      ar: "القانون التجاري",
      en: "Business Law",
    },
    description: {
      ar: "استشارات قانونية شاملة للشركات والمؤسسات التجارية تشمل تأسيس الشركات والعقود التجارية وحل النزاعات التجارية والامتثال القانوني.",
      en: "Comprehensive legal consultation for companies and commercial institutions including company formation, commercial contracts, commercial dispute resolution, and legal compliance.",
    },
    features: {
      ar: ["تأسيس الشركات", "العقود التجارية", "النزاعات التجارية", "الامتثال القانوني"],
      en: ["Company Formation", "Commercial Contracts", "Commercial Disputes", "Legal Compliance"],
    },
    detailedContent: {
      ar: {
        overview:
          "القانون التجاري هو العمود الفقري لأي نشاط اقتصادي ناجح. نقدم خدمات قانونية متخصصة تساعد الشركات والمؤسسات على النمو والازدهار في بيئة قانونية آمنة ومتوافقة مع جميع اللوائح والقوانين.",
        approach:
          "نعمل كشركاء استراتيجيين مع عملائنا، نفهم أهدافهم التجارية ونقدم حلولاً قانونية مبتكرة تدعم نموهم وتحمي مصالحهم في السوق المحلي والدولي.",
        benefits: [
          "خبرة واسعة في القانون التجاري والشركات",
          "فهم عميق لبيئة الأعمال المحلية والدولية",
          "حلول قانونية مبتكرة ومخصصة",
          "دعم مستمر للنمو والتوسع",
          "حماية الملكية الفكرية والعلامات التجارية",
          "إدارة المخاطر القانونية بفعالية",
        ],
        process: [
          "تحليل الاحتياجات القانونية للشركة",
          "وضع استراتيجية قانونية شاملة",
          "تنفيذ الحلول القانونية المطلوبة",
          "مراقبة الامتثال المستمر",
          "تقديم الدعم في النزاعات التجارية",
          "تحديث الاستراتيجيات حسب التطورات",
        ],
      },
      en: {
        overview:
          "Business law is the backbone of any successful economic activity. We provide specialized legal services that help companies and institutions grow and thrive in a safe legal environment that complies with all regulations and laws.",
        approach:
          "We work as strategic partners with our clients, understanding their business objectives and providing innovative legal solutions that support their growth and protect their interests in local and international markets.",
        benefits: [
          "Extensive experience in commercial and corporate law",
          "Deep understanding of local and international business environment",
          "Innovative and customized legal solutions",
          "Continuous support for growth and expansion",
          "Protection of intellectual property and trademarks",
          "Effective legal risk management",
        ],
        process: [
          "Analysis of company's legal needs",
          "Development of comprehensive legal strategy",
          "Implementation of required legal solutions",
          "Monitoring continuous compliance",
          "Support in commercial disputes",
          "Updating strategies according to developments",
        ],
      },
    },
    relatedServices: ["contract-drafting", "litigation-arbitration"],
  },
  {
    slug: "criminal-defense",
    icon: "Shield",
    title: {
      ar: "الدفاع الجنائي",
      en: "Criminal Defense",
    },
    description: {
      ar: "تمثيل قانوني قوي ومهني في القضايا الجنائية مع التركيز على حماية حقوق المتهمين وضمان العدالة. نقدم دفاعاً قوياً ومدروساً في جميع أنواع القضايا الجنائية.",
      en: "Strong and professional legal representation in criminal cases with focus on protecting defendants' rights and ensuring justice. We provide strong and well-studied defense in all types of criminal cases.",
    },
    features: {
      ar: ["الجرائم المالية", "جرائم المرور", "القضايا الجنائية العامة", "الاستئناف الجنائي"],
      en: ["Financial Crimes", "Traffic Violations", "General Criminal Cases", "Criminal Appeals"],
    },
    detailedContent: {
      ar: {
        overview:
          "الدفاع الجنائي يتطلب خبرة قانونية عميقة وفهماً شاملاً لنظام العدالة الجنائية. نحن نؤمن بأن كل شخص يستحق دفاعاً قوياً وعادلاً، ونعمل بلا كلل لحماية حقوق موكلينا وضمان حصولهم على محاكمة عادلة.",
        approach:
          "نتبع استراتيجية دفاع شاملة تبدأ من اللحظة الأولى للاتهام، نحلل الأدلة بعناية، ونبني دفاعاً قوياً يستند إلى القانون والحقائق، مع الحرص على حماية كرامة وحقوق موكلينا.",
        benefits: [
          "خبرة واسعة في القانون الجنائي والإجراءات",
          "دفاع قوي ومدروس في جميع مراحل القضية",
          "حماية حقوق المتهمين والمحافظة على كرامتهم",
          "تحليل دقيق للأدلة والشهادات",
          "استراتيجيات دفاع مبتكرة ومخصصة",
          "متابعة مستمرة حتى انتهاء القضية",
        ],
        process: [
          "تقييم فوري للقضية والأدلة",
          "وضع استراتيجية دفاع شاملة",
          "جمع الأدلة والشهادات المؤيدة",
          "التمثيل أمام المحاكم الجنائية",
          "تقديم الطعون والاستئنافات إذا لزم",
          "متابعة تنفيذ الأحكام والقرارات",
        ],
      },
      en: {
        overview:
          "Criminal defense requires deep legal expertise and comprehensive understanding of the criminal justice system. We believe that every person deserves strong and fair defense, and we work tirelessly to protect our clients' rights and ensure they receive a fair trial.",
        approach:
          "We follow a comprehensive defense strategy that begins from the first moment of accusation, carefully analyze evidence, and build a strong defense based on law and facts, while ensuring protection of our clients' dignity and rights.",
        benefits: [
          "Extensive experience in criminal law and procedures",
          "Strong and well-studied defense at all stages of the case",
          "Protection of defendants' rights and preservation of their dignity",
          "Precise analysis of evidence and testimonies",
          "Innovative and customized defense strategies",
          "Continuous follow-up until case completion",
        ],
        process: [
          "Immediate assessment of case and evidence",
          "Development of comprehensive defense strategy",
          "Collection of supporting evidence and testimonies",
          "Representation before criminal courts",
          "Filing appeals and challenges if necessary",
          "Follow-up on implementation of judgments and decisions",
        ],
      },
    },
    relatedServices: ["litigation-arbitration", "family-law"],
  },
  {
    slug: "contract-drafting",
    icon: "FileText",
    title: {
      ar: "صياغة العقود",
      en: "Contract Drafting",
    },
    description: {
      ar: "صياغة ومراجعة العقود القانونية بجميع أنواعها مع ضمان حماية مصالح العملاء والامتثال للقوانين المحلية والدولية.",
      en: "Drafting and reviewing legal contracts of all types while ensuring protection of clients' interests and compliance with local and international laws.",
    },
    features: {
      ar: ["العقود التجارية", "عقود العمل", "اتفاقيات الشراكة", "عقود الخدمات"],
      en: ["Commercial Contracts", "Employment Contracts", "Partnership Agreements", "Service Contracts"],
    },
    detailedContent: {
      ar: {
        overview:
          "العقود هي أساس جميع المعاملات القانونية والتجارية. نحن نتخصص في صياغة عقود محكمة وشاملة تحمي مصالح عملائنا وتقلل من المخاطر القانونية، مع ضمان الوضوح والدقة في جميع البنود والشروط.",
        approach:
          "نتبع منهجية دقيقة في صياغة العقود تبدأ بفهم احتياجات العميل وأهدافه، ثم نصيغ عقوداً مخصصة تلبي هذه الاحتياجات مع ضمان الحماية القانونية الكاملة.",
        benefits: [
          "خبرة واسعة في صياغة جميع أنواع العقود",
          "عقود محكمة تحمي مصالح العملاء",
          "امتثال كامل للقوانين المحلية والدولية",
          "وضوح ودقة في الصياغة والشروط",
          "تقليل المخاطر القانونية والنزاعات",
          "مراجعة وتحديث العقود الموجودة",
        ],
        process: [
          "فهم احتياجات العميل وأهدافه",
          "تحليل المتطلبات القانونية والتجارية",
          "صياغة مسودة العقد الأولية",
          "مراجعة وتنقيح العقد",
          "التفاوض على الشروط إذا لزم الأمر",
          "إنهاء العقد وضمان تنفيذه",
        ],
      },
      en: {
        overview:
          "Contracts are the foundation of all legal and commercial transactions. We specialize in drafting solid and comprehensive contracts that protect our clients' interests and reduce legal risks, while ensuring clarity and precision in all terms and conditions.",
        approach:
          "We follow a precise methodology in contract drafting that begins with understanding the client's needs and objectives, then we draft customized contracts that meet these needs while ensuring complete legal protection.",
        benefits: [
          "Extensive experience in drafting all types of contracts",
          "Solid contracts that protect clients' interests",
          "Full compliance with local and international laws",
          "Clarity and precision in drafting and terms",
          "Reduction of legal risks and disputes",
          "Review and update of existing contracts",
        ],
        process: [
          "Understanding client's needs and objectives",
          "Analysis of legal and commercial requirements",
          "Drafting initial contract draft",
          "Review and refinement of contract",
          "Negotiation of terms if necessary",
          "Finalization of contract and ensuring its implementation",
        ],
      },
    },
    relatedServices: ["business-law", "real-estate"],
  },
  {
    slug: "litigation-arbitration",
    icon: "Gavel",
    title: {
      ar: "التقاضي والتحكيم",
      en: "Litigation & Arbitration",
    },
    description: {
      ar: "تمثيل قانوني متميز أمام المحاكم وهيئات التحكيم مع خبرة واسعة في إدارة القضايا المعقدة وتحقيق أفضل النتائج للعملاء.",
      en: "Distinguished legal representation before courts and arbitration bodies with extensive experience in managing complex cases and achieving the best results for clients.",
    },
    features: {
      ar: ["التقاضي المدني", "التحكيم التجاري", "تنفيذ الأحكام", "الطعون والاستئناف"],
      en: ["Civil Litigation", "Commercial Arbitration", "Judgment Execution", "Appeals and Challenges"],
    },
    detailedContent: {
      ar: {
        overview:
          "التقاضي والتحكيم يتطلبان خبرة قانونية عميقة ومهارات عالية في إدارة القضايا المعقدة. نحن نقدم تمثيلاً قانونياً متميزاً أمام جميع درجات المحاكم وهيئات التحكيم، مع التركيز على تحقيق أفضل النتائج لعملائنا.",
        approach:
          "نتبع استراتيجية شاملة تجمع بين الخبرة القانونية والفهم العميق لطبيعة كل قضية، نحضر بعناية فائقة ونقدم حججاً قوية مدعومة بالأدلة والقانون.",
        benefits: [
          "خبرة واسعة في التقاضي أمام جميع المحاكم",
          "تخصص في التحكيم التجاري والدولي",
          "إدارة فعالة للقضايا المعقدة",
          "تحضير شامل ودقيق للقضايا",
          "تمثيل قوي ومقنع أمام المحاكم",
          "متابعة تنفيذ الأحكام والقرارات",
        ],
        process: [
          "تحليل شامل للقضية والأدلة",
          "وضع استراتيجية التقاضي المناسبة",
          "تحضير المرافعات والمستندات",
          "التمثيل أمام المحاكم أو هيئات التحكيم",
          "متابعة الطعون والاستئنافات",
          "ضمان تنفيذ الأحكام النهائية",
        ],
      },
      en: {
        overview:
          "Litigation and arbitration require deep legal expertise and high skills in managing complex cases. We provide distinguished legal representation before all court levels and arbitration bodies, focusing on achieving the best results for our clients.",
        approach:
          "We follow a comprehensive strategy that combines legal expertise with deep understanding of each case's nature, prepare with utmost care and present strong arguments supported by evidence and law.",
        benefits: [
          "Extensive experience in litigation before all courts",
          "Specialization in commercial and international arbitration",
          "Effective management of complex cases",
          "Comprehensive and precise case preparation",
          "Strong and convincing representation before courts",
          "Follow-up on implementation of judgments and decisions",
        ],
        process: [
          "Comprehensive analysis of case and evidence",
          "Development of appropriate litigation strategy",
          "Preparation of pleadings and documents",
          "Representation before courts or arbitration bodies",
          "Follow-up on appeals and challenges",
          "Ensuring implementation of final judgments",
        ],
      },
    },
    relatedServices: ["criminal-defense", "business-law"],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getRelatedServices(currentSlug: string, relatedSlugs: string[]): Service[] {
  return services.filter((service) => relatedSlugs.includes(service.slug) && service.slug !== currentSlug)
}
