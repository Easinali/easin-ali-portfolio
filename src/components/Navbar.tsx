import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profileData';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
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
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      {/* ── Radial Floating Capsule / Pill Bar ── */}
      <div
        className={`pointer-events-auto w-full max-w-6xl radial-navbar px-3.5 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 ${
          isScrolled ? 'scale-[0.98] shadow-2xl' : 'scale-100'
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-electricBlue rounded-full p-1"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500/15 dark:bg-electricBlue/15 border border-emerald-500/40 dark:border-electricBlue/40 flex items-center justify-center text-emerald-600 dark:text-highlightBlue group-hover:bg-emerald-500 dark:group-hover:bg-electricBlue group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-highlightBlue transition-colors block leading-tight">
                {language === 'bn' ? profileData.nameBn : profileData.name}
              </span>
              <span className="text-[9px] sm:text-[10px] text-emerald-600 dark:text-highlightBlue font-semibold tracking-wider uppercase block">
                {language === 'bn' ? 'অপারেশনস ও ডাটা' : 'Operations & MIS'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items with Active Scrollspy & Animated Underlines */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-200 group ${
                    isActive
                      ? 'bg-emerald-500/15 dark:bg-electricBlue/15 text-emerald-700 dark:text-highlightBlue border border-emerald-500/30 dark:border-electricBlue/30 shadow-sm'
                      : 'text-slate-600 dark:text-secondaryText hover:text-slate-900 dark:hover:text-white hover:bg-emerald-50 dark:hover:bg-slate-800/40 border border-transparent'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {/* Active Indicator Underline */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0.5 left-2 right-2 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-electricBlue dark:to-highlightBlue rounded-full transition-all duration-300 origin-left ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-80'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Theme Toggle, Lang Switcher & CV Button */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 shrink-0">
            {/* Theme Toggle Button (☀️ / 🌙) */}
            <ThemeToggle />

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* CV Download Button */}
            <a
              href={profileData.resumePdfPath}
              download="Easin_Ali_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 xl:px-3.5 xl:py-2 text-xs font-semibold rounded-full bg-emerald-600 hover:bg-emerald-700 dark:bg-electricBlue dark:hover:bg-blue-600 text-white shadow-sm hover:shadow-glow-green dark:hover:shadow-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-electricBlue whitespace-nowrap shrink-0"
            >
              <FileDown className="w-3.5 h-3.5 shrink-0" />
              <span>{t.nav.downloadCv}</span>
            </a>
          </div>

          {/* Mobile Actions: Theme, Language & Hamburger */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            <ThemeToggle />
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-slate-700 dark:text-secondaryText hover:text-slate-900 dark:hover:text-white hover:bg-emerald-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-emerald-200 dark:border-borderNavy/80 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-emerald-500/15 dark:bg-electricBlue/20 text-emerald-700 dark:text-highlightBlue border border-emerald-500/30 dark:border-electricBlue/30'
                        : 'text-slate-600 dark:text-secondaryText hover:text-slate-900 dark:hover:text-white hover:bg-emerald-50 dark:hover:bg-slate-800/60'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-electricBlue" />}
                  </a>
                );
              })}
            </nav>

            <div className="mt-3 pt-3 border-t border-emerald-200 dark:border-borderNavy/60">
              <a
                href={profileData.resumePdfPath}
                download="Easin_Ali_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 dark:bg-electricBlue dark:hover:bg-blue-600 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>{t.nav.downloadCv}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
