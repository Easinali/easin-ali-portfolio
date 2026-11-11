import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { educationData } from '../data/educationData';
import { GraduationCap, Calendar, BookOpen, Sparkles, Building } from 'lucide-react';

export const Education: React.FC = () => {
  const { t, language } = useLanguage();
  const isBn = language === 'bn';

  return (
    <section id="education" className="py-24 md:py-32 section-panel relative overflow-hidden">
      <div aria-hidden="true" className="section-index absolute -top-6 -left-4 select-none pointer-events-none">03</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="mono-label text-electricBlue">03</span>
          <span className="w-12 h-px bg-electricBlue" />
          <span className="inline-block px-3 py-1 border border-borderNavy mono-label text-secondaryText">{t.education.badge}</span>
        </div>

        {/* Editorial heading */}
        <div className="mb-16">
          <h2 className="font-black text-warmWhite leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.04em' }}>
            {t.education.title}
          </h2>
          <p className="mt-4 text-secondaryText max-w-xl">{t.education.subtitle}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-stagger">
          {educationData.map((item) => {
            const degree      = isBn ? item.degreeBn      : item.degree;
            const status      = isBn ? item.statusBn      : item.status;
            const institution = isBn ? item.institutionBn : item.institution;
            const session     = isBn ? item.sessionBn     : item.session;
            const field       = isBn ? item.fieldBn       : item.field;
            const description = isBn ? item.descriptionBn : item.description;
            const courses     = isBn ? item.coursesBn     : item.courses;

            return (
              <div
                key={item.id}
                className="editorial-card corner-bracket p-6 sm:p-8 flex flex-col"
                data-cursor="card"
              >
                {/* Top status row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 px-2.5 py-1 border border-electricBlue/30">
                    <Sparkles className="w-3 h-3 text-electricBlue" />
                    <span className="mono-label text-electricBlue">{status}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mono-label text-secondaryText/50">
                    <Calendar className="w-3 h-3 text-electricBlue" />
                    <span>{session}</span>
                  </div>
                </div>

                {/* Degree */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 border border-electricBlue/30 flex items-center justify-center text-electricBlue shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-warmWhite tracking-tight leading-snug">{degree}</h3>
                    <p className="mono-label text-electricBlue mt-1">{field}</p>
                  </div>
                </div>

                {/* Institution */}
                <div className="flex items-center gap-2 px-3.5 py-2 bg-darkNavy border border-borderNavy mb-4">
                  <Building className="w-4 h-4 text-electricBlue shrink-0" />
                  <span className="text-xs text-secondaryText italic">{institution}</span>
                </div>

                {/* Description */}
                <p className="text-secondaryText text-xs sm:text-sm leading-relaxed mb-6 flex-1">{description}</p>

                {/* Key courses */}
                <div className="pt-4 border-t border-borderNavy/50">
                  <h4 className="mono-label text-secondaryText/40 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3" />
                    {isBn ? 'মূল পাঠ্য বিষয়:' : 'KEY MODULES:'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {courses.map((course, idx) => (
                      <span key={idx} className="px-2.5 py-1 border border-borderNavy mono-label text-secondaryText/70 hover:border-electricBlue/40 hover:text-electricBlue/80 transition-colors">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 mono-label text-secondaryText/25 text-center">
          * {isBn ? 'বিশ্ববিদ্যালয়ের তথ্য educationData.ts থেকে আপডেটযোগ্য।' : 'Academic details are customizable in src/data/educationData.ts'}
        </p>
      </div>
    </section>
  );
};
