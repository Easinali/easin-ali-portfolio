import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profileData';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, FileDown, Layers } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'certifications', 'resume', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { href: '#home', id: 'home', label: t.nav.home },
    { href: '#about', id: 'about', label: t.nav.about },
    { href: '#experience', id: 'experience', label: t.nav.experience },
    { href: '#education', id: 'education', label: t.nav.education },
    { href: '#skills', id: 'skills', label: t.nav.skills },
    { href: '#projects', id: 'projects', label: t.nav.projects },
    { href: '#certifications', id: 'certifications', label: t.nav.certifications },
    { href: '#resume', id: 'resume', label: t.nav.resume },
    { href: '#contact', id: 'contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-2.5 shadow-lg shadow-black/30'
          : 'bg-darkNavy/85 backdrop-blur-md py-3.5 border-b border-borderNavy/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-electricBlue rounded-xl p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-electricBlue/15 border border-electricBlue/40 flex items-center justify-center text-highlightBlue group-hover:bg-electricBlue group-hover:text-white transition-all duration-300 shadow-sm">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg text-white tracking-tight group-hover:text-highlightBlue transition-colors block leading-tight">
                {language === 'bn' ? profileData.nameBn : profileData.name}
              </span>
              <span className="text-[10px] text-highlightBlue font-semibold tracking-wider uppercase block">
                {language === 'bn' ? 'অপারেশনস ও ডাটা' : 'Operations & MIS'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items with Active Scrollspy & Animated Underlines */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs lg:text-[13px] font-semibold rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-electricBlue/15 text-highlightBlue border border-electricBlue/30 shadow-sm'
                      : 'text-secondaryText hover:text-white hover:bg-slate-800/40 border border-transparent'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {/* Animated Underline */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-electricBlue to-highlightBlue rounded-full transition-all duration-300 origin-left ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-80'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Lang Switcher & CV Button */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />

            <a
              href={profileData.resumePdfPath}
              download="Easin_Ali_CV.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-electricBlue hover:bg-blue-600 text-white shadow-sm hover:shadow-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electricBlue focus:ring-offset-2 focus:ring-offset-darkNavy"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>{t.nav.downloadCv}</span>
            </a>
          </div>

          {/* Mobile Actions: Language & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-secondaryText hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-electricBlue transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-borderNavy bg-navyBlue/95 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-electricBlue/20 text-highlightBlue border border-electricBlue/30'
                      : 'text-secondaryText hover:text-white hover:bg-slate-800/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-borderNavy/60 flex flex-col gap-3">
            <a
              href={profileData.resumePdfPath}
              download="Easin_Ali_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-electricBlue hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-glow"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.nav.downloadCv}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
