import React, { useEffect, useState, useRef } from 'react';

interface IntroScreenProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  { text: 'SYSTEM BOOT SEQUENCE INITIATED...', delay: 0,    color: 'text-crtGreen' },
  { text: 'LOADING CORE MODULES............', delay: 300,  color: 'text-crtGreen' },
  { text: 'RUNTIME: REACT 18 + TYPESCRIPT', delay: 550,  color: 'text-secondaryText' },
  { text: 'DISPLAY: 1920×1080 @ 60Hz', delay: 750,  color: 'text-secondaryText' },
  { text: 'USER PROFILE: EASIN ALI', delay: 950,  color: 'text-primaryText font-semibold' },
  { text: 'DESIGNATION: ASSISTANT OFFICER', delay: 1100, color: 'text-primaryText' },
  { text: 'COMPANY: PARAGON GROUP OF INDUSTRIES', delay: 1250, color: 'text-primaryText' },
  { text: 'EXPERTISE: DATA MANAGEMENT | MIS | SCM', delay: 1420, color: 'text-highlightBlue' },
  { text: 'STATUS: AVAILABLE FOR OPPORTUNITIES', delay: 1650, color: 'text-crtGreen' },
  { text: '', delay: 1850, color: '' },
  { text: 'LAUNCHING PORTFOLIO INTERFACE......', delay: 1900, color: 'text-electricBlue font-bold' },
];

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const hasRun = useRef(false);

  // Check reduced motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    // Instant dismiss for reduced motion
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Schedule each line appearance
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, idx) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => Math.max(prev, idx + 1));
      }, line.delay);
      timers.push(t);
    });

    // Progress bar: fills over ~2.1s
    const start = performance.now();
    const duration = 2300;
    const updateProgress = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(updateProgress);
    };
    requestAnimationFrame(updateProgress);

    // Auto-exit after 2.6s
    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 580);
    }, 2600);
    timers.push(exitTimer);

    return () => timers.forEach(clearTimeout);
  }, [onComplete, prefersReducedMotion]);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(onComplete, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-[99999] boot-screen flex flex-col justify-center items-start overflow-hidden ${
        exiting ? 'intro-exit' : ''
      }`}
      style={{ background: '#000508' }}
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)',
        }}
      />

      {/* Top status bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-3 border-b border-crtGreen/20">
        <span className="mono-label text-crtGreen/60">PORTFOLIO/SYSTEM v2.0</span>
        <span className="mono-label text-crtGreen/40">BIOS REV: 2026.11</span>
      </div>

      {/* Main terminal area */}
      <div className="w-full max-w-3xl mx-auto px-6 sm:px-12">
        {/* Terminal header */}
        <div className="mb-6">
          <div className="inline-block px-3 py-1.5 border border-crtGreen/30 mb-4">
            <span className="font-mono text-xs text-crtGreen/80">EASIN ALI :: PORTFOLIO OS — BOOT LOADER</span>
          </div>
        </div>

        {/* Boot lines */}
        <div className="space-y-1.5 font-mono text-sm sm:text-base">
          {BOOT_LINES.slice(0, visibleLines).map((line, idx) => (
            <div
              key={idx}
              className={`boot-line ${line.color}`}
              style={{ animationDelay: '0ms' }}
            >
              {line.text === '' ? (
                <span className="block h-3" />
              ) : (
                <span>
                  <span className="text-electricBlue/70 mr-2">&gt;</span>
                  {line.text}
                </span>
              )}
            </div>
          ))}

          {/* Blinking cursor at end */}
          {visibleLines > 0 && (
            <div className="flex items-center gap-1 mt-1">
              <span className="text-electricBlue/70">&gt;</span>
              <span
                className="inline-block w-2.5 h-4 bg-crtGreen animate-blink"
                aria-hidden="true"
              />
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-10 space-y-2">
          <div className="flex justify-between mono-label text-crtGreen/50">
            <span>LOADING PORTFOLIO ASSETS</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-px bg-crtGreen/20 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-crtGreen transition-none"
              style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
            />
            {/* Shimmer on progress bar */}
            <div
              className="absolute top-0 left-0 h-full w-16 opacity-60"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.6), transparent)',
                transform: `translateX(${progress * 3}%)`,
                transition: 'transform 0.1s linear',
              }}
            />
          </div>
        </div>
      </div>

      {/* Skip button */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute bottom-6 right-6 mono-label text-secondaryText/50 hover:text-crtGreen transition-colors px-3 py-2 border border-secondaryText/20 hover:border-crtGreen/40"
      >
        SKIP →
      </button>

      {/* Corner decorations */}
      <div className="absolute top-12 left-6 w-6 h-6 border-t border-l border-crtGreen/25" />
      <div className="absolute top-12 right-6 w-6 h-6 border-t border-r border-crtGreen/25" />
      <div className="absolute bottom-6 left-6 w-6 h-6 border-b border-l border-crtGreen/25" />
    </div>
  );
};

