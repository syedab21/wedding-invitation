import React from 'react';
import { IslamicDivider } from './IslamicDecorations';
import { Quote } from 'lucide-react';

export const QuranVerse = () => {
  return (
    <section className="relative py-1.5 sm:py-6 px-1 sm:px-4">
      <div className="w-full glass-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 border border-[#E5BCA9] text-center relative overflow-hidden shadow-xs">
        
        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#C87D87]/40 mx-auto mb-1.5 sm:mb-3" />

        {/* Arabic Verse */}
        <p className="font-amiri text-xl sm:text-3xl text-[#6B7556] font-bold leading-relaxed mb-1 sm:mb-2 dir-rtl">
          "وَخَلَقْنَاكُمْ أَزْوَاجًا"
        </p>

        {/* Translation */}
        <blockquote className="font-cormorant italic text-sm sm:text-xl text-[#C87D87] font-semibold max-w-md mx-auto mb-1.5 sm:mb-3 px-1">
          “And We created you in pairs”
        </blockquote>

        <p className="font-cinzel text-[9px] sm:text-xs text-[#6B7556] uppercase tracking-widest font-bold">
          — Surah An-Naba (78:8)
        </p>

        <IslamicDivider className="w-24 sm:w-32 mx-auto mt-2 sm:mt-4 mb-0" />
      </div>
    </section>
  );
};
