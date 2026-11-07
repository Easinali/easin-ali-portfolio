export interface EducationItem {
  id: string;
  degree: string;
  degreeBn: string;
  status: string;
  statusBn: string;
  institution: string;
  institutionBn: string;
  session: string;
  sessionBn: string;
  field: string;
  fieldBn: string;
  description: string;
  descriptionBn: string;
  courses: string[];
  coursesBn: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "mba",
    degree: "Master of Business Administration (MBA)",
    degreeBn: "মাস্টার্স অব বিজনেস অ্যাডমিনিস্ট্রেশন (এমবিএ)",
    status: "Currently Pursuing",
    statusBn: "বর্তমানে অধ্যয়নরত",
    institution: "[University Name – Dhaka College]",
    institutionBn: "[বিশ্ববিদ্যালয়ের নাম – ঢাকা কলেজ]",
    session: "Session / Ongoing",
    sessionBn: "শিক্ষাবর্ষ / চলমান",
    field: "Business Administration & Management",
    fieldBn: "বিজনেস অ্যাডমিনিস্ট্রেশন ও ম্যানেজমেন্ট",
    description: "Developing strategic leadership skills, business analytics competence, organizational management acumen, and financial decision-making frameworks.",
    descriptionBn: "কৌশলগত নেতৃত্ব, ব্যবসায়িক অ্যানালিটিক্স, প্রাতিষ্ঠানিক ব্যবস্থাপনা ও আর্থিক সিদ্ধান্ত গ্রহণ প্রক্রিয়ায় উচ্চতর দক্ষতা অর্জন।",
    courses: [
      "Operations Management & Strategy",
      "Managerial Economics & Decision Modeling",
      "Corporate Financial Planning",
      "Organizational Behavior & Human Capital"
    ],
    coursesBn: [
      "অপারেশনস ম্যানেজমেন্ট ও স্ট্র্যাটেজি",
      "ম্যানেজেরিয়াল ইকোনমিক্স ও ডিসিশন মডেলিং",
      "কর্পোরেট ফিন্যান্সিয়াল প্ল্যানিং",
      "অর্গানাইজেশনাল বিহেভিয়ার"
    ]
  },
  {
    id: "pgd-scm",
    degree: "Post Graduate Diploma (PGD) in Supply Chain Management",
    degreeBn: "পোস্ট গ্র্যাজুয়েট ডিপ্লোমা (পিজিডি) ইন সাপ্লাই চেইন ম্যানেজমেন্ট",
    status: "Result Published",
    statusBn: "ফল প্রকাশিত",
    institution: "[Institute / Academy Name – Daffodil International University]",
    institutionBn: "[প্রতিষ্ঠান / একাডেমির নাম – ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি]",
    session: "Session / 2026",
    sessionBn: "শিক্ষাবর্ষ / ২০২৬",
    field: "Supply Chain, Logistics & Inventory Operations",
    fieldBn: "সাপ্লাই চেইন, লজিস্টিকস ও ইনভেন্টরি অপারেশনস",
    description: "Equipping myself with modern supply chain concepts including demand planning, inventory optimization, procurement strategies, and transportation logistics.",
    descriptionBn: "আধুনিক সাপ্লাই চেইনের মূল অনুষঙ্গ—ডিমান্ড প্ল্যানিং, ইনভেন্টরি অপ্টিমাইজেশন, প্রকিউরমেন্ট কৌশল এবং ট্রান্সপোর্টেশন লজিস্টিকসে বিশেষায়িত দক্ষতা অর্জন।",
    courses: [
      "Inventory & Warehouse Optimization",
      "Strategic Procurement & Sourcing",
      "Logistics Network Modeling & Distribution",
      "ERP Integration in Modern Supply Chain"
    ],
    coursesBn: [
      "ইনভেন্টরি ও ওয়্যারহাউস অপ্টিমাইজেশন",
      "স্ট্র্যাটেজিক প্রকিউরমেন্ট ও সোর্সিং",
      "লজিস্টিকস নেটওয়ার্ক মডেলিং ও ডিস্ট্রিবিউশন",
      "আধুনিক সাপ্লাই চেইনে ইআরপির ভূমিকা"
    ]
  }
];

