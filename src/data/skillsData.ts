export interface SkillCategory {
  id: 'excel' | 'reporting' | 'erp' | 'productivity';
  title: string;
  titleBn: string;
  subtitle: string;
  subtitleBn: string;
  iconName: string;
  skills: {
    name: string;
    nameBn: string;
    context: string;
    contextBn: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'excel',
    title: 'Microsoft Excel',
    titleBn: 'মাইক্রোসফট এক্সেল',
    subtitle: 'Advanced analytical modeling, formulas & dynamic reporting',
    subtitleBn: 'উচ্চতর ফর্মুলা, ডাটা মডেলিং ও ডাইনামিক রিপোর্টিং',
    iconName: 'FileSpreadsheet',
    skills: [
      { name: 'XLOOKUP', nameBn: 'XLOOKUP', context: 'Modern 2-way lookups with default handling', contextBn: 'আধুনিক দ্বিমুখী লুকআপ ও এরর হ্যান্ডলিং' },
      { name: 'VLOOKUP', nameBn: 'VLOOKUP', context: 'Standard transactional table matching', contextBn: 'স্ট্যান্ডার্ড টেবিল ডেটা ম্যাচিং' },
      { name: 'INDEX-MATCH', nameBn: 'INDEX-MATCH', context: 'Robust multi-criteria lookup engine', contextBn: 'মাল্টি-ক্রাইটেরিয়া ডাইনামিক রেফারেন্সিং' },
      { name: 'Pivot Table', nameBn: 'Pivot Table', context: 'Multi-dimensional data aggregation', contextBn: 'বহুমাত্রিক ডাটা সামারি ও গ্রুপিং' },
      { name: 'Pivot Chart', nameBn: 'Pivot Chart', context: 'Interactive visual data cockpits', contextBn: 'ইন্টারেক্টিভ ভিজ্যুয়াল চার্টিং' },
      { name: 'SUMIFS', nameBn: 'SUMIFS', context: 'Conditional numeric aggregation', contextBn: 'শর্তভিত্তিক মোট হিসাব ও ফিল্টারিং' },
      { name: 'COUNTIFS', nameBn: 'COUNTIFS', context: 'Frequency & condition tracking', contextBn: 'শর্তসাপেক্ষ ফ্রিকোয়েন্সি গণনা' },
      { name: 'IF / IFERROR', nameBn: 'IF / IFERROR', context: 'Logical conditions & clean error suppression', contextBn: 'লজিক্যাল কন্ডিশন ও ত্রুটি নিরোধক' },
      { name: 'Conditional Formatting', nameBn: 'Conditional Formatting', context: 'Dynamic variance & anomaly highlighting', contextBn: 'অসঙ্গতি ও ট্রেন্ডের স্বয়ংক্রিয় কালার কোডিং' },
      { name: 'Data Validation', nameBn: 'Data Validation', context: 'Strict input constraints & dropdown lists', contextBn: 'ড্রপডাউন লিস্ট ও সঠিক ইনপুট ফিল্টারিং' },
      { name: 'Data Cleaning', nameBn: 'Data Cleaning', context: 'Deduplication, trimming & text transformation', contextBn: 'ডুপ্লিকেট রিমুভ ও টেক্সট ফরম্যাটিং' },
      { name: 'Data Analysis', nameBn: 'Data Analysis', context: 'Variance discovery & trend interpretation', contextBn: 'ভ্যারিয়্যান্স বিশ্লেষণ ও ট্রেন্ড প্রেডিকশন' },
    ]
  },
  {
    id: 'reporting',
    title: 'Reporting & Data Management',
    titleBn: 'রিপোর্টিং ও ডাটা ম্যানেজমেন্ট',
    subtitle: 'Management Information Systems (MIS) & decision support',
    subtitleBn: 'ম্যানেজমেন্ট ইনফরমেশন সিস্টেম (MIS) ও সিদ্ধান্ত সহায়ক রিপোর্ট',
    iconName: 'BarChart3',
    skills: [
      { name: 'MIS Reporting', nameBn: 'এমআইএস রিপোর্টিং', context: 'Daily, weekly & monthly corporate metrics', contextBn: 'দৈনিক, সাপ্তাহিক ও মাসিক প্রাতিষ্ঠানিক রিপোর্ট' },
      { name: 'Dashboard Preparation', nameBn: 'ড্যাশবোর্ড প্রস্তুতি', context: 'Executive KPI tracking with interactive slicers', contextBn: 'স্লাইসারসহ ইন্টারেক্টিভ এক্সিকিউটিভ ড্যাশবোর্ড' },
      { name: 'Data Management', nameBn: 'ডাটা ম্যানেজমেন্ট', context: 'Structured storage, cataloging & integrity', contextBn: 'কাঠামোগত ডাটা সংরক্ষণ ও বিশুদ্ধতা বজায় রাখা' },
      { name: 'Documentation', nameBn: 'ডকুমেন্টেশন', context: 'Standardized SOPs & audit-ready records', contextBn: 'স্ট্যান্ডার্ড এসওপি ও অডিট সহায়ক ফাইল ব্যবস্থাপনা' },
      { name: 'Report Preparation', nameBn: 'রিপোর্ট প্রস্তুতি', context: 'Concise executive summaries & variance notes', contextBn: 'ম্যানেজমেন্টের জন্য সংক্ষিপ্ত ও স্পষ্ট প্রতিবেদন' },
    ]
  },
  {
    id: 'erp',
    title: 'ERP & Operations',
    titleBn: 'ইআরপি ও অপারেশনস',
    subtitle: 'Enterprise operations, stock movement & financial reconciliation',
    subtitleBn: 'বাণিজ্যিক কার্যক্রম, স্টক মুভমেন্ট ও ব্যাংক সমন্বয়',
    iconName: 'Database',
    skills: [
      { name: 'ERP Operations', nameBn: 'ইআরপি অপারেশনস', context: 'Transactional entry, order logging & goods dispatch', contextBn: 'অর্ডার এন্ট্রি, ইনভয়েসিং ও পণ্য পরিবহন ট্র্যাকিং' },
      { name: 'Inventory Tracking', nameBn: 'ইনভেন্টরি ট্র্যাকিং', context: 'Stock movement, depot transfers & balance logs', contextBn: 'ডিপো ও ওয়্যারহাউসে স্টক পর্যবেক্ষণ' },
      { name: 'Stock Management', nameBn: 'স্টক ম্যানেজমেন্ট', context: 'Reorder levels, minimum thresholds & safety stock', contextBn: 'রি-অর্ডার পয়েন্ট ও সেফটি স্টক বজায় রাখা' },
      { name: 'Operational Reporting', nameBn: 'অপারেশনাল রিপোর্টিং', context: 'Shift outputs, dispatch efficiency & pipeline status', contextBn: 'পণ্য ডেলিভারি ও অপারেশনাল কার্যক্ষমতা যাচাই' },
      { name: 'Deposit Reconciliation', nameBn: 'ডিপোজিট রিকনসিলিয়েশন', context: 'Point-of-sale cash/card vs bank ledger matching', contextBn: 'পিওএস বিক্রয় ও ব্যাংক ডিপোজিট শতভাগ মেলানো' },
    ]
  },
  {
    id: 'productivity',
    title: 'Productivity Tools',
    titleBn: 'প্রোডাক্টিভিটি টুলস',
    subtitle: 'Office collaboration, formal documentation & presentations',
    subtitleBn: 'অফিসিয়াল যোগাযোগ, ফরমাল প্রেজেন্টেশন ও ডকুমেন্টেশন',
    iconName: 'Briefcase',
    skills: [
      { name: 'Microsoft Word', nameBn: 'মাইক্রোসফট ওয়ার্ড', context: 'Official memos, notices, letters & structured layouts', contextBn: 'অফিসিয়াল মেমো, নোটিশ ও স্ট্রাকচার্ড ডকুমেন্টস' },
      { name: 'Microsoft PowerPoint', nameBn: 'মাইক্রোসফট পাওয়ারপয়েন্ট', context: 'Executive slide decks, operational charts & briefings', contextBn: 'অপারেশনাল ব্রিফিং ও বিজনেস প্রেজেন্টেশন স্লাইড' },
      { name: 'Microsoft Outlook', nameBn: 'মাইক্রোসফট আউটলুক', context: 'Corporate communication, scheduling & task follow-ups', contextBn: 'পেশাদার ইমেইল যোগাযোগ ও ক্যালেন্ডার শিডিউলিং' },
      { name: 'Microsoft Excel', nameBn: 'মাইক্রোসফট এক্সেল', context: 'Advanced analytical modeling, formulas & dynamic reporting', contextBn: 'উচ্চতর ফর্মুলা, ডাটা মডেলিং ও ডাইনামিক রিপোর্টিং' },
    ]
  }
];

