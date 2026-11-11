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
    // 5 Seconds total duration: 100 increments with 50ms interval = 5,000ms
    const totalDurationMs = 5000;
    const intervalMs = 50;
    const totalSteps = totalDurationMs / intervalMs; // 100 steps
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;
      const nextProgress = Math.min(100, Math.round((currentStep / totalSteps) * 100));
      setProgress(nextProgress);

      if (currentStep >= totalSteps) {
        clearInterval(interval);
      }
    }, intervalMs);

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
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

  if (isDone) return null;

  const displayName = language === 'bn' ? profileData.nameBn : profileData.name;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-custom-gradient text-white select-none transition-all duration-700 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      aria-label="Loading portfolio"
    >
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
        {/* Only Name at the top */}
        <div className="mb-10 text-center animate-pulse">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            {displayName}
          </h1>
        </div>

        {/* Loading Bar Container */}
        <div className="w-full bg-white/20 backdrop-blur-md rounded-full h-3 p-0.5 border border-white/40 shadow-inner overflow-hidden relative">
          <div
            className="h-full rounded-full bg-[#C6F135] transition-all duration-100 ease-linear shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter underneath loading bar */}
        <div className="w-full flex items-center justify-center mt-4">
          <span className="font-mono font-extrabold text-[#C6F135] text-2xl tracking-widest drop-shadow">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};
