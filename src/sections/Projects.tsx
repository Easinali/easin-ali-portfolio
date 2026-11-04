import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { projectsData, ProjectItem } from '../data/projectsData';
import { ProjectModal } from '../components/ProjectModal';
import { Layers, ArrowRight, Wrench, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'workplace' | 'simulation'>('all');

  const isBn = language === 'bn';

  const workplaceCount = projectsData.filter((p) => p.type === 'workplace').length;
  const simulationCount = projectsData.filter((p) => p.type === 'simulation').length;

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-navyBlue/20 border-y border-borderNavy/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-electricBlue/10 text-highlightBlue border border-electricBlue/20 mb-3">
            {t.projects.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="mt-2 text-base text-secondaryText">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Ethical Distinction & Transparency Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-darkNavy/90 border border-borderNavy flex items-start gap-3 text-xs text-secondaryText shadow-sm">
          <AlertCircle className="w-4 h-4 text-highlightBlue shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {t.projects.disclaimer}
          </p>
        </div>

        {/* Type Filter Buttons with Counts */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              filter === 'all'
                ? 'bg-electricBlue text-white shadow-glow'
                : 'bg-navyBlue text-secondaryText hover:text-white border border-borderNavy'
            }`}
          >
            <span>{t.projects.filterAll}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-darkNavy/60">
              {projectsData.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('workplace')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'workplace'
                ? 'bg-electricBlue text-white shadow-glow'
                : 'bg-navyBlue text-secondaryText hover:text-white border border-borderNavy'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-highlightBlue" />
            <span>{t.projects.workplaceBadge}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-darkNavy/60">
              {workplaceCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('simulation')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'simulation'
                ? 'bg-electricBlue text-white shadow-glow'
                : 'bg-navyBlue text-secondaryText hover:text-white border border-borderNavy'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.projects.simulationBadge}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-darkNavy/60">
              {simulationCount}
            </span>
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const title = isBn ? project.titleBn : project.title;
            const category = isBn ? project.categoryBn : project.category;
            const desc = isBn ? project.shortDescriptionBn : project.shortDescription;
            const badge = isBn ? project.badgeTextBn : project.badgeText;

            return (
              <div
                key={project.id}
                className="bg-navyBlue/90 border border-borderNavy hover:border-electricBlue rounded-2xl overflow-hidden shadow-card flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5"
              >
                <div>
                  {/* Screenshot / Graphic Mockup Preview */}
                  <div className="relative aspect-[16/10] bg-darkNavy overflow-hidden border-b border-borderNavy/80">
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
                            ? 'bg-darkNavy/90 text-highlightBlue border border-electricBlue/40'
                            : 'bg-darkNavy/90 text-emerald-400 border border-emerald-500/40'
                        }`}
                      >
                        <Layers className="w-3 h-3" />
                        {badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-highlightBlue uppercase tracking-wider mb-1.5">
                      {category}
                    </p>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-highlightBlue transition-colors line-clamp-2">
                      {title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-secondaryText leading-relaxed line-clamp-3">
                      {desc}
                    </p>

                    {/* Tools badges */}
                    <div className="mt-5 pt-4 border-t border-borderNavy/50">
                      <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Wrench className="w-3 h-3 text-highlightBlue" />
                        {t.projects.toolsUsed}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.slice(0, 4).map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-darkNavy text-[11px] font-medium text-slate-300 border border-borderNavy"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 4 && (
                          <span className="px-2 py-0.5 rounded bg-darkNavy text-[11px] font-medium text-slate-400">
                            +{project.tools.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-darkNavy hover:bg-electricBlue border border-borderNavy hover:border-electricBlue text-white text-xs font-semibold shadow-sm transition-all duration-200 group/btn"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
