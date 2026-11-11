import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-emerald-300 dark:border-borderNavy bg-emerald-50/90 dark:bg-navyBlue/80 p-0.5 sm:p-1 shadow-sm backdrop-blur-sm ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <div className="flex items-center px-1 text-emerald-600 dark:text-highlightBlue" aria-hidden="true">
        <Globe className="h-3.5 w-3.5" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-200 ${
          language === 'en'
            ? 'bg-emerald-600 dark:bg-electricBlue text-white shadow-sm'
            : 'text-slate-600 dark:text-secondaryText hover:text-slate-900 dark:hover:text-white'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage('bn')}
        className={`rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold tracking-wide font-bengali transition-all duration-200 ${
          language === 'bn'
            ? 'bg-emerald-600 dark:bg-electricBlue text-white shadow-sm'
            : 'text-slate-600 dark:text-secondaryText hover:text-slate-900 dark:hover:text-white'
        }`}
        aria-pressed={language === 'bn'}
      >
        বাংলা
      </button>
    </div>
  );
};
