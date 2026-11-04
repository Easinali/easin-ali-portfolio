import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { certificationsData } from '../data/certificationsData';
import { CheckCircle, FileSpreadsheet, Database, Truck, Briefcase } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { t, language } = useLanguage();
  const isBn = language === 'bn';

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'excel':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case 'erp':
        return <Database className="w-5 h-5 text-highlightBlue" />;
      case 'scm':
        return <Truck className="w-5 h-5 text-blue-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-electricBlue/10 text-highlightBlue border border-electricBlue/20 mb-3">
            {t.certifications.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.certifications.title}
          </h2>
          <p className="mt-2 text-base text-secondaryText">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((item) => {
            const title = isBn ? item.titleBn : item.title;
            const provider = isBn ? item.providerBn : item.provider;
            const period = isBn ? item.periodBn : item.period;
            const status = isBn ? item.statusBn : item.status;
            const desc = isBn ? item.descriptionBn : item.description;
            const skills = isBn ? item.skillsLearnedBn : item.skillsLearned;

            return (
              <div
                key={item.id}
                className="bg-navyBlue/90 border border-borderNavy hover:border-borderNavy/80 rounded-2xl p-6 sm:p-7 shadow-card flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-darkNavy border border-borderNavy flex items-center justify-center shrink-0">
                      {getIcon(item.category)}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-secondaryText/80">
                    <span className="font-medium text-highlightBlue">{provider}</span>
                    <span>•</span>
                    <span>{period}</span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-secondaryText leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* Key Skills Learnt */}
                <div className="mt-6 pt-4 border-t border-borderNavy/50">
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-darkNavy text-[11px] font-medium text-slate-300 border border-borderNavy"
                      >
                        <CheckCircle className="w-3 h-3 text-electricBlue" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editable note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-secondaryText/60 italic">
            * {t.certifications.editableNotice}
          </p>
        </div>
      </div>
    </section>
  );
};
