import React from 'react';
import { IslamicDivider } from './IslamicDecorations';
import { Quote } from 'lucide-react';

export const QuranVerse = () => {
  return (
    <section className="relative py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-3xl mx-auto glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-12 border-2 border-[#E5BCA9] text-center relative overflow-hidden shadow-xs">
        
        <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#C87D87]/40 mx-auto mb-3 sm:mb-4" />

        {/* Arabic Verse */}
        <p className="font-amiri text-2xl sm:text-3xl text-[#6B7556] font-bold leading-relaxed mb-2 sm:mb-4 dir-rtl">
          "وَخَلَقْنَاكُمْ أَزْوَاجًا"
        </p>

        {/* Translation */}
        <blockquote className="font-cormorant italic text-base sm:text-2xl text-[#C87D87] font-semibold max-w-xl mx-auto mb-3 sm:mb-4 px-2">
          “And We created you in pairs”
        </blockquote>

        <p className="font-cinzel text-[10px] sm:text-xs text-[#6B7556] uppercase tracking-widest font-bold">
          — Surah An-Naba (78:8)
        </p>

        <IslamicDivider className="w-28 sm:w-32 mx-auto mt-4 sm:mt-6 mb-0" />
      </div>
    </section>
  );
};
