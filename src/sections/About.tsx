import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Database, BarChart2, GraduationCap, Shield } from 'lucide-react';

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  const isBn = language === 'bn';

  const competencies = [
    { icon: <Database className="w-4 h-4" />, color: 'text-electricBlue', borderColor: 'border-electricBlue/30', title: isBn ? 'ডাটা ও ইনভেন্টরি' : 'Data & Inventory Governance', desc: isBn ? 'ইআরপি ভিত্তিক নিখুঁত রেকর্ড সংরক্ষণ' : 'Rigorous ERP-based audit records' },
    { icon: <BarChart2 className="w-4 h-4" />, color: 'text-highlightBlue', borderColor: 'border-highlightBlue/30', title: isBn ? 'এমআইএস ও রিকনসিলিয়েশন' : 'MIS & Sales Reconciliation', desc: isBn ? 'দৈনিক সেলস ও ব্যাংক ম্যাচিং' : 'Zero-variance daily balance checks' },
    { icon: <GraduationCap className="w-4 h-4" />, color: 'text-secondaryText', borderColor: 'border-borderNavy', title: isBn ? 'উচ্চশিক্ষা' : 'MBA & PGD-SCM Growth', desc: isBn ? 'সাপ্লাই চেইনে উচ্চতর একাডেমিক জ্ঞান' : 'Parallel business & logistics studies' },
    { icon: <Shield className="w-4 h-4" />, color: 'text-crtGreen', borderColor: 'border-crtGreen/20', title: isBn ? 'কর্পোরেট নির্ভরযোগ্যতা' : 'Corporate Reliability', desc: isBn ? 'প্যারাগন গ্রুপে একনিষ্ঠ অপারেশনস' : 'Disciplined Assistant Officer execution' },
  ];

  const statCards = [
    { icon: <Database className="w-5 h-5" />, color: 'text-electricBlue', borderColor: 'border-electricBlue/25', heading: t.about.stats.expVal, desc: t.about.stats.exp },
    { icon: <BarChart2 className="w-5 h-5" />, color: 'text-highlightBlue', borderColor: 'border-highlightBlue/25', heading: t.about.stats.accuracyVal, desc: t.about.stats.accuracy },
    { icon: <Database className="w-5 h-5" />, color: 'text-crtGreen', borderColor: 'border-crtGreen/20', heading: t.about.stats.reconciledVal, desc: t.about.stats.reconciled },
    { icon: <GraduationCap className="w-5 h-5" />, color: 'text-secondaryText', borderColor: 'border-borderNavy', heading: t.about.stats.erpVal, desc: t.about.stats.erp },
  ];

  return (
    <section id="about" className="py-24 md:py-32 section-panel relative overflow-hidden">
      {/* Large section index number */}
      <div
        aria-hidden="true"
        className="section-index absolute -top-6 -left-4 select-none pointer-events-none"
      >
        01
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section label row */}
        <div className="flex items-center gap-4 mb-16">
          <span className="mono-label text-electricBlue">01</span>
          <span className="w-12 h-px bg-electricBlue" />
          <span className="inline-block px-3 py-1 border border-borderNavy mono-label text-secondaryText">
            {t.about.badge}
          </span>
        </div>

        {/* Editorial heading */}
        <div className="mb-16">
          <h2
            className="font-black text-warmWhite leading-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.04em' }}
          >
            {t.about.title}
          </h2>
          <p className="mt-4 text-secondaryText text-base max-w-xl">{t.about.subtitle}</p>
        </div>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: narrative text + competency pills (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pull quote */}
            <div className="border-l-2 border-electricBlue pl-5 py-1">
              <p className="text-warmWhite text-base sm:text-lg leading-relaxed font-medium">
                {t.about.p1}
              </p>
            </div>

            <p className="text-secondaryText leading-relaxed">{t.about.p2}</p>
            <p className="text-secondaryText leading-relaxed">{t.about.p3}</p>

            {/* Competency pills — terminal style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {competencies.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 p-3.5 border ${item.borderColor} bg-darkNavy/60 editorial-card`}
                  data-cursor="card"
                >
                  <div className={`${item.color} mt-0.5 shrink-0`}>{item.icon}</div>
                  <div>
                    <h4 className="text-xs font-bold text-warmWhite">
                      <span className="text-electricBlue/50 mr-1 font-mono">&gt;</span>
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-secondaryText/70 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stat cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {statCards.map((card, idx) => (
              <div
                key={idx}
                className="editorial-card corner-bracket p-5 flex flex-col gap-3"
                data-cursor="card"
              >
                <div className={`${card.color} ${card.borderColor} w-10 h-10 border flex items-center justify-center`}>
                  {card.icon}
                </div>
                <div>
                  <h4 className={`text-sm font-bold leading-snug ${card.color}`}>
                    {card.heading}
                  </h4>
                  <p className="text-xs text-secondaryText/70 mt-1 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
