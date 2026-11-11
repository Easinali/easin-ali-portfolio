import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profileData';
import { Mail, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const isBn = language === 'bn';

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-darkNavy border-t border-borderNavy/60 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-borderNavy/40">

          {/* Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-electricBlue/40 flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-electricBlue">EA</span>
              </div>
              <h3 className="font-bold text-warmWhite tracking-tight">
                {isBn ? profileData.nameBn : profileData.name}
              </h3>
            </div>
            <p className="text-xs text-secondaryText/70 leading-relaxed max-w-xs mono-label">
              {isBn ? profileData.headlineBn : profileData.headline}
            </p>
            <div className="flex items-center gap-2 mono-label text-electricBlue/70">
              <span className="w-1 h-1 rounded-full bg-crtGreen animate-pulse" />
              <span>{isBn ? 'প্যারাগন গ্রুপ • অ্যাসিস্ট্যান্ট অফিসার' : 'Paragon Group • Assistant Officer'}</span>
            </div>
          </div>

          {/* Quick nav */}
          <div className="space-y-3">
            <h4 className="mono-label text-warmWhite/50 mb-3">{isBn ? 'দ্রুত লিঙ্ক' : 'NAVIGATION'}</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: '#about', label: t.nav.about },
                { href: '#experience', label: t.nav.experience },
                { href: '#education', label: t.nav.education },
                { href: '#skills', label: t.nav.skills },
                { href: '#projects', label: t.nav.projects },
                { href: '#contact', label: t.nav.contact },
              ].map(link => (
                <a key={link.href} href={link.href} className="mono-label text-secondaryText/50 hover:text-electricBlue transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="mono-label text-warmWhite/50 mb-3">{isBn ? 'পেশাদার যোগাযোগ' : 'CHANNELS'}</h4>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${profileData.email}`}
                  className="w-9 h-9 border border-borderNavy flex items-center justify-center text-secondaryText hover:text-warmWhite hover:border-electricBlue/50 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-borderNavy flex items-center justify-center text-secondaryText hover:text-warmWhite hover:border-electricBlue/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 mono-label text-secondaryText/40 hover:text-electricBlue transition-colors self-start px-3 py-1.5 border border-borderNavy hover:border-electricBlue/40"
            >
              <span>↑</span>
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between mono-label text-secondaryText/30 gap-3">
          <p>© {currentYear} {isBn ? profileData.nameBn : profileData.name}. {t.footer.copyright}</p>
          <p>{t.footer.techNote}</p>
        </div>
      </div>
    </footer>
  );
};
