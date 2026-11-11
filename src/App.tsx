import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { ThemeProvider } from './hooks/useTheme';
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
import { LoadingScreen } from './components/LoadingScreen';
import { ArrowUp } from 'lucide-react';

export const AppContent: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Continuous Bi-directional Intersection Observer (works both scrolling down and scrolling up)
  useEffect(() => {
    const elements = document.querySelectorAll('.section-reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // Re-trigger animation when scrolled away (bidirectional push transition)
            // Keep hero visible once initially viewed to avoid flicker at top
            if (!entry.target.classList.contains('hero-wrapper')) {
              entry.target.classList.remove('is-visible');
            }
          }
        });
      },
      { threshold: 0.12, rootMargin: '-30px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-lightGreenBg dark:bg-darkNavy text-slate-800 dark:text-primaryText selection:bg-emerald-500 dark:selection:bg-electricBlue selection:text-white relative transition-colors duration-400">
      {/* Interactive Loading Screen with Name & Progress bar */}
      <LoadingScreen />

      {/* Pinned Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Custom Cursor Follower */}
      <CustomCursor />

      {/* Radial Shape Floating Navbar */}
      <Navbar />

      <main className="pt-8 sm:pt-12">
        <div className="section-reveal is-visible hero-wrapper"><Hero /></div>
        <div className="section-reveal"><About /></div>
        <div className="section-reveal"><Experience /></div>
        <div className="section-reveal"><Education /></div>
        <div className="section-reveal"><Skills /></div>
        <div className="section-reveal"><Projects /></div>
        <div className="section-reveal"><Certifications /></div>
        <div className="section-reveal"><ResumeSection /></div>
        <div className="section-reveal"><Contact /></div>
      </main>

      <Footer />

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-emerald-600 dark:bg-electricBlue hover:bg-emerald-700 dark:hover:bg-blue-600 text-white shadow-lg hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-electricBlue transition-all duration-300 border border-emerald-400/40 dark:border-highlightBlue/40 backdrop-blur-sm group"
          aria-label="Scroll back to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
