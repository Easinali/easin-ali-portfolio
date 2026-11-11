import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { projectsData, ProjectItem, ProjectCategoryFilter } from '../data/projectsData';
import { ProjectModal } from '../components/ProjectModal';
import { LiveProjectPreviewModal } from '../components/LiveProjectPreviewModal';
import { CardSpotlight } from '../components/CardSpotlight';
import { Layers, ArrowRight, Wrench, ShieldCheck, Sparkles, AlertCircle, Play, FileSpreadsheet, Database, Truck, BarChart3 } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedDetailProject, setSelectedDetailProject] = useState<ProjectItem | null>(null);
  const [selectedPreviewProject, setSelectedPreviewProject] = useState<ProjectItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategoryFilter>('all');

  const isBn = language === 'bn';

  const filterTabs: { id: ProjectCategoryFilter; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: t.projects.categories.all, icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'excel-mis', label: t.projects.categories.excelMis, icon: <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" /> },
    { id: 'inventory', label: t.projects.categories.inventory, icon: <Database className="w-3.5 h-3.5 text-blue-400" /> },
    { id: 'supply-chain', label: t.projects.categories.supplyChain, icon: <Truck className="w-3.5 h-3.5 text-emerald-400" /> },
    { id: 'data-analysis', label: t.projects.categories.dataAnalysis, icon: <BarChart3 className="w-3.5 h-3.5 text-highlightBlue" /> },
  ];

  const filteredProjects = categoryFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categoryFilter === categoryFilter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-emerald-50/50 dark:bg-navyBlue/20 border-y border-emerald-200/60 dark:border-borderNavy/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-electricBlue/10 text-emerald-800 dark:text-highlightBlue border border-emerald-300 dark:border-electricBlue/20 mb-3 shadow-sm">
            {t.projects.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-secondaryText">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Ethical Distinction & Transparency Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-white/90 dark:bg-darkNavy/90 border border-emerald-200 dark:border-borderNavy flex items-start gap-3 text-xs text-slate-600 dark:text-secondaryText shadow-sm">
          <AlertCircle className="w-4 h-4 text-emerald-600 dark:text-highlightBlue shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {t.projects.disclaimer}
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const count = tab.id === 'all'
              ? projectsData.length
              : projectsData.filter((p) => p.categoryFilter === tab.id).length;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setCategoryFilter(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                  categoryFilter === tab.id
                    ? 'bg-emerald-600 dark:bg-electricBlue text-white shadow-md border border-emerald-500 dark:border-highlightBlue/40'
                    : 'bg-white dark:bg-navyBlue text-slate-600 dark:text-secondaryText hover:text-emerald-700 dark:hover:text-white border border-emerald-200 dark:border-borderNavy hover:border-emerald-400 dark:hover:border-electricBlue/50 shadow-sm'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${categoryFilter === tab.id ? 'bg-emerald-800 dark:bg-darkNavy text-white' : 'bg-emerald-100 dark:bg-darkNavy/70 text-emerald-800 dark:text-slate-300'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid with 3D Tilt and Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const title = isBn ? project.titleBn : project.title;
            const category = isBn ? project.categoryLabelBn : project.categoryLabel;
            const desc = isBn ? project.shortDescriptionBn : project.shortDescription;
            const badge = isBn ? project.badgeTextBn : project.badgeText;

            return (
              <CardSpotlight
                key={project.id}
                enableTilt={true}
                maxTilt={4}
                className="bg-white/95 dark:bg-navyBlue/90 border border-emerald-200 dark:border-borderNavy rounded-2xl overflow-hidden shadow-sm dark:shadow-card flex flex-col justify-between group hover:border-emerald-500 dark:hover:border-electricBlue/60 transition-all duration-300"
              >
                <div>
                  {/* Screenshot / Graphic Mockup Preview */}
                  <div className="relative aspect-[16/10] bg-emerald-100/50 dark:bg-darkNavy overflow-hidden border-b border-emerald-200/60 dark:border-borderNavy/80">
                    <img
                      src={project.image}
                      alt={title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Floating Pill on Image */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold backdrop-blur-md shadow-md ${
                          project.type === 'workplace'
                            ? 'bg-slate-900/90 dark:bg-darkNavy/90 text-sky-400 dark:text-highlightBlue border border-sky-400/40 dark:border-electricBlue/40'
                            : 'bg-emerald-950/90 dark:bg-darkNavy/90 text-emerald-300 dark:text-emerald-400 border border-emerald-500/40'
                        }`}
                      >
                        {project.type === 'workplace' ? (
                          <ShieldCheck className="w-3 h-3 text-sky-400 dark:text-highlightBlue" />
                        ) : (
                          <Sparkles className="w-3 h-3 text-emerald-400" />
                        )}
                        {badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-emerald-600 dark:text-highlightBlue uppercase tracking-wider mb-1.5">
                      {category}
                    </p>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-emerald-700 dark:group-hover:text-highlightBlue transition-colors line-clamp-2">
                      {title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-secondaryText leading-relaxed line-clamp-3">
                      {desc}
                    </p>

                    {/* Tools badges */}
                    <div className="mt-5 pt-4 border-t border-emerald-100 dark:border-borderNavy/50">
                      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Wrench className="w-3 h-3 text-emerald-600 dark:text-highlightBlue" />
                        {t.projects.toolsUsed}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.slice(0, 4).map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-darkNavy text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-emerald-200 dark:border-borderNavy"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 4 && (
                          <span className="px-2 py-0.5 rounded bg-emerald-100/70 dark:bg-darkNavy text-[11px] font-medium text-emerald-800 dark:text-slate-400">
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
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-darkNavy dark:hover:bg-slate-800 border border-emerald-200 dark:border-borderNavy hover:border-emerald-400 dark:hover:border-electricBlue text-slate-800 dark:text-white text-xs font-semibold transition-all duration-200"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ArrowRight className="w-3 h-3 text-emerald-600 dark:text-highlightBlue" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPreviewProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-electricBlue dark:hover:bg-blue-600 text-white text-xs font-semibold shadow-md dark:shadow-glow transition-all duration-200 group/live"
                  >
                    <Play className="w-3 h-3 fill-current transition-transform group-hover/live:scale-110" />
                    <span>{t.projects.livePreview}</span>
                  </button>
                </div>
              </CardSpotlight>
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
