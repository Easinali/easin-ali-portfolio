import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { CardSpotlight } from '../components/CardSpotlight';
import { Database, TrendingUp, GraduationCap, BarChart2, Shield } from 'lucide-react';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  const isBn = language === 'bn';

  return (
    <section id="about" className="py-20 md:py-28 bg-emerald-50/70 dark:bg-navyBlue/40 border-y border-emerald-200/80 dark:border-borderNavy/40 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-electricBlue/10 text-emerald-800 dark:text-highlightBlue border border-emerald-300 dark:border-electricBlue/20 mb-3 shadow-sm">
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-secondaryText">
            {t.about.subtitle}
          </p>
        </div>

        {/* Narrative & Metric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-secondaryText text-sm sm:text-base leading-relaxed">
            <p className="border-l-4 border-emerald-500 dark:border-electricBlue pl-4 text-slate-800 dark:text-slate-200 font-medium">
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>
            <p>
              {t.about.p3}
            </p>

            {/* Core Competency Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-darkNavy/80 border border-emerald-200 dark:border-borderNavy shadow-sm flex items-start gap-3">
                <Database className="w-5 h-5 text-emerald-600 dark:text-highlightBlue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {isBn ? 'ডাটা ও ইনভেন্টরি ট্র্যাকিং' : 'Data & Inventory Governance'}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-secondaryText/70 mt-0.5">
                    {isBn ? 'ইআরপি ভিত্তিক নিখুঁত রেকর্ড সংরক্ষণ' : 'Rigorous ERP-based audit records'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-darkNavy/80 border border-emerald-200 dark:border-borderNavy shadow-sm flex items-start gap-3">
                <BarChart2 className="w-5 h-5 text-emerald-600 dark:text-highlightBlue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {isBn ? 'এমআইএস ও রিকনসিলিয়েশন' : 'MIS & Sales Reconciliation'}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-secondaryText/70 mt-0.5">
                    {isBn ? 'দৈনিক সেলস ও ব্যাংক স্টেটমেন্ট ম্যাচিং' : 'Zero-variance daily balance checks'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-darkNavy/80 border border-emerald-200 dark:border-borderNavy shadow-sm flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-highlightBlue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {isBn ? 'উচ্চশিক্ষা ও পেশাগত বৃদ্ধি' : 'MBA & PGD-SCM Growth'}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-secondaryText/70 mt-0.5">
                    {isBn ? 'সাপ্লাই চেইনে উচ্চতর একাডেমিক জ্ঞান' : 'Parallel business & logistics studies'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-darkNavy/80 border border-emerald-200 dark:border-borderNavy shadow-sm flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-600 dark:text-highlightBlue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {isBn ? 'কর্পোরেট নির্ভরযোগ্যতা' : 'Corporate Reliability'}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-secondaryText/70 mt-0.5">
                    {isBn ? 'প্যারাগন গ্রুপে একনিষ্ঠ অপারেশনস' : 'Disciplined Assistant Officer execution'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Operational Competencies Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CardSpotlight className="p-5 rounded-2xl bg-white dark:bg-darkNavy border border-emerald-200 dark:border-borderNavy flex flex-col justify-between shadow-sm hover:border-emerald-500 dark:hover:border-electricBlue/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-highlightBlue mb-4">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {t.about.stats.expVal}
                </h4>
                <p className="text-xs text-slate-600 dark:text-secondaryText/80 mt-1.5 leading-relaxed">
                  {t.about.stats.exp}
                </p>
              </div>
            </CardSpotlight>

            <CardSpotlight className="p-5 rounded-2xl bg-white dark:bg-darkNavy border border-emerald-200 dark:border-borderNavy flex flex-col justify-between shadow-sm hover:border-emerald-500 dark:hover:border-emerald-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-emerald-400 mb-4">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {t.about.stats.accuracyVal}
                </h4>
                <p className="text-xs text-slate-600 dark:text-secondaryText/80 mt-1.5 leading-relaxed">
                  {t.about.stats.accuracy}
                </p>
              </div>
            </CardSpotlight>

            <CardSpotlight className="p-5 rounded-2xl bg-white dark:bg-darkNavy border border-emerald-200 dark:border-borderNavy flex flex-col justify-between shadow-sm hover:border-emerald-500 dark:hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-highlightBlue mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {t.about.stats.reconciledVal}
                </h4>
                <p className="text-xs text-slate-600 dark:text-secondaryText/80 mt-1.5 leading-relaxed">
                  {t.about.stats.reconciled}
                </p>
              </div>
            </CardSpotlight>

            <CardSpotlight className="p-5 rounded-2xl bg-white dark:bg-darkNavy border border-emerald-200 dark:border-borderNavy flex flex-col justify-between shadow-sm hover:border-emerald-500 dark:hover:border-purple-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {t.about.stats.erpVal}
                </h4>
                <p className="text-xs text-slate-600 dark:text-secondaryText/80 mt-1.5 leading-relaxed">
                  {t.about.stats.erp}
                </p>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
};
