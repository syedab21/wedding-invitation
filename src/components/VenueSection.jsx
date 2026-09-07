import React, { useState } from 'react';
import { IslamicDivider } from './IslamicDecorations';
import { MapPin, Navigation, Copy, CalendarPlus, Check } from 'lucide-react';

export const VenueSection = () => {
  const [copied, setCopied] = useState(false);

  const venueTitle = "K. S. Function Hall";
  const venueAddress = "Mailoor - Bidar, Karnataka";
  const fullAddress = `${venueTitle}, ${venueAddress}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Nikah Ceremony — Syed Abdullah Bashshar & Sadaf Ameen");
    const details = encodeURIComponent("Nikah Ceremony of Syed Abdullah Bashshar (B.Tech AI Engineer) & Sadaf Ameen (D.Pharm), D/O Mrs & Mr Mohammad Raisuddin Khateeb. Time: After Magrib. Dinner: 8:00 PM.");
    const location = encodeURIComponent(fullAddress);
    const dates = "20260920T130000Z/20260920T170000Z";
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank');
  };

  return (
    <section className="relative py-10 sm:py-16 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-1.5 text-[#C87D87] font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-1 font-semibold">
          <MapPin className="w-3.5 h-3.5 text-[#C87D87]" />
          <span>Sacred Venue</span>
        </div>

        <h2 className="font-playfair text-2xl sm:text-4xl text-[#6B7556] font-bold mb-2 sm:mb-4">
          Location & Directions
        </h2>

        <IslamicDivider className="w-40 sm:w-56 mx-auto mb-8 sm:mb-12" />

        {/* Venue Card */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-12 border-2 border-[#E5BCA9] text-center relative overflow-hidden shadow-sm">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-[#6B7556] border-2 border-[#E5BCA9] flex items-center justify-center text-[#FBEAD6] shadow-md">
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <span className="font-cinzel text-[10px] sm:text-xs text-[#C87D87] uppercase tracking-widest block mb-1.5 font-bold">
            Nikah Ceremony & Dinner Venue
          </span>

          <h3 className="font-playfair text-2xl sm:text-4xl text-[#6B7556] font-bold mb-1.5">
            {venueTitle}
          </h3>

          <p className="font-cormorant text-lg sm:text-2xl text-[#C87D87] font-semibold mb-1">
            Mailoor - Bidar
          </p>

          <p className="font-sans text-sm sm:text-base text-[#6B7556] font-medium tracking-wide mb-6 sm:mb-8">
            Karnataka, India
          </p>

          {/* Action Buttons: Stacked on mobile, row on tablet/desktop */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            
            {/* Google Maps Button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6B7556] hover:bg-[#586245] text-[#FBEAD6] font-cinzel font-bold text-xs sm:text-sm px-6 py-3.5 min-h-[48px] rounded-full shadow-md active:scale-95 transition-all duration-200"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>Get Directions</span>
            </a>

            {/* Copy Address Button */}
            <button
              onClick={handleCopyAddress}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F0C4CB]/40 hover:bg-[#F0C4CB]/60 text-[#6B7556] border border-[#C87D87]/50 font-cinzel text-xs sm:text-sm px-6 py-3.5 min-h-[48px] rounded-full shadow-xs active:scale-95 transition-all duration-200 font-semibold"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#6B7556]" />
                  <span>Address Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#C87D87]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            {/* Add to Calendar Button */}
            <button
              onClick={handleAddToCalendar}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F0C4CB]/40 hover:bg-[#F0C4CB]/60 text-[#6B7556] border border-[#C87D87]/50 font-cinzel text-xs sm:text-sm px-6 py-3.5 min-h-[48px] rounded-full shadow-xs active:scale-95 transition-all duration-200 font-semibold"
            >
              <CalendarPlus className="w-4 h-4 text-[#C87D87]" />
              <span>Add to Calendar</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
