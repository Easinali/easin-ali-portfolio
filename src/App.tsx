import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Certifications } from './sections/Certifications';
import { ResumeSection } from './sections/ResumeSection';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

const SESSION_KEY = 'ea-portfolio-intro-seen';

export const App: React.FC = () => {
  // Show intro once per session
  const [showIntro, setShowIntro] = useState(() => {
    try { return !sessionStorage.getItem(SESSION_KEY); }
    catch { return false; }
  });
  const [introVisible, setIntroVisible] = useState(showIntro);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleIntroComplete = () => {
    setIntroVisible(false);
    setTimeout(() => setShowIntro(false), 650);
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* ignore */ }
  };

  // Scroll-to-top button
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Intersection Observer: reveal-on-scroll ──
  useEffect(() => {
    if (showIntro) return;

    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-stagger');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showIntro]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <LanguageProvider>
      {/* ── Intro boot screen (one-time per session) ── */}
      {showIntro && (
        <div
          className="transition-opacity duration-600"
          style={{
            opacity: introVisible ? 1 : 0,
            pointerEvents: introVisible ? 'auto' : 'none',
          }}
        >
          <IntroScreen onComplete={handleIntroComplete} />
        </div>
      )}

      {/* ── Main portfolio ── */}
      <div
        className="min-h-screen bg-darkNavy text-primaryText relative"
        style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 0.4s ease' }}
      >
        {/* Scroll progress bar */}
        <ScrollProgress />

        {/* Advanced cursor */}
        <CustomCursor />

        {/* Sticky editorial navbar */}
        <Navbar />

        <main>
          <Hero />

          {/* Each section wrapped in reveal observer */}
          <div className="reveal-on-scroll"><About /></div>
          <div className="reveal-on-scroll"><Experience /></div>
          <div className="reveal-on-scroll"><Education /></div>
          <div className="reveal-on-scroll"><Skills /></div>
          <div className="reveal-on-scroll"><Projects /></div>
          <div className="reveal-on-scroll"><Certifications /></div>
          <div className="reveal-on-scroll"><ResumeSection /></div>
          <div className="reveal-on-scroll"><Contact /></div>
        </main>

        <Footer />

        {/* Scroll to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-40 w-10 h-10 border border-electricBlue/50 text-electricBlue hover:bg-electricBlue hover:text-darkNavy transition-all duration-300 font-mono text-xs flex items-center justify-center focus:outline-none ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll back to top"
          title="Scroll to top"
          data-magnetic
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </LanguageProvider>
  );
};

export default App;
