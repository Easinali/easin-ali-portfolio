import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profileData';
import { Download, ExternalLink, ShieldCheck, Check, FolderDown } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isBn = language === 'bn';

  return (
    <section id="resume" className="py-24 md:py-32 section-panel relative overflow-hidden">
      <div aria-hidden="true" className="section-index absolute -top-6 -left-4 select-none pointer-events-none">07</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="mono-label text-electricBlue">07</span>
          <span className="w-12 h-px bg-electricBlue" />
          <span className="inline-block px-3 py-1 border border-borderNavy mono-label text-secondaryText">{t.resume.badge}</span>
        </div>

        <div className="mb-16">
          <h2 className="font-black text-warmWhite leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.04em' }}>
            {t.resume.title}
          </h2>
          <p className="mt-4 text-secondaryText max-w-xl">{t.resume.subtitle}</p>
        </div>

        {/* Resume card */}
        <div className="max-w-4xl mx-auto editorial-card corner-bracket p-6 sm:p-10 relative overflow-hidden" data-cursor="card">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-10"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)' }} />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: info (7 cols) */}
            <div className="md:col-span-7 space-y-5">
              <div className="flex items-center gap-2 px-3 py-1.5 border border-crtGreen/30 w-fit">
                <ShieldCheck className="w-4 h-4 text-crtGreen" />
                <span className="mono-label text-crtGreen/80">{t.resume.verifiedBadge}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-warmWhite tracking-tight">
                  {language === 'bn' ? profileData.nameBn : profileData.name}
                </h3>
                <p className="mono-label text-electricBlue mt-1">
                  {language === 'bn' ? profileData.headlineBn : profileData.headline}
                </p>
              </div>

              <div className="space-y-2 text-xs text-secondaryText">
                {[
                  isBn ? 'প্যারাগন গ্রুপে অপারেশনস ও ডাটা ম্যানেজমেন্টের বিশদ বিবরণ' : 'Comprehensive Paragon Group data & operations record',
                  isBn ? 'মাইক্রোসফট এক্সেলে উচ্চতর দক্ষতা ও এমআইএস রিপোর্টিং' : 'Detailed Microsoft Excel formula portfolio & MIS capabilities',
                  isBn ? 'এমবিএ ও সাপ্লাই চেইন ম্যানেজমেন্ট (PGD) উচ্চশিক্ষা' : 'MBA & PGD in Supply Chain Management academic credentials',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-electricBlue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-3 pt-2">
                <a
                  href={profileData.resumePdfPath}
                  download="Easin_Ali_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-electricBlue text-darkNavy font-mono text-xs tracking-widest uppercase hover:bg-highlightBlue transition-colors"
                  data-magnetic
                >
                  <Download className="w-4 h-4" />
                  <span>{t.resume.downloadBtn}</span>
                </a>

                <a
                  href={profileData.resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-borderNavy text-secondaryText font-mono text-xs tracking-widest uppercase hover:border-electricBlue/50 hover:text-warmWhite transition-all"
                  data-magnetic
                >
                  <ExternalLink className="w-4 h-4 text-electricBlue" />
                  <span>{t.resume.viewBtn}</span>
                </a>
              </div>
            </div>

            {/* Right: document graphic (5 cols) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="w-48 h-64 border border-borderNavy bg-navyBlue relative flex flex-col">
                {/* Faux terminal top bar */}
                <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-borderNavy">
                  <span className="w-2 h-2 rounded-full bg-red-500/60" />
                  <span className="w-2 h-2 rounded-full bg-crtAmber/60" />
                  <span className="w-2 h-2 rounded-full bg-crtGreen/60" />
                  <span className="ml-auto mono-label text-secondaryText/40">RESUME.PDF</span>
                </div>

                {/* Simulated text lines */}
                <div className="flex-1 p-4 space-y-2.5">
                  <div className="h-3 bg-warmWhite/10 rounded w-3/4" />
                  <div className="h-2 bg-warmWhite/06 rounded w-full" />
                  <div className="h-2 bg-warmWhite/06 rounded w-5/6" />
                  <div className="h-2 bg-warmWhite/06 rounded w-4/6" />
                  <div className="h-px bg-borderNavy my-3" />
                  <div className="h-2.5 bg-electricBlue/25 rounded w-1/2" />
                  <div className="h-2 bg-warmWhite/06 rounded w-full" />
                  <div className="h-2 bg-warmWhite/06 rounded w-4/5" />
                  <div className="h-2 bg-warmWhite/06 rounded w-3/5" />
                </div>

                <div className="px-3 py-2 border-t border-borderNavy flex items-center justify-between">
                  <span className="mono-label text-secondaryText/40">PDF</span>
                  <span className="mono-label text-crtGreen/60">READY</span>
                </div>
              </div>

              <p className="mt-3 mono-label text-secondaryText/30">{t.resume.fileInfo}</p>
            </div>
          </div>

          {/* Update guide */}
          <div className="mt-8 pt-6 border-t border-borderNavy/60 flex items-start gap-3 text-xs text-secondaryText">
            <FolderDown className="w-4 h-4 text-electricBlue shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-warmWhite block mb-0.5">{t.resume.updateGuideTitle}</span>
              <p className="leading-relaxed">{t.resume.updateGuideText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
