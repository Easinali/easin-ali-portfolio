import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { educationData } from '../data/educationData';
import { CardSpotlight } from '../components/CardSpotlight';
import { GraduationCap, Calendar, BookOpen, Sparkles, Building } from 'lucide-react';

export const Education: React.FC = () => {
  const { t, language } = useLanguage();
  const isBn = language === 'bn';

  return (
    <section id="education" className="py-20 md:py-28 bg-emerald-50/50 dark:bg-navyBlue/30 border-y border-emerald-200/60 dark:border-borderNavy/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-electricBlue/10 text-emerald-800 dark:text-highlightBlue border border-emerald-300 dark:border-electricBlue/20 mb-3">
            {t.education.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t.education.title}
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-secondaryText">
            {t.education.subtitle}
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item) => {
            const degree = isBn ? item.degreeBn : item.degree;
            const status = isBn ? item.statusBn : item.status;
            const institution = isBn ? item.institutionBn : item.institution;
            const session = isBn ? item.sessionBn : item.session;
            const field = isBn ? item.fieldBn : item.field;
            const description = isBn ? item.descriptionBn : item.description;
            const courses = isBn ? item.coursesBn : item.courses;

            return (
              <CardSpotlight
                key={item.id}
                className="bg-white/95 dark:bg-navyBlue/90 border border-emerald-200 dark:border-borderNavy hover:border-emerald-500 dark:hover:border-electricBlue/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm dark:shadow-card transition-all duration-300 relative group"
              >
                <div>
                  {/* Top Status & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-electricBlue/15 text-emerald-800 dark:text-highlightBlue border border-emerald-300 dark:border-electricBlue/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      {status}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-secondaryText/80">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-highlightBlue" />
                      <span>{session}</span>
                    </div>
                  </div>

                  {/* Degree Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-electricBlue/10 border border-emerald-300 dark:border-electricBlue/30 flex items-center justify-center text-emerald-700 dark:text-highlightBlue shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-electricBlue transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                        {degree}
                      </h3>
                      <p className="text-xs text-emerald-600 dark:text-highlightBlue font-medium mt-0.5">
                        {field}
                      </p>
                    </div>
                  </div>

                  {/* Institution Placeholder */}
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-emerald-50/80 dark:bg-darkNavy/80 px-3.5 py-2 rounded-lg border border-emerald-200 dark:border-borderNavy mb-4">
                    <Building className="w-4 h-4 text-emerald-600 dark:text-highlightBlue shrink-0" />
                    <span className="italic">{institution}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-secondaryText leading-relaxed mb-6">
                    {description}
                  </p>
                </div>

                {/* Key Focus Areas */}
                <div className="pt-4 border-t border-emerald-100 dark:border-borderNavy/60">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-highlightBlue" />
                    {isBn ? 'মূল পাঠ্য বিষয়সমূহ:' : 'Key Subject Modules:'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-darkNavy text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-emerald-200 dark:border-borderNavy hover:border-emerald-400 dark:hover:border-electricBlue/40 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </CardSpotlight>
            );
          })}
        </div>

        {/* Institution Placeholder Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 dark:text-secondaryText/60 italic">
            {isBn
              ? '* বিশ্ববিদ্যালয়ের নাম ও শিক্ষাবর্ষের তথ্য সহজেই src/data/educationData.ts ফাইল থেকে আপডেট করা সম্ভব।'
              : '* Academic institutions and session dates are customizable placeholders in src/data/educationData.ts.'}
          </p>
        </div>
      </div>
    </section>
  );
};

