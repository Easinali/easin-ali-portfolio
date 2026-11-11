import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profileData';
import { CardSpotlight } from '../components/CardSpotlight';
import { FileText, Download, ExternalLink, ShieldCheck, Check, FolderDown } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isBn = language === 'bn';

  return (
    <section id="resume" className="py-20 md:py-28 bg-emerald-50/50 dark:bg-navyBlue/40 border-y border-emerald-200/60 dark:border-borderNavy/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-electricBlue/10 text-emerald-800 dark:text-highlightBlue border border-emerald-300 dark:border-electricBlue/20 mb-3">
            {t.resume.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t.resume.title}
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-secondaryText">
            {t.resume.subtitle}
          </p>
        </div>

        {/* Premium Resume Card */}
        <CardSpotlight maxTilt={2} className="max-w-4xl mx-auto bg-white/95 dark:bg-darkNavy border border-emerald-200 dark:border-borderNavy hover:border-emerald-500 dark:hover:border-electricBlue/60 rounded-3xl p-6 sm:p-10 shadow-sm dark:shadow-2xl relative overflow-hidden transition-all duration-300">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-300/10 dark:bg-electricBlue/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Document Abstract Preview (7 cols) */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-navyBlue border border-emerald-200 dark:border-borderNavy text-xs font-semibold text-emerald-800 dark:text-highlightBlue">
                <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>{t.resume.verifiedBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {language === 'bn' ? profileData.nameBn : profileData.name}
              </h3>

              <p className="text-xs sm:text-sm text-emerald-700 dark:text-highlightBlue font-semibold">
                {language === 'bn' ? profileData.headlineBn : profileData.headline}
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-600 dark:text-secondaryText">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-electricBlue" />
                  <span>{isBn ? 'প্যারাগন গ্রুপে অপারেশনস ও ডাটা ম্যানেজমেন্টের বিশদ বিবরণ' : 'Comprehensive Paragon Group data & operations record'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-electricBlue" />
                  <span>{isBn ? 'মাইক্রোসফট এক্সেলে উচ্চতর দক্ষতা ও এমআইএস রিপোর্টিং ট্রেইল' : 'Detailed Microsoft Excel formula portfolio & MIS capabilities'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-electricBlue" />
                  <span>{isBn ? 'এমবিএ ও সাপ্লাই চেইন ম্যানেজমেন্ট (PGD) উচ্চশিক্ষা' : 'MBA & PGD in Supply Chain Management academic credentials'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={profileData.resumePdfPath}
                  download="Easin_Ali_CV.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-electricBlue dark:hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm shadow-md dark:shadow-glow transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.resume.downloadBtn}</span>
                </a>

                <a
                  href={profileData.resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-navyBlue dark:hover:bg-slate-800 border border-emerald-200 dark:border-borderNavy text-slate-800 dark:text-white font-semibold text-xs sm:text-sm transition-all hover:border-emerald-400 dark:hover:border-electricBlue/50"
                >
                  <ExternalLink className="w-4 h-4 text-emerald-600 dark:text-highlightBlue" />
                  <span>{t.resume.viewBtn}</span>
                </a>
              </div>
            </div>

            {/* Right: Realistic Document Preview Graphic (5 cols) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="w-56 h-72 rounded-2xl bg-emerald-50/80 dark:bg-navyBlue/90 border-2 border-emerald-200 dark:border-borderNavy p-5 shadow-lg relative flex flex-col justify-between group">
                <div className="flex items-center justify-between border-b border-emerald-100 dark:border-borderNavy/60 pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-600 dark:text-highlightBlue" />
                    <span className="text-[11px] font-bold text-slate-800 dark:text-white uppercase tracking-wider">RESUME.PDF</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                </div>

                {/* Abstract Text Lines */}
                <div className="space-y-2 py-2">
                  <div className="h-3 bg-slate-300 dark:bg-slate-700/60 rounded w-3/4" />
                  <div className="h-2 bg-slate-200 dark:bg-slate-700/40 rounded w-full" />
                  <div className="h-2 bg-slate-200 dark:bg-slate-700/40 rounded w-5/6" />
                  <div className="h-2 bg-slate-200 dark:bg-slate-700/40 rounded w-4/6" />
                  <div className="pt-2">
                    <div className="h-2.5 bg-emerald-300 dark:bg-electricBlue/30 rounded w-1/2 mb-1.5" />
                    <div className="h-2 bg-slate-200 dark:bg-slate-700/30 rounded w-full" />
                    <div className="h-2 bg-slate-200 dark:bg-slate-700/30 rounded w-4/5" />
                  </div>
                </div>

                {/* Bottom badge */}
                <div className="pt-2 border-t border-emerald-100 dark:border-borderNavy/60 flex items-center justify-between text-[10px] text-slate-500 dark:text-secondaryText/70">
                  <span>PDF Document</span>
                  <span className="text-emerald-700 dark:text-highlightBlue font-semibold">Print Ready</span>
                </div>
              </div>

              {/* Format info subtitle */}
              <p className="mt-3 text-[11px] text-slate-500 dark:text-secondaryText/60 font-medium">
                {t.resume.fileInfo}
              </p>
            </div>
          </div>

          {/* Replacement instructions box */}
          <div className="mt-8 pt-6 border-t border-emerald-100 dark:border-borderNavy/60 flex items-start gap-3 text-xs text-slate-600 dark:text-secondaryText bg-emerald-50 dark:bg-navyBlue/60 p-4 rounded-xl">
            <FolderDown className="w-4 h-4 text-emerald-600 dark:text-highlightBlue shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                {t.resume.updateGuideTitle}
              </span>
              <p className="leading-relaxed">
                {t.resume.updateGuideText}
              </p>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
};
