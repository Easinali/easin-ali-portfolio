import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { Navbar } from './components/Navbar';
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-darkNavy text-primaryText selection:bg-electricBlue selection:text-white relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Certifications />
          <ResumeSection />
          <Contact />
        </main>
        <Footer />

        {/* Floating Scroll To Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-electricBlue hover:bg-blue-600 text-white shadow-glow transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-electricBlue animate-in fade-in zoom-in-75"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </LanguageProvider>
  );
};

export default App;
