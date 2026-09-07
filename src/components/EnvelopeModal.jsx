import React, { useState } from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';
import { InvitationLetter } from './InvitationLetter';
import { CrescentStar, LanternSVG, CornerOrnament } from './IslamicDecorations';

/**
 * EnvelopeModal - Creative, Ultra-Premium Islamic Wedding Envelope
 *
 * Strict 5-Color Palette:
 * - #F0C4CB (Soft Rose Pink)
 * - #C87D87 (Muted Mauve / Dusty Rose)
 * - #FBEAD6 (Warm Cream / Soft Ivory)
 * - #6B7556 (Sage Green / Muted Olive)
 * - #E5BCA9 (Warm Peach Beige)
 *
 * ── ALIGNMENT FIX ──
 * Previously the top flap lived in its own `h-1/2` box with
 * viewBox="0 0 520 170", while the front pocket lived in a separate
 * full-height box with viewBox="0 0 520 340". Two different boxes
 * scaled independently, so their fold-lines only lined up by
 * coincidence and drifted apart whenever the envelope's aspect ratio
 * changed across screen sizes (height was an independent clamp from
 * width, so preserveAspectRatio="none" stretched each SVG differently).
 *
 * Fix: the flap and the pocket now share ONE coordinate system —
 * both are full-size boxes using the identical viewBox
 * "0 0 520 340", and both reference the exact same apex point
 * (260, 176). Since they're scaled by the same transform, their
 * fold-lines are now guaranteed to meet exactly, at any screen size.
 * The envelope box itself also gets a locked `aspectRatio: '520/340'`
 * so the SVGs are never stretched non-uniformly in the first place.
 */

const APEX_X = 260;
const APEX_Y = 176; // shared hinge/fold point for flap + pocket, out of a 0-340 canvas
const APEX_Y_PCT = (APEX_Y / 340) * 100; // for positioning the wax seal precisely on it

// Precomputed sparkle burst directions (angle in degrees, radius in px)
const SPARKLES = [0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
  const rad = (deg * Math.PI) / 180;
  const radius = 58 + (i % 2) * 14;
  return {
    tx: Math.cos(rad) * radius,
    ty: Math.sin(rad) * radius,
    delay: (i % 4) * 0.06,
  };
});

