import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profileData';

interface LoadingScreenProps {
  onFinish?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const { language } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress counter up to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment between 3 and 10 for organic loading feel
        const increment = Math.floor(Math.random() * 8) + 4;
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        const finishTimer = setTimeout(() => {
          setIsDone(true);
          if (onFinish) onFinish();
        }, 600);
        return () => clearTimeout(finishTimer);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

  if (isDone) return null;

  const displayName = language === 'bn' ? profileData.nameBn : profileData.name;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-lightGreenBg dark:bg-darkNavy transition-all duration-700 ease-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      aria-label="Loading portfolio"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute w-72 h-72 rounded-full bg-emerald-400/20 dark:bg-electricBlue/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
        {/* Name at the top */}
        <div className="mb-8 text-center animate-pulse">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-emerald-700 dark:text-highlightBlue block mb-2 font-semibold">
            {language === 'bn' ? 'পোর্টফোলিও লোড হচ্ছে' : 'PORTFOLIO INITIALIZING'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {displayName}
          </h1>
          <p className="text-xs text-slate-500 dark:text-secondaryText mt-1.5 font-medium">
            {language === 'bn' ? 'অপারেশনস • এমআইএস • সাপ্লাই চেইন' : 'Operations • MIS Reporting • Supply Chain'}
          </p>
        </div>

        {/* Loading Bar Container */}
        <div className="w-full bg-emerald-100 dark:bg-navyBlue/90 rounded-full h-2.5 p-0.5 border border-emerald-300/80 dark:border-borderNavy shadow-inner overflow-hidden relative">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 dark:from-electricBlue dark:via-blue-500 dark:to-highlightBlue transition-all duration-100 ease-out shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter underneath loading bar */}
        <div className="w-full flex items-center justify-between mt-3 text-xs font-mono">
          <span className="text-slate-500 dark:text-secondaryText/70 flex items-center gap-1.5 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-electricBlue animate-ping" />
            Loading assets
          </span>
          <span className="font-bold text-emerald-800 dark:text-highlightBlue text-sm tracking-wider">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};
