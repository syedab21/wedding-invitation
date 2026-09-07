import React, { useState, useEffect } from 'react';
import { IslamicDivider } from './IslamicDecorations';
import { Clock } from 'lucide-react';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-09-20T18:30:00+05:30').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-2 sm:py-6 px-1 sm:px-4">
      <div className="w-full text-center">
        
        <div className="inline-flex items-center gap-1 text-[#C87D87] font-cinzel text-[9px] sm:text-xs uppercase tracking-[0.2em] mb-0.5 font-semibold">
          <Clock className="w-3 h-3 text-[#C87D87]" />
          <span>Countdown</span>
        </div>

        <h2 className="font-playfair text-xl sm:text-3xl text-[#6B7556] font-bold mb-1">
          Counting Down The Moments
        </h2>

        <IslamicDivider className="w-32 sm:w-44 mx-auto mb-3 sm:mb-6" />

        {/* Counter Grid */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-4">
          
          <div className="glass-card rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-[#E5BCA9] shadow-xs">
            <span className="font-cinzel text-xl sm:text-4xl font-extrabold text-[#6B7556] block leading-tight">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-sans text-[8px] sm:text-[10px] text-[#C87D87] uppercase tracking-wider mt-0.5 block font-semibold">
              Days
            </span>
          </div>

          <div className="glass-card rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-[#E5BCA9] shadow-xs">
            <span className="font-cinzel text-xl sm:text-4xl font-extrabold text-[#6B7556] block leading-tight">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-sans text-[8px] sm:text-[10px] text-[#C87D87] uppercase tracking-wider mt-0.5 block font-semibold">
              Hours
            </span>
          </div>

          <div className="glass-card rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-[#E5BCA9] shadow-xs">
            <span className="font-cinzel text-xl sm:text-4xl font-extrabold text-[#6B7556] block leading-tight">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-sans text-[8px] sm:text-[10px] text-[#C87D87] uppercase tracking-wider mt-0.5 block font-semibold">
              Mins
            </span>
          </div>

          <div className="glass-card rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-[#E5BCA9] shadow-xs">
            <span className="font-cinzel text-xl sm:text-4xl font-extrabold text-[#6B7556] block leading-tight">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-sans text-[8px] sm:text-[10px] text-[#C87D87] uppercase tracking-wider mt-0.5 block font-semibold">
              Secs
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
