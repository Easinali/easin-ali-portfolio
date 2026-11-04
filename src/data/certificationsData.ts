export interface CertificationItem {
  id: string;
  category: 'excel' | 'erp' | 'scm' | 'professional';
  title: string;
  titleBn: string;
  provider: string;
  providerBn: string;
  period: string;
  periodBn: string;
  status: string;
  statusBn: string;
  description: string;
  descriptionBn: string;
  skillsLearned: string[];
  skillsLearnedBn: string[];
}

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-excel",
    category: "excel",
    title: "Advanced Microsoft Excel for Business & Data Analysis",
    titleBn: "ব্যবসায়িক ও ডাটা অ্যানালাইসিসে অ্যাডভান্সড মাইক্রোসফট এক্সেল",
    provider: "[Training Provider / Academy – Editable Placeholder]",
    providerBn: "[প্রশিক্ষণ প্রদানকারী প্রতিষ্ঠান – সম্পাদনাযোগ্য]",
    period: "Completed / Ongoing [Editable Year]",
    periodBn: "সম্পন্ন / চলমান [সম্পাদনাযোগ্য]",
    status: "Verified Training",
    statusBn: "যাচাইকৃত প্রশিক্ষণ",
    description: "Intensive training focusing on advanced formulas, lookup mechanics, Pivot Tables, dynamic charts, and financial data modeling.",
    descriptionBn: "অ্যাডভান্সড ফর্মুলা, লুকআপ মেকানিক্স, পিভট টেবিল, ডাইনামিক চার্ট ও ফিন্যান্সিয়াল ডাটা মডেলিংয়ের ওপর ব্যবহারিক প্রশিক্ষণ।",
    skillsLearned: ["XLOOKUP & INDEX-MATCH", "Pivot Dashboards", "Data Cleaning Techniques", "Variance Modeling"],
    skillsLearnedBn: ["XLOOKUP ও INDEX-MATCH", "পিভট ড্যাশবোর্ড", "ডাটা ক্লিনিং টেকনিক", "ভ্যারিয়্যান্স মডেলিং"]
  },
  {
    id: "cert-erp",
    category: "erp",
    title: "Enterprise Resource Planning (ERP) Operations & Workflow",
    titleBn: "এন্টারপ্রাইজ রিসোর্স প্ল্যানিং (ইআরপি) অপারেশনস ও ওয়ার্কফ্লো",
    provider: "[Paragon Group Internal / Specialized Provider – Editable]",
    providerBn: "[প্যারাগন গ্রুপ অভ্যন্তরীণ / বিশেষায়িত প্রতিষ্ঠান – সম্পাদনাযোগ্য]",
    period: "Workplace Certification [Editable Year]",
    periodBn: "কর্মক্ষেত্রের প্রশিক্ষণ [সম্পাদনাযোগ্য]",
    status: "Operational Competency",
    statusBn: "অপারেশনাল সক্ষমতা",
    description: "Hands-on operational training in inventory logging, dispatch voucher creation, branch reconciliations, and transactional auditing in enterprise systems.",
    descriptionBn: "ইনভেন্টরি এন্ট্রি, ডিসপ্যাচ চালান তৈরি, শাখা সমন্বয় এবং বাণিজ্যিক ট্রানজ্যাকশন অডিটের ওপর কর্মক্ষেত্রের ব্যবহারিক প্রশিক্ষণ।",
    skillsLearned: ["ERP Module Navigation", "Stock Movement Audits", "Discrepancy Resolution", "Batch Tracking"],
    skillsLearnedBn: ["ইআরপি মডিউল নেভিগেশন", "স্টক মুভমেন্ট অডিট", "গরমিল সংশোধন", "ব্যাচ ট্র্যাকিং"]
  },
  {
    id: "cert-scm",
    category: "scm",
    title: "Supply Chain Management & Logistics Fundamentals",
    titleBn: "সাপ্লাই চেইন ম্যানেজমেন্ট ও লজিস্টিকস ফান্ডামেন্টালস",
    provider: "[Institute / PGD-SCM Curriculum – Editable Placeholder]",
    providerBn: "[প্রতিষ্ঠান / পিজিডি কারিকুলাম – সম্পাদনাযোগ্য]",
    period: "Pursuing in parallel with PGD [Editable]",
    periodBn: "পিজিডির সাথে চলমান [সম্পাদনাযোগ্য]",
    status: "Professional Development",
    statusBn: "পেশাগত উন্নয়ন",
    description: "Coursework covering warehousing optimization, demand planning, freight distribution channels, and inventory holding cost control.",
    descriptionBn: "ওয়্যারহাউস অপ্টিমাইজেশন, ডিমান্ড প্ল্যানিং, পণ্য পরিবহন ও ইনভেন্টরি হোল্ডিং কস্ট নিয়ন্ত্রণের ওপর বিশেষায়িত কোর্স।",
    skillsLearned: ["Demand Planning", "Warehouse Layouts", "Lead Time Analytics", "Safety Stock Sizing"],
    skillsLearnedBn: ["ডিমান্ড প্ল্যানিং", "ওয়্যারহাউস লেআউট", "লিড টাইম অ্যানালাইসিস", "সেফটি স্টক নির্ধারণ"]
  },
  {
    id: "cert-professional",
    category: "professional",
    title: "Corporate MIS Reporting & Documentation Governance",
    titleBn: "কর্পোরেট এমআইএস রিপোর্টিং ও ডকুমেন্টেশন গভর্নেন্স",
    provider: "[Professional Development Program – Editable Placeholder]",
    providerBn: "[পেশাগত দক্ষতা উন্নয়ন কর্মসূচি – সম্পাদনাযোগ্য]",
    period: "Ongoing Development [Editable]",
    periodBn: "চলমান প্রশিক্ষণ [সম্পাদনাযোগ্য]",
    status: "Continuous Learning",
    statusBn: "ধারাবাহিক শিক্ষা",
    description: "Executive presentation guidelines, tabular data standards, inter-departmental collaboration, and corporate communication protocols.",
    descriptionBn: "ম্যানেজমেন্ট রিপোর্টিং প্রেজেন্টেশন, প্রাতিষ্ঠানিক ডাটা স্ট্যান্ডার্ড ও আন্তঃবিভাগীয় কর্পোরেট যোগাযোগের নীতিমালা।",
    skillsLearned: ["Executive Briefings", "SOP Documentation", "Data Quality Assurance", "Cross-team Workflows"],
    skillsLearnedBn: ["এক্সিকিউটিভ ব্রিফিং", "এসওপি ডকুমেন্টেশন", "ডাটা কোয়ালিটি নিশ্চিতকরণ", "টিম ওয়ার্কফ্লো"]
  }
];

