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
      className={`inline-flex items-center rounded-lg border border-borderNavy bg-navyBlue/80 p-1 shadow-sm backdrop-blur-sm ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <div className="flex items-center px-1.5 text-secondaryText" aria-hidden="true">
        <Globe className="h-3.5 w-3.5 text-highlightBlue" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-md px-2.5 py-1 text-xs font-semibold tracking-wide transition-all duration-200 ${
          language === 'en'
            ? 'bg-electricBlue text-white shadow-sm'
            : 'text-secondaryText hover:text-white hover:bg-slate-800/60'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage('bn')}
        className={`rounded-md px-2.5 py-1 text-xs font-semibold tracking-wide font-bengali transition-all duration-200 ${
          language === 'bn'
            ? 'bg-electricBlue text-white shadow-sm'
            : 'text-secondaryText hover:text-white hover:bg-slate-800/60'
        }`}
        aria-pressed={language === 'bn'}
      >
        বাংলা
      </button>
    </div>
  );
};

