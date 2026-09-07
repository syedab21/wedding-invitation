import React from 'react';
import { BismillahSVG, CornerOrnament, IslamicDivider, LanternSVG, CrescentStar } from './IslamicDecorations';

export const HeroSection = () => {
  return (
    <header className="relative min-h-[80dvh] flex flex-col items-center justify-center text-center px-3 sm:px-4 pt-12 pb-8 sm:pt-16 sm:pb-12 overflow-hidden bg-pattern-subtle">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#F0C4CB]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Lanterns */}
      <div className="absolute top-2 left-3 sm:left-12 animate-float-slow opacity-80" style={{ animationDelay: '0s' }}>
        <LanternSVG className="w-6 sm:w-8 h-auto" />
      </div>
      <div className="absolute top-2 right-3 sm:right-12 animate-float-slow opacity-80" style={{ animationDelay: '2s' }}>
        <LanternSVG className="w-6 sm:w-8 h-auto" />
      </div>

      {/* Central Arched Glassmorphism Invitation Frame */}
      <div className="relative max-w-3xl w-full mx-auto p-4 sm:p-10 glass-card rounded-t-[100px] sm:rounded-t-[180px] rounded-b-2xl sm:rounded-b-3xl border-2 border-[#E5BCA9] my-2 sm:my-4 shadow-lg">
        <CornerOrnament position="top-left" className="top-2 left-2 sm:top-4 sm:left-4 w-8 sm:w-14 h-8 sm:h-14 opacity-50 pointer-events-none" />
        <CornerOrnament position="top-right" className="top-2 right-2 sm:top-4 sm:right-4 w-8 sm:w-14 h-8 sm:h-14 opacity-50 pointer-events-none" />

        {/* Bismillah Calligraphy */}
        <div className="mt-4 sm:mt-6 mb-3">
          <BismillahSVG className="w-full max-w-xs sm:max-w-md mx-auto" />
          <p className="font-cormorant italic text-xs sm:text-base text-[#C87D87] tracking-wide mt-1">
            "In the name of Allah, the Most Gracious, the Most Merciful"
          </p>
        </div>

        <IslamicDivider className="w-36 sm:w-48 mx-auto my-3 sm:my-5" />

        {/* Invitation Lead Text */}
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#F0C4CB]/40 border border-[#C87D87]/40 font-cinzel text-[10px] sm:text-xs text-[#6B7556] tracking-[0.2em] uppercase font-semibold">
            Save The Date
          </span>
          <h1 className="font-playfair text-2xl sm:text-4xl md:text-5xl text-[#6B7556] font-bold tracking-tight py-1">
            The Nikah Ceremony
          </h1>
          <p className="font-cormorant text-base sm:text-xl text-[#C87D87] italic max-w-md mx-auto px-2">
            In the name of Allah, we solicit the honor of your presence & prayers
          </p>
        </div>

        {/* Date Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#6B7556] text-[#FBEAD6] font-cinzel text-xs sm:text-base tracking-widest mt-1 shadow-md">
          <CrescentStar className="w-3.5 h-3.5 text-[#F0C4CB]" />
          <span>SUNDAY • 20 SEPTEMBER 2026</span>
          <CrescentStar className="w-3.5 h-3.5 text-[#F0C4CB]" />
        </div>

        <CornerOrnament position="bottom-left" className="bottom-2 left-2 sm:bottom-4 sm:left-4 w-7 sm:w-10 h-7 sm:h-10 opacity-50 pointer-events-none" />
        <CornerOrnament position="bottom-right" className="bottom-2 right-2 sm:bottom-4 sm:right-4 w-7 sm:w-10 h-7 sm:h-10 opacity-50 pointer-events-none" />
      </div>
    </header>
  );
};
