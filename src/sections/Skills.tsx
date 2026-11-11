import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { skillsData, SkillCategory } from '../data/skillsData';
import { CardSpotlight } from '../components/CardSpotlight';
import { FileSpreadsheet, BarChart3, Database, Briefcase, Check, Info } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');
  const isBn = language === 'bn';

  const getCategoryIcon = (id: SkillCategory['id']) => {
    switch (id) {
      case 'excel':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case 'reporting':
        return <BarChart3 className="w-5 h-5 text-highlightBlue" />;
      case 'erp':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'productivity':
        return <Briefcase className="w-5 h-5 text-amber-400" />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillsData
    : skillsData.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-electricBlue/10 text-emerald-800 dark:text-highlightBlue border border-emerald-300 dark:border-electricBlue/20 mb-3">
            {t.skills.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-secondaryText">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-emerald-600 dark:bg-electricBlue text-white shadow-md'
                : 'bg-white dark:bg-navyBlue text-slate-600 dark:text-secondaryText hover:text-emerald-700 dark:hover:text-white border border-emerald-200 dark:border-borderNavy shadow-sm'
            }`}
          >
            <span>{t.skills.filterAll}</span>
          </button>

          {skillsData.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === cat.id
                  ? 'bg-emerald-600 dark:bg-electricBlue text-white shadow-md'
                  : 'bg-white dark:bg-navyBlue text-slate-600 dark:text-secondaryText hover:text-emerald-700 dark:hover:text-white border border-emerald-200 dark:border-borderNavy shadow-sm'
              }`}
            >
              {isBn ? cat.titleBn : cat.title}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <CardSpotlight
              key={category.id}
              className="bg-white/95 dark:bg-navyBlue/90 border border-emerald-200 dark:border-borderNavy rounded-2xl p-6 sm:p-7 shadow-sm dark:shadow-card hover:border-emerald-500 dark:hover:border-electricBlue/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-5 border-b border-emerald-100 dark:border-borderNavy/60 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-darkNavy border border-emerald-200 dark:border-borderNavy flex items-center justify-center shrink-0">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {isBn ? category.titleBn : category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-secondaryText/80">
                      {isBn ? category.subtitleBn : category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-emerald-50/60 dark:bg-darkNavy/70 border border-emerald-200/80 dark:border-borderNavy/70 hover:border-emerald-400 dark:hover:border-electricBlue/50 transition-all flex flex-col justify-between group/skill"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-electricBlue shrink-0 group-hover/skill:scale-110 transition-transform" />
                        <span className="text-xs font-bold text-slate-800 dark:text-white group-hover/skill:text-emerald-700 dark:group-hover/skill:text-highlightBlue transition-colors">
                          {isBn ? skill.nameBn : skill.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-secondaryText/70 mt-1 pl-5">
                        {isBn ? skill.contextBn : skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>

        {/* Authenticity Note */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-xl bg-emerald-50/80 dark:bg-navyBlue/40 border border-emerald-200 dark:border-borderNavy/60 text-center flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-secondaryText/70">
          <Info className="w-4 h-4 text-emerald-600 dark:text-highlightBlue shrink-0" />
          <span>{t.skills.note}</span>
        </div>
      </div>
    </section>
  );
};