export const EnvelopeModal = ({ isOpen, onOpen }) => {
  // state: 'closed' | 'opening' | 'letter-opened'
  const [state, setState] = useState('closed');
  const [burstKey, setBurstKey] = useState(0);

  if (!isOpen) return null;

  const handleEnvelopeClick = () => {
    if (state !== 'closed') return;
    setBurstKey((k) => k + 1); // force sparkle burst to (re)play
    setState('opening');

    // Flap flips open, wax seal cracks + sparkles, then letter modal pops up
    setTimeout(() => {
      setState('letter-opened');
    }, 1650);
  };

  const handleLetterProceed = () => {
    onOpen();
  };

  const isFlapOpen = state !== 'closed';
  const isOpening = state === 'opening';

  return (
    <>
      {/* One-off keyframes for the opening flourish (seal crack, sparkle burst,
          expanding glow, gentle idle float). Scoped by class name, so safe to
          drop straight into a plain component without a CSS-in-JS library. */}
      <style>{`
        @keyframes envelope-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(0.6deg); }
        }
        @keyframes envelope-open-lift {
          0%   { transform: scale(1) translateY(0); }
          18%  { transform: scale(0.985) translateY(2px); }
          55%  { transform: scale(1.045) translateY(-11px); }
          100% { transform: scale(1.02) translateY(-6px); }
        }
        @keyframes seal-crack-left {
          0%   { transform: translate(-50%, -50%) translate(0, 0) rotate(0deg); opacity: 1; }
          22%  { transform: translate(-50%, -50%) translate(-1px, -3px) rotate(-10deg); opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(-30px, -18px) rotate(-58deg); opacity: 0; }
        }
        @keyframes seal-crack-right {
          0%   { transform: translate(-50%, -50%) translate(0, 0) rotate(0deg); opacity: 1; }
          22%  { transform: translate(-50%, -50%) translate(1px, -3px) rotate(10deg); opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(30px, -16px) rotate(58deg); opacity: 0; }
        }
        @keyframes sparkle-burst {
          0%   { transform: translate(0, 0) scale(0.2) rotate(0deg); opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(1) rotate(90deg); opacity: 0; }
        }
        @keyframes glow-pulse {
          0%   { transform: translate(-50%, -50%) scale(0.6); opacity: 0; }
          40%  { opacity: 0.55; }
          100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
        }
        .envelope-idle-float { animation: envelope-float 4.5s ease-in-out infinite; }
      `}</style>

      {/* ── Main Fullscreen Envelope Stage ── */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center p-4 sm:p-8 select-none overflow-hidden"
        style={{
          backgroundColor: '#FBEAD6',
          height: '100dvh',
        }}
      >
        {/* Subtle Islamic Wallpaper Backdrop */}
        <div
          className="absolute inset-0 bg-pattern-subtle pointer-events-none"
          style={{ opacity: 0.65 }}
        />

        {/* Ambient Warm Radial Lighting */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(240,196,203,0.38) 0%, rgba(229,188,169,0.2) 45%, transparent 70%)',
          }}
        />

        {/* Floating Decorative Lanterns */}
        <div className="absolute top-6 left-6 sm:left-12 opacity-70 animate-float-slow pointer-events-none hidden sm:block">
          <LanternSVG className="w-10 h-16 text-[#C87D87]" />
        </div>
        <div className="absolute top-8 right-6 sm:right-12 opacity-70 animate-float-slow pointer-events-none hidden sm:block" style={{ animationDelay: '2s' }}>
          <LanternSVG className="w-8 h-14 text-[#6B7556]" />
        </div>

        {/* Framing Screen Corner Ornaments */}
        <CornerOrnament position="top-left" className="w-16 h-16 top-4 left-4 opacity-40 pointer-events-none" />
        <CornerOrnament position="top-right" className="w-16 h-16 top-4 right-4 opacity-40 pointer-events-none" />
        <CornerOrnament position="bottom-left" className="w-16 h-16 bottom-4 left-4 opacity-40 pointer-events-none" />
        <CornerOrnament position="bottom-right" className="w-16 h-16 bottom-4 right-4 opacity-40 pointer-events-none" />

        {/* ── Center Stage: Envelope Presentation ── */}
        <div className="relative z-10 w-full max-w-[520px] flex flex-col items-center">

          {/* Glowing Animated Prompt */}
          <div
            className="mb-6 sm:mb-8 text-center transition-all duration-300"
            style={{ opacity: state === 'closed' ? 1 : 0, pointerEvents: state === 'closed' ? 'auto' : 'none' }}
          >
            <button
              onClick={handleEnvelopeClick}
              className="font-cinzel inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-[0.2em] text-[#6B7556] bg-[#F0C4CB]/55 border border-[#C87D87]/45 shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 animate-bounce cursor-pointer backdrop-blur-xs"
            >
              <Sparkles className="w-4 h-4 text-[#C87D87]" />
              TAP ENVELOPE TO OPEN
              <Sparkles className="w-4 h-4 text-[#C87D87]" />
            </button>
          </div>

          {/* ── 3D Realistic Envelope ── */}
          <div
            onClick={handleEnvelopeClick}
            className={`relative w-full cursor-pointer group ${state === 'closed' ? 'envelope-idle-float' : ''}`}
            style={{
              // FIX: aspect-ratio locked to the SVGs' own design ratio (520:340)
              // so both flap and pocket are always scaled uniformly — no more
              // independent width/height clamps causing mismatched stretch.
              aspectRatio: '520 / 340',
              maxHeight: 340,
              perspective: '1400px',
              transformStyle: 'preserve-3d',
              transition: isOpening ? 'none' : 'transform 0.4s ease',
              animation: isOpening ? 'envelope-open-lift 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'none',
              transform: 'scale(1) translateY(0)',
            }}
          >
            {/* Expanding glow flash at the moment the seal cracks */}
            <div
              key={`glow-${burstKey}`}
              className="absolute pointer-events-none rounded-full"
              style={{
                left: '50%', top: `${APEX_Y_PCT}%`,
                width: 220, height: 220,
                marginLeft: -110, marginTop: -110,
                zIndex: 6,
                background: 'radial-gradient(circle, rgba(251,234,214,0.9) 0%, rgba(240,196,203,0.45) 45%, transparent 72%)',
                animation: isOpening ? 'glow-pulse 0.9s ease-out forwards' : 'none',
                opacity: 0,
              }}
            />

            {/* Realistic Tabletop Drop Shadow */}
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[92%] h-10 rounded-[100%] pointer-events-none transition-all duration-500"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(107,117,86,0.35) 0%, rgba(200,125,135,0.15) 50%, transparent 75%)',
                filter: 'blur(8px)',
                transform: isFlapOpen ? 'translateX(-50%) scale(1.1)' : 'translateX(-50%) scale(1)',
              }}
            />

            {/* 1. Envelope Back Base Panel */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                zIndex: 1,
                backgroundColor: '#E5BCA9',
                border: '2px solid rgba(200, 125, 135, 0.5)',
                boxShadow: '0 25px 60px -15px rgba(107, 117, 86, 0.35), 0 10px 25px -5px rgba(200, 125, 135, 0.25)',
              }}
            >
              {/* Luxury Geometric Lining Texture */}
              <div
                className="absolute inset-0 bg-pattern-subtle opacity-50"
                style={{ backgroundColor: '#F0C4CB' }}
              />

              {/* Inner Gold Fillet Border */}
              <div
                className="absolute inset-3 rounded-xl pointer-events-none"
                style={{
                  border: '1.5px dashed rgba(200, 125, 135, 0.4)',
                }}
              />
            </div>

            {/* 2. Top Flap — FIX #2: the flap's box is now sized to its OWN
                height (0 → APEX_Y, i.e. down to the fold line) instead of the
                full envelope height (0 → 340). Previously the box spanned the
                whole envelope, so rotating it 180° around its top hinge swung
                the visible triangle by the ENTIRE envelope's height, making it
                detach and float far above the envelope. Now it only swings by
                its own (much smaller) height — a natural envelope-flap arc —
                while still using APEX_Y as its bottom edge/viewBox height, so
                it remains pixel-aligned with the pocket's fold-line below. */}
            <div
              className="absolute top-0 left-0 right-0"
              style={{
                height: `${APEX_Y_PCT}%`,
                zIndex: isFlapOpen ? 1 : 4,
                transformOrigin: '50% 0%',
                transformStyle: 'preserve-3d',
                transition: 'transform 1.6s cubic-bezier(0.34, 1.35, 0.32, 1)',
                transform: isFlapOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
                pointerEvents: 'none',
              }}
            >
              {/* Front of Flap (Closed state) */}
              <svg
                className="absolute inset-0 w-full h-full drop-shadow-md"
                viewBox={`0 0 520 ${APEX_Y}`}
                preserveAspectRatio="none"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <defs>
                  <linearGradient id="flapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C87D87" />
                    <stop offset="55%" stopColor="#D997A0" />
                    <stop offset="100%" stopColor="#E5BCA9" />
                  </linearGradient>
                </defs>

                {/* Main Flap Triangle — apex matches pocket's apex exactly */}
                <polygon points={`0,0 520,0 ${APEX_X},${APEX_Y}`} fill="url(#flapGrad)" />

                {/* Decorative Gold Fillet Lines on Flap */}
                <polyline
                  points={`0,0 ${APEX_X},${APEX_Y} 520,0`}
                  fill="none"
                  stroke="#FBEAD6"
                  strokeWidth="3"
                  opacity="0.8"
                />
                <polyline
                  points={`20,0 ${APEX_X},${APEX_Y - 15} 500,0`}
                  fill="none"
                  stroke="#F0C4CB"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  opacity="0.7"
                />

                {/* Crest Ornament on Apex */}
                <circle cx={APEX_X} cy={APEX_Y} r="4" fill="#FBEAD6" />
              </svg>

              {/* Backside of Flap (visible once flipped open) */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox={`0 0 520 ${APEX_Y}`}
                preserveAspectRatio="none"
                style={{
                  transform: 'rotateY(180deg) rotateZ(180deg)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <polygon points={`0,0 520,0 ${APEX_X},${APEX_Y}`} fill="#E5BCA9" />
                <polyline points={`0,0 ${APEX_X},${APEX_Y} 520,0`} fill="none" stroke="#C87D87" strokeWidth="2" opacity="0.4" />
                <polyline points={`20,0 ${APEX_X},${APEX_Y - 15} 500,0`} fill="none" stroke="#FBEAD6" strokeWidth="1.5" opacity="0.6" />
              </svg>
            </div>

            {/* 3. Front Pocket (Left, Right, Bottom Folds) — same viewBox and
                same apex (260,176) as the flap above, so the two sets of
                fold-lines meet at an identical point at every screen size. */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
              style={{ zIndex: 3 }}
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 520 340"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="pocketLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E5BCA9" />
                    <stop offset="100%" stopColor="#D49F8E" />
                  </linearGradient>
                  <linearGradient id="pocketRightGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#E5BCA9" />
                    <stop offset="100%" stopColor="#D49F8E" />
                  </linearGradient>
                  <linearGradient id="pocketBottomGrad" x1="50%" y1="100%" x2="50%" y2="0%">
                    <stop offset="0%" stopColor="#E5BCA9" />
                    <stop offset="60%" stopColor="#DEAB9A" />
                    <stop offset="100%" stopColor="#F0C4CB" />
                  </linearGradient>
                  <filter id="pocketShadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="-2" stdDeviation="4" floodColor="#6B7556" floodOpacity="0.2" />
                  </filter>
                </defs>

                {/* Left Side Pocket Fold */}
                <polygon points={`0,0 ${APEX_X},${APEX_Y} 0,340`} fill="url(#pocketLeftGrad)" opacity="0.96" />

                {/* Right Side Pocket Fold */}
                <polygon points={`520,0 ${APEX_X},${APEX_Y} 520,340`} fill="url(#pocketRightGrad)" opacity="0.96" />

                {/* Bottom Pocket Fold with Shadow */}
                <polygon
                  points={`0,340 520,340 ${APEX_X},${APEX_Y}`}
                  fill="url(#pocketBottomGrad)"
                  filter="url(#pocketShadow)"
                />

                {/* Bottom Edge Gold Trim */}
                <polyline
                  points={`0,340 ${APEX_X},${APEX_Y} 520,340`}
                  fill="none"
                  stroke="#FBEAD6"
                  strokeWidth="2.5"
                  opacity="0.85"
                />
                <polyline
                  points={`15,340 ${APEX_X},${APEX_Y + 15} 505,340`}
                  fill="none"
                  stroke="#C87D87"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                  opacity="0.6"
                />
              </svg>

              {/* Bottom Corner Monogram Stamp */}
              <div className="absolute bottom-3 right-4 flex items-center gap-1.5 opacity-60">
                <CrescentStar className="w-3.5 h-3.5 text-[#C87D87]" />
                <span className="font-cinzel text-[8px] tracking-[0.25em] text-[#6B7556] uppercase font-bold">
                  S &amp; A
                </span>
              </div>
            </div>

            {/* 4. Royal Embossed Wax Seal — centered exactly on the shared
                apex (APEX_Y_PCT), so it sits precisely where the flap meets
                the pocket at every screen size. On open, it visually CRACKS
                IN HALF and the two pieces fly apart (rather than a uniform
                scale-down), with a sparkle burst radiating outward. */}
            <div
              className="absolute left-1/2 pointer-events-none"
              style={{ top: `${APEX_Y_PCT}%`, zIndex: 5 }}
            >
              {/* Sparkle burst */}
              {SPARKLES.map((s, i) => (
                <Star
                  key={`${burstKey}-${i}`}
                  className="w-3 h-3 text-[#F0C4CB] fill-[#F0C4CB] absolute top-1/2 left-1/2 pointer-events-none"
                  style={{
                    '--tx': `${s.tx}px`,
                    '--ty': `${s.ty}px`,
                    marginLeft: -6,
                    marginTop: -6,
                    animation: isOpening ? `sparkle-burst 1.2s ease-out ${s.delay * 1.6}s forwards` : 'none',
                    opacity: 0,
                  }}
                />
              ))}

              {/* Whole seal — shown only while fully closed */}
              {!isFlapOpen && (
                <div
                  className="absolute top-1/2 left-1/2 w-22 h-22 sm:w-24 sm:h-24 flex items-center justify-center"
                  style={{ transform: 'translate(-50%, -50%)' }}
                >
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#6B7556] drop-shadow-lg">
                    <path
                      d="M50 4 C65 2, 78 8, 86 19 C95 32, 98 48, 92 64 C86 78, 75 92, 58 96 C42 99, 26 94, 15 84 C4 72, 1 56, 5 40 C9 24, 22 10, 38 5 Z"
                      fill="currentColor"
                    />
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#FBEAD6" strokeWidth="2" strokeDasharray="2.5 2.5" opacity="0.75" />
                    <circle cx="50" cy="50" r="33" fill="none" stroke="#F0C4CB" strokeWidth="1" opacity="0.5" />
                  </svg>
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-1">
                    <Heart className="w-4 h-4 text-[#F0C4CB] fill-[#F0C4CB] mb-0.5 animate-pulse" />
                    <span className="font-cinzel text-[8.5px] sm:text-[9.5px] font-bold text-[#FBEAD6] uppercase leading-tight tracking-wider">
                      You Are<br />Invited
                    </span>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-2 h-2 text-[#F0C4CB] fill-[#F0C4CB]" />
                      <span className="font-amiri text-[8px] text-[#FBEAD6]">عقد نكاح</span>
                      <Star className="w-2 h-2 text-[#F0C4CB] fill-[#F0C4CB]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Cracked halves — only rendered during the "opening" beat,
                  each clipped to one half of the same seal artwork so the
                  crack line falls exactly where the whole seal used to be. */}
              {isOpening && ['left', 'right'].map((side) => (
                <div
                  key={side}
                  className="absolute top-1/2 left-1/2 w-22 h-22 sm:w-24 sm:h-24 flex items-center justify-center"
                  style={{
                    clipPath: side === 'left' ? 'inset(0 50% 0 0)' : 'inset(0 0 0 50%)',
                    animation: `seal-crack-${side} 1.1s cubic-bezier(0.4,0,0.2,1) forwards`,
                  }}
                >
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#6B7556] drop-shadow-lg">
                    <path
                      d="M50 4 C65 2, 78 8, 86 19 C95 32, 98 48, 92 64 C86 78, 75 92, 58 96 C42 99, 26 94, 15 84 C4 72, 1 56, 5 40 C9 24, 22 10, 38 5 Z"
                      fill="currentColor"
                    />
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#FBEAD6" strokeWidth="2" strokeDasharray="2.5 2.5" opacity="0.75" />
                    <circle cx="50" cy="50" r="33" fill="none" stroke="#F0C4CB" strokeWidth="1" opacity="0.5" />
                  </svg>
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-1">
                    <Heart className="w-4 h-4 text-[#F0C4CB] fill-[#F0C4CB] mb-0.5" />
                    <span className="font-cinzel text-[8.5px] sm:text-[9.5px] font-bold text-[#FBEAD6] uppercase leading-tight tracking-wider">
                      You Are<br />Invited
                    </span>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-2 h-2 text-[#F0C4CB] fill-[#F0C4CB]" />
                      <span className="font-amiri text-[8px] text-[#FBEAD6]">عقد نكاح</span>
                      <Star className="w-2 h-2 text-[#F0C4CB] fill-[#F0C4CB]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Envelope Bottom Subtitle */}
          <p
            className="font-cormorant italic text-xs sm:text-sm text-[#6B7556]/80 mt-6 tracking-wide transition-opacity duration-300"
            style={{ opacity: state === 'closed' ? 1 : 0 }}
          >
            A sacred celebration of love &amp; faith
          </p>

        </div>
      </div>

      {/* ── Pop-Up Royal Invitation Letter Component ── */}
      <InvitationLetter
        isVisible={state === 'letter-opened'}
        onProceed={handleLetterProceed}
      />
    </>
  );
};