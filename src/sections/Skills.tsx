import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { skillsData, SkillCategory } from '../data/skillsData';
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
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-electricBlue/10 text-highlightBlue border border-electricBlue/20 mb-3">
            {t.skills.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="mt-2 text-base text-secondaryText">
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
                ? 'bg-electricBlue text-white shadow-glow'
                : 'bg-navyBlue text-secondaryText hover:text-white border border-borderNavy'
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
                  ? 'bg-electricBlue text-white shadow-glow'
                  : 'bg-navyBlue text-secondaryText hover:text-white border border-borderNavy'
              }`}
            >
              {isBn ? cat.titleBn : cat.title}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-navyBlue/90 border border-borderNavy rounded-2xl p-6 sm:p-7 shadow-card hover:border-borderNavy/80 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-5 border-b border-borderNavy/60 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-darkNavy border border-borderNavy flex items-center justify-center shrink-0">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {isBn ? category.titleBn : category.title}
                    </h3>
                    <p className="text-xs text-secondaryText/80">
                      {isBn ? category.subtitleBn : category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-darkNavy/70 border border-borderNavy/70 hover:border-electricBlue/50 transition-colors flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-electricBlue shrink-0" />
                        <span className="text-xs font-bold text-white">
                          {isBn ? skill.nameBn : skill.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-secondaryText/70 mt-1 pl-5">
                        {isBn ? skill.contextBn : skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Note */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-xl bg-navyBlue/40 border border-borderNavy/60 text-center flex items-center justify-center gap-2 text-xs text-secondaryText/70">
          <Info className="w-4 h-4 text-highlightBlue shrink-0" />
          <span>{t.skills.note}</span>
        </div>
      </div>
    </section>
  );
};

