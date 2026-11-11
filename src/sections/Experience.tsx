import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { experienceData } from '../data/experienceData';
import { CardSpotlight } from '../components/CardSpotlight';
import { Building2, Calendar, MapPin, CheckCircle2, Monitor, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  const { t, language } = useLanguage();
  const isBn = language === 'bn';

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-electricBlue/10 text-emerald-800 dark:text-highlightBlue border border-emerald-300 dark:border-electricBlue/20 mb-3">
            {t.experience.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t.experience.title}
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-secondaryText">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-emerald-200 dark:border-borderNavy/80 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item) => {
            const role = isBn ? item.roleBn : item.role;
            const company = isBn ? item.companyBn : item.company;
            const dept = isBn ? item.departmentBn : item.department;
            const period = isBn ? item.periodBn : item.period;
            const location = isBn ? item.locationBn : item.location;
            const description = isBn ? item.descriptionBn : item.description;
            const responsibilities = isBn ? item.responsibilitiesBn : item.responsibilities;
            const skills = isBn ? item.skillsGainedBn : item.skillsGained;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-6 w-9 h-9 rounded-xl flex items-center justify-center border shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                    item.isCurrent
                      ? 'bg-emerald-600 dark:bg-electricBlue border-emerald-500 dark:border-highlightBlue text-white shadow-glow'
                      : 'bg-white dark:bg-darkNavy border-emerald-200 dark:border-borderNavy text-slate-600 dark:text-secondaryText'
                  }`}
                >
                  {item.isCurrent ? <Briefcase className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                </div>

                {/* Card Container with Spotlight */}
                <CardSpotlight
                  className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 relative ${
                    item.isCurrent
                      ? 'bg-white/95 dark:bg-navyBlue/90 border-emerald-300 dark:border-electricBlue/40 shadow-sm dark:shadow-card hover:border-emerald-500 dark:hover:border-electricBlue'
                      : 'bg-white/80 dark:bg-navyBlue/60 border-emerald-200/80 dark:border-borderNavy hover:border-emerald-400 dark:hover:border-electricBlue/40'
                  }`}
                >
                  {/* Top Badge & Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-emerald-100 dark:border-borderNavy/60">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                            item.isCurrent
                              ? 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30'
                              : 'bg-slate-100 dark:bg-slate-700/40 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600/30'
                          }`}
                        >
                          {item.isCurrent ? (
                            <>
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                              {t.experience.currentTag}
                            </>
                          ) : (
                            <>
                              <Monitor className="w-3.5 h-3.5" />
                              {t.experience.previousTag}
                            </>
                          )}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-secondaryText/70 font-medium">{dept}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                        {role}
                      </h3>

                      <div className="flex items-center gap-2 text-emerald-600 dark:text-highlightBlue font-semibold text-base mt-1">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>{company}</span>
                      </div>
                    </div>

                    {/* Metadata: Date & Location */}
                    <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs text-slate-500 dark:text-secondaryText">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-darkNavy border border-emerald-200 dark:border-borderNavy text-slate-800 dark:text-slate-200 font-medium shadow-sm">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-highlightBlue" />
                        <span>{period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-slate-500 dark:text-secondaryText/80">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Summary */}
                  <p className="mt-6 text-sm sm:text-base text-slate-700 dark:text-secondaryText leading-relaxed">
                    {description}
                  </p>

                  {/* Responsibilities list */}
                  <div className="mt-6">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                      {item.isCurrent ? t.experience.current.responsibilitiesTitle : t.experience.previous.skillsTitle}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-normal">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-electricBlue shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Competencies Acquired Pills */}
                  <div className="mt-6 pt-5 border-t border-emerald-100 dark:border-borderNavy/50 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-600 dark:text-secondaryText/70 mr-1">
                      {isBn ? 'প্রয়োগকৃত দক্ষতা:' : 'Applied Competencies:'}
                    </span>
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-darkNavy border border-emerald-200 dark:border-borderNavy text-xs font-medium text-emerald-700 dark:text-highlightBlue"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardSpotlight>
              </div>
            );
          })}
        </div>

        {/* Footnote on editability */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 dark:text-secondaryText/60 italic">
            * {t.experience.editableNotice}
          </p>
        </div>
      </div>
    </section>
  );
};
