import React from 'react';
import { IslamicDivider, CrescentStar } from './IslamicDecorations';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 sm:py-16 px-3 sm:px-4 bg-[#FBEAD6] border-t border-[#E5BCA9] text-center">
      <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
        
        {/* Calligraphic Closing Note */}
        <div className="p-5 sm:p-8 glass-card rounded-2xl sm:rounded-3xl border border-[#E5BCA9] shadow-xs">
          <CrescentStar className="w-5 h-5 sm:w-6 sm:h-6 text-[#C87D87] mx-auto mb-3 sm:mb-4 animate-pulse-soft" />
          
          <h3 className="font-playfair text-xl sm:text-2xl text-[#6B7556] font-bold mb-2 sm:mb-3">
            With Warm Regards & Compliments From
          </h3>

          <p className="font-cormorant text-lg sm:text-xl text-[#C87D87] italic leading-relaxed mb-3 sm:mb-4 font-semibold">
            Mrs & Mr Mohammad Raisuddin Khateeb <br />
            & Syed Family
          </p>

          <p className="font-amiri text-lg sm:text-xl text-[#6B7556] font-bold dir-rtl">
            جَزاكُمُ اللَّهُ خَيْرًا
          </p>
          <p className="font-cormorant italic text-xs sm:text-sm text-[#6B7556]/80 font-medium">
            (May Allah reward you with goodness for celebrating with us)
          </p>
        </div>

        <IslamicDivider className="w-36 sm:w-48 mx-auto" />

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-xs font-cinzel text-[#6B7556] border border-[#C87D87]/40 px-5 py-3 min-h-[44px] rounded-full bg-[#F0C4CB]/30 hover:bg-[#F0C4CB]/60 active:scale-95 transition-all font-bold"
        >
          <ArrowUp className="w-4 h-4 text-[#C87D87]" />
          <span>Back To Top</span>
        </button>

        <p className="text-[10px] sm:text-[11px] font-sans text-[#6B7556]/70 tracking-wider pt-2 sm:pt-4 font-medium px-2">
          Nikah Ceremony — Syed Abdullah Bashshar & Sadaf Ameen • Sunday, 20 September 2026
        </p>

      </div>
    </footer>
  );
};
