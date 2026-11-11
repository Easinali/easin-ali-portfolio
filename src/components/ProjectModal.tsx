import React, { useEffect, useState } from 'react';
import { ProjectItem } from '../data/projectsData';
import { useLanguage } from '../hooks/useLanguage';
import { X, CheckCircle2, AlertCircle, Wrench, Download, FileSpreadsheet, Layers, Target, Compass, Play, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenLivePreview?: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenLivePreview }) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology' | 'results'>('overview');

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
  const category = isBn ? project.categoryLabelBn : project.categoryLabel;
  const badgeText = isBn ? project.badgeTextBn : project.badgeText;
  const details = project.details;

  const downloadSampleTemplate = () => {
    const csvContent = `data:text/csv;charset=utf-8,Project,Category,Status,Tools,Date\n"${title}","${category}","${project.type}","${project.tools.join('; ')}","${new Date().toISOString().split('T')[0]}"\nMetric_1,Value_1,Status,Audited\nOperational Accuracy,100%,Passed,Verified\nVariance,0.00,Clean,Balanced\n`;
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl bg-navyBlue border border-borderNavy shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col editorial-card corner-bracket"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-5 md:p-6 border-b border-borderNavy bg-darkNavy/90">
          <div className="pr-6">
            <div className="flex flex-wrap items-center gap-2 mb-2 font-mono">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold border ${
                  project.type === 'professional'
                    ? 'bg-darkNavy text-crtGreen border-crtGreen/40'
                    : project.type === 'personal'
                    ? 'bg-darkNavy text-highlightBlue border-electricBlue/40'
                    : 'bg-darkNavy text-crtAmber border-crtAmber/40'
                }`}
              >
                <Layers className="w-3 h-3" />
                {badgeText}
              </span>
              <span className="mono-label text-secondaryText/70">{category}</span>
            </div>
            <h2 id="modal-project-title" className="text-xl md:text-2xl font-bold text-warmWhite tracking-tight">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 border border-borderNavy text-secondaryText hover:text-warmWhite hover:border-electricBlue/50 transition-colors focus:outline-none"
            aria-label={t.projects.closeModal}
            data-magnetic
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-borderNavy bg-darkNavy/60 px-5 md:px-6 font-mono text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 border-b-2 tracking-wider uppercase transition-colors ${
              activeTab === 'overview'
                ? 'border-electricBlue text-electricBlue font-bold bg-electricBlue/5'
                : 'border-transparent text-secondaryText/70 hover:text-warmWhite'
            }`}
          >
            {isBn ? 'সংক্ষিপ্ত বিবরণ ও উদ্দেশ্য' : 'Overview & Objectives'}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('methodology')}
            className={`py-3.5 px-4 border-b-2 tracking-wider uppercase transition-colors ${
              activeTab === 'methodology'
                ? 'border-electricBlue text-electricBlue font-bold bg-electricBlue/5'
                : 'border-transparent text-secondaryText/70 hover:text-warmWhite'
            }`}
          >
            {isBn ? 'কাজের পদ্ধতি ও ফিচার' : 'Approach & Key Features'}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('results')}
            className={`py-3.5 px-4 border-b-2 tracking-wider uppercase transition-colors ${
              activeTab === 'results'
                ? 'border-electricBlue text-electricBlue font-bold bg-electricBlue/5'
                : 'border-transparent text-secondaryText/70 hover:text-warmWhite'
            }`}
          >
            {isBn ? 'ফলাফল ও এক্সেল ফর্মুলা' : 'Verified Results & Formulas'}
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 md:p-6 overflow-y-auto space-y-6 text-sm text-secondaryText">
          {/* Project Screenshot / Diagram Banner */}
          <div className="overflow-hidden border border-borderNavy bg-darkNavy max-h-72 relative">
            <img
              src={project.image}
              alt={title}
              className="w-full h-auto max-h-72 object-cover object-top"
            />
            <div className="absolute inset-0 bg-scan-lines opacity-15 pointer-events-none" />
          </div>

          {/* Tools & Technologies Pill Row */}
          <div>
            <h4 className="mono-label text-electricBlue mb-2 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              {t.projects.toolsUsed}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-darkNavy border border-borderNavy font-mono text-xs text-secondaryText/90"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* TAB 1: Overview & Objectives */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {/* Overview */}
              <div className="bg-darkNavy/80 p-5 border border-borderNavy editorial-card">
                <h4 className="mono-label text-warmWhite mb-2">
                  {t.projects.modal.overview}
                </h4>
                <p className="leading-relaxed">
                  {isBn ? details.overviewBn : details.overview}
                </p>
              </div>

              {/* Problem Statement */}
              <div className="bg-darkNavy/90 p-5 border border-crtAmber/30 editorial-card">
                <h4 className="mono-label text-crtAmber mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-crtAmber" />
                  {isBn ? 'সমস্যা ও প্রাতিষ্ঠানিক চ্যালেঞ্জ:' : 'Problem Statement:'}
                </h4>
                <p className="leading-relaxed text-warmWhite/90">
                  {isBn ? details.problemStatementBn : details.problemStatement}
                </p>
              </div>

              {/* Objectives */}
              <div className="bg-darkNavy/80 p-5 border border-borderNavy editorial-card">
                <h4 className="mono-label text-electricBlue mb-3 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-electricBlue" />
                  {isBn ? 'প্রজেক্টের মূল লক্ষ্যমাত্রা:' : 'Project Objectives:'}
                </h4>
                <ul className="space-y-2">
                  {(isBn ? details.objectivesBn : details.objectives).map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-secondaryText/90">
                      <span className="text-electricBlue font-mono font-bold">&gt;</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: Approach & Key Features */}
          {activeTab === 'methodology' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {/* My Approach */}
              <div className="bg-darkNavy/80 p-5 border border-borderNavy editorial-card">
                <h4 className="mono-label text-electricBlue mb-3 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-electricBlue" />
                  {isBn ? 'বাস্তবায়ন পদ্ধতি (My Approach):' : 'My Approach & Methodology:'}
                </h4>
                <ul className="space-y-2.5">
                  {(isBn ? details.approachBn : details.approach).map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="mt-1 w-1.5 h-1.5 bg-electricBlue shrink-0" />
                      <span className="leading-relaxed text-secondaryText/90">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div className="bg-darkNavy/80 p-5 border border-borderNavy editorial-card">
                <h4 className="mono-label text-warmWhite mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-electricBlue" />
                  {isBn ? 'মডেলের মূল বৈশিষ্ট্যসমূহ (Key Features):' : 'Key Model Features:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(isBn ? details.keyFeaturesBn : details.keyFeatures).map((feat, idx) => (
                    <div key={idx} className="p-3 bg-darkNavy border border-borderNavy/70 text-xs text-secondaryText/90 flex items-start gap-2 font-mono">
                      <span className="text-electricBlue font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Results & Formulas */}
          {activeTab === 'results' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {/* Verified Results */}
              <div className="bg-darkNavy/90 p-5 border border-crtGreen/30 editorial-card">
                <h4 className="mono-label text-crtGreen mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-crtGreen" />
                  {isBn ? 'যাচাইকৃত ফলাফল ও ব্যবসায়িক সুফল:' : 'Verified Results & Value Delivered:'}
                </h4>
                <ul className="space-y-2.5">
                  {(isBn ? details.resultsBn : details.results).map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-crtGreen font-bold shrink-0 font-mono">&gt;</span>
                      <span className="leading-relaxed text-warmWhite/90">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Formulas */}
              <div className="bg-darkNavy/80 p-5 border border-borderNavy editorial-card">
                <h4 className="mono-label text-electricBlue mb-3 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  {isBn ? 'ব্যবহৃত প্রধান এক্সেল টেকনিকসমূহ:' : 'Key Excel Functions & Features Employed:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(isBn ? details.excelTechniquesBn : details.excelTechniques).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-darkNavy border border-electricBlue/30 text-xs font-mono text-electricBlue font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 md:p-5 border-t border-borderNavy bg-darkNavy/95 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="mono-label text-secondaryText/60 italic text-center sm:text-left">
            {isBn ? details.downloadableNoteBn : details.downloadableNote}
          </p>

          <div className="flex items-center gap-2.5 w-full sm:w-auto font-mono text-xs">
            {onOpenLivePreview && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenLivePreview(project);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-electricBlue/60 text-electricBlue hover:bg-electricBlue hover:text-darkNavy tracking-wider uppercase font-bold transition-all"
                data-magnetic
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isBn ? 'লাইভ প্রিভিউ ওপেন করুন' : 'Launch Live Preview'}</span>
              </button>
            )}

            <button
              type="button"
              onClick={downloadSampleTemplate}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-electricBlue hover:bg-highlightBlue text-darkNavy font-bold tracking-wider uppercase transition-colors"
              data-magnetic
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.projects.modal.downloadMockup}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 border border-borderNavy hover:border-electricBlue/50 text-secondaryText hover:text-warmWhite tracking-wider uppercase transition-colors"
            >
              {t.projects.closeModal}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
