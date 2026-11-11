import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profileData';
import { LanguageSwitcher } from './LanguageSwitcher';
import { FileDown } from 'lucide-react';

const NAV_SECTIONS = [
  { href: '#home',           id: 'home',           num: '00' },
  { href: '#about',          id: 'about',          num: '01' },
  { href: '#experience',     id: 'experience',     num: '02' },
  { href: '#education',      id: 'education',      num: '03' },
  { href: '#skills',         id: 'skills',         num: '04' },
  { href: '#projects',       id: 'projects',       num: '05' },
  { href: '#certifications', id: 'certifications', num: '06' },
  { href: '#resume',         id: 'resume',         num: '07' },
  { href: '#contact',        id: 'contact',        num: '08' },
];

export const Navbar: React.FC = () => {
  const { t, language } = useLanguage();
  const [isScrolled,       setIsScrolled]      = useState(false);
  const [mobileMenuOpen,   setMobileMenuOpen]   = useState(false);
  const [activeSection,    setActiveSection]    = useState('home');
  const isBn = language === 'bn';

  const navLinks = NAV_SECTIONS.map((s, i) => ({
    ...s,
    label: [
      t.nav.home, t.nav.about, t.nav.experience, t.nav.education,
      t.nav.skills, t.nav.projects, t.nav.certifications, t.nav.resume, t.nav.contact,
    ][i],
  }));

  const activeLink = navLinks.find(l => l.id === activeSection) || navLinks[0];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const scrollPos = window.scrollY + 160;
      for (const s of NAV_SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* ── Logo / Identity ── */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none"
              data-magnetic
              data-cursor-label="HOME"
            >
              {/* Monogram box */}
              <div className="relative w-9 h-9 border border-electricBlue/40 flex items-center justify-center group-hover:border-electricBlue transition-colors duration-300">
                <span className="font-mono text-xs font-bold text-electricBlue tracking-widest">EA</span>
                {/* Corner accents */}
                <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-electricBlue/80" />
                <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-electricBlue/80" />
              </div>
              <div className="hidden sm:block">
                <span className="block font-bold text-sm text-warmWhite tracking-tight leading-none group-hover:text-electricBlue transition-colors duration-200">
                  {isBn ? profileData.nameBn : profileData.name}
                </span>
                <span className="block mono-label text-secondaryText mt-0.5">
                  {isBn ? 'অপারেশনস ও ডাটা' : 'OPS & MIS'}
                </span>
              </div>
            </a>

            {/* ── Desktop section indicator (center) ── */}
            <div className="hidden lg:flex items-center gap-1.5 font-mono text-xs">
              <span className="text-electricBlue">{activeLink.num}</span>
              <span className="text-borderNavy mx-1">/</span>
              <span className="text-secondaryText uppercase tracking-widest text-[11px]">
                {activeLink.label}
              </span>
            </div>

            {/* ── Desktop nav links (xl+) ── */}
            <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative group px-3 py-2 font-mono text-[11px] tracking-wider uppercase transition-colors duration-200 ${
                      isActive ? 'text-warmWhite' : 'text-secondaryText hover:text-warmWhite'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* Number prefix */}
                    <span className={`mr-1 ${isActive ? 'text-electricBlue' : 'text-borderNavy group-hover:text-electricBlue/60 transition-colors'}`}>
                      {link.num}
                    </span>
                    <span>{link.label}</span>
                    {/* Underline */}
                    <span
                      className={`absolute bottom-0.5 left-3 right-3 h-px bg-electricBlue transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* ── Right actions ── */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              <a
                href={profileData.resumePdfPath}
                download="Easin_Ali_CV.pdf"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 font-mono text-[11px] tracking-wider uppercase border border-electricBlue/50 text-electricBlue hover:bg-electricBlue hover:text-darkNavy transition-all duration-200 focus:outline-none"
                data-magnetic
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{t.nav.downloadCv}</span>
              </a>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden relative w-9 h-9 flex flex-col justify-center items-center gap-1.5 focus:outline-none group"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <span className={`block w-6 h-px bg-warmWhite transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-4 h-px bg-warmWhite transition-all duration-300 ml-auto ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-px bg-warmWhite transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen overlay menu ── */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-[49] bg-darkNavy flex flex-col" style={{ paddingTop: '80px' }}>
          {/* Editorial grid background */}
          <div className="absolute inset-0 section-editorial-grid opacity-40 pointer-events-none" />

          <nav className="flex-1 flex flex-col justify-center px-8 relative">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-baseline gap-4 py-4 border-b border-borderNavy/40 group transition-colors duration-200 ${
                    isActive ? 'text-warmWhite' : 'text-secondaryText/70 hover:text-warmWhite'
                  }`}
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  <span className="font-mono text-xs text-electricBlue/60 group-hover:text-electricBlue transition-colors w-6 shrink-0">
                    {link.num}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight">{link.label}</span>
                  {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-electricBlue" />}
                </a>
              );
            })}
          </nav>

          {/* Mobile bottom actions */}
          <div className="px-8 pb-10 pt-6 border-t border-borderNavy/60 flex items-center justify-between gap-4">
            <a
              href={profileData.resumePdfPath}
              download="Easin_Ali_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 border border-electricBlue/50 font-mono text-xs tracking-wider uppercase text-electricBlue hover:bg-electricBlue hover:text-darkNavy transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.nav.downloadCv}</span>
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </>
  );
};
