import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { certificationsData } from '../data/certificationsData';
import { CheckCircle, FileSpreadsheet, Database, Truck, Briefcase } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { t, language } = useLanguage();
  const isBn = language === 'bn';

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'excel':  return <FileSpreadsheet className="w-5 h-5 text-crtGreen" />;
      case 'erp':    return <Database className="w-5 h-5 text-electricBlue" />;
      case 'scm':    return <Truck className="w-5 h-5 text-highlightBlue" />;
      default:       return <Briefcase className="w-5 h-5 text-secondaryText" />;
    }
  };

  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden">
      <div aria-hidden="true" className="section-index absolute -top-6 -left-4 select-none pointer-events-none">06</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="mono-label text-electricBlue">06</span>
          <span className="w-12 h-px bg-electricBlue" />
          <span className="inline-block px-3 py-1 border border-borderNavy mono-label text-secondaryText">{t.certifications.badge}</span>
        </div>

        <div className="mb-16">
          <h2 className="font-black text-warmWhite leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.04em' }}>
            {t.certifications.title}
          </h2>
          <p className="mt-4 text-secondaryText max-w-xl">{t.certifications.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stagger">
          {certificationsData.map((item) => {
            const title    = isBn ? item.titleBn    : item.title;
            const provider = isBn ? item.providerBn : item.provider;
            const period   = isBn ? item.periodBn   : item.period;
            const status   = isBn ? item.statusBn   : item.status;
            const desc     = isBn ? item.descriptionBn : item.description;
            const skills   = isBn ? item.skillsLearnedBn : item.skillsLearned;

            return (
              <div key={item.id} className="editorial-card corner-bracket p-6 sm:p-7 flex flex-col" data-cursor="card">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-10 h-10 border border-borderNavy flex items-center justify-center shrink-0">
                    {getIcon(item.category)}
                  </div>
                  <span className="px-2.5 py-1 border border-crtGreen/30 mono-label text-crtGreen/80">
                    {status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-warmWhite tracking-tight leading-snug mb-2 hover:text-electricBlue transition-colors">
                  {title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 mono-label">
                  <span className="text-electricBlue">{provider}</span>
                  <span className="text-borderNavy">•</span>
                  <span className="text-secondaryText/50">{period}</span>
                </div>

                <p className="text-xs sm:text-sm text-secondaryText leading-relaxed mb-6 flex-1">{desc}</p>

                {/* Skills */}
                <div className="pt-4 border-t border-borderNavy/50 flex flex-wrap gap-1.5">
                  {skills.map((skill, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-0.5 border border-borderNavy mono-label text-secondaryText/60 hover:border-electricBlue/40 hover:text-electricBlue/70 transition-colors">
                      <CheckCircle className="w-2.5 h-2.5 text-electricBlue/60" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 mono-label text-secondaryText/25 text-center">
          * {t.certifications.editableNotice}
        </p>
      </div>
    </section>
  );
};
