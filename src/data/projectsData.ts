export interface ProjectItem {
  id: string;
  type: 'workplace' | 'simulation';
  title: string;
  titleBn: string;
  category: string;
  categoryBn: string;
  shortDescription: string;
  shortDescriptionBn: string;
  tools: string[];
  image: string;
  badgeText: string;
  badgeTextBn: string;
  details: {
    overview: string;
    overviewBn: string;
    challenge: string;
    challengeBn: string;
    methodology: string[];
    methodologyBn: string[];
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
    type: "workplace",
    title: "Daily Sales & Bank Deposit Reconciliation Matrix",
    titleBn: "দৈনিক বিক্রয় ও ব্যাংক ডিপোজিট রিকনসিলিয়েশন ম্যাট্রিক্স",
    category: "Financial & Outlet Operations",
    categoryBn: "আর্থিক ও রিটেইল অপারেশনস",
    shortDescription: "A mission-critical financial reconciliation workflow matching multi-outlet sales receipts against bank statements with zero variance tolerance.",
    shortDescriptionBn: "মাল্টি-আউটলেট বিক্রয় রসিদের সাথে ব্যাংক স্টেটমেন্টের শতভাগ নির্ভুল মিল নিশ্চিতে একটি অপরিহার্য আর্থিক রিকনসিলিয়েশন ওয়ার্কফ্লো।",
    tools: ["Microsoft Excel", "ERP System", "Bank Portals", "VLOOKUP / XLOOKUP", "Conditional Formatting"],
    image: "/images/projects/project-reconciliation.svg",
    badgeText: "Workplace Operational Project",
    badgeTextBn: "কর্মক্ষেত্রের অপারেশনাল প্রজেক্ট",
    details: {
      overview: "At Paragon Group, managing outlet transactions requires meticulous cross-verification between end-of-day Point-of-Sale (POS) registers and verified bank deposit credit advice slips.",
      overviewBn: "প্যারাগন গ্রুপে রিটেইল আউটলেটের দৈনন্দিন লেনদেন তদারকিতে দিনের শেষে পিওএস (POS) রেজিস্টারের সাথে ব্যাংকে জমাকৃত ক্রেডিট ভাউচারের নিখুঁত ক্রস-ভেরিফিকেশন প্রয়োজন হয়।",
      challenge: "Manual receipts caused delayed variance tracking and timing differences between cash deposits, credit card settlements, and bank ledger entries.",
      challengeBn: "ম্যানুয়াল রসিদ পর্যবেক্ষণে সময়ক্ষেপণ হতো এবং ক্যাশ ডিপোজিট ও কার্ড সেটেলমেন্টে ব্যাংকের সাথে টাইমিং পার্থক্যের ঝুঁকি সৃষ্টি হতো।",
      methodology: [
        "Structured a standardized Excel-based reconciliation engine integrating daily ERP POS sales logs.",
        "Deployed automated SUMIFS, XLOOKUP, and conditional formatting rules to highlight unreconciled amounts immediately in red.",
        "Established a strict End-of-Day (EOD) checklist for outlet managers to upload deposit slips before morning audit.",
        "Implemented a variance tracker logging reasons for bank transit delays or bank charges."
      ],
      methodologyBn: [
        "দৈনিক ইআরপি সেলস লগ একত্রিত করার জন্য মাইক্রোসফট এক্সেলে একটি স্বয়ংক্রিয় রিকনসিলিয়েশন ফ্রেমওয়ার্ক প্রস্তুত করা।",
        "SUMIFS, XLOOKUP এবং কন্ডিশনাল ফরম্যাটিং প্রয়োগের মাধ্যমে অমিল থাকা হিসাবসমূহকে তাৎক্ষণিকভাবে লাল রঙে চিহ্নিত করার ব্যবস্থা।",
        "সকালের অডিটের আগেই আউটলেট ম্যানেজারদের জন্য ডিপোজিট স্লিপ প্রেরণের বাধ্যতামূলক এন্ড-অব-ডে চেকলিস্ট প্রণয়ন।",
        "ব্যাংক ট্রানজিট লেট বা চার্জের কারণ অনুসন্ধানে ভ্যারিয়্যান্স ট্র্যাকার অন্তর্ভুক্তি।"
      ],
      results: [
        "100% variance resolution achieved on a daily basis across monitored outlets.",
        "Audit readiness improved with an instant verifiable archive of deposit slips and ERP batch vouchers.",
        "Eliminated end-of-month reconciliation backlogs and stress on the central accounts team."
      ],
      resultsBn: [
        "তদারকিকৃত সকল আউটলেটে প্রতিদিন শতভাগ রিকনসিলিয়েশন ও শূন্য গরমিল নিশ্চিতকরণ।",
        "ডিপোজিট স্লিপ ও ইআরপি ভাউচারের তাৎক্ষণিক আর্কাইভের মাধ্যমে অডিট প্রস্তুতি সুগম হয়েছে।",
        "মাসিক হিসাব ক্লোজিংয়ের সময় সেন্ট্রাল একাউন্টস টিমের ওপর চাপ ও পেন্ডিং কাজ সম্পূর্ণ দূর হয়েছে।"
      ],
      excelTechniques: ["SUMIFS", "XLOOKUP", "Conditional Formatting", "Data Validation", "IFERROR"],
      excelTechniquesBn: ["SUMIFS", "XLOOKUP", "কন্ডিশনাল ফরম্যাটিং", "ডাটা ভ্যালিডেশন", "IFERROR"],
      downloadableNote: "A sanitized practice workbook demonstrating the reconciliation matrix schema is available for review.",
      downloadableNoteBn: "ব্যক্তিগত গোপনীয়তা রক্ষা করে প্রস্তুতকৃত রিকনসিলিয়েশন ম্যাট্রিক্সের একটি প্র্যাকটিস ওয়ার্কবুক ডেমো হিসেবে প্রস্তুত রয়েছে।"
    }
  },
  {
    id: "inventory-tracking-analysis",
    type: "workplace",
    title: "Enterprise Inventory Tracking & Stock Movement Analysis",
    titleBn: "এন্টারপ্রাইজ ইনভেন্টরি ট্র্যাকিং ও স্টক মুভমেন্ট অ্যানালাইসিস",
    category: "Warehouse & Stock Management",
    categoryBn: "ওয়্যারহাউস ও স্টক ব্যবস্থাপনা",
    shortDescription: "End-to-end inventory tracking model monitoring depot transfers, stock aging, safety stock limits, and minimum reorder triggers.",
    shortDescriptionBn: "ডিপো ট্রান্সফার, স্টক এজিং, সেফটি স্টক সীমা এবং রিক্যুইজিশন পয়েন্ট পর্যবেক্ষণে সমন্বিত ইনভেন্টরি ট্র্যাকিং মডেল।",
    tools: ["Microsoft Excel", "ERP Module", "Pivot Tables", "INDEX-MATCH", "Stock Formulas"],
    image: "/images/projects/project-inventory.svg",
    badgeText: "Workplace Operational Project",
    badgeTextBn: "কর্মক্ষেত্রের অপারেশনাল প্রজেক্ট",
    details: {
      overview: "Monitoring raw material and finished goods movement between central depots and regional storage facilities to prevent stockouts while preventing capital lockup in slow-moving inventory.",
      overviewBn: "সেন্ট্রাল ডিপো ও রিজিওনাল স্টোরেজের মধ্যে কাঁচামাল ও উৎপাদিত পণ্যের চলাচল নিয়মিত তদারকি করা, যাতে স্টক আউটের ঝুঁকি দূর হয় এবং ধীরগতির ইনভেন্টরিতে মূলধন আটকে না থাকে।",
      challenge: "Handling multi-SKU product catalogs across multiple distribution nodes with distinct shelf-lives and demand spikes.",
      challengeBn: "বিভিন্ন মেয়াদের শেলফ-লাইফ এবং আকস্মিক চাহিদার পরিবর্তনশীল পণ্য নিয়ে গঠিত মাল্টি-এসকেইউ ক্যাটালগ সুশৃঙ্খলভাবে নিয়ন্ত্রণ করা।",
      methodology: [
        "Exported and cleaned batch-level ERP transaction data covering opening balances, receipts, issues, and closing balances.",
        "Built a dynamic Pivot Table framework categorizing stock into active, slow-moving, and near-expiry buckets.",
        "Implemented automated reorder alert formulas triggering requisitions whenever stock approached safety margins.",
        "Conducted bi-weekly physical stock-count audit reconciliations against ERP recorded ledgers."
      ],
      methodologyBn: [
        "ওপেনিং ব্যালেন্স, ইনওয়ার্ড রিসিট, ডিসপ্যাচ ও ক্লোজিং ব্যালেন্সের সমন্বয়ে ইআরপি থেকে প্রাপ্ত ব্যাচ ডাটা প্রসেস করা।",
        "ডাইনামিক পিভট টেবিলের মাধ্যমে স্টককে সক্রিয়, ধীরগতির এবং মেয়াদ উত্তীর্ণের ঝুঁকিপূর্ণ ক্যাটাগরিতে বিভক্ত করা।",
        "স্টক সেফটি মার্জিনে নেমে আসামাত্র স্বয়ংক্রিয় সতর্কবার্তা প্রেরণে ফর্মুলা সেটআপ।",
        "ইআরপি লেজারের সাথে ফিজিক্যাল স্টক গণনার মিল নিশ্চিতে পাক্ষিক অডিট ক্রস-চেক পরিচালনা।"
      ],
      results: [
        "Reduced critical stockout instances across fast-moving product lines.",
        "Identified stagnant inventory batches early, allowing sales teams to promote them before expiration.",
        "Strengthened inventory accountability between depot custodians and head office management."
      ],
      resultsBn: [
        "দ্রুত বিক্রয়যোগ্য পণ্যসমূহে অনাকাঙ্ক্ষিত স্টকআউটের হার উল্লেখযোগ্যভাবে হ্রাস পেয়েছে।",
        "ধীরগতির ব্যাচসমূহ আগে থেকেই শনাক্ত করে বিক্রয় দলের মাধ্যমে দ্রুত ক্লিয়ারেন্সের ব্যবস্থা করা সম্ভব হয়েছে।",
        "ডিপো ইনচার্জ ও হেড অফিসের মধ্যকার ইনভেন্টরি স্বচ্ছতা বহুলাংশে বৃদ্ধি পেয়েছে।"
      ],
      excelTechniques: ["INDEX-MATCH", "Pivot Tables", "Dynamic Ranges", "Date & Aging Functions", "COUNTIFS"],
      excelTechniquesBn: ["INDEX-MATCH", "পিভট টেবিল", "ডাইনামিক রেঞ্জ", "ডেট ও এজিং ফাংশন", "COUNTIFS"],
      downloadableNote: "Demonstration inventory ledger template showcasing aging buckets and stock metrics.",
      downloadableNoteBn: "স্টক এজিং ও ইনভেন্টরি ট্র্যাকিং ফর্মুলার ডেমো এক্সেল টেমপ্লেট অন্তর্ভুক্ত।"
    }
  },
  {
    id: "mis-reporting-dashboard",
    type: "simulation",
    title: "Excel-Based Executive MIS Performance Dashboard",
    titleBn: "এক্সেল নির্ভর এক্সিকিউটিভ এমআইএস পারফরম্যান্স ড্যাশবোর্ড",
    category: "Business Intelligence & MIS",
    categoryBn: "বিজনেস ইন্টেলিজেন্স ও এমআইএস",
    shortDescription: "A comprehensive analytical dashboard consolidating sales, revenue, operational targets, and team performance into an interactive cockpit.",
    shortDescriptionBn: "বিক্রয়, রাজস্ব, অপারেশনাল লক্ষ্যমাত্রা ও দলগত পারফরম্যান্স একত্রিত করে তৈরি একটি ইন্টারেক্টিভ এক্সিকিউটিভ ককপিট।",
    tools: ["Microsoft Excel", "Pivot Charts", "Interactive Slicers", "Advanced Data Validation", "KPI Modeling"],
    image: "/images/projects/project-mis-dashboard.svg",
    badgeText: "Analytical Simulation / Showcase Case Study",
    badgeTextBn: "অ্যানালিটিক্যাল সিমুলেশন / শোকেস কেস স্টাডি",
    details: {
      overview: "A specialized project developed to demonstrate advanced Management Information System (MIS) reporting capabilities using Microsoft Excel as a standalone business intelligence engine.",
      overviewBn: "মাইক্রোসফট এক্সেলকে একটি শক্তিশালী বিজনেস ইন্টেলিজেন্স ইঞ্জিন হিসেবে ব্যবহারের সক্ষমতা প্রমাণের জন্য প্রস্তুতকৃত একটি বিশেষায়িত এমআইএস মডেল।",
      challenge: "Executive stakeholders often spend hours deciphering fragmented, multi-page tabular reports without clear high-level visual summaries or dynamic filtering.",
      challengeBn: "ঊর্ধ্বতন কর্মকর্তারা প্রায়ই জটিল ও বহু পৃষ্ঠার বিচ্ছিন্ন টেবিল রিপোর্ট বুঝতে গিয়ে সময় হারান, যেখানে ভিজ্যুয়াল সামারি বা ফিল্টারিং সুবিধার অভাব থাকে।",
      methodology: [
        "Designed a relational spreadsheet architecture separating Raw Data, Calculation Engine, and Executive Interface tabs.",
        "Created dynamic Pivot Tables linked to synchronized timeline and category slicers for instantaneous drill-downs.",
        "Engineered variance formulas calculating Month-over-Month (MoM) growth, Budget vs Actual variances, and achievement ratios.",
        "Formatted the dashboard with corporate dark-themed visual aesthetics and clean chart typography."
      ],
      methodologyBn: [
        "র ডাটা, ক্যালকুলেশন ইঞ্জিন এবং এক্সিকিউটিভ ইন্টারফেস—এই তিনটি স্তরে শিটগুলোকে সুশৃঙ্খলভাবে সাজানো।",
        "একক ক্লিকে ফিল্টারিংয়ের জন্য পিভট চার্ট ও সিনক্রোনাইজড স্লাইসার (Timeline & Slicers) যুক্ত করা।",
        "মাসিক প্রবৃদ্ধি (MoM Growth), বাজেট বনাম বাস্তব বিক্রয় এবং লক্ষ্যমাত্রা অর্জনের স্বয়ংক্রিয় ফর্মুলা প্রণয়ন।",
        "আধুনিক কর্পোরেট ডিজাইন ও ক্লিয়ার ভিজ্যুয়াল কার্ডের মাধ্যমে সহজে সিদ্ধান্ত গ্রহণের উপযোগী উপস্থাপন।"
      ],
      results: [
        "Reduced executive briefing preparation time by an estimated 65%.",
        "Provided instant single-click capability to inspect performance by region, outlet, product family, or fiscal quarter.",
        "Served as an operational template for regular corporate reporting workflows."
      ],
      resultsBn: [
        "এক্সিকিউটিভ ব্রিফিং তৈরিতে সময় প্রায় ৬৫% হ্রাস করা সম্ভব হয়েছে।",
        "অঞ্চল, আউটলেট, পণ্য বা ত্রৈমাসিক হিসেবে এক ক্লিকে পারফরম্যান্স দেখার পূর্ণ সুবিধা।",
        "নিয়মিত কর্পোরেট রিপোর্টিংয়ে একটি স্ট্যান্ডার্ড টেমপ্লেট হিসেবে ব্যবহারের উপযোগী।"
      ],
      excelTechniques: ["Pivot Charts & Slicers", "XLOOKUP", "SUMIFS", "Dynamic Array Formulas", "Clean UI Design"],
      excelTechniquesBn: ["পিভট চার্ট ও স্লাইসার", "XLOOKUP", "SUMIFS", "ডাইনামিক অ্যারে ফর্মুলা", "ইউজার-ফ্রেন্ডলি ডিজাইন"],
      downloadableNote: "Interactive MIS dashboard template with sample operational data.",
      downloadableNoteBn: "নমুনা অপারেশনাল ডাটাসহ ইন্টারেক্টিভ এমআইএস ড্যাশবোর্ড টেমপ্লেট।"
    }
  },
  {
    id: "supply-chain-logistics-analysis",
    type: "simulation",
    title: "Supply Chain & Logistics Network Optimization Model",
    titleBn: "সাপ্লাই চেইন ও লজিস্টিকস নেটওয়ার্ক অপ্টিমাইজেশন মডেল",
    category: "Supply Chain Strategy & Academic Study",
    categoryBn: "সাপ্লাই চেইন স্ট্র্যাটেজি ও শিক্ষা গবেষণা",
    shortDescription: "An analytical study modeling freight routing, delivery lead times, depot capacity allocation, and On-Time In-Full (OTIF) fulfillment.",
    shortDescriptionBn: "পণ্য পরিবহন রুট, ডেলিভারি লিড টাইম, ডিপো ক্যাপাসিটি এবং শতভাগ সময়মতো ডেলিভারি (OTIF) বিশ্লেষণকারী লজিস্টিকস মডেল।",
    tools: ["Logistics Modeling", "Excel Solver", "Distribution Routing", "Lead Time Analytics", "SCM Metrics"],
    image: "/images/projects/project-supply-chain.svg",
    badgeText: "Analytical Simulation / PGD-SCM Case Study",
    badgeTextBn: "অ্যানালিটিক্যাল সিমুলেশন / পিজিডি-এসসিএম কেস স্টাডি",
    details: {
      overview: "Developed as part of practical research during the Post Graduate Diploma (PGD) in Supply Chain Management to study how FMCG and agricultural conglomerates streamline distribution networks.",
      overviewBn: "সাপ্লাই চেইন ম্যানেজমেন্ট পোস্ট গ্র্যাজুয়েট ডিপ্লোমার (PGD-SCM) ব্যবহারিক গবেষণা হিসেবে এফএমসিজি ও কৃষিভিত্তিক শিল্পগোষ্ঠীর পণ্য বিতরণ অপ্টিমাইজ করতে এই মডেলটি প্রস্তুত করা হয়।",
      challenge: "Rising transportation fuel costs, route congestion, and unpredictable lead times frequently jeopardize fresh product distribution and increase transit losses.",
      challengeBn: "পরিবহন খরচ বৃদ্ধি, সড়কে দীর্ঘ যানজট এবং অনিশ্চিত লিড টাইমের কারণে পণ্যের সতেজতা নষ্ট হওয়া ও অপচয়ের ঝুঁকি বৃদ্ধি পায়।",
      methodology: [
        "Mapped supplier-to-depot and depot-to-outlet transport legs with historic transit times and load factor records.",
        "Built an analytical matrix tracking On-Time In-Full (OTIF) delivery metrics across regional distribution zones.",
        "Simulated fleet load optimization scenarios using linear constraint equations to maximize truck cubic meter utilization.",
        "Identified bottleneck transit corridors and evaluated regional secondary replenishment hub points."
      ],
      methodologyBn: [
        "সাপ্লায়ার থেকে ডিপো এবং ডিপো থেকে আউটলেটের পরিবহন সময় ও গাড়ির ক্যাপাসিটি ডাটা ম্যাপ করা।",
        "বিভিন্ন আঞ্চলিক ডিস্ট্রিবিউশন জোনে শতভাগ সময়ানুগ ডেলিভারি (OTIF) মেট্রিক্স ট্র্যাকিং ম্যাট্রিক্স প্রস্তুতকরণ।",
        "ট্রাকের স্থান ও ওজনের সর্বোচ্চ ব্যবহার নিশ্চিত করতে লোড অপ্টিমাইজেশন সিমুলেশন পরিচালনা।",
        "পরিবহন বিলম্বের প্রধান পয়েন্টসমূহ শনাক্তকরণ এবং বিকল্প সেকেন্ডারি হাবে রি-রাউটিং প্রস্তাবনা।"
      ],
      results: [
        "Simulated an 18% improvement in average vehicle turnaround time.",
        "Demonstrated a roadmap for achieving 97%+ On-Time In-Full fulfillment across critical retail zones.",
        "Directly bridged theoretical supply chain coursework with practical industrial realities."
      ],
      resultsBn: [
        "গাড়ির টার্নঅ্যারাউন্ড সময়ে প্রায় ১৮% উন্নতির মডেলিং প্রদর্শন।",
        "প্রধান রিটেইল পয়েন্টসমূহে ৯৭% এর বেশি অন-টাইম ডেলিভারি অর্জনের বাস্তব রোডম্যাপ তৈরি।",
        "ক্লাসরুমের থিওরিটিক্যাল সাপ্লাই চেইন ধারণার সাথে বাস্তব শিল্পক্ষেত্রের সরাসরি সংযোগ স্থাপন।"
      ],
      excelTechniques: ["Linear Optimization Formulas", "Lead Time Distribution", "Capacity Constraints", "Variance Tables"],
      excelTechniquesBn: ["লিনিয়ার অপ্টিমাইজেশন ফর্মুলা", "লিড টাইম ডিস্ট্রিবিউশন", "ক্যাপাসিটি বিশ্লেষণ", "ভ্যারিয়্যান্স টেবিল"],
      downloadableNote: "Logistics routing scenario spreadsheet with parameter controls.",
      downloadableNoteBn: "লজিস্টিকস ও লিড টাইম সিমুলেশন মডেলের প্র্যাকটিস স্প্রেডশিট।"
    }
  },
  {
    id: "data-management-system",
    type: "workplace",
    title: "Excel-Based Automated Operational Records System",
    titleBn: "এক্সেল ভিত্তিক অটোমেটেড অপারেশনাল রেকর্ডস ও ডাটা সিস্টেম",
    category: "Data Governance & SOP Automation",
    categoryBn: "ডাটা গভর্নেন্স ও এসওপি অটোমেশন",
    shortDescription: "A bulletproof operational data entry and record maintenance system with strict validation controls, zero duplicate entries, and relational lookup tables.",
    shortDescriptionBn: "কঠোর ডাটা ভ্যালিডেশন, শতভাগ ডুপ্লিকেট রোধ এবং রিলেশনাল লুকআপ টেবিল সমন্বিত অপারেশনাল রেকর্ড কিপিং সিস্টেম।",
    tools: ["Microsoft Excel", "Data Validation", "Nested Formulas", "Conditional Formatting", "Audit Trails"],
    image: "/images/projects/project-data-management.svg",
    badgeText: "Workplace & Systems Project",
    badgeTextBn: "কর্মক্ষেত্র ও সিস্টেম প্রজেক্ট",
    details: {
      overview: "Standardizing how operational personnel log daily dispatches, receiving notes, customer feedback, and branch reconciliations to enforce corporate data integrity from day one.",
      overviewBn: "মাঠপর্যায়ের কর্মীদের দৈনন্দিন ডিসপ্যাচ, রিসিভিং চালান ও ব্রাঞ্চ সমন্বয়ের তথ্য নথিভুক্তকরণে প্রাতিষ্ঠানিক ডাটা শুদ্ধতা নিশ্চিতকরণ।",
      challenge: "Field personnel frequently entered inconsistent naming conventions, duplicate invoice numbers, and invalid dates, creating severe data cleaning overhead before reporting.",
      challengeBn: "ইনভয়েস নম্বরে ভুল, পণ্যের নামে ভিন্নতা কিংবা ভুল ফরম্যাটে তারিখ লেখার কারণে মূল রিপোর্টিংয়ের আগে ঘণ্টার পর ঘণ্টা ডাটা ক্লিনিং করতে হতো।",
      methodology: [
        "Created protected input sheets with strict dropdown lists sourced from locked master definition tables.",
        "Embedded nested validation formulas that prevent duplicate serial entries at the exact moment of typing.",
        "Integrated dynamic cell formatting highlighting missing mandatory fields in amber until filled.",
        "Automated index-based query lookups enabling rapid retrieval of historic batch vouchers in fractions of a second."
      ],
      methodologyBn: [
        "লক করা মাস্টার ডেফিনিশন টেবিল থেকে সংরক্ষিত নির্দিষ্ট ড্রপডাউন তালিকার মাধ্যমে ইনপুট সুরক্ষিত করা।",
        "ডাটা টাইপ করার সাথে সাথেই যেন কোনো ডুপ্লিকেট এন্ট্রি গ্রহণযোগ্য না হয় সেজন্য ভ্যালিডেশন ফর্মুলা সংযুক্তকরণ।",
        "বাধ্যতামূলক কোনো ফিল্ড ফাঁকা থাকলে তা হলুদ রঙে হাইলাইট করার জন্য ডাইনামিক রুলস প্রয়োগ।",
        "ইনডেক্স ভিত্তিক কুয়েরি সেটআপের মাধ্যমে সেকেন্ডের ভগ্নাংশে অতীতের যেকোনো ভাউচার খুঁজে পাওয়ার ব্যবস্থা।"
      ],
      results: [
        "Virtually eliminated data entry typos and invalid categorizations (99.98% entry accuracy).",
        "Reduced manual data cleaning time prior to monthly MIS consolidation by over 80%.",
        "Created an audit-proof paperless trail readily available for management inspection."
      ],
      resultsBn: [
        "টাইপো ও ভুল ক্যাটাগরি নির্বাচনের সমস্যা দূর হয়ে ৯৯.৯৮% এন্ট্রি শুদ্ধতা নিশ্চিত হয়েছে।",
        "মাসিক কনসোলিডেশনের পূর্বে ডাটা ক্লিনিংয়ের পেছনে নষ্ট হওয়া সময়ের ৮০% সাশ্রয়।",
        "ম্যানেজমেন্ট ও অডিট টিমের জন্য তাৎক্ষণিক যাচাইযোগ্য সুশৃঙ্খল ডিজিটাল ট্রেইল তৈরি হয়েছে।"
      ],
      excelTechniques: ["Data Validation Rules", "Dynamic Dropdowns (INDIRECT / OFFSET)", "Conditional Rules", "Sheet Protection"],
      excelTechniquesBn: ["ডাটা ভ্যালিডেশন রুলস", "ডাইনামিক ড্রপডাউন", "কন্ডিশনাল রুলস", "শিট প্রটেকশন ও নিরাপত্তা"],
      downloadableNote: "Sanitized corporate entry workbook demonstrating data validation gates.",
      downloadableNoteBn: "ডাটা ভ্যালিডেশন ও প্রোটেকশন সংবলিত ডেমো এক্সেল ওয়ার্কবুক।"
    }
  }
];

