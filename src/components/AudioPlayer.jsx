import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

/**
 * AudioPlayer - Continuous Romantic Oriental Wedding Melodic Generator
 * Uses Web Audio API to create a rich, peaceful acoustic harp & oriental pad melody.
 * Plays continuously by default on first interaction/touch.
 * 
 * Strict 5-Color Palette:
 * - #F0C4CB (Soft Rose Pink)
 * - #C87D87 (Muted Mauve / Dusty Rose)
 * - #FBEAD6 (Warm Cream / Soft Ivory)
 * - #6B7556 (Sage Green / Muted Olive)
 * - #E5BCA9 (Warm Peach Beige)
 */
export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioCtxRef = useRef(null);
  const isPlayingRef = useRef(true);
  const sequenceTimerRef = useRef(null);
  const padNodesRef = useRef([]);

  // Romantic Oriental & Wedding Pentatonic Melody Notes (Hz)
  // D4, F4, G4, A4, Bb4, C5, D5, E5, F5
  const MELODY_SEQUENCE = [
    // Bar 1 - D minor warmth
    { note: 293.66, duration: 0.6 }, // D4
    { note: 349.23, duration: 0.4 }, // F4
    { note: 440.00, duration: 0.8 }, // A4
    { note: 587.33, duration: 0.6 }, // D5
    { note: 523.25, duration: 0.5 }, // C5
    { note: 440.00, duration: 0.7 }, // A4

    // Bar 2 - G minor romantic swell
    { note: 392.00, duration: 0.6 }, // G4
    { note: 466.16, duration: 0.5 }, // Bb4
    { note: 587.33, duration: 0.8 }, // D5
    { note: 698.46, duration: 0.6 }, // F5
    { note: 587.33, duration: 0.5 }, // D5
    { note: 466.16, duration: 0.7 }, // Bb4

    // Bar 3 - A major oriental cadence
    { note: 440.00, duration: 0.6 }, // A4
    { note: 554.37, duration: 0.5 }, // C#5
    { note: 659.25, duration: 0.8 }, // E5
    { note: 587.33, duration: 0.5 }, // D5
    { note: 554.37, duration: 0.5 }, // C#5
    { note: 440.00, duration: 0.8 }, // A4

    // Bar 4 - Soft resolution & chime
    { note: 349.23, duration: 0.6 }, // F4
    { note: 392.00, duration: 0.5 }, // G4
    { note: 440.00, duration: 0.7 }, // A4
    { note: 293.66, duration: 1.4 }, // D4 (sustained)
  ];

  // Pluck a physical acoustic harp / santur note
  const playPluckNote = (ctx, masterGain, freq, time, duration) => {
    if (!ctx || ctx.state === 'closed') return;

    try {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Dual oscillator for rich acoustic resonance
      osc1.type = 'triangle';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(freq, time);
      osc2.frequency.setValueAtTime(freq * 1.002, time); // Subtle warm detune

      // Warm low-pass acoustic resonance
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(freq * 3.5, time);
      filter.frequency.exponentialRampToValueAtTime(freq * 1.2, time + duration);

      // Natural acoustic pluck envelope
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(0.045, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration * 1.5);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc1.start(time);
      osc2.start(time);
      osc1.stop(time + duration * 1.6);
      osc2.stop(time + duration * 1.6);
    } catch (e) {}
  };

  // Start continuous ambient pads
  const startAmbientPad = (ctx, masterGain) => {
    stopAmbientPad();

    // Warm base chord: D2 (73.4Hz), A2 (110Hz), D3 (146.8Hz), F3 (174.6Hz)
    const padFreqs = [73.42, 110.00, 146.83, 174.61];

    padNodesRef.current = padFreqs.map((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.022 / (i + 1), ctx.currentTime + 3);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc.start();
      return { osc, gain };
    });
  };

  const stopAmbientPad = () => {
    padNodesRef.current.forEach(({ osc, gain }) => {
      try {
        if (gain && audioCtxRef.current) {
          gain.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
        }
        setTimeout(() => {
          try { osc.stop(); } catch (e) {}
        }, 500);
      } catch (e) {}
    });
    padNodesRef.current = [];
  };

  // Continuous music loop sequencer
  const startMusicLoop = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);
      audioCtxRef.current.masterGain = masterGain;

      startAmbientPad(ctx, masterGain);

      let stepIndex = 0;

      const scheduleNextStep = () => {
        if (!isPlayingRef.current || !audioCtxRef.current) return;

        const currentStep = MELODY_SEQUENCE[stepIndex % MELODY_SEQUENCE.length];
        playPluckNote(ctx, masterGain, currentStep.note, ctx.currentTime, currentStep.duration);

        stepIndex++;
        const nextIntervalMs = currentStep.duration * 1000 * 0.95;
        sequenceTimerRef.current = setTimeout(scheduleNextStep, nextIntervalMs);
      };

      scheduleNextStep();
    } catch (e) {
      console.log('Audio init status:', e);
    }
  };

  const stopMusic = () => {
    if (sequenceTimerRef.current) {
      clearTimeout(sequenceTimerRef.current);
      sequenceTimerRef.current = null;
    }
    stopAmbientPad();
    if (audioCtxRef.current && audioCtxRef.current.masterGain) {
      try {
        audioCtxRef.current.masterGain.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.3);
      } catch (e) {}
    }
  };

  const toggleAudio = (e) => {
    if (e) e.stopPropagation();
    if (isPlaying) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      stopMusic();
    } else {
      isPlayingRef.current = true;
      setIsPlaying(true);
      startMusicLoop();
    }
  };

  useEffect(() => {
    isPlayingRef.current = isPlaying;

    // Auto-start on first user interaction anywhere on the screen
    const handleFirstInteraction = () => {
      if (isPlayingRef.current) {
        startMusicLoop();
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('scroll', handleFirstInteraction, { passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { passive: true });

    // Attempt direct start immediately if permitted
    startMusicLoop();

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      stopMusic();
    };
  }, []);

  return (
    <div 
      className="fixed z-50 pointer-events-auto"
      style={{
        bottom: 'max(14px, env(safe-area-inset-bottom))',
        right: 'max(14px, env(safe-area-inset-right))',
      }}
    >
      <button
        type="button"
        onClick={toggleAudio}
        className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-[#6B7556]/95 hover:bg-[#586245] active:scale-95 text-[#FBEAD6] border border-[#E5BCA9] rounded-full shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer animate-shaky-button"
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        aria-label="Toggle Background Music"
        style={{ touchAction: 'manipulation' }}
      >
        {/* Subtle spinning gold ring when music is playing */}
        {isPlaying && (
          <span 
            className="absolute inset-[-3px] rounded-full border border-dashed border-[#F0C4CB]/70 animate-[spin_8s_linear_infinite] pointer-events-none" 
          />
        )}

        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#F0C4CB] animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-[#FBEAD6]/70" />
          )}

          {/* Mini active badge */}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F0C4CB] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F0C4CB]"></span>
            </span>
          )}
        </div>
      </button>
    </div>
  );
};
