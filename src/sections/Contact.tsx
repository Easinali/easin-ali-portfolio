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
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div aria-hidden="true" className="section-index absolute -top-6 -left-4 select-none pointer-events-none">08</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="mono-label text-electricBlue">08</span>
          <span className="w-12 h-px bg-electricBlue" />
          <span className="inline-block px-3 py-1 border border-borderNavy mono-label text-secondaryText">{t.contact.badge}</span>
        </div>

        <div className="mb-16">
          <h2 className="font-black text-warmWhite leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.04em' }}>
            {t.contact.title}
          </h2>
          <p className="mt-4 text-secondaryText max-w-xl">{t.contact.subtitle}</p>
        </div>

        {/* Large editorial email address */}
        <div className="mb-16 overflow-hidden">
          <a
            href={`mailto:${profileData.email}`}
            className="block font-black text-warmWhite/15 hover:text-warmWhite/25 transition-colors duration-500 leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
            aria-label={`Email ${profileData.email}`}
            data-magnetic
          >
            {profileData.email}
          </a>
          <div className="w-full h-px bg-borderNavy mt-3" />
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: contact info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h3 className="text-xl font-bold text-warmWhite tracking-tight mb-2">{t.contact.infoTitle}</h3>
              <p className="text-xs sm:text-sm text-secondaryText leading-relaxed">
                {isBn
                  ? 'কর্পোরেট নিয়োগদাতা, এইচআর ম্যানেজার এবং পেশাদার নেটওয়ার্কের সাথে সার্বক্ষণিক যোগাযোগে আনন্দিত।'
                  : 'Open to corporate inquiries, HR recruiters, and professional connections regarding Operations, MIS, and Supply Chain opportunities.'}
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center justify-between p-4 editorial-card group">
                <a href={`mailto:${profileData.email}`} className="flex items-start gap-3 flex-1">
                  <div className="w-9 h-9 border border-electricBlue/30 flex items-center justify-center text-electricBlue shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="mono-label text-secondaryText/50 block">{t.contact.emailLabel}</span>
                    <span className="text-sm font-bold text-warmWhite group-hover:text-electricBlue transition-colors block">{profileData.email}</span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 border border-borderNavy text-secondaryText hover:text-warmWhite hover:border-electricBlue/50 transition-all"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-crtGreen" /> : <Copy className="w-3.5 h-3.5 text-electricBlue" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 p-4 editorial-card">
                <div className="w-9 h-9 border border-crtGreen/20 flex items-center justify-center text-crtGreen shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="mono-label text-secondaryText/50 block">{t.contact.phoneLabel}</span>
                  <span className="text-sm font-bold text-warmWhite block">{profileData.phoneDisplay}</span>
                </div>
              </div>

              {/* LinkedIn */}
              <a href={profileData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 editorial-card group" data-magnetic>
                <div className="w-9 h-9 border border-electricBlue/25 flex items-center justify-center text-electricBlue shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="mono-label text-secondaryText/50 block">{t.contact.linkedinLabel}</span>
                  <span className="text-sm font-bold text-warmWhite group-hover:text-electricBlue transition-colors block">linkedin.com/in/easin-ali</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 p-4 editorial-card">
                <div className="w-9 h-9 border border-borderNavy flex items-center justify-center text-secondaryText shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="mono-label text-secondaryText/50 block">{t.contact.locationLabel}</span>
                  <span className="text-sm font-bold text-warmWhite block">{isBn ? profileData.locationBn : profileData.location}</span>
                  <span className="mono-label text-electricBlue">{isBn ? 'প্যারাগন গ্রুপ • ঢাকা' : 'Paragon Group • Dhaka'}</span>
                </div>
              </div>
            </div>

            {/* Response note */}
            <div className="p-4 border border-borderNavy flex items-center gap-3 mono-label text-secondaryText/50">
              <Clock className="w-4 h-4 text-crtGreen/60 shrink-0" />
              <span>
                {isBn
                  ? 'সাধারণত ২৪ ঘণ্টার মধ্যে ব্যবসায়িক ইমেইলের প্রত্যুত্তর প্রদান করা হয়।'
                  : 'Professional inquiries are typically responded to within 24 business hours.'}
              </span>
            </div>
          </div>

          {/* Right: form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
