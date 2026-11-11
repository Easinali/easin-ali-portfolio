import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { experienceData } from '../data/experienceData';
import { Building2, Calendar, MapPin, CheckCircle2, Monitor, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  const { t, language } = useLanguage();
  const isBn = language === 'bn';

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background index number */}
      <div aria-hidden="true" className="section-index absolute -top-6 -left-4 select-none pointer-events-none">02</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="mono-label text-electricBlue">02</span>
          <span className="w-12 h-px bg-electricBlue" />
          <span className="inline-block px-3 py-1 border border-borderNavy mono-label text-secondaryText">
            {t.experience.badge}
          </span>
        </div>

        {/* Editorial heading */}
        <div className="mb-16">
          <h2 className="font-black text-warmWhite leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.04em' }}>
            {t.experience.title}
          </h2>
          <p className="mt-4 text-secondaryText max-w-xl">{t.experience.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {experienceData.map((item, itemIdx) => {
            const role         = isBn ? item.roleBn         : item.role;
            const company      = isBn ? item.companyBn      : item.company;
            const dept         = isBn ? item.departmentBn   : item.department;
            const period       = isBn ? item.periodBn       : item.period;
            const location     = isBn ? item.locationBn     : item.location;
            const description  = isBn ? item.descriptionBn  : item.description;
            const responsibilities = isBn ? item.responsibilitiesBn : item.responsibilities;
            const skills       = isBn ? item.skillsGainedBn : item.skillsGained;

            return (
              <div key={item.id} className="reveal-stagger grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">

                {/* Left: oversized year/period in mono (3 cols) */}
                <div className="md:col-span-3 md:text-right flex md:flex-col items-start md:items-end gap-3 pt-2">
                  <div className="hidden md:block">
                    <span
                      className="font-mono font-bold text-secondaryText/20 leading-none select-none"
                      style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.04em' }}
                    >
                      {String(itemIdx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <div className="flex items-center gap-1.5 mono-label text-secondaryText/70">
                      <Calendar className="w-3 h-3 text-electricBlue" />
                      <span>{period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mono-label text-secondaryText/50">
                      <MapPin className="w-3 h-3" />
                      <span>{location}</span>
                    </div>
                    <span className={`mt-1 px-2 py-0.5 text-[10px] font-mono border ${
                      item.isCurrent
                        ? 'border-crtGreen/40 text-crtGreen/80'
                        : 'border-borderNavy text-secondaryText/50'
                    }`}>
                      {item.isCurrent ? (
                        <span className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-crtGreen animate-pulse" />
                          {t.experience.currentTag}
                        </span>
                      ) : (
                        <span>{t.experience.previousTag}</span>
                      )}
                    </span>
                  </div>
                </div>

                {/* Vertical connector line */}
                <div className="hidden md:flex md:col-span-1 flex-col items-center pt-2">
                  <div className={`w-px flex-1 ${item.isCurrent ? 'bg-electricBlue/40' : 'bg-borderNavy'}`} />
                  <div className={`w-3 h-3 border flex items-center justify-center shrink-0 my-2 ${
                    item.isCurrent ? 'border-electricBlue bg-electricBlue/20' : 'border-borderNavy'
                  }`}>
                    {item.isCurrent ? <Briefcase className="w-1.5 h-1.5 text-electricBlue" /> : <Monitor className="w-1.5 h-1.5 text-secondaryText/50" />}
                  </div>
                  <div className="w-px flex-1 bg-borderNavy" />
                </div>

                {/* Right: card content (8 cols) */}
                <div className="md:col-span-8">
                  <div
                    className={`editorial-card corner-bracket p-6 sm:p-8 ${item.isCurrent ? 'border-electricBlue/30' : ''}`}
                    data-cursor="card"
                  >
                    {/* Header */}
                    <div className="pb-5 border-b border-borderNavy/50 mb-6">
                      <p className="mono-label text-secondaryText/50 mb-2">{dept}</p>
                      <h3 className="text-xl sm:text-2xl font-bold text-warmWhite tracking-tight">{role}</h3>
                      <div className="flex items-center gap-2 mt-2 text-electricBlue font-semibold text-sm">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>{company}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-secondaryText text-sm leading-relaxed mb-6">{description}</p>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="mono-label text-secondaryText/50 mb-4">
                        {item.isCurrent ? t.experience.current.responsibilitiesTitle : t.experience.previous.skillsTitle}
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-secondaryText/80 leading-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-electricBlue shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills pills */}
                    <div className="mt-6 pt-5 border-t border-borderNavy/50 flex flex-wrap gap-2">
                      <span className="mono-label text-secondaryText/40 mr-1">
                        {isBn ? 'প্রয়োগকৃত দক্ষতা:' : 'COMPETENCIES:'}
                      </span>
                      {skills.map((skill, idx) => (
                        <span key={idx} className="px-2.5 py-1 border border-borderNavy mono-label text-electricBlue/70 hover:border-electricBlue/50 hover:text-electricBlue transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-16 mono-label text-secondaryText/30 text-center">
          * {t.experience.editableNotice}
        </p>
      </div>
    </section>
  );
};
