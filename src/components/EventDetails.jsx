import React from 'react';
import { IslamicDivider, CrescentStar } from './IslamicDecorations';
import { Calendar, Moon, UtensilsCrossed, MapPin } from 'lucide-react';

export const EventDetails = () => {
  const googleMapsUrl = "https://www.google.com/maps/place/KS+Garden+Function+Hall/@17.893414,77.5003766,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcec6ee4295d8b5:0xb63770bb1e16ef2a!8m2!3d17.893414!4d77.5003766!16s%2Fg%2F11g6j77_1w?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D";

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
                Dinner
              </span>
              <h3 className="font-playfair text-base sm:text-xl text-[#6B7556] font-bold leading-tight">
                8:00 PM
              </h3>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#6B7556]/90 font-medium">
                Dinner 
              </p>
            </div>
          </div>

        </div>

        {/* Exact Venue Link */}
        <div className="mt-3 sm:mt-5 text-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#6B7556] hover:bg-[#586245] text-[#FBEAD6] font-cinzel font-bold text-[10px] sm:text-xs px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-xs active:scale-95 transition-all duration-200 animate-shaky-button border border-[#E5BCA9]"
          >
            <MapPin className="w-3.5 h-3.5 text-[#F0C4CB]" />
            <span>Open KS Garden Function Hall on Google Maps</span>
          </a>
        </div>

      </div>
    </section>
  );
};
