import React from 'react';
import { BismillahSVG, CrescentStar, CornerOrnament, IslamicDivider } from './IslamicDecorations';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, Utensils } from 'lucide-react';

/**
 * InvitationLetter Component - Mobile-First & Responsive
 * 
 * Strict 5-Color Palette:
 * - #F0C4CB (Soft Rose Pink)
 * - #C87D87 (Muted Mauve / Dusty Rose)
 * - #FBEAD6 (Warm Cream / Soft Ivory)
 * - #6B7556 (Sage Green / Muted Olive)
 * - #E5BCA9 (Warm Peach Beige)
 */
export const InvitationLetter = ({ isVisible, onProceed }) => {
  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      style={{
        backgroundColor: 'rgba(107, 117, 86, 0.55)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        animation: 'fadeIn 0.4s ease-out forwards',
        paddingTop: 'max(12px, env(safe-area-inset-top))',
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        paddingLeft: 'max(12px, env(safe-area-inset-left))',
        paddingRight: 'max(12px, env(safe-area-inset-right))',
      }}
    >
      {/* ── Letter Container / Parchment Card ── */}
      <div 
        className="relative w-full max-w-[540px] max-h-[88dvh] overflow-y-auto custom-scrollbar my-auto rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center select-none"
        style={{
          backgroundColor: '#FBEAD6',
          border: '2px solid #E5BCA9',
          boxShadow: '0 25px 60px -15px rgba(107, 117, 86, 0.45), 0 10px 25px -5px rgba(200, 125, 135, 0.3)',
          animation: 'popUpLetter 0.55s cubic-bezier(0.34, 1.25, 0.64, 1) forwards',
        }}
      >
        {/* Decorative Corner Ornaments */}
        <CornerOrnament position="top-left" className="w-8 h-8 sm:w-14 sm:h-14 top-1.5 left-1.5 opacity-60 pointer-events-none" />
        <CornerOrnament position="top-right" className="w-8 h-8 sm:w-14 sm:h-14 top-1.5 right-1.5 opacity-60 pointer-events-none" />
        <CornerOrnament position="bottom-left" className="w-8 h-8 sm:w-14 sm:h-14 bottom-1.5 left-1.5 opacity-60 pointer-events-none" />
        <CornerOrnament position="bottom-right" className="w-8 h-8 sm:w-14 sm:h-14 bottom-1.5 right-1.5 opacity-60 pointer-events-none" />

        {/* Double-Line Inner Border Frame */}
        <div 
          className="absolute inset-2 sm:inset-3 rounded-xl sm:rounded-2xl pointer-events-none"
          style={{
            border: '1.5px solid rgba(200, 125, 135, 0.35)',
            outline: '1px dashed rgba(107, 117, 86, 0.25)',
            outlineOffset: '-4px',
          }}
        />

        {/* ── Letter Header ── */}
        <div className="relative z-10 space-y-1.5 pt-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0C4CB]/35 border border-[#C87D87]/35 shadow-xs">
            <CrescentStar className="w-3 h-3 text-[#C87D87]" />
            <span className="font-cinzel text-[9px] sm:text-[11px] font-bold tracking-[0.18em] text-[#6B7556] uppercase">
              Nikah Ceremony
            </span>
            <CrescentStar className="w-3 h-3 text-[#C87D87]" />
          </div>

          {/* Bismillah Calligraphy */}
          <BismillahSVG className="w-full max-w-full mx-auto py-0.5" />

          <p className="font-cormorant italic text-[#C87D87] text-xs sm:text-sm font-semibold">
            In the Name of Allah, the Most Gracious, the Most Merciful
          </p>

          <p className="font-cormorant text-[11px] sm:text-xs text-[#6B7556] max-w-sm mx-auto leading-relaxed px-2">
            Together with their families, we cordially invite you to celebrate the sacred union of
          </p>
        </div>

        {/* ── Couple Section ── */}
        <div className="relative z-10 my-3 sm:my-5 py-2 px-3 bg-[#F0C4CB]/15 rounded-xl border border-[#C87D87]/20 space-y-1.5">
          {/* Groom */}
          <div>
            <h2 className="font-playfair text-lg sm:text-2xl font-bold text-[#6B7556] leading-snug">
              Syed Abdullah Bashshar
            </h2>
            <p className="font-cinzel text-[9px] sm:text-[11px] tracking-wider text-[#C87D87] font-semibold uppercase">
              B.Tech AI Engineer
            </p>
          </div>

          {/* With */}
          <div className="flex items-center justify-center gap-2.5 my-0.5">
            <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#C87D87]/50" />
            <span className="font-script text-xl sm:text-2xl text-[#C87D87] leading-none">
              With
            </span>
            <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#C87D87]/50" />
          </div>

          {/* Bride */}
          <div>
            <h2 className="font-playfair text-lg sm:text-2xl font-bold text-[#6B7556] leading-snug">
              Sadaf Ameen <span className="font-sans text-xs sm:text-sm font-normal text-[#C87D87]">(D.Pharm)</span>
            </h2>
            <p className="font-cormorant text-[11px] sm:text-xs text-[#6B7556]/90 italic mt-0.5">
              D/O Mrs & Mr Mohammad Raisuddin Khateeb
            </p>
          </div>
        </div>

        <IslamicDivider className="w-28 sm:w-40 mx-auto my-2" />

        {/* ── Event Details Summary ── */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left my-3">
          {/* Date Card */}
          <div 
            className="p-2 sm:p-2.5 rounded-xl border border-[#E5BCA9] flex items-center gap-2.5 shadow-xs"
            style={{ backgroundColor: 'rgba(251, 234, 214, 0.75)' }}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F0C4CB]/50 flex items-center justify-center shrink-0 border border-[#C87D87]/30">
              <Calendar className="w-3.5 h-3.5 text-[#C87D87]" />
            </div>
            <div className="min-w-0">
              <p className="font-cinzel text-[8px] sm:text-[9px] font-bold text-[#C87D87] tracking-wider uppercase">Date</p>
              <p className="font-playfair text-xs sm:text-sm font-bold text-[#6B7556] truncate">Sunday, 20 Sept 2026</p>
              <p className="font-cinzel text-[8px] sm:text-[9px] text-[#6B7556]/80">9th Rabi-al-Sani</p>
            </div>
          </div>

          {/* Time & Dinner Card */}
          <div 
            className="p-2 sm:p-2.5 rounded-xl border border-[#E5BCA9] flex items-center gap-2.5 shadow-xs"
            style={{ backgroundColor: 'rgba(251, 234, 214, 0.75)' }}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F0C4CB]/50 flex items-center justify-center shrink-0 border border-[#C87D87]/30">
              <Clock className="w-3.5 h-3.5 text-[#C87D87]" />
            </div>
            <div className="min-w-0">
              <p className="font-cinzel text-[8px] sm:text-[9px] font-bold text-[#C87D87] tracking-wider uppercase">Time & Dinner</p>
              <p className="font-playfair text-xs sm:text-sm font-bold text-[#6B7556] truncate">After Magrib</p>
              <p className="font-cinzel text-[8px] sm:text-[9px] text-[#6B7556]/80 flex items-center gap-1">
                <Utensils className="w-2.5 h-2.5 text-[#C87D87]" /> Dinner: 8:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Venue Card */}
        <div 
          className="relative z-10 p-2 sm:p-2.5 rounded-xl border border-[#E5BCA9] flex items-center gap-2.5 shadow-xs text-left mb-4"
          style={{ backgroundColor: 'rgba(251, 234, 214, 0.75)' }}
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F0C4CB]/50 flex items-center justify-center shrink-0 border border-[#C87D87]/30">
            <MapPin className="w-3.5 h-3.5 text-[#C87D87]" />
          </div>
          <div className="min-w-0">
            <p className="font-cinzel text-[8px] sm:text-[9px] font-bold text-[#C87D87] tracking-wider uppercase">Venue</p>
            <p className="font-playfair text-xs sm:text-sm font-bold text-[#6B7556] truncate">K. S. Function Hall</p>
            <p className="font-cormorant text-[11px] sm:text-xs text-[#6B7556]/90 truncate">Mailoor - Bidar, Karnataka</p>
          </div>
        </div>

        {/* ── Call To Action Button (Touch-Friendly 48px+ height) ── */}
        <div className="relative z-10 pt-1">
          <button
            type="button"
            onClick={(e) => {
              if (e) e.stopPropagation();
              onProceed && onProceed(e);
            }}
            className="font-cinzel inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3 sm:py-3.5 min-h-[48px] rounded-full text-xs sm:text-sm font-bold tracking-[0.14em] text-[#FBEAD6] uppercase transition-all duration-200 active:scale-95 cursor-pointer shadow-lg hover:scale-105 animate-shaky-button"
            style={{
              backgroundColor: '#6B7556',
              border: '2px solid #E5BCA9',
              boxShadow: '0 8px 24px rgba(107, 117, 86, 0.4)',
              touchAction: 'manipulation',
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F0C4CB]" />
            <span>CLICK</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F0C4CB]" />
          </button>
        </div>
      </div>
    </div>
  );
};
