export type ProjectCategoryFilter = 'all' | 'excel-mis' | 'inventory' | 'supply-chain' | 'data-analysis';
export type ProjectType = 'professional' | 'personal' | 'demonstration';

export interface ProjectItem {
  id: string;
  type: ProjectType;
  categoryFilter: 'excel-mis' | 'inventory' | 'supply-chain' | 'data-analysis';
  categoryLabel: string;
  categoryLabelBn: string;
  title: string;
  titleBn: string;
  shortDescription: string;
  shortDescriptionBn: string;
  tools: string[];
  image: string;
  badgeText: string;
  badgeTextBn: string;
  hasLivePreview: boolean;
  livePreviewType: 'reconciliation' | 'inventory' | 'dashboard' | 'logistics' | 'records';
  details: {
    overview: string;
    overviewBn: string;
    problemStatement: string;
    problemStatementBn: string;
    objectives: string[];
    objectivesBn: string[];
    approach: string[];
    approachBn: string[];
    keyFeatures: string[];
    keyFeaturesBn: string[];
    results: string[];
    resultsBn: string[];
    excelTechniques: string[];
    excelTechniquesBn: string[];
    downloadableNote: string;
    downloadableNoteBn: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "sales-deposit-reconciliation",
    type: "professional",
    categoryFilter: "excel-mis",
    categoryLabel: "Excel & MIS • Reconciliation",
    categoryLabelBn: "এক্সেল ও এমআইএস • রিকনসিলিয়েশন",
    title: "Daily Sales & Bank Deposit Reconciliation Matrix",
    titleBn: "দৈনিক বিক্রয় ও ব্যাংক ডিপোজিট রিকনসিলিয়েশন ম্যাট্রিক্স",
    shortDescription: "A mission-critical financial reconciliation workflow matching multi-outlet sales receipts against bank statements with zero variance tolerance.",
    shortDescriptionBn: "মাল্টি-আউটলেট বিক্রয় রসিদের সাথে ব্যাংক স্টেটমেন্টের শতভাগ নির্ভুল মিল নিশ্চিতে একটি অপরিহার্য আর্থিক রিকনসিলিয়েশন ওয়ার্কফ্লো।",
    tools: ["Microsoft Excel", "ERP System", "Bank Portals", "VLOOKUP / XLOOKUP", "Conditional Formatting"],
    image: "/images/projects/project-reconciliation.svg",
    badgeText: "Professional Workplace Project",
    badgeTextBn: "পেশাদার কর্মক্ষেত্রের প্রজেক্ট",
    hasLivePreview: true,
    livePreviewType: "reconciliation",
    details: {
      overview: "At Paragon Group, managing outlet transactions requires meticulous cross-verification between end-of-day Point-of-Sale (POS) registers and verified bank deposit credit advice slips.",
      overviewBn: "প্যারাগন গ্রুপে রিটেইল আউটলেটের দৈনন্দিন লেনদেন তদারকিতে দিনের শেষে পিওএস (POS) রেজিস্টারের সাথে ব্যাংকে জমাকৃত ক্রেডিট ভাউচারের নিখুঁত ক্রস-ভেরিফিকেশন প্রয়োজন হয়।",
      problemStatement: "Manual paper receipts caused delayed variance tracking, ledger timing gaps between cash/card settlements, and high audit overhead for the central accounts team.",
      problemStatementBn: "ম্যানুয়াল রসিদ পর্যবেক্ষণে সময়ক্ষেপণ হতো, ক্যাশ ডিপোজিট ও কার্ড সেটেলমেন্টে ব্যাংকের সাথে টাইমিং পার্থক্যের ঝুঁকি থাকত এবং অডিটে অতিরিক্ত চাপ তৈরি হতো।",
      objectives: [
        "Achieve same-day settlement verification across all active regional retail outlets.",
        "Automate instant detection of deposits discrepancies down to zero tolerance (0.00 variance).",
        "Maintain an audit-ready digital trail linking POS vouchers to bank credit slips."
      ],
      objectivesBn: [
        "সকল সক্রিয় আঞ্চলিক আউটলেটের লেনদেন একই দিনে শতভাগ যাচাই সম্পন্ন করা।",
        "ব্যাংক ডিপোজিটের যেকোনো গরমিল সাথে সাথে চিহ্নিত করতে স্বয়ংক্রিয় শূন্য-ভ্যারিয়্যান্স ট্র্যাকিং চালু করা।",
        "পিওএস ভাউচারের সাথে ব্যাংক ক্রেডিট স্লিপের ডিজিটাল অডিট ট্রেইল সংরক্ষণ করা।"
      ],
      approach: [
        "Built a standardized relational spreadsheet matrix feeding daily ERP point-of-sale logs.",
        "Deployed automated SUMIFS, XLOOKUP, and conditional formatting rules that color-code unverified vouchers in real-time.",
        "Enforced an End-of-Day (EOD) checklist requiring outlet supervisors to upload stamped deposit slips before morning reconciliation cutoff.",
        "Integrated a transit variance classification log separating banking delays from actual cash discrepancies."
      ],
      approachBn: [
        "দৈনিক ইআরপি সেলস লগ বিশ্লেষণের জন্য মাইক্রোসফট এক্সেলে একটি স্বয়ংক্রিয় স্ট্যান্ডার্ড রিকনসিলিয়েশন কাঠামো প্রণয়ন।",
        "SUMIFS, XLOOKUP এবং কন্ডিশনাল ফরম্যাটিং প্রয়োগ করে গরমিল থাকা হিসাবসমূহকে রিয়েল-টাইমে লাল রঙে হাইলাইট করার ব্যবস্থা।",
        "সকালের অডিটের আগেই আউটলেট সুপারভাইজারদের মাধ্যমে ব্যাংক জমা স্লিপ সাবমিট করার এন্ড-অব-ডে চেকলিস্ট বাধ্যতামূলক করা।",
        "ব্যাংক ট্রানজিট লেট এবং প্রকৃত ক্যাশ পার্থক্যের জন্য আলাদা ভ্যারিয়্যান্স লগ সংরক্ষণ।"
      ],
      keyFeatures: [
        "Instant multi-outlet balancing grid with automated sum validations.",
        "Conditional formatting alarms for duplicate or omitted voucher numbers.",
        "Dynamic pivot summary categorizing sales into Cash, Card, and MFS transactions.",
        "One-click monthly consolidation engine for central finance."
      ],
      keyFeaturesBn: [
        "স্বয়ংক্রিয় মোট হিসাব ও ব্যালেন্সিং গ্রিডসহ মাল্টি-আউটলেট ভেরিফিকেশন।",
        "ডুপ্লিকেট বা বাদ পড়া ভাউচার নম্বর তাৎক্ষণিকভাবে অ্যালার্ম কালারে প্রদর্শনের সুবিধা।",
        "নগদ, কার্ড এবং এমএফএস (বিকাশ/নগদ) লেনদেন আলাদা করার ডাইনামিক পিভট সামারি।",
        "সেন্ট্রাল ফিন্যান্স টিমের জন্য এক ক্লিকে মাসিক কনসোলিডেশন রিপোর্ট।"
      ],
      results: [
        "Standardized daily cross-checking between POS totals and bank credit advice.",
        "Ensured consistent zero-variance financial tracking across active outlets.",
        "Maintained an audit-compliant digital log linking deposit slips to ERP batch vouchers."
      ],
      resultsBn: [
        "পিওএস রেজিস্টার এবং ব্যাংক ক্রেডিট অ্যাডভাইসের মধ্যে দৈনিক ক্রস-চেকিং প্রক্রিয়া নিশ্চিতকরণ।",
        "সকল সক্রিয় আউটলেটে আর্থিক হিসাবে গরমিল দূর করে জিরো-ভ্যারিয়্যান্স ট্র্যাকিং রক্ষা।",
        "ব্যাংক ডিপোজিট স্লিপ ও ইআরপি ব্যাচ ভাউচারের মধ্যে অডিট-অনুমোদিত ডিজিটাল অডিট ট্রেইল সংরক্ষণ।"
      ],
      excelTechniques: ["SUMIFS", "XLOOKUP", "Conditional Formatting", "Data Validation", "IFERROR"],
      excelTechniquesBn: ["SUMIFS", "XLOOKUP", "কন্ডিশনাল ফরম্যাটিং", "ডাটা ভ্যালিডেশন", "IFERROR"],
      downloadableNote: "Sanitized demonstration template representing the multi-outlet reconciliation matrix schema.",
      downloadableNoteBn: "ব্যক্তিগত গোপনীয়তা রক্ষা করে প্রস্তুতকৃত রিকনসিলিয়েশন ম্যাট্রিক্সের একটি প্র্যাকটিস ওয়ার্কবুক ডেমো।"
    }
  },
  {
    id: "inventory-tracking-analysis",
    type: "demonstration",
    categoryFilter: "inventory",
    categoryLabel: "Inventory Management",
    categoryLabelBn: "ইনভেন্টরি ম্যানেজমেন্ট",
    title: "Enterprise Inventory Tracking & Stock Movement Analysis",
    titleBn: "এন্টারপ্রাইজ ইনভেন্টরি ট্র্যাকিং ও স্টক মুভমেন্ট অ্যানালাইসিস",
    shortDescription: "End-to-end inventory tracking model monitoring depot transfers, stock aging, safety stock limits, and minimum reorder triggers.",
    shortDescriptionBn: "ডিপো ট্রান্সফার, স্টক এজিং, সেফটি স্টক সীমা এবং রিক্যুইজিশন পয়েন্ট পর্যবেক্ষণে সমন্বিত ইনভেন্টরি ট্র্যাকিং মডেল।",
    tools: ["Microsoft Excel", "ERP Module", "Pivot Tables", "INDEX-MATCH", "Stock Formulas"],
    image: "/images/projects/project-inventory.svg",
    badgeText: "Demonstration Project • Supply Chain",
    badgeTextBn: "ডেমোনস্ট্রেশন প্রজেক্ট • সাপ্লাই চেইন",
    hasLivePreview: true,
    livePreviewType: "inventory",
    details: {
      overview: "Monitoring raw materials and finished commercial goods across central depots and regional storage facilities to balance service levels with working capital efficiency.",
      overviewBn: "সেন্ট্রাল ডিপো ও রিজিওনাল স্টোরেজের মধ্যে কাঁচামাল ও উৎপাদিত পণ্যের চলাচল নিয়মিত তদারকি করা, যাতে স্টক আউটের ঝুঁকি দূর হয় এবং ধীরগতির ইনভেন্টরিতে মূলধন আটকে না থাকে।",
      problemStatement: "Multi-SKU product movements across regional distribution hubs suffered from blind spots in stock aging, causing sporadic stockouts and capital lockup in slow-moving batches.",
      problemStatementBn: "আঞ্চলিক হাবগুলোতে বহু সংখ্যক এসকেইউ মুভমেন্টের স্টক এজিং স্পষ্ট না থাকায় অনাকাঙ্ক্ষিত স্টকআউট এবং ধীরগতির পণ্যে মূলধন আটকে থাকার ঝুঁকি তৈরি হতো।",
      objectives: [
        "Track stock levels in real time across central warehouse and regional distribution nodes.",
        "Implement automatic threshold warnings when stock levels approach minimum safety stock.",
        "Categorize stock aging into 0-30, 31-60, and 60+ days to accelerate dispatch of near-expiry batches."
      ],
      objectivesBn: [
        "সেন্ট্রাল ওয়্যারহাউস ও আঞ্চলিক নোডগুলোতে রিয়েল-টাইমে স্টক পর্যবেক্ষণ করা।",
        "স্টক সেফটি লেভেলে নেমে আসতেই স্বয়ংক্রিয় সতর্কবার্তা চালু করা।",
        "০-৩০, ৩১-৬০ এবং ৬০+ দিনের ক্যাটাগরিতে ভাগ করে দ্রুত পণ্য ডিসপ্যাচ নিশ্চিত করা।"
      ],
      approach: [
        "Extracted raw transactional batches (receipts, depot transfers, dispatch vouchers) directly from the ERP engine.",
        "Built a normalized analytical data model linking SKUs with shelf-life dates, batch numbers, and reorder levels.",
        "Engineered dynamic Pivot Tables with calculated fields to evaluate stock turnover velocity per product family.",
        "Established weekly physical stock variance audits against digital ERP ledger logs."
      ],
      approachBn: [
        "ইআরপি থেকে প্রাপ্ত ইনওয়ার্ড চালান, ডিপো ট্রান্সফার ও সেলস ভাউচার সংগ্রহ ও ক্লিন করা।",
        "শেলফ লাইফ, ব্যাচ নম্বর ও রি-অর্ডার পয়েন্টের সাথে সমন্বয় করে রিলেশনাল এক্সেল মডেল তৈরি।",
        "ক্যালকুলেটেড ফিল্ড ও পিভট টেবিলের সাহায্যে প্রতিটি প্রোডাক্ট লাইনের টার্নওভার গতি পরিমাপ।",
        "ইআরপি ডিজিটাল রেকর্ডের সাথে ফিজিক্যাল স্টকের পাক্ষিক অডিট ও ভ্যারিয়্যান্স চেক।"
      ],
      keyFeatures: [
        "Visual stock aging matrix with automated color-coded alert zones.",
        "Safety stock consumption indicator based on historic daily run-rate.",
        "Depot-to-depot transit status log.",
        "Weekly executive stock summary ready for operations leadership."
      ],
      keyFeaturesBn: [
        "স্বয়ংক্রিয় কালার কোডিং সতর্কবার্তাসহ ভিজ্যুয়াল স্টক এজিং ম্যাট্রিক্স।",
        "দৈনিক পণ্য ব্যবহারের হারের ওপর ভিত্তি করে সেফটি স্টক কনজাম্পশন ট্র্যাকার।",
        "ডিপো থেকে ডিপোতে পণ্য পরিবহন ট্রানজিট লগ।",
        "অপারেশনস হেডদের জন্য প্রস্তুতকৃত সাপ্তাহিক এক্সিকিউটিভ ইনভেন্টরি সামারি।"
      ],
      results: [
        "Modeled automated tracking of SKU shelf life and stock aging buckets (>60 days).",
        "Structured demonstrative framework for monitoring slow-moving items and safety stock thresholds.",
        "Demonstration case study; illustrates inventory management methodologies without proprietary corporate data."
      ],
      resultsBn: [
        "টেস্ট মডেলে এসকেইউ (SKU) স্টক এবং ৬০ দিনের বেশি পুরনো পণ্যের এজিং স্বয়ংক্রিয়ভাবে চিহ্নিতকরণ প্রদর্শিত।",
        "অতিরিক্ত ইনভেন্টরি ব্যয় বৃদ্ধির আগেই অনড় স্টক শনাক্তকরণ ও সেফটি স্টক মনিটরিংয়ের ফ্রেমওয়ার্ক।",
        "এটি একটি ডেমোনস্ট্রেশন মডেল; কোনো গোপন প্রাতিষ্ঠানিক অভ্যন্তরীণ ডাটা ব্যতীত উপস্থাপিত।"
      ],
      excelTechniques: ["INDEX-MATCH", "Pivot Tables", "Dynamic Ranges", "Date & Aging Functions", "COUNTIFS"],
      excelTechniquesBn: ["INDEX-MATCH", "পিভট টেবিল", "ডাইনামিক রেঞ্জ", "ডেট ও এজিং ফাংশন", "COUNTIFS"],
      downloadableNote: "Demonstration inventory ledger template showcasing aging buckets and stock metrics.",
      downloadableNoteBn: "স্টক এজিং ও ইনভেন্টরি ট্র্যাকিং ফর্মুলার ডেমো এক্সেল টেমপ্লেট।"
    }
  },
  {
    id: "mis-reporting-dashboard",
    type: "personal",
    categoryFilter: "excel-mis",
    categoryLabel: "Excel & MIS Reporting",
    categoryLabelBn: "এক্সেল ও এমআইএস রিপোর্টিং",
    title: "Excel-Based Executive MIS Performance Dashboard",
    titleBn: "এক্সেল নির্ভর এক্সিকিউটিভ এমআইএস পারফরম্যান্স ড্যাশবোর্ড",
    shortDescription: "A comprehensive analytical dashboard consolidating sales, revenue, operational targets, and team performance into an interactive cockpit.",
    shortDescriptionBn: "বিক্রয়, রাজস্ব, অপারেশনাল লক্ষ্যমাত্রা ও দলগত পারফরম্যান্স একত্রিত করে তৈরি একটি ইন্টারেক্টিভ এক্সিকিউটিভ ককপিট।",
    tools: ["Microsoft Excel", "Pivot Charts", "Interactive Slicers", "Advanced Data Validation", "KPI Modeling"],
    image: "/images/projects/project-mis-dashboard.svg",
    badgeText: "Personal Analytics Project",
    badgeTextBn: "ব্যক্তিগত অ্যানালিটিক্স প্রজেক্ট",
    hasLivePreview: true,
    livePreviewType: "dashboard",
    details: {
      overview: "A specialized personal project demonstrating advanced Management Information System (MIS) capabilities using Microsoft Excel as an agile business intelligence cockpit.",
      overviewBn: "মাইক্রোসফট এক্সেলকে একটি শক্তিশালী বিজনেস ইন্টেলিজেন্স ইঞ্জিন হিসেবে ব্যবহারের সক্ষমতা প্রমাণের জন্য প্রস্তুতকৃত একটি বিশেষায়িত এমআইএস মডেল।",
      problemStatement: "Corporate decision-makers were constrained by static, 40-page monthly PDF tables that lacked single-click regional slicing, variance summaries, or visual trends.",
      problemStatementBn: "ঊর্ধ্বতন কর্মকর্তারা বিশালাকার স্ট্যাটিক টেবিল রিপোর্ট বুঝতে গিয়ে সময় হারাতেন, যেখানে এক ক্লিকে অঞ্চলভিত্তিক ফিল্টারিং বা ভিজ্যুয়াল গ্রাফ ছিল না।",
      objectives: [
        "Synthesize high-volume raw transactional data into a concise, interactive 1-page executive dashboard.",
        "Provide synchronized slicers allowing instant drill-downs by region, outlet, and time horizon.",
        "Automate Month-over-Month (MoM) growth variance calculations without manual formula re-typing."
      ],
      objectivesBn: [
        "বিশাল ট্রানজ্যাকশন ডাটাকে সংক্ষিপ্ত ও কার্যকর ১-পৃষ্ঠার ইন্টারেক্টিভ ড্যাশবোর্ডে রূপান্তর করা।",
        "সিনক্রোনাইজড স্লাইসারের মাধ্যমে অঞ্চল, আউটলেট বা কোয়ার্টার অনুযায়ী এক ক্লিকে ফিল্টারিং সুবিধা প্রদান।",
        "ম্যানুয়ালি নতুন করে টাইপ না করেই মাসিক প্রবৃদ্ধি (MoM Growth) ও ভ্যারিয়্যান্স স্বয়ংক্রিয়ভাবে গণনা করা।"
      ],
      approach: [
        "Separated workbook architecture into clean Raw Data, Calculation Staging, and Visual Presentation tiers.",
        "Implemented linked Pivot Charts fed by dynamic named ranges and dynamic array functions.",
        "Embedded nested XLOOKUP and SUMIFS formulas for instantaneous KPI card recalculation.",
        "Crafted a high-contrast corporate navy aesthetic prioritizing readability for executive presentations."
      ],
      approachBn: [
        "র ডাটা, ক্যালকুলেশন ইঞ্জিন এবং এক্সিকিউটিভ ইন্টারফেস—এই তিনটি স্তরে শিটগুলোকে সুশৃঙ্খলভাবে সাজানো।",
        "ডাইনামিক রেঞ্জ ব্যবহার করে পিভট চার্ট ও সিনক্রোনাইজড স্লাইসার (Timeline & Slicers) যুক্ত করা।",
        "কেপিআই কার্ডগুলো দ্রুত হিসাব করার জন্য নেস্টেড XLOOKUP ও SUMIFS প্রয়োগ।",
        "আধুনিক কর্পোরেট ডিজাইন ও ক্লিয়ার ভিজ্যুয়াল কার্ডের মাধ্যমে সহজে সিদ্ধান্ত গ্রহণের উপযোগী উপস্থাপন।"
      ],
      keyFeatures: [
        "Dynamic slicers for Region (North/South/All), Channel, and Time Periods.",
        "Budget vs. Actual variance cards with conditional alert indicators.",
        "Visual revenue growth trend lines with dynamic markers.",
        "Protected executive layout locking calculation mechanics."
      ],
      keyFeaturesBn: [
        "অঞ্চল, সেলস চ্যানেল এবং ত্রৈমাসিক ফিল্টারিংয়ের জন্য ডাইনামিক স্লাইসার।",
        "বাজেট বনাম বাস্তব অর্জনের তুলনা কার্ড ও কালার অ্যালার্ট।",
        "মার্কারসহ রাজস্ব প্রবৃদ্ধির ভিজ্যুয়াল ট্রেন্ড লাইন।",
        "ভুলবশত ফর্মুলা মুছে যাওয়া রোধে সুরক্ষিত লেআউট আর্কিটেকচার।"
      ],
      results: [
        "Showcases dynamic multi-period aggregation through pivot slicers and Excel data models.",
        "Enables one-click visual filtering by region and quarter for management reporting.",
        "Personal portfolio showcase illustrating dashboard design and MIS reporting architecture."
      ],
      resultsBn: [
        "পিভট স্লাইসার ও এক্সেল ডাটা মডেলের মাধ্যমে বহুমাত্রিক সেলস ডাটার ডাইনামিক বিশ্লেষণ প্রদর্শিত।",
        "এক ক্লিকে রিজিয়ন ও কোয়ার্টার অনুযায়ী ভিজ্যুয়াল ফিল্টারিংয়ের আধুনিক আর্কিটেকচার।",
        "ব্যক্তিগত অ্যানালিটিক্যাল প্রজেক্ট হিসেবে নির্মিত, যা এক্সেল ড্যাশবোর্ড ও রিপোর্টিং দক্ষতার প্রতিফলন।"
      ],
      excelTechniques: ["Pivot Charts & Slicers", "XLOOKUP", "SUMIFS", "Dynamic Array Formulas", "Clean UI Design"],
      excelTechniquesBn: ["পিভট চার্ট ও স্লাইসার", "XLOOKUP", "SUMIFS", "ডাইনামিক অ্যারে ফর্মুলা", "ইউজার-ফ্রেন্ডলি ডিজাইন"],
      downloadableNote: "Interactive MIS dashboard template with sample operational data.",
      downloadableNoteBn: "নমুনা অপারেশনাল ডাটাসহ ইন্টারেক্টিভ এমআইএস ড্যাশবোর্ড টেমপ্লেট।"
    }
  },
  {
    id: "supply-chain-logistics-analysis",
    type: "demonstration",
    categoryFilter: "supply-chain",
    categoryLabel: "Supply Chain & Logistics",
    categoryLabelBn: "সাপ্লাই চেইন ও লজিস্টিকস",
    title: "Supply Chain & Logistics Network Optimization Model",
    titleBn: "সাপ্লাই চেইন ও লজিস্টিকস নেটওয়ার্ক অপ্টিমাইজেশন মডেল",
    shortDescription: "An analytical study modeling freight routing, delivery lead times, depot capacity allocation, and On-Time In-Full (OTIF) fulfillment.",
    shortDescriptionBn: "পণ্য পরিবহন রুট, ডেলিভারি লিড টাইম, ডিপো ক্যাপাসিটি এবং শতভাগ সময়মতো ডেলিভারি (OTIF) বিশ্লেষণকারী লজিস্টিকস মডেল।",
    tools: ["Logistics Modeling", "Excel Solver", "Distribution Routing", "Lead Time Analytics", "SCM Metrics"],
    image: "/images/projects/project-supply-chain.svg",
    badgeText: "Demonstration Simulation Project",
    badgeTextBn: "সিমুলেশন ও ডেমোনস্ট্রেশন প্রজেক্ট",
    hasLivePreview: true,
    livePreviewType: "logistics",
    details: {
      overview: "Developed as practical research during the Post Graduate Diploma (PGD) in Supply Chain Management to examine distribution network optimization in multi-tier supply chains.",
      overviewBn: "সাপ্লাই চেইন ম্যানেজমেন্ট পোস্ট গ্র্যাজুয়েট ডিপ্লোমার (PGD-SCM) ব্যবহারিক গবেষণা হিসেবে এফএমসিজি ও শিল্পগোষ্ঠীর পণ্য বিতরণ অপ্টিমাইজ করতে এই মডেলটি প্রস্তুত করা হয়।",
      problemStatement: "Fluctuating transport lead times and sub-optimal truck volume utilization increased per-unit logistics freight costs while jeopardizing on-shelf availability.",
      problemStatementBn: "পরিবহন বিলম্ব এবং ট্রাকের স্থান ও ওজনের অদক্ষ ব্যবহারের কারণে ইউনিট-প্রতি পরিবহন খরচ বৃদ্ধি পাচ্ছিল এবং পণ্য সময়মতো পৌঁছানো ব্যাহত হচ্ছিল।",
      objectives: [
        "Model delivery route lead times from central supply nodes to regional retail clusters.",
        "Maximize truck volumetric and weight utilization using linear optimization constraints.",
        "Establish an On-Time In-Full (OTIF) benchmark exceeding 97% for core consumer product shipments."
      ],
      objectivesBn: [
        "সেন্ট্রাল সাপ্লাই নোড থেকে আঞ্চলিক ক্লাস্টারগুলোতে ডেলিভারি লিড টাইম ম্যাপ করা।",
        "লিনিয়ার অপ্টিমাইজেশনের মাধ্যমে পরিবহন যানের স্থান ও ওজনের সর্বোচ্চ ব্যবহার নিশ্চিত করা।",
        "মূল পণ্য পরিবহনে ৯৭% এর বেশি অন-টাইম ইন-ফুল (OTIF) সক্ষমতা অর্জন করা।"
      ],
      approach: [
        "Mapped supplier-to-depot and depot-to-outlet transport legs with historic transit times and load factor records.",
        "Built an analytical matrix tracking On-Time In-Full (OTIF) delivery metrics across regional distribution zones.",
        "Simulated fleet load optimization scenarios using linear constraint equations to maximize truck cubic meter utilization.",
        "Identified bottleneck transit corridors and evaluated regional secondary replenishment hub points."
      ],
      approachBn: [
        "সাপ্লায়ার থেকে ডিপো এবং ডিপো থেকে আউটলেটের পরিবহন সময় ও গাড়ির ক্যাপাসিটি ডাটা ম্যাপ করা।",
        "বিভিন্ন আঞ্চলিক ডিস্ট্রিবিউশন জোনে শতভাগ সময়ানুগ ডেলিভারি (OTIF) মেট্রিক্স ট্র্যাকিং ম্যাট্রিক্স প্রস্তুতকরণ।",
        "ট্রাকের স্থান ও ওজনের সর্বোচ্চ ব্যবহার নিশ্চিত করতে লোড অপ্টিমাইজেশন সিমুলেশন পরিচালনা।",
        "পরিবহন বিলম্বের প্রধান পয়েন্টসমূহ শনাক্তকরণ এবং বিকল্প সেকেন্ডারি হাবে রি-রাউটিং প্রস্তাবনা।"
      ],
      keyFeatures: [
        "Multi-echelon distribution network pipeline diagram.",
        "Interactive depot lead time calculator (1.2 days North vs. 1.8 days South).",
        "Fleet capacity load simulator with cubic meter utilization gauge.",
        "Comprehensive OTIF performance scorecards."
      ],
      keyFeaturesBn: [
        "মাল্টি-টায়ার ডিস্ট্রিবিউশন পাইপলাইন ও রুট ডায়াগ্রাম।",
        "আঞ্চলিক লিড টাইম ক্যালকুলেটর (উত্তর অঞ্চল ১.২ দিন বনাম দক্ষিণ অঞ্চল ১.৮ দিন)।",
        "ট্রাক লোড ক্যাপাসিটি ইউটিলাইজেশন সিমুলেটর।",
        "সামগ্রিক OTIF পারফরম্যান্স স্কোরকার্ড।"
      ],
      results: [
        "Modeled transportation lead times and transit benchmarks across regional routing hubs.",
        "Demonstrates simulated bottleneck detection when vehicle transit exceeds benchmark thresholds.",
        "Academic case study developed during SCM coursework; simulated routing model."
      ],
      resultsBn: [
        "নর্থ ও সাউথ রুট হাবের ট্রানজিট সময় এবং পরিবহন বেঞ্চমার্কের সিমুলেশন বিশ্লেষণ।",
        "নির্ধারিত সময়ের চেয়ে বেশি সময় লাগা ডেসপ্যাচ বটলনেক শনাক্তকরণের মডেলিং।",
        "এসসিএম উচ্চশিক্ষা চলাকালীন তৈরি একাডেমিক কেস স্টাডি; সম্পূর্ণ সিমুলেটেড রুট মডেল।"
      ],
      excelTechniques: ["Linear Optimization Formulas", "Lead Time Distribution", "Capacity Constraints", "Variance Tables"],
      excelTechniquesBn: ["লিনিয়ার অপ্টিমাইজেশন ফর্মুলা", "লিড টাইম ডিস্ট্রিবিউশন", "ক্যাপাসিটি বিশ্লেষণ", "ভ্যারিয়্যান্স টেবিল"],
      downloadableNote: "Logistics routing scenario spreadsheet with parameter controls.",
      downloadableNoteBn: "লজিস্টিকস ও লিড টাইম সিমুলেশন মডেলের প্র্যাকটিস স্প্রেডশিট।"
    }
  },
  {
    id: "data-management-system",
    type: "professional",
    categoryFilter: "data-analysis",
    categoryLabel: "Data Analysis & Governance",
    categoryLabelBn: "ডাটা অ্যানালাইসিস ও গভর্নেন্স",
    title: "Excel-Based Automated Operational Records System",
    titleBn: "এক্সেল ভিত্তিক অটোমেটেড অপারেশনাল রেকর্ডস ও ডাটা সিস্টেম",
    shortDescription: "A bulletproof operational data entry and record maintenance system with strict validation controls, zero duplicate entries, and relational lookup tables.",
    shortDescriptionBn: "কঠোর ডাটা ভ্যালিডেশন, শতভাগ ডুপ্লিকেট রোধ এবং রিলেশনাল লুকআপ টেবিল সমন্বিত অপারেশনাল রেকর্ড কিপিং সিস্টেম।",
    tools: ["Microsoft Excel", "Data Validation", "Nested Formulas", "Conditional Formatting", "Audit Trails"],
    image: "/images/projects/project-data-management.svg",
    badgeText: "Professional Workplace Project",
    badgeTextBn: "পেশাদার কর্মক্ষেত্রের প্রজেক্ট",
    hasLivePreview: true,
    livePreviewType: "records",
    details: {
      overview: "Standardizing how operational personnel log daily dispatches, receiving notes, customer feedback, and branch reconciliations to enforce corporate data integrity from day one.",
      overviewBn: "মাঠপর্যায়ের কর্মীদের দৈনন্দিন ডিসপ্যাচ, রিসিভিং চালান ও ব্রাঞ্চ সমন্বয়ের তথ্য নথিভুক্তকরণে প্রাতিষ্ঠানিক ডাটা শুদ্ধতা নিশ্চিতকরণ।",
      problemStatement: "Inconsistent manual entries, duplicate voucher numbers, and misspelled SKU categories created extensive data cleansing bottlenecks before monthly reports could even begin.",
      problemStatementBn: "ইনভয়েস নম্বরে ভুল, পণ্যের নামে ভিন্নতা কিংবা ভুল ফরম্যাটে তারিখ লেখার কারণে মূল রিপোর্টিংয়ের আগে ঘণ্টার পর ঘণ্টা ডাটা ক্লিনিং করতে হতো।",
      objectives: [
        "Enforce strict input constraints preventing typographical errors at the moment of entry.",
        "Eliminate duplicate transactional IDs completely via instant conditional validation formulas.",
        "Accelerate query lookup response time for historic vouchers to sub-second speeds."
      ],
      objectivesBn: [
        "টাইপ করার সাথে সাথেই যেন কোনো ভুল ইনপুট না নেওয়া হয় তা নিশ্চিত করা।",
        "তাৎক্ষণিক ভ্যালিডেশন ফর্মুলার মাধ্যমে ডুপ্লিকেট ভাউচার এন্ট্রি শতভাগ রোধ করা।",
        "অতীতে সংরক্ষিত ভাউচার সেকেন্ডের ভগ্নাংশে খুঁজে বের করার ব্যবস্থা তৈরি করা।"
      ],
      approach: [
        "Created protected input sheets with strict dropdown lists sourced from locked master definition tables.",
        "Embedded nested validation formulas that prevent duplicate serial entries at the exact moment of typing.",
        "Integrated dynamic cell formatting highlighting missing mandatory fields in amber until filled.",
        "Automated index-based query lookups enabling rapid retrieval of historic batch vouchers in fractions of a second."
      ],
      approachBn: [
        "লক করা মাস্টার ডেফিনিশন টেবিল থেকে সংরক্ষিত নির্দিষ্ট ড্রপডাউন তালিকার মাধ্যমে ইনপুট সুরক্ষিত করা।",
        "ডাটা টাইপ করার সাথে সাথেই যেন কোনো ডুপ্লিকেট এন্ট্রি গ্রহণযোগ্য না হয় সেজন্য ভ্যালিডেশন ফর্মুলা সংযুক্তকরণ।",
        "বাধ্যতামূলক কোনো ফিল্ড ফাঁকা থাকলে তা হলুদ রঙে হাইলাইট করার জন্য ডাইনামিক রুলস প্রয়োগ।",
        "ইনডেক্স ভিত্তিক কুয়েরি সেটআপের মাধ্যমে সেকেন্ডের ভগ্নাংশে অতীতের যেকোনো ভাউচার খুঁজে পাওয়ার ব্যবস্থা।"
      ],
      keyFeatures: [
        "Cascading dependent dropdown lists for Category > Product > SKU Code.",
        "Instant duplicate voucher alert modal locking save actions.",
        "Normalized relational data schema ready for ERP mass import.",
        "Automated audit trail timestamps for every recorded row."
      ],
      keyFeaturesBn: [
        "ক্যাটাগরি > প্রোডাক্ট > এসকেইউ কোড ফিল্টারের জন্য ক্যাসকেডিং ডিপেন্ডেন্ট ড্রপডাউন।",
        "ডুপ্লিকেট ভাউচার এন্ট্রির সাথে সাথে স্বয়ংক্রিয় সেভ ব্লক করার নিরাপত্তা।",
        "ইআরপিতে সরাসরি ইমপোর্ট করার উপযোগী স্ট্যান্ডার্ড রিলেশনাল ডাটা ফরম্যাট।",
        "প্রতিটি এন্ট্রির জন্য স্বয়ংক্রিয় টাইমস্ট্যাম্প ও অডিট ট্রেইল।"
      ],
      results: [
        "Enforced duplicate-trapping validation rules for operational batch codes before posting.",
        "Maintained organized master record logs for transaction traceability and internal audit.",
        "Standardized documentation format across operational desks and depot logs."
      ],
      resultsBn: [
        "পোস্টিংয়ের আগেই ব্যাচ ভাউচার কোডের স্বয়ংক্রিয় ডুপ্লিকেট ট্র্যাপিং রুল প্রয়োগ।",
        "অভ্যন্তরীণ অডিট ও ট্রানজ্যাকশন ট্র্যাকিংয়ের জন্য সুবিন্যস্ত মাস্টার রেকর্ড সংরক্ষণ।",
        "অপারেশনাল ডেস্ক ও ডিপো লগের জন্য মানসম্মত ডকুমেন্টেশন কাঠামো বাস্তবায়ন।"
      ],
      excelTechniques: ["Data Validation Rules", "Dynamic Dropdowns (INDIRECT / OFFSET)", "Conditional Rules", "Sheet Protection"],
      excelTechniquesBn: ["ডাটা ভ্যালিডেশন রুলস", "ডাইনামিক ড্রপডাউন", "কন্ডিশনাল রুলস", "শিট প্রটেকশন ও নিরাপত্তা"],
      downloadableNote: "Sanitized corporate entry workbook demonstrating data validation gates.",
      downloadableNoteBn: "ডাটা ভ্যালিডেশন ও প্রোটেকশন সংবলিত ডেমো এক্সেল ওয়ার্কবুক।"
    }
  }
];
