import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profileData';
import { FileDown, ArrowRight, Mail, Linkedin, Sparkles, HelpCircle, X, Copy, Check, TrendingUp, ShieldCheck, Database, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [photoError, setPhotoError] = useState(false);
  const [showPhotoHelp, setShowPhotoHelp] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isBn = language === 'bn';

  useEffect(() => {
    // Trigger entrance animations after mount
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden section-editorial-grid"
      style={{ paddingTop: '100px', paddingBottom: '80px' }}
    >
      {/* Background editorial grid is from CSS utility class */}

      {/* Blue ambient backglow — large, soft */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[180px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* ── Top bar: status badge + section number ── */}
        <div
          className={`flex items-center justify-between mb-12 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="flex items-center gap-3">
            <span className="mono-label text-secondaryText/50">00</span>
            <span className="w-8 h-px bg-borderNavy" />
            <span className="mono-label text-secondaryText/50">INTRODUCTION</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 border border-borderNavy">
            <span className="w-1.5 h-1.5 rounded-full bg-crtGreen animate-blink" />
            <span className="mono-label text-crtGreen/80">{t.hero.companyBadge}</span>
          </div>
        </div>

        {/* ── Main content grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* Left: Text (7 cols) */}
          <div className="lg:col-span-7 space-y-8">

            {/* Greeting */}
            <p
              className={`mono-label text-electricBlue transition-all duration-700 ${
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {t.hero.greeting}
            </p>

            {/* Oversized editorial name */}
            <div
              className={`transition-all duration-900 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <h1
                className="font-black text-warmWhite leading-none tracking-tight"
                style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', letterSpacing: '-0.04em' }}
              >
                {isBn ? profileData.nameBn : profileData.name}
              </h1>
            </div>

            {/* Role headline — editorial blue */}
            <div
              className={`space-y-1 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-electricBlue" />
                <h2 className="text-electricBlue font-mono text-sm sm:text-base font-semibold tracking-wider uppercase">
                  {t.hero.role}
                </h2>
              </div>
              <p className="text-secondaryText text-sm font-medium pl-11">
                {t.hero.subRole}
              </p>
            </div>

            {/* Supporting text */}
            <p
              className={`text-secondaryText text-base leading-relaxed max-w-xl transition-all duration-700 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              {t.hero.supportingText}
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '650ms' }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-electricBlue text-darkNavy font-bold text-sm font-mono tracking-wide uppercase hover:bg-highlightBlue transition-colors duration-200 group relative overflow-hidden"
                data-magnetic
              >
                <span className="relative z-10">{t.hero.exploreProjects}</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profileData.resumePdfPath}
                download="Easin_Ali_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-borderNavy text-warmWhite font-mono text-sm tracking-wide uppercase hover:border-electricBlue/60 hover:text-electricBlue transition-all duration-200 group"
                data-magnetic
              >
                <FileDown className="w-4 h-4" />
                <span>{t.hero.downloadCv}</span>
              </a>
            </div>

            {/* Contact row */}
            <div
              className={`flex flex-wrap items-center gap-3 transition-all duration-700 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '750ms' }}
            >
              <span className="mono-label text-secondaryText/50">{t.hero.connectPrompt}</span>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-borderNavy flex items-center justify-center text-secondaryText hover:text-warmWhite hover:border-electricBlue/60 transition-all duration-200"
                aria-label="LinkedIn"
                data-magnetic
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="w-9 h-9 border border-borderNavy flex items-center justify-center text-secondaryText hover:text-warmWhite hover:border-electricBlue/60 transition-all duration-200"
                aria-label="Email"
                data-magnetic
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 border font-mono text-xs transition-all duration-200 ${
                  copiedEmail
                    ? 'border-crtGreen/40 text-crtGreen/80'
                    : 'border-borderNavy text-secondaryText hover:border-electricBlue/50 hover:text-warmWhite'
                }`}
                title={profileData.email}
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? t.hero.copiedEmail : profileData.email}</span>
              </button>
            </div>
          </div>

          {/* Right: Portrait (5 cols) */}
          <div
            className={`lg:col-span-5 flex flex-col items-center transition-all duration-900 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative portrait-editorial-frame">
              {/* Outer decorative frame */}
              <div className="absolute -inset-3 border border-electricBlue/15" />
              <div className="absolute -inset-6 border border-electricBlue/08" />

              {/* Corner labels (editorial style) */}
              <span className="absolute -top-5 left-0 mono-label text-secondaryText/40">PORTRAIT</span>
              <span className="absolute -bottom-5 right-0 mono-label text-secondaryText/40">2026</span>

              {/* Portrait image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-full">
                {/* Blue glow ring */}
                <div className="absolute inset-0 rounded-full border border-electricBlue/30 z-10 pointer-events-none" />
                <div
                  className="absolute inset-0 rounded-full pointer-events-none z-10"
                  style={{ background: 'linear-gradient(to bottom, rgba(59,130,246,0.1) 0%, transparent 50%)' }}
                />
                <img
                  src={photoError ? profileData.portraitFallback : profileData.portraitPath}
                  onError={() => setPhotoError(true)}
                  alt="Easin Ali Professional Portrait"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>

              {/* Floating name badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-darkNavy/95 border border-electricBlue/30 whitespace-nowrap backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-crtGreen animate-pulse" />
                <span className="font-bold text-warmWhite text-xs">
                  {isBn ? profileData.nameBn : profileData.name}
                </span>
                <span className="text-borderNavy mx-1">|</span>
                <span className="mono-label text-electricBlue">Paragon Group</span>
              </div>

              {/* Top-right sparkle icon */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-darkNavy border border-electricBlue/40 flex items-center justify-center text-electricBlue z-20">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Photo help hint */}
            <button
              type="button"
              onClick={() => setShowPhotoHelp(true)}
              className="mt-10 inline-flex items-center gap-1.5 mono-label text-secondaryText/40 hover:text-electricBlue transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{t.hero.photoHint}</span>
            </button>
          </div>
        </div>

        {/* ── Executive highlights ribbon ── */}
        <div
          className={`mt-20 pt-8 border-t border-borderNavy/50 grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          {[
            { icon: <ShieldCheck className="w-4 h-4" />, color: 'text-crtGreen', title: isBn ? 'সেলস রিকনসিলিয়েশন' : 'Sales Reconciliation', sub: isBn ? 'দৈনিক সেলস ও ব্যাংক অডিট' : 'Daily POS & Bank Audit' },
            { icon: <Database className="w-4 h-4" />,    color: 'text-electricBlue', title: isBn ? 'ইনভেন্টরি ট্র্যাকিং' : 'Inventory Tracking',     sub: isBn ? 'ইআরপি মাল্টি-ডিপো' : 'ERP Multi-Depot Ops' },
            { icon: <TrendingUp className="w-4 h-4" />,  color: 'text-highlightBlue', title: isBn ? 'এমআইএস ড্যাশবোর্ড' : 'Excel MIS Dashboards',   sub: isBn ? 'পিভট ও এক্সলুকআপ' : 'Advanced Pivot & XLOOKUP' },
            { icon: <Award className="w-4 h-4" />,       color: 'text-secondaryText', title: isBn ? 'এমবিএ ও পিজিডি (SCM)' : 'MBA & PGD-SCM',          sub: isBn ? 'সাপ্লাই চেইনে উচ্চশিক্ষা' : 'Advanced Academic Track' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="editorial-card corner-bracket p-4 flex items-center gap-3"
              data-cursor="card"
            >
              <div className={`w-8 h-8 border border-borderNavy flex items-center justify-center ${item.color} shrink-0`}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-warmWhite leading-tight">{item.title}</p>
                <p className="text-[11px] text-secondaryText/60 mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom status bar ── */}
        <div
          className={`mt-12 flex items-center gap-3 transition-all duration-700 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <span className="mono-label text-crtGreen/50">STATUS</span>
          <span className="w-4 h-px bg-borderNavy" />
          <span className="mono-label text-secondaryText/50 cursor-blink">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>
      </div>

      {/* Photo help modal */}
      {showPhotoHelp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setShowPhotoHelp(false)}
        >
          <div
            className="w-full max-w-md bg-navyBlue border border-borderNavy p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPhotoHelp(false)}
              className="absolute top-4 right-4 text-secondaryText hover:text-warmWhite transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-electricBlue" />
              <h3 className="font-bold text-warmWhite">
                {language === 'bn' ? 'নিজের ছবি যুক্ত করার নিয়ম' : 'How to Add Your Photo'}
              </h3>
            </div>
            <p className="text-xs text-secondaryText leading-relaxed mb-3">
              {language === 'bn'
                ? 'আপনার প্রকৃত মুখের পরিচয় সম্পূর্ণ সংরক্ষণ করতে আমরা কোনো এআই-জেনারেটেড ছবি যুক্ত করিনি।'
                : 'To preserve your actual facial identity, we do not substitute your photo with AI-generated imagery.'}
            </p>
            <div className="p-3 bg-darkNavy border border-borderNavy font-mono text-[11px] text-crtGreen/80 mb-3">
              public/images/profile.jpg
            </div>
            <p className="text-xs text-secondaryText leading-relaxed">
              {language === 'bn'
                ? '"profile.jpg" নামে ছবি রাখলে স্বয়ংক্রিয়ভাবে দেখা যাবে।'
                : 'Save your portrait as "profile.jpg" in public/images/ — it will appear automatically.'}
            </p>
            <button
              type="button"
              onClick={() => setShowPhotoHelp(false)}
              className="mt-5 w-full py-2.5 bg-electricBlue hover:bg-highlightBlue text-darkNavy font-mono text-xs tracking-widest uppercase transition-colors"
            >
              {language === 'bn' ? 'বুঝেছি' : 'GOT IT'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
