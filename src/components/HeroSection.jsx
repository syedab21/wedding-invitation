import React from 'react';
import { BismillahSVG, CornerOrnament, IslamicDivider, LanternSVG, CrescentStar } from './IslamicDecorations';

export const HeroSection = () => {
  return (
    <header className="relative flex flex-col items-center justify-center text-center px-1 sm:px-4 py-2 sm:py-6 overflow-hidden">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-[#F0C4CB]/25 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Lanterns */}
      <div className="absolute top-1 left-2 sm:left-8 animate-float-slow opacity-70 pointer-events-none hidden xs:block" style={{ animationDelay: '0s' }}>
        <LanternSVG className="w-5 sm:w-7 h-auto" />
      </div>
      <div className="absolute top-1 right-2 sm:right-8 animate-float-slow opacity-70 pointer-events-none hidden xs:block" style={{ animationDelay: '2s' }}>
        <LanternSVG className="w-5 sm:w-7 h-auto" />
      </div>

      {/* Central Arched Glassmorphism Invitation Frame */}
      <div className="relative w-full p-3.5 sm:p-8 glass-card rounded-t-[70px] sm:rounded-t-[140px] rounded-b-2xl sm:rounded-b-3xl border-2 border-[#E5BCA9] shadow-sm">
        <CornerOrnament position="top-left" className="top-2 left-2 sm:top-3 sm:left-3 w-6 sm:w-10 h-6 sm:h-10 opacity-40 pointer-events-none" />
        <CornerOrnament position="top-right" className="top-2 right-2 sm:top-3 sm:right-3 w-6 sm:w-10 h-6 sm:h-10 opacity-40 pointer-events-none" />

        {/* Bismillah Calligraphy */}
       <div className="mt-4 mb-3 w-full text-center">
  <div className="w-full flex justify-center overflow-visible">
    <BismillahSVG className="w-[95%] h-auto scale-125" />
  </div>

  <p className="font-cormorant italic text-[16px] leading-tight text-[#C87D87] tracking-wide mt-2 px-2">
    "In the name of Allah, the Most Gracious, the Most Merciful"
  </p>
</div>

        <IslamicDivider className="w-28 sm:w-40 mx-auto my-1.5 sm:my-3" />

        {/* Invitation Lead Text */}
        <div className="space-y-1 sm:space-y-1.5 mb-2.5 sm:mb-4">
          <span className="inline-block px-3 py-0.5 rounded-full bg-[#F0C4CB]/40 border border-[#C87D87]/40 font-cinzel text-[9px] sm:text-xs text-[#6B7556] tracking-[0.2em] uppercase font-semibold">
            Save The Date
          </span>
          <h1 className="font-playfair text-xl sm:text-3xl md:text-4xl text-[#6B7556] font-bold tracking-tight">
            The Nikah Ceremony
          </h1>
          <p className="font-cormorant text-xs sm:text-base text-[#C87D87] italic max-w-sm mx-auto px-1 leading-snug">
            In the name of Allah, we solicit the honor of your presence & prayers
          </p>
        </div>

        {/* Date Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl bg-[#6B7556] text-[#FBEAD6] font-cinzel text-[11px] sm:text-sm tracking-wider shadow-sm">
          <CrescentStar className="w-3 h-3 text-[#F0C4CB]" />
          <span>SUNDAY • 20 SEPTEMBER 2026</span>
          <CrescentStar className="w-3 h-3 text-[#F0C4CB]" />
        </div>

        <CornerOrnament position="bottom-left" className="bottom-2 left-2 sm:bottom-3 sm:left-3 w-5 sm:w-8 h-5 sm:h-8 opacity-40 pointer-events-none" />
        <CornerOrnament position="bottom-right" className="bottom-2 right-2 sm:bottom-3 sm:right-3 w-5 sm:w-8 h-5 sm:h-8 opacity-40 pointer-events-none" />
      </div>
    </header>
  );
};
