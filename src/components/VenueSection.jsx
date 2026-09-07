import React, { useState } from 'react';
import { IslamicDivider } from './IslamicDecorations';
import { MapPin, Navigation, Copy, CalendarPlus, Check, Share2 } from 'lucide-react';

export const VenueSection = () => {
  const [copied, setCopied] = useState(false);

  const venueTitle = "K. S. Function Hall";
  const venueAddress = "Mailoor - Bidar, Karnataka";
  const fullAddress = `${venueTitle}, ${venueAddress}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    if (navigator.vibrate) navigator.vibrate([15, 20]);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Nikah Ceremony — Syed Abdullah Bashshar & Sadaf Ameen");
    const details = encodeURIComponent("Nikah Ceremony of Syed Abdullah Bashshar (B.Tech AI Engineer) & Sadaf Ameen (D.Pharm), D/O Mrs & Mr Mohammad Raisuddin Khateeb. Time: After Magrib. Dinner: 8:00 PM. Venue: K. S. Function Hall, Mailoor - Bidar, Karnataka.");
    const location = encodeURIComponent(fullAddress);
    const dates = "20260920T130000Z/20260920T170000Z";
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `💌 *Nikah Invitation*\n\n` +
      `You are cordially invited to celebrate the Nikah Ceremony of:\n\n` +
      `*Syed Abdullah Bashshar* (B.Tech AI Engineer)\n` +
      `& *Sadaf Ameen* (D.Pharm)\n` +
      `_D/O Mrs & Mr Mohammad Raisuddin Khateeb_\n\n` +
      `📅 *Date:* Sunday, 20 September 2026 (9th Rabi-al-Sani)\n` +
      `⏰ *Time:* After Magrib (Dinner: 8:00 PM)\n` +
      `📍 *Venue:* K. S. Function Hall, Mailoor - Bidar, Karnataka\n\n` +
      `🔗 *View Invitation:* ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section className="relative py-2 sm:py-6 px-1 sm:px-4">
      <div className="w-full text-center">
        
        <div className="inline-flex items-center gap-1 text-[#C87D87] font-cinzel text-[9px] sm:text-xs uppercase tracking-[0.2em] mb-0.5 font-semibold">
          <MapPin className="w-3 h-3 text-[#C87D87]" />
          <span>Sacred Venue</span>
        </div>

        <h2 className="font-playfair text-xl sm:text-3xl text-[#6B7556] font-bold mb-1">
          Location & Directions
        </h2>

        <IslamicDivider className="w-32 sm:w-48 mx-auto mb-3 sm:mb-6" />

        {/* Venue Card */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 border-2 border-[#E5BCA9] text-center relative overflow-hidden shadow-xs">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 rounded-full bg-[#6B7556] border-2 border-[#E5BCA9] flex items-center justify-center text-[#FBEAD6] shadow-sm">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          <span className="font-cinzel text-[8px] sm:text-[10px] text-[#C87D87] uppercase tracking-widest block mb-0.5 font-bold">
            Nikah Ceremony & Dinner Venue
          </span>

          <h3 className="font-playfair text-lg sm:text-2xl text-[#6B7556] font-bold mb-0.5">
            {venueTitle}
          </h3>

          <p className="font-cormorant text-base sm:text-xl text-[#C87D87] font-semibold mb-0.5">
            Mailoor - Bidar
          </p>

          <p className="font-sans text-xs sm:text-sm text-[#6B7556] font-medium tracking-wide mb-3 sm:mb-4">
            Karnataka, India
          </p>

          {/* Stylized Interactive Map Preview Widget */}
          <div className="relative w-full h-32 sm:h-44 rounded-xl overflow-hidden border border-[#E5BCA9] mb-3 sm:mb-5 group shadow-xs">
            {/* Map styling layer */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundColor: '#E5BCA9',
                backgroundImage: 'radial-gradient(#C87D87 1px, transparent 1px), radial-gradient(#6B7556 1px, #FBEAD6 1px)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px',
              }}
            />
            <div className="absolute inset-0 bg-[#6B7556]/15 backdrop-blur-[2px] flex flex-col items-center justify-center p-3 text-center">
              <div className="w-9 h-9 rounded-full bg-[#6B7556] text-[#FBEAD6] flex items-center justify-center mb-1.5 shadow-md animate-bounce">
                <MapPin className="w-5 h-5 text-[#F0C4CB]" />
              </div>
              <p className="font-playfair text-xs sm:text-sm font-bold text-[#6B7556] bg-[#FBEAD6]/90 px-3 py-1 rounded-full border border-[#C87D87]/30 shadow-xs">
                K. S. Function Hall • Mailoor, Bidar
              </p>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              title="Open in Google Maps"
              aria-label="Open location in Google Maps"
            />
          </div>

          {/* Action Buttons: 2x2 Grid on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            
            {/* Google Maps Button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-[#6B7556] hover:bg-[#586245] text-[#FBEAD6] font-cinzel font-bold text-[10px] sm:text-xs px-3 py-2.5 min-h-[40px] rounded-full shadow-xs active:scale-95 transition-all duration-200"
            >
              <Navigation className="w-3.5 h-3.5 fill-current" />
              <span>Directions</span>
            </a>

            {/* Copy Address Button */}
            <button
              onClick={handleCopyAddress}
              className="inline-flex items-center justify-center gap-1.5 bg-[#F0C4CB]/40 hover:bg-[#F0C4CB]/60 text-[#6B7556] border border-[#C87D87]/50 font-cinzel text-[10px] sm:text-xs px-3 py-2.5 min-h-[40px] rounded-full shadow-xs active:scale-95 transition-all duration-200 font-semibold cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#6B7556]" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#C87D87]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            {/* Add to Calendar Button */}
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center justify-center gap-1.5 bg-[#F0C4CB]/40 hover:bg-[#F0C4CB]/60 text-[#6B7556] border border-[#C87D87]/50 font-cinzel text-[10px] sm:text-xs px-3 py-2.5 min-h-[40px] rounded-full shadow-xs active:scale-95 transition-all duration-200 font-semibold cursor-pointer"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-[#C87D87]" />
              <span>Calendar</span>
            </button>

            {/* Share via WhatsApp Button */}
            <button
              onClick={handleShareWhatsApp}
              className="inline-flex items-center justify-center gap-1.5 bg-[#6B7556] hover:bg-[#586245] text-[#FBEAD6] font-cinzel font-bold text-[10px] sm:text-xs px-3 py-2.5 min-h-[40px] rounded-full shadow-xs active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#F0C4CB]" />
              <span>Share Invite</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
