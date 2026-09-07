import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { QuranVerse } from './components/QuranVerse';
import { EventDetails } from './components/EventDetails';
import { Countdown } from './components/Countdown';
import { VenueSection } from './components/VenueSection';
import { RSVPSection } from './components/RSVPSection';
import { GuestWishes } from './components/GuestWishes';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { EnvelopeModal } from './components/EnvelopeModal';
import { AmbientParticles } from './components/AmbientParticles';
import { FloatingNav } from './components/FloatingNav';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(true);

  return (
    <div className="relative min-h-screen bg-pattern-subtle text-[#6B7556] selection:bg-[#C87D87] selection:text-[#FBEAD6] overflow-x-hidden">
      {/* Background Soft Radial Glows & Ambient Particles */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F0C4CB]/20 via-transparent to-[#FBEAD6] z-0" />
      <AmbientParticles />

      {/* Floating Audio Controller */}
      <AudioPlayer />

      {/* Floating Quick Navigation Pill (Visible once envelope is open) */}
      {!isEnvelopeOpen && (
        <FloatingNav onReopenEnvelope={() => setIsEnvelopeOpen(true)} />
      )}

      {/* Interactive 3D Envelope Opening Experience */}
      <EnvelopeModal 
        isOpen={isEnvelopeOpen} 
        onOpen={() => setIsEnvelopeOpen(false)} 
      />

      {/* Main Single Page Nikah Invitation Content */}
      <main className="relative z-10 max-w-3xl mx-auto px-2.5 sm:px-4 py-1.5 sm:py-6 space-y-2 sm:space-y-6 pb-20 sm:pb-24">
        <HeroSection />
        <CoupleSection />
        <QuranVerse />
        <EventDetails />
        <Countdown />
        <VenueSection />
        <RSVPSection />
        <GuestWishes />
        <Footer />
      </main>
    </div>
  );
}
