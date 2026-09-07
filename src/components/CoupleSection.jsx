import React from 'react';
import { IslamicDivider, CrescentStar } from './IslamicDecorations';

export const CoupleSection = () => {
  return (
    <section className="relative py-2 sm:py-6 px-1 sm:px-4">
      <div className="w-full text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-1 text-[#C87D87] font-cinzel text-[9px] sm:text-xs uppercase tracking-[0.2em] mb-0.5 font-semibold">
          <CrescentStar className="w-3 h-3" />
          <span>The Blessed Union</span>
          <CrescentStar className="w-3 h-3" />
        </div>

        <h2 className="font-playfair text-xl sm:text-3xl text-[#6B7556] font-bold mb-1">
          Bride & Groom
        </h2>

        <IslamicDivider className="w-32 sm:w-48 mx-auto mb-3 sm:mb-6" />

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-2.5 sm:gap-6 items-center">
          
          {/* Groom Card */}
          <div className="md:col-span-5 glass-card rounded-2xl p-3.5 sm:p-6 border border-[#E5BCA9] text-center relative overflow-hidden shadow-xs">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-full bg-[#6B7556] border-2 border-[#E5BCA9] flex items-center justify-center text-[#FBEAD6] shadow-sm">
              <span className="font-cinzel text-lg sm:text-xl font-bold">S</span>
            </div>

            <span className="font-cinzel text-[9px] sm:text-[10px] text-[#C87D87] uppercase tracking-widest block mb-0.5 font-semibold">
              The Groom
            </span>

            <h3 className="font-playfair text-base sm:text-2xl text-[#6B7556] font-bold mb-1 leading-snug">
              Syed Abdullah Bashshar
            </h3>

            <div className="inline-block px-3 py-0.5 rounded-full bg-[#F0C4CB]/40 border border-[#C87D87]/30 text-[10px] sm:text-xs font-sans text-[#6B7556] font-semibold tracking-wide">
              B.Tech AI Engineer
            </div>
          </div>

          {/* Central Ornament Divider / WITH */}
          <div className="md:col-span-1 flex flex-col items-center justify-center py-0.5">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#C87D87] border-2 border-[#FBEAD6] flex items-center justify-center shadow-xs z-10">
              <span className="font-script text-xl sm:text-2xl text-[#FBEAD6]">
                With
              </span>
            </div>
          </div>

          {/* Bride Card */}
          <div className="md:col-span-5 glass-card rounded-2xl p-3.5 sm:p-6 border border-[#E5BCA9] text-center relative overflow-hidden shadow-xs">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-full bg-[#6B7556] border-2 border-[#E5BCA9] flex items-center justify-center text-[#FBEAD6] shadow-sm">
              <span className="font-cinzel text-lg sm:text-xl font-bold">S</span>
            </div>

            <span className="font-cinzel text-[9px] sm:text-[10px] text-[#C87D87] uppercase tracking-widest block mb-0.5 font-semibold">
              The Bride
            </span>

            <h3 className="font-playfair text-base sm:text-2xl text-[#6B7556] font-bold mb-1 leading-snug">
              Sadaf Ameen <span className="text-xs sm:text-base font-sans font-normal text-[#C87D87]">(D.Pharm)</span>
            </h3>

            <div className="mt-1.5 pt-1.5 border-t border-[#E5BCA9]/60">
              <p className="font-cormorant italic text-xs sm:text-sm text-[#6B7556]/90 font-medium">
                D/O Mrs & Mr Mohammad Raisuddin Khateeb
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
