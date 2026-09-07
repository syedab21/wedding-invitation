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
    <section className="relative py-10 sm:py-16 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-1.5 text-[#C87D87] font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-1 font-semibold">
          <Clock className="w-3.5 h-3.5 text-[#C87D87]" />
          <span>Countdown To The Auspicious Day</span>
        </div>

        <h2 className="font-playfair text-2xl sm:text-4xl text-[#6B7556] font-bold mb-2 sm:mb-4">
          Counting Down The Moments
        </h2>

        <IslamicDivider className="w-40 sm:w-48 mx-auto mb-6 sm:mb-10" />

        {/* Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-6">
          
          <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E5BCA9] shadow-xs">
            <span className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#6B7556] block">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] sm:text-xs text-[#C87D87] uppercase tracking-widest mt-1.5 block font-semibold">
              Days
            </span>
          </div>

          <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E5BCA9] shadow-xs">
            <span className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#6B7556] block">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] sm:text-xs text-[#C87D87] uppercase tracking-widest mt-1.5 block font-semibold">
              Hours
            </span>
          </div>

          <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E5BCA9] shadow-xs">
            <span className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#6B7556] block">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] sm:text-xs text-[#C87D87] uppercase tracking-widest mt-1.5 block font-semibold">
              Minutes
            </span>
          </div>

          <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E5BCA9] shadow-xs">
            <span className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#6B7556] block">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] sm:text-xs text-[#C87D87] uppercase tracking-widest mt-1.5 block font-semibold">
              Seconds
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
