import React from 'react';
import { IslamicDivider, CrescentStar } from './IslamicDecorations';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-4 sm:py-10 px-1 sm:px-4 bg-[#FBEAD6] text-center">
      <div className="w-full space-y-3 sm:space-y-4">
        
        {/* Calligraphic Closing Note */}
        <div className="p-3.5 sm:p-6 glass-card rounded-2xl sm:rounded-3xl border border-[#E5BCA9] shadow-xs">
          <CrescentStar className="w-4 h-4 sm:w-5 sm:h-5 text-[#C87D87] mx-auto mb-2 animate-pulse-soft" />
          
          <h3 className="font-playfair text-lg sm:text-xl text-[#6B7556] font-bold mb-1">
            With Warm Regards & Compliments From
          </h3>

          <p className="font-cormorant text-base sm:text-lg text-[#C87D87] italic leading-snug mb-2 font-semibold">
            Mrs & Mr Mohammad Raisuddin Khateeb <br />
            & Syed Family
          </p>

          <p className="font-amiri text-base sm:text-lg text-[#6B7556] font-bold dir-rtl">
            جَزاكُمُ اللَّهُ خَيْرًا
          </p>
          <p className="font-cormorant italic text-[11px] sm:text-xs text-[#6B7556]/80 font-medium mt-0.5">
            (May Allah reward you with goodness for celebrating with us)
          </p>
        </div>

        <IslamicDivider className="w-28 sm:w-40 mx-auto" />

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-[11px] font-cinzel text-[#6B7556] border border-[#C87D87]/40 px-4 py-2 rounded-full bg-[#F0C4CB]/30 hover:bg-[#F0C4CB]/60 active:scale-95 transition-all font-bold"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#C87D87]" />
          <span>Back To Top</span>
        </button>

        <p className="text-[9px] sm:text-[10px] font-sans text-[#6B7556]/70 tracking-wider font-medium px-1">
          Nikah Ceremony — Syed Abdullah Bashshar & Sadaf Ameen • 20 Sept 2026
        </p>

      </div>
    </footer>
  );
};
