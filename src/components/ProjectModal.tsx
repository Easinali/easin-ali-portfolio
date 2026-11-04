import React, { useEffect } from 'react';
import { ProjectItem } from '../data/projectsData';
import { useLanguage } from '../hooks/useLanguage';
import { X, CheckCircle2, AlertCircle, Wrench, Download, FileSpreadsheet, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isBn = language === 'bn';
  const title = isBn ? project.titleBn : project.title;
  const category = isBn ? project.categoryBn : project.category;
  const badgeText = isBn ? project.badgeTextBn : project.badgeText;
  const details = project.details;

  const downloadSampleTemplate = () => {
    // Generate and download a structured CSV sample representing the project data model
    const csvContent = `data:text/csv;charset=utf-8,Project,Category,Status,Tools,Date\n"${title}","${category}","${project.type}","${project.tools.join('; ')}","${new Date().toISOString().split('T')[0]}"\nMetric_1,Value_1,Status,Audited\nTotal Records,120000,Passed,Verified\nVariance,0.00,Clean,Balanced\n`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${project.id}_sample_schema.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl bg-navyBlue border border-borderNavy rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-5 md:p-6 border-b border-borderNavy/80 bg-darkNavy/60">
          <div className="pr-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  project.type === 'workplace'
                    ? 'bg-blue-500/15 text-highlightBlue border border-blue-500/30'
                    : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                }`}
              >
                <Layers className="w-3 h-3" />
                {badgeText}
              </span>
              <span className="text-xs text-secondaryText/70 font-medium">{category}</span>
            </div>
            <h2 id="modal-project-title" className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-secondaryText hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-electricBlue"
            aria-label={t.projects.closeModal}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 md:p-6 overflow-y-auto space-y-6 text-sm text-secondaryText">
          {/* Project Screenshot / Illustration */}
          <div className="rounded-xl overflow-hidden border border-borderNavy bg-darkNavy/80 shadow-inner max-h-72">
            <img
              src={project.image}
              alt={title}
              className="w-full h-auto max-h-72 object-cover object-top"
            />
          </div>

          {/* Tools & Techniques Pill Row */}
          <div>
            <h4 className="text-xs font-bold text-highlightBlue uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              {t.projects.toolsUsed}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-darkNavy border border-borderNavy text-xs font-medium text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="bg-darkNavy/40 p-4 rounded-xl border border-borderNavy/60">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">
              {t.projects.modal.overview}
            </h4>
            <p className="leading-relaxed">
              {isBn ? details.overviewBn : details.overview}
            </p>
          </div>

          {/* Problem / Objective */}
          <div className="bg-amber-950/20 p-4 rounded-xl border border-amber-500/20">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              {t.projects.modal.problem}
            </h4>
            <p className="leading-relaxed text-amber-100/90">
              {isBn ? details.challengeBn : details.challenge}
            </p>
          </div>

          {/* Methodology */}
          <div>
            <h4 className="text-xs font-bold text-highlightBlue uppercase tracking-wider mb-2.5">
              {t.projects.modal.methodology}
            </h4>
            <ul className="space-y-2">
              {(isBn ? details.methodologyBn : details.methodology).map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-electricBlue shrink-0" />
                  <span className="leading-relaxed text-slate-300">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results & Value */}
          <div className="bg-blue-950/20 p-4 rounded-xl border border-blue-500/20">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {t.projects.modal.results}
            </h4>
            <ul className="space-y-2">
              {(isBn ? details.resultsBn : details.results).map((res, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span className="leading-relaxed text-slate-200">{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Formulas / Excel Techniques */}
          <div>
            <h4 className="text-xs font-bold text-highlightBlue uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              {isBn ? 'ব্যবহৃত প্রধান এক্সেল টেকনিকসমূহ:' : 'Key Excel Functions & Features Employed:'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {(isBn ? details.excelTechniquesBn : details.excelTechniques).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-electricBlue/10 border border-electricBlue/30 text-xs font-mono text-highlightBlue font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 md:p-5 border-t border-borderNavy/80 bg-darkNavy/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-secondaryText/70 italic text-center sm:text-left">
            {isBn ? details.downloadableNoteBn : details.downloadableNote}
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={downloadSampleTemplate}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-electricBlue hover:bg-blue-600 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.projects.modal.downloadMockup}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-borderNavy hover:bg-slate-800 text-secondaryText hover:text-white text-xs font-medium transition-colors"
            >
              {t.projects.closeModal}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

