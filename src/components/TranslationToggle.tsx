'use strict';

import React from 'react';
import { useStore, Language } from '../store/useStore';
import { Globe } from 'lucide-react';

export const TranslationToggle: React.FC = () => {
  const { currentLanguage, setLanguage } = useStore();
  const languages: Language[] = ['English', 'Kannada', 'Hindi', 'Tamil'];

  return (
    <div className="flex items-center gap-2 bg-[#e1e2d9] border border-[#d2d3c9] p-1 text-xs">
      <Globe className="w-3.5 h-3.5 text-[#7a5c40] ml-1" />
      <span className="text-[#6b6b61] font-medium hidden sm:inline">Language:</span>
      <div className="flex items-center gap-0.5">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-2 py-1 font-medium transition-colors ${
              currentLanguage === lang
                ? 'bg-[#7a5c40] text-white shadow-xs'
                : 'text-[#1a1a1a] hover:bg-[#d4c5b3]/50'
            }`}
          >
            {lang === 'English' ? 'EN' : lang === 'Kannada' ? 'ಕನ್ನಡ' : lang === 'Hindi' ? 'हिंदी' : 'தமிழ்'}
          </button>
        ))}
      </div>
    </div>
  );
};
