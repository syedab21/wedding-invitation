import React from 'react';
import { Mail, Heart, Calendar, MapPin, MessageSquare, CheckSquare } from 'lucide-react';

/**
 * FloatingNav - Compact Glassmorphism Quick-Jump Bar
 * 
 * Strict 5-Color Palette:
 * - #F0C4CB (Soft Rose Pink)
 * - #C87D87 (Muted Mauve / Dusty Rose)
 * - #FBEAD6 (Warm Cream / Soft Ivory)
 * - #6B7556 (Sage Green / Muted Olive)
 * - #E5BCA9 (Warm Peach Beige)
 */
export const FloatingNav = ({ onReopenEnvelope }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed z-40 transition-all duration-300 pointer-events-auto"
      style={{
        bottom: 'max(14px, env(safe-area-inset-bottom))',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <div 
        className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#E5BCA9] shadow-lg backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(251, 234, 214, 0.85)',
          boxShadow: '0 8px 30px rgba(107, 117, 86, 0.25)',
        }}
      >
        {/* Replay Envelope button */}
        <button
          onClick={onReopenEnvelope}
          title="Reopen Invitation Envelope"
          aria-label="Reopen Invitation Envelope"
          className="p-1.5 sm:p-2 rounded-full text-[#6B7556] hover:bg-[#F0C4CB]/50 active:scale-90 transition-all duration-200 cursor-pointer"
        >
          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C87D87]" />
        </button>

        <div className="w-[1px] h-4 bg-[#C87D87]/30" />

        {/* Jump to Couple */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Top / Couple"
          aria-label="Jump to Couple"
          className="p-1.5 sm:p-2 rounded-full text-[#6B7556] hover:bg-[#F0C4CB]/50 active:scale-90 transition-all duration-200 cursor-pointer"
        >
          <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* Jump to Program */}
        <button
          onClick={() => {
            const el = document.querySelector('section:nth-of-type(3)');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          title="Program & Time"
          aria-label="Jump to Program & Time"
          className="p-1.5 sm:p-2 rounded-full text-[#6B7556] hover:bg-[#F0C4CB]/50 active:scale-90 transition-all duration-200 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* Jump to Venue */}
        <button
          onClick={() => {
            const el = document.querySelector('section:nth-of-type(5)');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          title="Venue & Directions"
          aria-label="Jump to Venue & Directions"
          className="p-1.5 sm:p-2 rounded-full text-[#6B7556] hover:bg-[#F0C4CB]/50 active:scale-90 transition-all duration-200 cursor-pointer"
        >
          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* Jump to RSVP */}
        <button
          onClick={() => scrollTo('rsvp-section')}
          title="RSVP Attendance"
          aria-label="Jump to RSVP"
          className="p-1.5 sm:p-2 rounded-full text-[#6B7556] hover:bg-[#F0C4CB]/50 active:scale-90 transition-all duration-200 cursor-pointer"
        >
          <CheckSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C87D87]" />
        </button>

        {/* Jump to Dua / Wishes */}
        <button
          onClick={() => {
            const el = document.querySelector('section:nth-of-type(7)');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          title="Send Prayers & Dua"
          aria-label="Jump to Send Dua"
          className="p-1.5 sm:p-2 rounded-full text-[#6B7556] hover:bg-[#F0C4CB]/50 active:scale-90 transition-all duration-200 cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </nav>
  );
};
