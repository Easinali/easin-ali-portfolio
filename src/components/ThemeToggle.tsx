import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-electricBlue ${
        isDark
          ? 'bg-navyBlue/80 hover:bg-slate-800 text-amber-300 border border-borderNavy hover:border-amber-400/50 shadow-sm'
          : 'bg-emerald-100/80 hover:bg-emerald-200/90 text-emerald-800 border border-emerald-300 shadow-sm'
      } ${className}`}
      aria-label={isDark ? 'Switch to Light Green Mode' : 'Switch to Dark Navy Mode'}
      title={isDark ? 'Light Green Theme' : 'Dark Navy Theme'}
    >
      <div className="relative w-4 h-4">
        {/* Sun Icon (shown in dark mode to switch to light, or vice versa) */}
        <Sun
          className={`w-4 h-4 transition-all duration-300 absolute inset-0 ${
            isDark
              ? 'opacity-100 rotate-0 scale-100 text-amber-300'
              : 'opacity-0 -rotate-90 scale-50 pointer-events-none'
          }`}
        />

        {/* Moon Icon */}
        <Moon
          className={`w-4 h-4 transition-all duration-300 absolute inset-0 ${
            isDark
              ? 'opacity-0 rotate-90 scale-50 pointer-events-none'
              : 'opacity-100 rotate-0 scale-100 text-emerald-800'
          }`}
        />
      </div>
      <span className="sr-only">
        {isDark ? 'Light Green Mode' : 'Dark Mode'}
      </span>
    </button>
  );
};

