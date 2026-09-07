import React from 'react';
import { IslamicDivider, CrescentStar } from './IslamicDecorations';

export const CoupleSection = () => {
  return (
    <section className="relative py-10 sm:py-16 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-1.5 text-[#C87D87] font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-1 font-semibold">
          <CrescentStar className="w-3.5 h-3.5" />
          <span>The Blessed Union</span>
          <CrescentStar className="w-3.5 h-3.5" />
        </div>

        <h2 className="font-playfair text-2xl sm:text-4xl text-[#6B7556] font-bold mb-2 sm:mb-4">
          Bride & Groom
        </h2>

        <IslamicDivider className="w-40 sm:w-56 mx-auto mb-8 sm:mb-12" />

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 sm:gap-8 items-center">
          
          {/* Groom Card */}
          <div className="md:col-span-5 glass-card glass-card-hover rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E5BCA9] text-center relative overflow-hidden group shadow-sm">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-[#6B7556] border-2 border-[#E5BCA9] flex items-center justify-center text-[#FBEAD6] shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="font-cinzel text-xl sm:text-2xl font-bold">S</span>
            </div>

            <span className="font-cinzel text-[10px] sm:text-xs text-[#C87D87] uppercase tracking-widest block mb-1.5 font-semibold">
              The Groom
            </span>

            <h3 className="font-playfair text-xl sm:text-3xl text-[#6B7556] font-bold mb-1.5">
              Syed Abdullah Bashshar
            </h3>

            <div className="inline-block px-3.5 py-1 rounded-full bg-[#F0C4CB]/40 border border-[#C87D87]/30 text-[11px] sm:text-xs font-sans text-[#6B7556] font-semibold tracking-wide">
              B.Tech AI Engineer
            </div>
          </div>

          {/* Central Ornament Divider / WITH */}
          <div className="md:col-span-1 flex flex-col items-center justify-center py-1 sm:py-2">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#C87D87] border-2 border-[#FBEAD6] flex items-center justify-center shadow-md z-10">
              <span className="font-script text-2xl sm:text-3xl text-[#FBEAD6]">
                With
              </span>
            </div>
          </div>

          {/* Bride Card */}
          <div className="md:col-span-5 glass-card glass-card-hover rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E5BCA9] text-center relative overflow-hidden group shadow-sm">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-[#6B7556] border-2 border-[#E5BCA9] flex items-center justify-center text-[#FBEAD6] shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="font-cinzel text-xl sm:text-2xl font-bold">S</span>
            </div>

            <span className="font-cinzel text-[10px] sm:text-xs text-[#C87D87] uppercase tracking-widest block mb-1.5 font-semibold">
              The Bride
            </span>

            <h3 className="font-playfair text-xl sm:text-3xl text-[#6B7556] font-bold mb-1.5">
              Sadaf Ameen <span className="text-base sm:text-lg font-sans font-normal text-[#C87D87]">(D.Pharm)</span>
            </h3>

            <div className="mt-2.5 pt-2.5 border-t border-[#E5BCA9]/60">
              <p className="font-cormorant italic text-sm sm:text-base text-[#6B7556]/90 font-medium">
                D/O Mrs & Mr Mohammad Raisuddin Khateeb
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
