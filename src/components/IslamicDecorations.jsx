import React from 'react';

// Bismillah Arabic Calligraphy Vector in 5-color palette
export const BismillahSVG = ({ className = "w-full h-auto" }) => (
  <div className={`flex justify-center items-center select-none overflow-hidden ${className}`}>
    <div className="text-center font-amiri text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#6B7556] tracking-normal drop-shadow-sm py-1 whitespace-nowrap leading-tight">
      بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
    </div>
  </div>
);

// Arched Corner Ornament Frame
export const CornerOrnament = ({ position = "top-left", className = "w-16 h-16" }) => {
  const rotation = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  return (
    <svg 
      className={`absolute opacity-70 text-[#C87D87] ${rotation} ${className}`} 
      viewBox="0 0 100 100" 
      fill="currentColor"
    >
      <path d="M0,0 L40,0 C30,10 20,20 20,40 C20,20 10,10 0,0 Z" />
      <path d="M0,0 L0,40 C10,30 20,20 40,20 C20,20 10,10 0,0 Z" />
      <circle cx="15" cy="15" r="3" fill="#6B7556" />
      <path d="M0,50 Q25,25 50,0 Q35,35 0,50 Z" opacity="0.4" fill="#E5BCA9" />
    </svg>
  );
};

// Islamic Mandala / Floral Divider
export const IslamicDivider = ({ className = "w-48 h-8" }) => (
  <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C87D87]/50 to-transparent" />
    <svg className="w-6 h-6 text-[#C87D87] flex-shrink-0 animate-pulse-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2" fill="rgba(240, 196, 203, 0.4)" />
      <circle cx="12" cy="12" r="3" fill="#6B7556" />
    </svg>
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C87D87]/50 to-transparent" />
  </div>
);

// Floating Lantern Accent
export const LanternSVG = ({ className = "w-8 h-12" }) => (
  <svg className={`text-[#C87D87] ${className}`} viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="20" y1="0" x2="20" y2="10" stroke="currentColor" strokeWidth="2" />
    <polygon points="12,10 28,10 32,20 8,20" fill="rgba(240, 196, 203, 0.4)" />
    <path d="M8,20 C8,35 12,42 20,42 C28,42 32,35 32,20 Z" fill="rgba(251, 234, 214, 0.6)" stroke="currentColor" />
    <circle cx="20" cy="30" r="4" fill="#E5BCA9" className="animate-pulse" />
    <polygon points="15,42 25,42 20,50" fill="#6B7556" />
    <line x1="20" y1="50" x2="20" y2="58" stroke="currentColor" />
    <circle cx="20" cy="58" r="1.5" fill="currentColor" />
  </svg>
);

// Crescent Star Ornament
export const CrescentStar = ({ className = "w-6 h-6" }) => (
  <svg className={`text-[#C87D87] ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.08-1.38-4.14-.72-7.3-4.34-7.3-8.62 0-4.28 3.16-7.9 7.3-8.62C15.58 2.5 13.85 2 12 2z" />
    <polygon points="19 4 20.2 6.5 23 6.9 21 8.8 21.5 11.5 19 10.2 16.5 11.5 17 8.8 15 6.9 17.8 6.5" fill="#6B7556" />
  </svg>
);
