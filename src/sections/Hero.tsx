import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profileData';
import { FileDown, ArrowRight, Mail, Linkedin, Sparkles, Building2, HelpCircle, X, Copy, Check, TrendingUp, ShieldCheck, Database, Award } from 'lucide-react';
import { CardSpotlight } from '../components/CardSpotlight';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [photoError, setPhotoError] = useState(false);
  const [showPhotoHelp, setShowPhotoHelp] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const isBn = language === 'bn';

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle Blue Accent Lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-40 bg-gradient-to-tr from-electricBlue/20 via-highlightBlue/15 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Corporate Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navyBlue/90 border border-borderNavy shadow-sm backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <Building2 className="w-3.5 h-3.5 text-highlightBlue" />
              <span className="text-xs font-semibold text-slate-200">
                {t.hero.companyBadge}
              </span>
            </div>

            {/* Greeting & Main Headline */}
            <div className="space-y-2">
              <p className="text-sm md:text-base font-semibold text-highlightBlue tracking-wider uppercase">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {language === 'bn' ? profileData.nameBn : profileData.name}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 tracking-tight">
                {t.hero.role}
              </h2>
              <p className="text-sm sm:text-base text-highlightBlue font-semibold">
                {t.hero.subRole}
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-secondaryText leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.supportingText}
            </p>

            {/* CTAs with Premium Hover & Shimmer Interactions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-electricBlue hover:bg-blue-600 text-white font-semibold text-sm shadow-glow transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 group relative overflow-hidden"
              >
                {/* Subtle Shimmer highlight on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
                />
                <span>{t.hero.exploreProjects}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href={profileData.resumePdfPath}
                download="Easin_Ali_Resume_CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navyBlue hover:bg-slate-800 text-white border border-borderNavy hover:border-electricBlue/60 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-highlightBlue" />
                <span>{t.hero.downloadCv}</span>
              </a>
            </div>

            {/* Direct Connect & Copy Email */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-semibold text-secondaryText/70 uppercase tracking-wider">
                {t.hero.connectPrompt}
              </span>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navyBlue border border-borderNavy text-secondaryText hover:text-white hover:border-electricBlue hover:bg-blue-900/30 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="p-2.5 rounded-xl bg-navyBlue border border-borderNavy text-secondaryText hover:text-white hover:border-electricBlue hover:bg-blue-900/30 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Send Email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* One-Click Copy Email button with tooltip */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                  copiedEmail
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-navyBlue border-borderNavy text-secondaryText hover:text-white hover:border-electricBlue/60'
                }`}
                title={profileData.email}
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-highlightBlue" />}
                <span>{copiedEmail ? t.hero.copiedEmail : profileData.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Professional Round Portrait Frame (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative">
              {/* Subtle ambient backglow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-electricBlue/30 via-highlightBlue/20 to-transparent blur-xl pointer-events-none" />

              <CardSpotlight
                maxTilt={3}
                enableTilt={true}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-electricBlue via-highlightBlue/50 to-navyBlue shadow-[0_0_40px_rgba(59,130,246,0.35)]"
              >
                {/* Inner circular image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-navyBlue border-2 border-darkNavy flex items-center justify-center group">
                  <img
                    src={photoError ? profileData.portraitFallback : profileData.portraitPath}
                    onError={() => setPhotoError(true)}
                    alt="Easin Ali Professional Portrait"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 rounded-full"
                  />
                </div>
              </CardSpotlight>

              {/* Decorative accent spark icon */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-9 h-9 rounded-full bg-darkNavy/90 border border-electricBlue flex items-center justify-center text-highlightBlue shadow-glow z-20">
                <Sparkles className="w-4 h-4" />
              </div>

              {/* Bottom floating badge with verified corporate beacon */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-darkNavy/95 backdrop-blur-md border border-electricBlue/40 shadow-xl flex items-center gap-2.5 z-20 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white">
                  {language === 'bn' ? profileData.nameBn : profileData.name}
                </span>
                <span className="text-secondaryText/40">•</span>
                <span className="text-[11px] text-highlightBlue font-semibold">
                  Paragon Group
                </span>
              </div>
            </div>

            {/* Clickable Hint under portrait */}
            <button
              type="button"
              onClick={() => setShowPhotoHelp(true)}
              className="mt-8 inline-flex items-center gap-1.5 text-xs text-secondaryText/80 hover:text-highlightBlue underline transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5 text-highlightBlue" />
              <span>{t.hero.photoHint}</span>
            </button>
          </div>
        </div>

        {/* Executive Highlights Ribbon */}
        <div className="mt-16 pt-8 border-t border-borderNavy/50 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <CardSpotlight maxTilt={2} className="p-4 rounded-xl bg-navyBlue/50 border border-borderNavy/60 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">
                {isBn ? '১০০% রিকনসিলিয়েশন' : '100% Reconciliation'}
              </p>
              <p className="text-[11px] text-secondaryText/70 mt-0.5">
                {isBn ? 'দৈনিক সেলস ও ডিপোজিট' : 'Sales vs Bank Statement'}
              </p>
            </div>
          </CardSpotlight>

          <CardSpotlight maxTilt={2} className="p-4 rounded-xl bg-navyBlue/50 border border-borderNavy/60 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-electricBlue/10 border border-electricBlue/30 flex items-center justify-center text-highlightBlue shrink-0">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">
                {isBn ? 'ইনভেন্টরি ট্র্যাকিং' : 'Inventory Tracking'}
              </p>
              <p className="text-[11px] text-secondaryText/70 mt-0.5">
                {isBn ? 'ইআরপি ভিত্তিক মাল্টি-ডিপো' : 'ERP Multi-Depot Operations'}
              </p>
            </div>
          </CardSpotlight>

          <CardSpotlight maxTilt={2} className="p-4 rounded-xl bg-navyBlue/50 border border-borderNavy/60 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">
                {isBn ? 'এক্সেল এমআইএস ড্যাশবোর্ড' : 'Excel MIS Dashboards'}
              </p>
              <p className="text-[11px] text-secondaryText/70 mt-0.5">
                {isBn ? 'উচ্চতর পিভট ও ফর্মুলা' : 'Advanced Pivot & XLOOKUP'}
              </p>
            </div>
          </CardSpotlight>

          <CardSpotlight maxTilt={2} className="p-4 rounded-xl bg-navyBlue/50 border border-borderNavy/60 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">
                {isBn ? 'এমবিএ ও পিজিডি (SCM)' : 'MBA & PGD-SCM'}
              </p>
              <p className="text-[11px] text-secondaryText/70 mt-0.5">
                {isBn ? 'সাপ্লাই চেইনে উচ্চশিক্ষা' : 'Advanced Academic Track'}
              </p>
            </div>
          </CardSpotlight>
        </div>
      </div>

      {/* Photo Replacement Instructions Modal */}
      {showPhotoHelp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setShowPhotoHelp(false)}
        >
          <div
            className="w-full max-w-md bg-navyBlue border border-borderNavy rounded-2xl p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPhotoHelp(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-secondaryText hover:text-white hover:bg-slate-800"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3 text-highlightBlue">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-bold text-white text-base">
                {language === 'bn' ? 'নিজের ছবি যুক্ত করার নিয়ম' : 'How to Add Your Photo'}
              </h3>
            </div>

            <div className="text-xs text-secondaryText space-y-3 leading-relaxed">
              <p>
                {language === 'bn'
                  ? 'আপনার প্রকৃত মুখের পরিচয় সম্পূর্ণ সংরক্ষণ করতে আমরা কোনো এআই-জেনারেটেড কাল্পনিক ছবি যুক্ত করিনি।'
                  : 'To preserve your actual facial identity and professional authenticity, we do not substitute your face with synthetic AI people.'}
              </p>
              <div className="p-3 rounded-lg bg-darkNavy border border-borderNavy text-slate-200 font-mono text-[11px]">
                public/images/profile.jpg
              </div>
              <p>
                {language === 'bn'
                  ? 'আপনার প্রফেশনাল পোর্ট্রেট ফটোটির নাম "profile.jpg" দিয়ে উক্ত ফোল্ডারে রাখলেই এটি স্বয়ংক্রিয়ভাবে ওয়েবসাইটে প্রদর্শিত হবে।'
                  : 'Simply save your professional portrait photo as "profile.jpg" into the public/images/ directory. It will immediately show up here automatically!'}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowPhotoHelp(false)}
              className="mt-5 w-full py-2.5 rounded-xl bg-electricBlue hover:bg-blue-600 text-white font-semibold text-xs transition-colors"
            >
              {language === 'bn' ? 'বুঝেছি' : 'Got it'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
