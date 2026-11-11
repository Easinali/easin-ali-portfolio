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
    periodBn: "২০২৪ – বর্তমান",
    location: "Dhaka, Bangladesh",
    locationBn: "ঢাকা, বাংলাদেশ",
    description: "Executing daily inventory tracking, enterprise ERP data operations, multi-outlet MIS reporting, and sales-to-bank deposit reconciliations within corporate guidelines.",
    descriptionBn: "এন্টারপ্রাইজ ইআরপিতে দৈনন্দিন ইনভেন্টরি ট্র্যাকিং, ডাটা অপারেশনস, আউটলেট এমআইএস রিপোর্টিং এবং সেলস-ডিপোজিট রিকনসিলিয়েশন নিষ্ঠার সাথে পরিচালনা করছি।",
    responsibilities: [
      "Inventory Tracking: Assisting in physical stock balance monitoring, dispatch logging, and movement tracking across active depot channels.",
      "ERP Operations: Utilizing enterprise ERP modules for transactional data entries, goods movement logs, and batch voucher verifications.",
      "MIS Reporting: Preparing timely Management Information System (MIS) reports, daily sales summaries, and operational variance statements.",
      "Data Management: Maintaining central operational logs, master datasets, and transactional records with high accuracy.",
      "Sales & Deposit Reconciliation: Performing daily reconciliation between Point-of-Sale (POS) registers and verified bank credit advice slips.",
      "Documentation: Enforcing rigorous documentation standards, physical voucher archives, and audit-ready filing systems.",
      "Operational Coordination: Liaising proactively across cross-functional teams including sales, warehouse, accounts, and retail outlets."
    ],
    responsibilitiesBn: [
      "ইনভেন্টরি ট্র্যাকিং: ডিপো ও রিটেইল চ্যানেলে ফিজিক্যাল স্টক ব্যালেন্স পর্যবেক্ষণ ও পণ্য মুভমেন্ট ট্র্যাকিংয়ে সহায়তা প্রদান।",
      "ইআরপি অপারেশনস: দৈনিক ট্রানজ্যাকশন এন্ট্রি, পণ্য প্রবাহ লগ ও ব্যাচ ভাউচার যাচাইয়ের জন্য প্রাতিষ্ঠানিক ইআরপি মডিউলে কাজ করা।",
      "এমআইএস রিপোর্টিং: সময়ানুগ ম্যানেজমেন্ট ইনফরমেশন সিস্টেম (MIS) রিপোর্ট, দৈনিক সেলস সামারি ও ভ্যারিয়্যান্স স্টেটমেন্ট প্রস্তুতকরণ।",
      "ডাটা ম্যানেজমেন্ট: প্রাতিষ্ঠানিক অপারেশনাল রেকর্ড, মাস্টার ডাটা এবং ট্রানজ্যাকশন ফাইলসমূহ নির্ভুলভাবে সংরক্ষণ।",
      "সেলস ও ডিপোজিট রিকনসিলিয়েশন: রিটেইল আউটলেট পিওএস (POS) রেজিস্টারের সাথে ব্যাংকে জমাকৃত ক্রেডিট ভাউচারের দৈনিক মিলকরণ।",
      "ডকুমেন্টেশন: প্রাতিষ্ঠানিক ডকুমেন্টেশন নীতিমালা মেনে চলা, ভাউচার সংরক্ষণ এবং অডিট ট্রেইল নিশ্চিত করা।",
      "অপারেশনাল সমন্বয়: বিক্রয়, ওয়্যারহাউস, হিসাব বিভাগ এবং আউটলেট প্রতিনিধিদের সাথে নিয়মিত ব্যবসায়িক সমন্বয়।"
    ],
    skillsGained: [
      "Inventory Tracking",
      "ERP Operations",
      "MIS Reporting",
      "Data Management",
      "Sales Reconciliation",
      "Operational Coordination"
    ],
    skillsGainedBn: [
      "ইনভেন্টরি ট্র্যাকিং",
      "ইআরপি অপারেশনস",
      "এমআইএস রিপোর্টিং",
      "ডাটা ম্যানেজমেন্ট",
      "সেলস রিকনসিলিয়েশন",
      "অপারেশনাল সমন্বয়"
    ]
  },
  {
    id: "computer-service-business",
    isCurrent: false,
    role: "Proprietor & Operations Lead",
    roleBn: "স্বত্বাধিকারী ও অপারেশনস লিড",
    company: "Computer & Digital Business Enterprise",
    companyBn: "কম্পিউটার ও ডিজিটাল সার্ভিস এন্টারপ্রাইজ",
    department: "Transferable Business & Administrative Experience",
    departmentBn: "ট্রান্সফারেবল ব্যবসায়িক ও প্রশাসনিক অভিজ্ঞতা",
    period: "Previous Enterprise [2023 – 2024]",
    periodBn: "পূর্ববর্তী অভিজ্ঞতা [সম্পাদনাযোগ্য: যেমন ২০২৩ – ২০২৪]",
    location: "Bangladesh",
    locationBn: "বাংলাদেশ",
    description: "Founded and operated an independent computer and digital services enterprise, establishing proven transferable competencies in business administration, client communication, official documentation, record auditing, and high-volume data operations.",
    descriptionBn: "একটি স্বতন্ত্র কম্পিউটার ও ডিজিটাল সেবা প্রতিষ্ঠান সফলভাবে পরিচালনা করেছি, যা ব্যবসায়িক প্রশাসন, ক্লায়েন্ট কমিউনিকেশন, প্রাতিষ্ঠানিক ডকুমেন্টেশন এবং নির্ভুল ডাটা প্রসেসিংয়ে বাস্তব ভিত্তি তৈরি করেছে।",
    responsibilities: [
      "Business & Administrative Management: Managing day-to-day shop operations, client relationships, transaction ledgers, and service pricing.",
      "Documentation & Typesetting: Drafting corporate correspondence, formal applications, commercial tables, spreadsheets, and print materials.",
      "High-Volume Data Processing: Rapid and error-free entry of numeric and alphabetical datasets with cross-checking against physical records.",
      "Online Government & Academic Portals: Processing university admissions, public recruitment filings, and government portal services.",
      "Digital Hardware & Asset Management: Operating and maintaining scanners, printers, photo resizing, PDF optimization, and digital backups."
    ],
    responsibilitiesBn: [
      "ব্যবসায়িক ও প্রশাসনিক ব্যবস্থাপনা: প্রতিষ্ঠানের দৈনন্দিন পরিচালনা, গ্রাহক সম্পর্ক রক্ষা, আয়-ব্যয় হিসাব ও সেবা ডেলিভারি নিয়ন্ত্রণ।",
      "ডকুমেন্টেশন ও টাইপসেটিং: অফিশিয়াল চিঠিপত্র, বাণিজ্যিক প্রস্তাবনা, চুক্তিপত্র ও স্প্রেডশীট টেবিল ফরম্যাটিং প্রস্তুতকরণ।",
      "উচ্চ-গতির ডাটা প্রসেসিং: মূল নথিপত্রের সাথে তথ্য যাচাইপূর্বক দ্রুত ও ত্রুটিমুক্তভাবে ডাটা এন্ট্রি সম্পন্নকরণ।",
      "অনলাইন ও সরকারি পোর্টাল সার্ভিস: বিশ্ববিদ্যালয় ভর্তি, সরকারি চাকরি ও পাবলিক পোর্টালের আবেদন শতভাগ সফলতার সাথে প্রক্রিয়াকরণ।",
      "ডিজিটাল হার্ডওয়্যার ও ব্যাকআপ: স্ক্যানার, প্রিন্টার, ইমেজ সাইজিং, পিডিএফ কম্পোজিশন ও ডিজিটাল আর্কাইভ সংরক্ষণ।"
    ],
    skillsGained: [
      "Business Administration",
      "Customer Communication",
      "Document Structuring",
      "Data Quality Verification",
      "Problem Solving"
    ],
    skillsGainedBn: [
      "ব্যবসায়িক প্রশাসন",
      "গ্রাহক যোগাযোগ",
      "ডকুমেন্ট স্ট্রাকচারিং",
      "ডাটা কোয়ালিটি যাচাই",
      "সমস্যা সমাধান"
    ]
  }
];

