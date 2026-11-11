import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profileData';
import { ArrowUp, ShieldCheck, Mail, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darkNavy border-t border-borderNavy/70 pt-12 pb-8 text-secondaryText">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-borderNavy/50">
          {/* Identity & Mission */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {language === 'bn' ? profileData.nameBn : profileData.name}
            </h3>
            <p className="text-xs text-secondaryText/80 leading-relaxed max-w-sm">
              {language === 'bn' ? profileData.headlineBn : profileData.headline}
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-highlightBlue">
              <ShieldCheck className="w-4 h-4" />
              <span>{language === 'bn' ? 'প্যারাগন গ্রুপ • অ্যাসিস্ট্যান্ট অফিসার' : 'Paragon Group • Assistant Officer'}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'bn' ? 'দ্রুত লিঙ্কসমূহ' : 'Quick Navigation'}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-highlightBlue transition-colors">{t.nav.about}</a>
              <a href="#experience" className="hover:text-highlightBlue transition-colors">{t.nav.experience}</a>
              <a href="#education" className="hover:text-highlightBlue transition-colors">{t.nav.education}</a>
              <a href="#skills" className="hover:text-highlightBlue transition-colors">{t.nav.skills}</a>
              <a href="#projects" className="hover:text-highlightBlue transition-colors">{t.nav.projects}</a>
              <a href="#contact" className="hover:text-highlightBlue transition-colors">{t.nav.contact}</a>
            </div>
          </div>

          {/* Connect & Back to top */}
          <div className="space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                {language === 'bn' ? 'পেশাদার যোগাযোগ' : 'Professional Channels'}
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${profileData.email}`}
                  className="w-9 h-9 rounded-lg bg-navyBlue border border-borderNavy flex items-center justify-center text-secondaryText hover:text-white hover:border-electricBlue transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-navyBlue border border-borderNavy flex items-center justify-center text-secondaryText hover:text-white hover:border-electricBlue transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-secondaryText hover:text-highlightBlue transition-colors self-start"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-secondaryText/60 gap-3">
          <p>© {currentYear} {language === 'bn' ? profileData.nameBn : profileData.name}. {t.footer.copyright}</p>
          <p className="flex items-center gap-1">
            <span>{t.footer.techNote}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
