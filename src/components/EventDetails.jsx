import React from 'react';
import { IslamicDivider, CrescentStar } from './IslamicDecorations';
import { Calendar, Moon, UtensilsCrossed } from 'lucide-react';

export const EventDetails = () => {
  return (
    <section className="relative py-2 sm:py-6 px-1 sm:px-4">
      <div className="w-full text-center">
        
        <div className="inline-flex items-center gap-1 text-[#C87D87] font-cinzel text-[9px] sm:text-xs uppercase tracking-[0.2em] mb-0.5 font-semibold">
          <CrescentStar className="w-3 h-3" />
          <span>Program Details</span>
          <CrescentStar className="w-3 h-3" />
        </div>

        <h2 className="font-playfair text-xl sm:text-3xl text-[#6B7556] font-bold mb-1">
          Date & Time
        </h2>

        <IslamicDivider className="w-32 sm:w-48 mx-auto mb-3 sm:mb-6" />

        {/* 3 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6">
          
          {/* Card 1: Date */}
          <div className="glass-card rounded-2xl p-3 sm:p-6 border border-[#E5BCA9] flex sm:flex-col items-center gap-3 sm:gap-2 text-left sm:text-center shadow-xs">
            <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-[#6B7556] border border-[#E5BCA9] flex items-center justify-center text-[#FBEAD6] shadow-sm">
              <Calendar className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>

            <div className="min-w-0 flex-1 sm:w-full">
              <span className="font-cinzel text-[8px] sm:text-[10px] text-[#C87D87] uppercase tracking-widest block font-semibold">
                Blessed Date
              </span>
              <h3 className="font-playfair text-base sm:text-xl text-[#6B7556] font-bold leading-tight">
                Sunday, 20 Sept 2026
              </h3>
              <p className="font-sans text-[10px] sm:text-xs text-[#6B7556]/80 font-medium">
                9th Rabi-al-Sani (Save the Date)
              </p>
            </div>
          </div>

          {/* Card 2: Time */}
          <div className="glass-card rounded-2xl p-3 sm:p-6 border border-[#E5BCA9] flex sm:flex-col items-center gap-3 sm:gap-2 text-left sm:text-center shadow-xs">
            <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-[#6B7556] border border-[#E5BCA9] flex items-center justify-center text-[#FBEAD6] shadow-sm">
              <Moon className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>

            <div className="min-w-0 flex-1 sm:w-full">
              <span className="font-cinzel text-[8px] sm:text-[10px] text-[#C87D87] uppercase tracking-widest block font-semibold">
                Nikah Ceremony Time
              </span>
              <h3 className="font-playfair text-base sm:text-xl text-[#6B7556] font-bold leading-tight">
                After Magrib
              </h3>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#6B7556]/90 font-medium">
                Evening prayer · InshaAllah
              </p>
            </div>
          </div>

          {/* Card 3: Dinner */}
          <div className="glass-card rounded-2xl p-3 sm:p-6 border border-[#E5BCA9] flex sm:flex-col items-center gap-3 sm:gap-2 text-left sm:text-center shadow-xs">
            <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-[#6B7556] border border-[#E5BCA9] flex items-center justify-center text-[#FBEAD6] shadow-sm">
              <UtensilsCrossed className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>

            <div className="min-w-0 flex-1 sm:w-full">
              <span className="font-cinzel text-[8px] sm:text-[10px] text-[#C87D87] uppercase tracking-widest block font-semibold">
                Walima & Dinner
              </span>
              <h3 className="font-playfair text-base sm:text-xl text-[#6B7556] font-bold leading-tight">
                8:00 PM
              </h3>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#6B7556]/90 font-medium">
                Royal Dinner Reception
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
