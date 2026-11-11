import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profileData';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, Linkedin, MapPin, Clock, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const isBn = language === 'bn';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-electricBlue/10 text-emerald-800 dark:text-highlightBlue border border-emerald-300 dark:border-electricBlue/20 mb-3">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-secondaryText">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Grid: Left Information Cards & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                {t.contact.infoTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-secondaryText leading-relaxed">
                {isBn
                  ? 'কর্পোরেট নিয়োগদাতা, এইচআর ম্যানেজার এবং সাপ্লাই চেইন ও অপারেশনাল প্রফেশনালদের সাথে সার্বক্ষণিক পেশাদার যোগাযোগে আনন্দিত।'
                  : 'Open to corporate inquiries, HR recruiters, and professional connections regarding Operations, MIS, and Supply Chain opportunities.'}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card with Copy Action */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/95 dark:bg-navyBlue/70 border border-emerald-200 dark:border-borderNavy hover:border-emerald-500 dark:hover:border-electricBlue shadow-sm transition-all group">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-start gap-4 flex-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-electricBlue/10 border border-emerald-300 dark:border-electricBlue/30 flex items-center justify-center text-emerald-700 dark:text-highlightBlue shrink-0 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-electricBlue transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-secondaryText/70 block">
                      {t.contact.emailLabel}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-highlightBlue transition-colors block">
                      {profileData.email}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-emerald-50 dark:bg-darkNavy border border-emerald-200 dark:border-borderNavy text-slate-600 dark:text-secondaryText hover:text-emerald-800 dark:hover:text-white hover:border-emerald-400 dark:hover:border-electricBlue transition-all text-xs flex items-center gap-1"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-emerald-600 dark:text-highlightBlue" />
                  )}
                  <span className="hidden sm:inline text-[11px]">
                    {copiedEmail ? t.contact.copiedEmail : t.contact.copyEmailBtn}
                  </span>
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/95 dark:bg-navyBlue/70 border border-emerald-200 dark:border-borderNavy shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-secondaryText/70 block">
                    {t.contact.phoneLabel}
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white block">
                    {profileData.phoneDisplay}
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-secondaryText/60 italic">
                   {isBn ? '' : ''}
                  </span>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-white/95 dark:bg-navyBlue/70 border border-emerald-200 dark:border-borderNavy hover:border-emerald-500 dark:hover:border-electricBlue shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-600/10 border border-blue-300 dark:border-blue-600/30 flex items-center justify-center text-blue-700 dark:text-highlightBlue shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-secondaryText/70 block">
                    {t.contact.linkedinLabel}
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-highlightBlue transition-colors block">
                    Linkedin
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-secondaryText/60">
                    {isBn ? 'পেশাদার নেটওয়ার্কে সংযুক্ত হন' : 'Connect on professional network'}
                  </span>
                </div>
              </a>

              {/* Location & Organization Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/95 dark:bg-navyBlue/70 border border-emerald-200 dark:border-borderNavy shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-secondaryText/70 block">
                    {t.contact.locationLabel}
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white block">
                    {isBn ? profileData.locationBn : profileData.location}
                  </span>
                  <span className="text-xs text-emerald-700 dark:text-highlightBlue font-semibold block mt-0.5">
                    {isBn ? 'প্যারাগন গ্রুপ • ঢাকা' : 'Paragon Group • Dhaka'}
                  </span>
                </div>
              </div>
            </div>

            {/* Response Commitment Card */}
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-darkNavy border border-emerald-200 dark:border-borderNavy/70 flex items-center gap-3 text-xs text-slate-700 dark:text-secondaryText">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>
                {isBn
                  ? 'সাধারণত ২৪ ঘণ্টার মধ্যে ব্যবসায়িক ইমেইলের প্রত্যুত্তর প্রদান করা হয়।'
                  : 'Professional inquiries are typically responded to within 24 business hours.'}
              </span>
            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
