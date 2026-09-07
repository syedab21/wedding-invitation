import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { IslamicDivider } from './IslamicDecorations';
import { Send, Sparkles, MessageSquareHeart, Loader2 } from 'lucide-react';
import { EMAILJS_CONFIG } from '../config/emailjs';

export const GuestWishes = () => {
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitWish = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const guestName = name.trim();
    const guestMessage = message.trim();

    const newWish = {
      id: Date.now(),
      name: guestName,
      message: guestMessage,
      date: "Just Now"
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
    setSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#F0C4CB', '#C87D87', '#FBEAD6', '#6B7556', '#E5BCA9']
      });
    } catch (err) {}

    // Send email notification via EmailJS if configured
    if (
      EMAILJS_CONFIG.SERVICE_ID && 
      EMAILJS_CONFIG.TEMPLATE_ID && 
      EMAILJS_CONFIG.PUBLIC_KEY &&
      EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID'
    ) {
      setIsSending(true);
      try {
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          {
            from_name: guestName,
            guest_name: guestName,
            message: guestMessage,
            guest_dua: guestMessage,
            date: new Date().toLocaleString(),
            event_name: 'Nikah Ceremony of Syed Abdullah & Sadaf Ameen',
          },
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      } catch (error) {
        console.error('EmailJS notification error:', error);
      } finally {
        setIsSending(false);
      }
    }

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative py-2 sm:py-6 px-1 sm:px-4">
      <div className="w-full text-center">
        
        <div className="inline-flex items-center gap-1 text-[#C87D87] font-cinzel text-[9px] sm:text-xs uppercase tracking-[0.2em] mb-0.5 font-semibold">
          <MessageSquareHeart className="w-3 h-3 text-[#C87D87]" />
          <span>Warm Prayers & Blessings</span>
        </div>

        <h2 className="font-playfair text-xl sm:text-3xl text-[#6B7556] font-bold mb-1">
          Send Your Best Wishes (Dua)
        </h2>

        <IslamicDivider className="w-32 sm:w-48 mx-auto mb-3 sm:mb-6" />

        {/* Wish Input Form */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-[#E5BCA9] mb-4 sm:mb-8 text-left shadow-xs">
          <form onSubmit={handleSubmitWish} className="space-y-2.5 sm:space-y-3">
            <div>
              <label className="block font-cinzel text-[9px] sm:text-[10px] text-[#C87D87] uppercase tracking-wider mb-1 font-bold">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-[#FBEAD6]/90 border border-[#E5BCA9] rounded-xl px-3 py-2 text-[#6B7556] placeholder-[#6B7556]/50 focus:outline-none focus:border-[#C87D87] transition-all font-sans text-sm font-medium"
              />
            </div>

            <div>
              <label className="block font-cinzel text-[9px] sm:text-[10px] text-[#C87D87] uppercase tracking-wider mb-1 font-bold">
                Your Prayer / Blessing Message
              </label>
              <textarea
                required
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your prayers for the couple..."
                className="w-full bg-[#FBEAD6]/90 border border-[#E5BCA9] rounded-xl px-3 py-2 text-[#6B7556] placeholder-[#6B7556]/50 focus:outline-none focus:border-[#C87D87] transition-all font-sans text-sm resize-none font-medium"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#6B7556] hover:bg-[#586245] text-[#FBEAD6] font-cinzel font-bold text-[11px] sm:text-xs px-5 py-2.5 min-h-[40px] rounded-full shadow-xs active:scale-95 transition-all duration-200 animate-shaky-button cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Sending Blessings...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Blessings</span>
                </>
              )}
            </button>

            {submitted && (
              <p className="text-[11px] font-sans text-[#6B7556] font-bold mt-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C87D87]" />
                Thank you! Your prayer & wish has been shared.
              </p>
            )}
          </form>
        </div>

        {/* Wishes List */}
        <div className="space-y-2 sm:space-y-3 max-h-48 sm:max-h-64 overflow-y-auto pr-1 custom-scrollbar">
          {wishes.map((item) => (
            <div 
              key={item.id}
              className="glass-card rounded-xl p-3 sm:p-4 border border-[#E5BCA9] text-left relative shadow-xs"
            >
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-playfair text-sm sm:text-base text-[#6B7556] font-bold truncate mr-2">
                  {item.name}
                </h4>
                <span className="text-[9px] font-sans text-[#C87D87] font-semibold shrink-0">
                  {item.date}
                </span>
              </div>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#6B7556]/90 font-medium">
                "{item.message}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
