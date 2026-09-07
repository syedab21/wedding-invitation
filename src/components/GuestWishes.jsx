import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { IslamicDivider } from './IslamicDecorations';
import { Send, Sparkles, MessageSquareHeart } from 'lucide-react';

export const GuestWishes = () => {
  const [wishes, setWishes] = useState([
    {
      id: 1,
      name: "Khateeb & Syed Family Relatives",
      message: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fii khair. May Allah bless your union with eternal happiness and tranquility. Aameen!",
      date: "September 2026"
    },
    {
      id: 2,
      name: "College Friends & Well Wishers",
      message: "Heartiest congratulations Abdullah & Sadaf! Wishing you both a beautiful journey filled with love, laughter, and endless success.",
      date: "September 2026"
    }
  ]);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitWish = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: "Just Now"
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
    setSubmitted(true);

    // Confetti celebration using strictly the 5-color palette
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#F0C4CB', '#C87D87', '#FBEAD6', '#6B7556', '#E5BCA9']
      });
    } catch (err) {}

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative py-10 sm:py-16 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-1.5 text-[#C87D87] font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-1 font-semibold">
          <MessageSquareHeart className="w-3.5 h-3.5 text-[#C87D87]" />
          <span>Warm Prayers & Blessings</span>
        </div>

        <h2 className="font-playfair text-2xl sm:text-4xl text-[#6B7556] font-bold mb-2 sm:mb-4">
          Send Your Best Wishes (Dua)
        </h2>

        <IslamicDivider className="w-40 sm:w-56 mx-auto mb-6 sm:mb-10" />

        {/* Wish Input Form */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-[#E5BCA9] mb-8 sm:mb-12 text-left shadow-sm">
          <form onSubmit={handleSubmitWish} className="space-y-3.5 sm:space-y-4">
            <div>
              <label className="block font-cinzel text-[10px] sm:text-xs text-[#C87D87] uppercase tracking-wider mb-1.5 font-bold">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-[#FBEAD6]/90 border border-[#E5BCA9] rounded-xl px-3.5 py-3 text-[#6B7556] placeholder-[#6B7556]/50 focus:outline-none focus:border-[#C87D87] transition-all font-sans text-base font-medium"
              />
            </div>

            <div>
              <label className="block font-cinzel text-[10px] sm:text-xs text-[#C87D87] uppercase tracking-wider mb-1.5 font-bold">
                Your Prayer / Blessing Message
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your prayers and warm wishes for the couple..."
                className="w-full bg-[#FBEAD6]/90 border border-[#E5BCA9] rounded-xl px-3.5 py-3 text-[#6B7556] placeholder-[#6B7556]/50 focus:outline-none focus:border-[#C87D87] transition-all font-sans text-base resize-none font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6B7556] hover:bg-[#586245] text-[#FBEAD6] font-cinzel font-bold text-xs sm:text-sm px-7 py-3.5 min-h-[48px] rounded-full shadow-md active:scale-95 transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              <span>Send Blessings</span>
            </button>

            {submitted && (
              <p className="text-xs font-sans text-[#6B7556] font-bold mt-2 flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-[#C87D87]" />
                Thank you! Your prayer & wish has been shared with the family.
              </p>
            )}
          </form>
        </div>

        {/* Wishes List */}
        <div className="space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto pr-1.5 custom-scrollbar">
          {wishes.map((item) => (
            <div 
              key={item.id}
              className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E5BCA9] text-left relative transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="font-playfair text-base sm:text-lg text-[#6B7556] font-bold truncate mr-2">
                  {item.name}
                </h4>
                <span className="text-[10px] font-sans text-[#C87D87] font-semibold shrink-0">
                  {item.date}
                </span>
              </div>
              <p className="font-cormorant italic text-sm sm:text-base text-[#6B7556]/90 font-medium">
                "{item.message}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
