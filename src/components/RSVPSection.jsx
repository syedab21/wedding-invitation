import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { IslamicDivider, CrescentStar } from './IslamicDecorations';
import { CheckCircle2, HeartHandshake, UserCheck, Sparkles, Send } from 'lucide-react';

/**
 * RSVPSection - 1-Tap Attendance Confirmation
 * 
 * Strict 5-Color Palette:
 * - #F0C4CB (Soft Rose Pink)
 * - #C87D87 (Muted Mauve / Dusty Rose)
 * - #FBEAD6 (Warm Cream / Soft Ivory)
 * - #6B7556 (Sage Green / Muted Olive)
 * - #E5BCA9 (Warm Peach Beige)
 */
export const RSVPSection = () => {
  const [rsvpStatus, setRsvpStatus] = useState(null); // 'attending' | 'prayers'
  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [confirmed, setConfirmed] = useState(false);

  const handleSelectStatus = (status) => {
    setRsvpStatus(status);
  };

  const handleConfirmRSVP = (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setConfirmed(true);

    if (navigator.vibrate) {
      navigator.vibrate([20, 30, 20]);
    }

    // Confetti celebration
    try {
      confetti({
        particleCount: 60,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#F0C4CB', '#C87D87', '#FBEAD6', '#6B7556', '#E5BCA9']
      });
    } catch (err) {}
  };

  return (
    <section id="rsvp-section" className="relative py-2 sm:py-6 px-1 sm:px-4">
      <div className="w-full text-center">
        
        <div className="inline-flex items-center gap-1 text-[#C87D87] font-cinzel text-[9px] sm:text-xs uppercase tracking-[0.2em] mb-0.5 font-semibold">
          <CrescentStar className="w-3 h-3" />
          <span>RSVP & Attendance</span>
          <CrescentStar className="w-3 h-3" />
        </div>

        <h2 className="font-playfair text-xl sm:text-3xl text-[#6B7556] font-bold mb-1">
          Will You Grace Our Joy?
        </h2>

        <IslamicDivider className="w-32 sm:w-48 mx-auto mb-3 sm:mb-6" />

        {/* RSVP Card */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 border border-[#E5BCA9] text-center shadow-xs">
          
          {!confirmed ? (
            <form onSubmit={handleConfirmRSVP} className="space-y-3 sm:space-y-4">
              <p className="font-cormorant text-sm sm:text-base text-[#6B7556]/90 italic max-w-md mx-auto">
                Please let us know if you will be joining us for the Nikah ceremony & dinner reception on Sunday, 20 Sept 2026.
              </p>

              {/* 1-Tap Attendance Selection Tabs */}
              <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={() => handleSelectStatus('attending')}
                  className={`p-2.5 sm:p-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-1 ${
                    rsvpStatus === 'attending'
                      ? 'bg-[#6B7556] text-[#FBEAD6] border-[#E5BCA9] shadow-md scale-[1.02]'
                      : 'bg-[#F0C4CB]/30 text-[#6B7556] border-[#C87D87]/30 hover:bg-[#F0C4CB]/50 animate-shaky-button'
                  }`}
                  style={{ animationDelay: '0s' }}
                >
                  <UserCheck className={`w-4 h-4 ${rsvpStatus === 'attending' ? 'text-[#F0C4CB]' : 'text-[#C87D87]'}`} />
                  <span className="font-cinzel text-[10px] sm:text-xs font-bold leading-tight uppercase tracking-wider">
                    InshaAllah<br className="sm:hidden" /> Attending
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelectStatus('prayers')}
                  className={`p-2.5 sm:p-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-1 ${
                    rsvpStatus === 'prayers'
                      ? 'bg-[#6B7556] text-[#FBEAD6] border-[#E5BCA9] shadow-md scale-[1.02]'
                      : 'bg-[#F0C4CB]/30 text-[#6B7556] border-[#C87D87]/30 hover:bg-[#F0C4CB]/50 animate-shaky-button'
                  }`}
                  style={{ animationDelay: '1.2s' }}
                >
                  <HeartHandshake className={`w-4 h-4 ${rsvpStatus === 'prayers' ? 'text-[#F0C4CB]' : 'text-[#C87D87]'}`} />
                  <span className="font-cinzel text-[10px] sm:text-xs font-bold leading-tight uppercase tracking-wider">
                    Prayers From<br className="sm:hidden" /> Afar
                  </span>
                </button>
              </div>

              {/* Form Input fields shown once status is selected */}
              {rsvpStatus && (
                <div className="space-y-2.5 max-w-md mx-auto pt-1 animate-fadeIn">
                  <div className="text-left">
                    <label className="block font-cinzel text-[9px] sm:text-[10px] text-[#C87D87] uppercase tracking-wider mb-1 font-bold">
                      Your Name / Family Name
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Mr. Tariq & Family"
                      className="w-full bg-[#FBEAD6]/90 border border-[#E5BCA9] rounded-xl px-3 py-2 text-[#6B7556] placeholder-[#6B7556]/50 focus:outline-none focus:border-[#C87D87] font-sans text-sm font-medium"
                    />
                  </div>

                  {rsvpStatus === 'attending' && (
                    <div className="text-left">
                      <label className="block font-cinzel text-[9px] sm:text-[10px] text-[#C87D87] uppercase tracking-wider mb-1 font-bold">
                        Number of Guests Attending
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full bg-[#FBEAD6]/90 border border-[#E5BCA9] rounded-xl px-3 py-2 text-[#6B7556] focus:outline-none focus:border-[#C87D87] font-sans text-sm font-medium"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 - 4 Persons (Family)</option>
                        <option value="5+">5+ Persons (Family & Relatives)</option>
                      </select>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#6B7556] hover:bg-[#586245] active:scale-95 text-[#FBEAD6] font-cinzel font-bold text-xs sm:text-sm px-6 py-2.5 min-h-[42px] rounded-full shadow-md transition-all duration-200 animate-shaky-button"
                    style={{ animationDelay: '0.5s' }}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit RSVP Response</span>
                  </button>
                </div>
              )}
            </form>
          ) : (
            <div className="py-3 sm:py-6 space-y-2 animate-fadeIn text-center">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#6B7556] mx-auto" />
              <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#6B7556]">
                JazakAllah Khair, {guestName}!
              </h3>
              <p className="font-cormorant italic text-sm sm:text-base text-[#C87D87] max-w-sm mx-auto">
                {rsvpStatus === 'attending'
                  ? `We eagerly look forward to welcoming you and your family of ${guestCount} on our auspicious day!`
                  : "Thank you for your sincere prayers and love. Your warm wishes mean the world to us!"}
              </p>
              <div className="pt-2">
                <span className="font-cinzel text-[10px] tracking-widest text-[#6B7556] uppercase bg-[#F0C4CB]/30 px-3 py-1 rounded-full border border-[#C87D87]/30">
                  Response Recorded
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
