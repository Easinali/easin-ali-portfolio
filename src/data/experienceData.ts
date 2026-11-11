export interface ExperienceItem {
  id: string;
  isCurrent: boolean;
  role: string;
  roleBn: string;
  company: string;
  companyBn: string;
  department: string;
  departmentBn: string;
  period: string;
  periodBn: string;
  location: string;
  locationBn: string;
  description: string;
  descriptionBn: string;
  responsibilities: string[];
  responsibilitiesBn: string[];
  skillsGained: string[];
  skillsGainedBn: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "paragon-group",
    isCurrent: true,
    role: "Assistant Officer",
    roleBn: "অ্যাসিস্ট্যান্ট অফিসার",
    company: "Paragon Group",
    companyBn: "প্যারাগন গ্রুপ",
    department: "Data Management & Operations Support",
    departmentBn: "ডাটা ম্যানেজমেন্ট ও অপারেশনস সাপোর্ট",
    period: "2024 – Present",
    periodBn: "২০২৪ – বর্তমান [যোগদানের তারিখ সম্পাদনাযোগ্য]",
    location: "Dhaka, Bangladesh",
    locationBn: "ঢাকা, বাংলাদেশ",
    description: "Spearheading daily operational records, inventory coordination, and multi-outlet sales reconciliation within the enterprise ERP ecosystem.",
    descriptionBn: "এন্টারপ্রাইজ ইআরপি ইকোসিস্টেমে প্রতিদিনের অপারেশনাল রেকর্ড, ইনভেন্টরি সমন্বয় ও রিটেইল সেলস রিকনসিলিয়েশন পরিচালনা করছি।",
    responsibilities: [
      "Supporting inventory tracking and data management across active depot and retail channels.",
      "Maintaining operational records, transactional vouchers, and daily activity logs with meticulous accuracy.",
      "Working directly with ERP-based operational processes to record, trace, and monitor physical goods movement.",
      "Supporting outlet operations and executing daily sales vs bank deposit reconciliation to eliminate discrepancies.",
      "Preparing operational and management reports (MIS) with clear variance tracking for department heads.",
      "Coordinating seamlessly with cross-functional teams including sales, warehousing, and accounts.",
      "Maintaining corporate documentation standards and guaranteeing absolute data accuracy."
    ],
    responsibilitiesBn: [
      "ডিপো ও রিটেইল চ্যানেলে ইনভেন্টরি ট্র্যাকিং এবং সামগ্রিক ডাটা ম্যানেজমেন্টে সরাসরি সহায়তা প্রদান।",
      "দৈনন্দিন অপারেশনাল রেকর্ড, ভাউচার এবং ট্রানজ্যাকশন লগ নিখুঁত নির্ভুলতার সাথে সংরক্ষণ ও নিরীক্ষণ।",
      "পণ্য প্রবাহ ও স্টক লেভেল নিয়ন্ত্রণের জন্য নিয়মিত ইআরপি-ভিত্তিক অপারেশনাল প্রসেসে কাজ করা।",
      "আউটলেট অপারেশন পরিচালনা এবং প্রতিদিনের বিক্রয় ও ব্যাংক ডিপোজিট রিকনসিলিয়েশন সম্পন্নকরণ।",
      "বিভাগীয় প্রধানদের জন্য সময়ানুগ অপারেশনাল ও ম্যানেজমেন্ট এমআইএস (MIS) রিপোর্ট প্রস্তুতকরণ।",
      "বিক্রয়, ওয়্যারহাউস ও হিসাব বিভাগসহ বিভিন্ন আন্তঃবিভাগীয় টিমের সাথে নিবিড় সমন্বয় সাধন।",
      "প্রাতিষ্ঠানিক ডকুমেন্টেশন নীতিমালা মেনে চলা এবং ডাটার শতভাগ নির্ভরযোগ্যতা নিশ্চিত করা।"
    ],
    skillsGained: [
      "ERP Operations",
      "Inventory Management",
      "Deposit Reconciliation",
      "MIS Reporting",
      "Data Governance",
      "Inter-departmental Coordination"
    ],
    skillsGainedBn: [
      "ইআরপি অপারেশনস",
      "ইনভেন্টরি ম্যানেজমেন্ট",
      "ডিপোজিট রিকনসিলিয়েশন",
      "এমআইএস রিপোর্টিং",
      "ডাটা গভর্নেন্স",
      "আন্তঃবিভাগীয় সমন্বয়"
    ]
  },
  {
    id: "computer-service-business",
    isCurrent: false,
    role: "Operations Lead & Service Coordinator",
    roleBn: "অপারেশনস লিড ও সার্ভিস কো-অর্ডিনেটর",
    company: "Computer & Digital Information Services",
    companyBn: "কম্পিউটার ও ডিজিটাল সার্ভিস এন্টারপ্রাইজ",
    department: "Business Operations & Public Digital Services",
    departmentBn: "বিজনেস অপারেশনস ও পাবলিক ডিজিটাল সার্ভিস",
    period: "Previous Enterprise [2023 – 2024]",
    periodBn: "পূর্ববর্তী অভিজ্ঞতা [সম্পাদনাযোগ্য: যেমন ২০২৩ – ২০২৪]",
    location: "Bangladesh",
    locationBn: "বাংলাদেশ",
    description: "Managed a full-service computer solutions and digital documentation center, building strong foundational competencies in speed, accuracy, and client communication.",
    descriptionBn: "একটি পূর্ণাঙ্গ কম্পিউটার সমাধান ও ডিজিটাল ডকুমেন্টেশন সেন্টার সফলভাবে পরিচালনা করেছি, যা দ্রুততা, নির্ভুলতা ও গ্রাহক যোগাযোগে বাস্তব ভিত্তি তৈরি করেছে।",
    responsibilities: [
      "Online application processing: Fast and error-free submission of university admissions, recruitment, and government portals.",
      "Data entry & verification: High-volume alphanumeric data entry with cross-checking against physical records.",
      "Documentation services: Typesetting, drafting corporate correspondence, tables, spreadsheets, and print materials.",
      "Customer support: Attending to walk-in clients, understanding specific requirements, and resolving service inquiries.",
      "Digital services delivery: Scanning, PDF optimization, hardware troubleshooting, and peripheral management.",
      "Basic graphics-related work: Identity card formatting, document composition, layout adjustments, and image sizing."
    ],
    responsibilitiesBn: [
      "অনলাইন আবেদন প্রসেসিং: বিশ্ববিদ্যালয় ভর্তি, চাকরি ও সরকারি পোর্টালের আবেদন দ্রুত ও নির্ভুলভাবে সম্পন্নকরণ।",
      "ডাটা এন্ট্রি ও ভেরিফিকেশন: মূল নথির সাথে মিলিয়ে দ্রুত গতিতে তথ্য এন্ট্রি এবং ডাটার শুদ্ধতা যাচাই।",
      "ডকুমেন্টেশন সার্ভিস: অফিশিয়াল চিঠিপত্র, রেজোলিউশন, টেবিল ফরম্যাটিং এবং ব্যবসায়িক নথি তৈরি।",
      "গ্রাহক সেবা ও ক্লায়েন্ট কমিউনিকেশন: গ্রাহকদের সরাসরি সেবা প্রদান, সঠিক দিকনির্দেশনা ও সন্তুষ্টি নিশ্চিতকরণ।",
      "ডিজিটাল সেবা ডেলিভারি: স্ক্যানিং, পিডিএফ কম্পোজিশন ও কম্পিউটার পেরিফেরাল রক্ষণাবেক্ষণ।",
      "প্রাথমিক গ্রাফিক্স কাজ: আইডি কার্ড ডিজাইন, ডকুমেন্ট লেআউট তৈরি ও সাইজিং সমন্বয়।"
    ],
    skillsGained: [
      "Rapid Data Processing",
      "Customer Service",
      "Document Structuring",
      "Quality Assurance",
      "Problem Solving"
    ],
    skillsGainedBn: [
      "দ্রুত ডাটা প্রসেসিং",
      "গ্রাহক সেবা",
      "ডকুমেন্ট স্ট্রাকচারিং",
      "কোয়ালিটি নিশ্চিতকরণ",
      "সমস্যা সমাধান"
    ]
  }
];

