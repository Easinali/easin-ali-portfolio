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
      className={`inline-flex items-center border border-borderNavy bg-darkNavy/90 p-0.5 shadow-sm font-mono ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <div className="flex items-center px-1.5 text-secondaryText/60" aria-hidden="true">
        <Globe className="h-3 w-3 text-electricBlue" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-[11px] font-bold tracking-wider transition-all duration-200 ${
          language === 'en'
            ? 'bg-electricBlue text-darkNavy shadow-sm'
            : 'text-secondaryText hover:text-warmWhite'
        }`}
        aria-pressed={language === 'en'}
        data-magnetic
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage('bn')}
        className={`px-2.5 py-1 text-[11px] font-bold tracking-wider transition-all duration-200 ${
          language === 'bn'
            ? 'bg-electricBlue text-darkNavy shadow-sm'
            : 'text-secondaryText hover:text-warmWhite'
        }`}
        aria-pressed={language === 'bn'}
        data-magnetic
      >
        বাং
      </button>
    </div>
  );
};
