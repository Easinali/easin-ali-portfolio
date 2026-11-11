import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { skillsData, SkillCategory } from '../data/skillsData';
import { FileSpreadsheet, BarChart3, Database, Briefcase, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');
  const isBn = language === 'bn';

  const getCategoryIcon = (id: SkillCategory['id']) => {
    switch (id) {
      case 'excel':       return <FileSpreadsheet className="w-4 h-4 text-crtGreen" />;
      case 'reporting':   return <BarChart3 className="w-4 h-4 text-electricBlue" />;
      case 'erp':         return <Database className="w-4 h-4 text-highlightBlue" />;
      case 'productivity':return <Briefcase className="w-4 h-4 text-secondaryText" />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillsData
    : skillsData.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div aria-hidden="true" className="section-index absolute -top-6 -left-4 select-none pointer-events-none">04</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="mono-label text-electricBlue">04</span>
          <span className="w-12 h-px bg-electricBlue" />
          <span className="inline-block px-3 py-1 border border-borderNavy mono-label text-secondaryText">{t.skills.badge}</span>
        </div>

        {/* Editorial heading */}
        <div className="mb-12">
          <h2 className="font-black text-warmWhite leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.04em' }}>
            {t.skills.title}
          </h2>
          <p className="mt-4 text-secondaryText max-w-xl">{t.skills.subtitle}</p>
        </div>

        {/* Category filter — terminal command style */}
        <div className="flex flex-wrap items-center gap-2 mb-12 font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-200 border ${
              activeTab === 'all'
                ? 'bg-electricBlue text-darkNavy border-electricBlue'
                : 'border-borderNavy text-secondaryText hover:border-electricBlue/50 hover:text-warmWhite'
            }`}
          >
            <span className="text-secondaryText/40 mr-1">$</span>
            {t.skills.filterAll}
            <span className="ml-2 text-[10px] opacity-60">({skillsData.reduce((a, c) => a + c.skills.length, 0)})</span>
          </button>

          {skillsData.map((cat) => {
            const label = isBn ? cat.titleBn : cat.title;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-200 border flex items-center gap-1.5 ${
                  activeTab === cat.id
                    ? 'bg-electricBlue text-darkNavy border-electricBlue'
                    : 'border-borderNavy text-secondaryText hover:border-electricBlue/50 hover:text-warmWhite'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills categories — terminal box style */}
        <div className="space-y-8 reveal-stagger">
          {filteredCategories.map((cat) => {
            const name = isBn ? cat.titleBn : cat.title;
            const desc = isBn ? cat.subtitleBn : cat.subtitle;

            return (
              <div key={cat.id} className="editorial-card corner-bracket" data-cursor="card">
                {/* Terminal header bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-borderNavy">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(cat.id)}
                    <span className="font-mono text-xs text-warmWhite tracking-wider uppercase">{name}</span>
                  </div>
                  <span className="mono-label text-secondaryText/40">
                    {cat.skills.length} {isBn ? 'টি দক্ষতা' : 'SKILLS'}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-secondaryText/70 text-xs mb-5 font-mono leading-relaxed">
                    <span className="text-electricBlue">&gt; </span>{desc}
                  </p>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, idx) => {
                      const name = isBn ? skill.nameBn : skill.name;
                      const context = isBn ? skill.contextBn : skill.context;
                      const isCoreSkill = idx < 4;
                      return (
                        <div
                          key={idx}
                          title={context}
                          className={`flex items-center gap-1.5 px-3 py-1.5 border font-mono text-xs transition-all duration-200 ${
                            isCoreSkill
                              ? 'border-electricBlue/40 text-electricBlue/90 hover:border-electricBlue hover:text-electricBlue'
                              : 'border-borderNavy text-secondaryText/60 hover:border-borderNavy/80 hover:text-secondaryText'
                          }`}
                        >
                          <Check className={`w-3 h-3 ${isCoreSkill ? 'text-electricBlue' : 'text-secondaryText/30'}`} />
                          <span>{name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
