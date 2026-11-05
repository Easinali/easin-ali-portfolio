import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
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

export const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll-triggered reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-darkNavy text-primaryText selection:bg-electricBlue selection:text-white relative">
        {/* Pinned Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Custom Electric-Blue Cursor Follower */}
        <CustomCursor />

        {/* Sticky Glass Navbar */}
        <Navbar />

        <main>
          <Hero />
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

        {/* Floating Scroll To Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-electricBlue/90 hover:bg-electricBlue text-white shadow-glow transition-all duration-300 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-electricBlue focus:ring-offset-2 focus:ring-offset-darkNavy border border-highlightBlue/40 backdrop-blur-sm group"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        )}
      </div>
    </LanguageProvider>
  );
};

export default App;
