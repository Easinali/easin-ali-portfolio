import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { projectsData, ProjectItem, ProjectCategoryFilter } from '../data/projectsData';
import { ProjectModal } from '../components/ProjectModal';
import { LiveProjectPreviewModal } from '../components/LiveProjectPreviewModal';
import { Layers, ArrowRight, Wrench, ShieldCheck, Sparkles, AlertCircle, Play, FileSpreadsheet, Database, Truck, BarChart3, Compass } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedDetailProject, setSelectedDetailProject] = useState<ProjectItem | null>(null);
  const [selectedPreviewProject, setSelectedPreviewProject] = useState<ProjectItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategoryFilter>('all');

  const isBn = language === 'bn';

  const filterTabs: { id: ProjectCategoryFilter; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: t.projects.categories.all, icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'excel-mis', label: t.projects.categories.excelMis, icon: <FileSpreadsheet className="w-3.5 h-3.5 text-crtGreen" /> },
    { id: 'inventory', label: t.projects.categories.inventory, icon: <Database className="w-3.5 h-3.5 text-electricBlue" /> },
    { id: 'supply-chain', label: t.projects.categories.supplyChain, icon: <Truck className="w-3.5 h-3.5 text-highlightBlue" /> },
    { id: 'data-analysis', label: t.projects.categories.dataAnalysis, icon: <BarChart3 className="w-3.5 h-3.5 text-crtAmber" /> },
  ];

  const filteredProjects = categoryFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categoryFilter === categoryFilter);

  return (
    <section id="projects" className="py-24 md:py-32 section-panel relative overflow-hidden">
      {/* Background section index */}
      <div aria-hidden="true" className="section-index absolute -top-6 -left-4 select-none pointer-events-none">05</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="mono-label text-electricBlue">05</span>
          <span className="w-12 h-px bg-electricBlue" />
          <span className="inline-block px-3 py-1 border border-borderNavy mono-label text-secondaryText">
            {t.projects.badge}
          </span>
        </div>

        {/* Editorial heading */}
        <div className="mb-10">
          <h2
            className="font-black text-warmWhite leading-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.04em' }}
          >
            {t.projects.title}
          </h2>
          <p className="mt-4 text-secondaryText max-w-xl">{t.projects.subtitle}</p>
        </div>

        {/* Ethical Distinction & Transparency Banner */}
        <div className="mb-12 p-4 sm:p-5 border border-borderNavy bg-darkNavy/90 flex items-start gap-3.5 editorial-card corner-bracket">
          <AlertCircle className="w-4 h-4 text-electricBlue shrink-0 mt-0.5" />
          <div className="text-xs text-secondaryText leading-relaxed">
            <span className="mono-label text-electricBlue mr-2">[GOVERNANCE NOTE]</span>
            {t.projects.disclaimer}
          </div>
        </div>

        {/* Interactive Category Filter Pills — Terminal Command Style */}
        <div className="flex flex-wrap items-center gap-2 mb-14 font-mono">
          {filterTabs.map((tab) => {
            const count = tab.id === 'all'
              ? projectsData.length
              : projectsData.filter((p) => p.categoryFilter === tab.id).length;
            const isActive = categoryFilter === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setCategoryFilter(tab.id)}
                className={`px-4 py-2.5 text-xs tracking-wider uppercase transition-all duration-200 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-electricBlue text-darkNavy border-electricBlue font-bold shadow-glow'
                    : 'border-borderNavy text-secondaryText hover:border-electricBlue/50 hover:text-warmWhite bg-darkNavy/50'
                }`}
                data-magnetic
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
                  isActive ? 'bg-darkNavy text-white' : 'bg-borderNavy text-slate-300'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
          {filteredProjects.map((project, idx) => {
            const title = isBn ? project.titleBn : project.title;
            const category = isBn ? project.categoryLabelBn : project.categoryLabel;
            const desc = isBn ? project.shortDescriptionBn : project.shortDescription;
            const badge = isBn ? project.badgeTextBn : project.badgeText;

            return (
              <div
                key={project.id}
                className="editorial-card corner-bracket flex flex-col justify-between group overflow-hidden"
                data-cursor="card"
              >
                <div>
                  {/* Screenshot / Graphic Mockup Preview */}
                  <div className="relative aspect-[16/10] bg-darkNavy overflow-hidden border-b border-borderNavy">
                    <img
                      src={project.image}
                      alt={title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Scanline CRT overlay effect */}
                    <div className="absolute inset-0 bg-scan-lines opacity-20 pointer-events-none" />

                    {/* Floating Pill on Image distinguishing Professional, Personal, and Demonstration */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase backdrop-blur-md border ${
                          project.type === 'professional'
                            ? 'bg-darkNavy/90 text-crtGreen border-crtGreen/40'
                            : project.type === 'personal'
                            ? 'bg-darkNavy/90 text-highlightBlue border-electricBlue/40'
                            : 'bg-darkNavy/90 text-crtAmber border-crtAmber/40'
                        }`}
                      >
                        {project.type === 'professional' ? (
                          <ShieldCheck className="w-3 h-3 text-crtGreen" />
                        ) : project.type === 'personal' ? (
                          <Sparkles className="w-3 h-3 text-highlightBlue" />
                        ) : (
                          <Compass className="w-3 h-3 text-crtAmber" />
                        )}
                        {badge}
                      </span>
                    </div>

                    {/* Corner index number indicator */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-darkNavy/85 border border-borderNavy mono-label text-secondaryText/60">
                      SYS // {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="mono-label text-electricBlue mb-2">
                      {category}
                    </p>
                    <h3 className="text-lg font-bold text-warmWhite tracking-tight leading-snug group-hover:text-electricBlue transition-colors line-clamp-2">
                      {title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-secondaryText leading-relaxed line-clamp-3">
                      {desc}
                    </p>

                    {/* Tools badges */}
                    <div className="mt-5 pt-4 border-t border-borderNavy/50">
                      <p className="mono-label text-secondaryText/50 mb-2 flex items-center gap-1">
                        <Wrench className="w-3 h-3 text-electricBlue" />
                        {t.projects.toolsUsed}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.slice(0, 4).map((tool, toolIdx) => (
                          <span
                            key={toolIdx}
                            className="px-2 py-0.5 border border-borderNavy font-mono text-[10px] text-secondaryText/70 bg-darkNavy/60"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 4 && (
                          <span className="px-2 py-0.5 border border-borderNavy font-mono text-[10px] text-electricBlue/70 bg-darkNavy/60">
                            +{project.tools.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons: View Details & Live Preview */}
                <div className="p-6 pt-0 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedDetailProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 border border-borderNavy hover:border-electricBlue text-warmWhite text-xs font-mono tracking-wider uppercase transition-all duration-200 bg-darkNavy/80 hover:bg-darkNavy"
                    data-magnetic
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ArrowRight className="w-3 h-3 text-electricBlue" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPreviewProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-electricBlue hover:bg-highlightBlue text-darkNavy text-xs font-mono font-bold tracking-wider uppercase shadow-glow transition-all duration-200 group/live"
                    data-magnetic
                  >
                    <Play className="w-3 h-3 fill-current transition-transform group-hover/live:scale-110" />
                    <span>{t.projects.livePreview}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedDetailProject}
        onClose={() => setSelectedDetailProject(null)}
        onOpenLivePreview={(proj) => {
          setSelectedDetailProject(null);
          setSelectedPreviewProject(proj);
        }}
      />

      {/* Interactive Live Preview Modal */}
      <LiveProjectPreviewModal
        project={selectedPreviewProject}
        onClose={() => setSelectedPreviewProject(null)}
      />
    </section>
  );
};
