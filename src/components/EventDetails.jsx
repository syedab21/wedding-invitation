import React from 'react';
import { IslamicDivider, CrescentStar } from './IslamicDecorations';
import { Calendar, Moon, UtensilsCrossed } from 'lucide-react';

export const EventDetails = () => {
  return (
    <section className="relative py-10 sm:py-16 px-3 sm:px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-1.5 text-[#C87D87] font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-1 font-semibold">
          <CrescentStar className="w-3.5 h-3.5" />
          <span>Program Details</span>
          <CrescentStar className="w-3.5 h-3.5" />
        </div>

        <h2 className="font-playfair text-2xl sm:text-4xl text-[#6B7556] font-bold mb-2 sm:mb-4">
          Date & Time
        </h2>

        <IslamicDivider className="w-40 sm:w-56 mx-auto mb-8 sm:mb-12" />

        {/* 3 Cards: Date, Nikah Time, Dinner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          
          {/* Card 1: Date */}
          <div className="glass-card glass-card-hover rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E5BCA9] text-center flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-[#6B7556] border border-[#E5BCA9] flex items-center justify-center text-[#FBEAD6] shadow-md">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>

              <span className="font-cinzel text-[10px] sm:text-xs text-[#C87D87] uppercase tracking-widest block mb-1.5 font-semibold">
                Blessed Date
              </span>

              <h3 className="font-playfair text-xl sm:text-2xl text-[#6B7556] font-bold mb-1">
                Sunday
              </h3>

              <p className="font-cinzel text-lg sm:text-xl text-[#C87D87] font-bold mb-1.5">
                20 September 2026
              </p>

              <div className="inline-block px-3 py-0.5 rounded-full bg-[#F0C4CB]/40 border border-[#C87D87]/30 text-[11px] sm:text-xs font-sans text-[#6B7556] font-medium">
                9th Rabi-al-Sani
              </div>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#E5BCA9]/60 text-[11px] sm:text-xs font-sans text-[#6B7556]/80 font-medium">
              Save the date on your calendar
            </div>
          </div>

          {/* Card 2: Time */}
          <div className="glass-card glass-card-hover rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E5BCA9] text-center flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-[#6B7556] border border-[#E5BCA9] flex items-center justify-center text-[#FBEAD6] shadow-md">
                <Moon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>

              <span className="font-cinzel text-[10px] sm:text-xs text-[#C87D87] uppercase tracking-widest block mb-1.5 font-semibold">
                Nikah Ceremony Time
              </span>

              <h3 className="font-playfair text-2xl sm:text-3xl text-[#6B7556] font-bold mb-1.5">
                After Magrib
              </h3>

              <p className="font-cormorant italic text-sm sm:text-base text-[#6B7556]/90 font-medium">
                Solemnization of Nikah following the evening prayer
              </p>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#E5BCA9]/60 text-[11px] sm:text-xs font-sans text-[#6B7556]/80 font-medium">
              InshaAllah
            </div>
          </div>

          {/* Card 3: Dinner */}
          <div className="glass-card glass-card-hover rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E5BCA9] text-center flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-[#6B7556] border border-[#E5BCA9] flex items-center justify-center text-[#FBEAD6] shadow-md">
                <UtensilsCrossed className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>

              <span className="font-cinzel text-[10px] sm:text-xs text-[#C87D87] uppercase tracking-widest block mb-1.5 font-semibold">
                Walima & Dinner
              </span>

              <h3 className="font-playfair text-2xl sm:text-3xl text-[#6B7556] font-bold mb-1.5">
                8:00 PM
              </h3>

              <p className="font-cormorant italic text-sm sm:text-base text-[#6B7556]/90 font-medium">
                Royal Dinner Reception to follow
              </p>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#E5BCA9]/60 text-[11px] sm:text-xs font-sans text-[#6B7556]/80 font-medium">
              Join us for feast & celebrations
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
