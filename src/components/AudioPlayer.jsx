import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

/**
 * AudioPlayer - Premium Oriental Acoustic Wedding Soundscape
 * 
 * Supports both:
 * 1. Custom MP3 playback: Place any 'music.mp3' in /public folder and it will automatically play!
 * 2. High-Fidelity Synthesizer: Ethereal concert-hall acoustic harp, oriental santoor & ambient strings
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
  const htmlAudioRef = useRef(null);
  const isUsingHtmlAudio = useRef(false);

  // Ethereal Oriental & Romantic Wedding Composition (Frequencies in Hz)
  const MELODY_SEQUENCE = [
    // Phrase 1: D-minor serene opening
    { notes: [293.66], duration: 0.9, velocity: 0.045 }, // D4
    { notes: [349.23], duration: 0.7, velocity: 0.040 }, // F4
    { notes: [440.00], duration: 1.1, velocity: 0.050 }, // A4
    { notes: [523.25, 587.33], duration: 1.4, velocity: 0.055 }, // C5 + D5 chord
    { notes: [440.00], duration: 0.8, velocity: 0.038 }, // A4
    { notes: [349.23], duration: 1.0, velocity: 0.040 }, // F4

    // Phrase 2: G-minor gentle emotional swell
    { notes: [392.00], duration: 0.8, velocity: 0.045 }, // G4
    { notes: [466.16], duration: 0.7, velocity: 0.042 }, // Bb4
    { notes: [587.33], duration: 1.2, velocity: 0.052 }, // D5
    { notes: [698.46, 587.33], duration: 1.5, velocity: 0.050 }, // F5 + D5
    { notes: [523.25], duration: 0.8, velocity: 0.040 }, // C5
    { notes: [440.00], duration: 1.0, velocity: 0.038 }, // A4

    // Phrase 3: A-major oriental royal cadence
    { notes: [440.00], duration: 0.8, velocity: 0.045 }, // A4
    { notes: [554.37], duration: 0.7, velocity: 0.048 }, // C#5
    { notes: [659.25], duration: 1.3, velocity: 0.052 }, // E5
    { notes: [587.33], duration: 0.8, velocity: 0.042 }, // D5
    { notes: [554.37], duration: 0.7, velocity: 0.040 }, // C#5
    { notes: [440.00], duration: 1.2, velocity: 0.048 }, // A4

    // Phrase 4: Peaceful resolution & sweet harmonic chime
    { notes: [349.23], duration: 0.9, velocity: 0.040 }, // F4
    { notes: [392.00], duration: 0.8, velocity: 0.042 }, // G4
    { notes: [440.00], duration: 1.1, velocity: 0.045 }, // A4
    { notes: [293.66, 440.00, 587.33], duration: 2.6, velocity: 0.060 }, // D4 + A4 + D5 grand triad
  ];

  // Create a synthetic acoustic reverb impulse for deep concert hall space
  const createReverbBuffer = (ctx) => {
    const length = ctx.sampleRate * 2.5; // 2.5 second tail
    const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
    for (let channel = 0; channel < 2; channel++) {
      const data = buffer.getChannelData(channel);
      for (let i = 0; i < length; i++) {
        const decay = Math.exp(-i / (ctx.sampleRate * 0.7));
        data[i] = (Math.random() * 2 - 1) * decay;
      }
    }
    return buffer;
  };

  // Play rich acoustic acoustic harp / santoor note with natural resonance
  const playHarmonicNote = (ctx, masterGain, reverbNode, freq, time, duration, velocity = 0.04) => {
    if (!ctx || ctx.state === 'closed') return;

    try {
      // 3 Oscillators for complex wooden string acoustic timbre
      const osc1 = ctx.createOscillator(); // Main body
      const osc2 = ctx.createOscillator(); // Detuned warmth
      const osc3 = ctx.createOscillator(); // Air harmonic shimmer

      const noteGain = ctx.createGain();
      const noteFilter = ctx.createBiquadFilter();

      osc1.type = 'triangle';
      osc2.type = 'sine';
      osc3.type = 'sine';

      osc1.frequency.setValueAtTime(freq, time);
      osc2.frequency.setValueAtTime(freq * 1.003, time); // warm chorus
      osc3.frequency.setValueAtTime(freq * 2.0, time); // 1st harmonic octave

      // Dynamic acoustic lowpass envelope
      noteFilter.type = 'lowpass';
      noteFilter.frequency.setValueAtTime(freq * 4.5, time);
      noteFilter.frequency.exponentialRampToValueAtTime(freq * 1.2, time + duration * 1.2);
      noteFilter.Q.setValueAtTime(2.0, time);

      // Acoustic pluck amplitude envelope
      noteGain.gain.setValueAtTime(0.0001, time);
      noteGain.gain.linearRampToValueAtTime(velocity, time + 0.025);
      noteGain.gain.exponentialRampToValueAtTime(velocity * 0.4, time + 0.3);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration * 1.8);

      // Routing
      osc1.connect(noteFilter);
      osc2.connect(noteFilter);
      osc3.connect(noteFilter);
      noteFilter.connect(noteGain);

      // Dry path to master
      noteGain.connect(masterGain);

      // Wet path through reverb
      if (reverbNode) {
        const wetGain = ctx.createGain();
        wetGain.gain.setValueAtTime(0.35, time);
        noteGain.connect(wetGain);
        wetGain.connect(reverbNode);
      }

      osc1.start(time);
      osc2.start(time);
      osc3.start(time);

      const stopTime = time + duration * 2.0;
      osc1.stop(stopTime);
      osc2.stop(stopTime);
      osc3.stop(stopTime);
    } catch (e) {}
  };

  // Start deep meditative ambient background strings / drone
  const startAmbientPads = (ctx, masterGain, reverbNode) => {
    stopAmbientPads();

    // D minor 9 ethereal pad chords: D2, A2, F3, C4
    const padFreqs = [73.42, 110.00, 174.61, 261.63];

    padNodesRef.current = padFreqs.map((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(240, ctx.currentTime);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.016 / (i + 1), ctx.currentTime + 3.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      if (reverbNode) {
        const wet = ctx.createGain();
        wet.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.connect(wet);
        wet.connect(reverbNode);
      }

      osc.start();
      return { osc, gain };
    });
  };

  const stopAmbientPads = () => {
    padNodesRef.current.forEach(({ osc, gain }) => {
      try {
        if (gain && audioCtxRef.current) {
          gain.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.4);
        }
        setTimeout(() => {
          try { osc.stop(); } catch (e) {}
        }, 400);
      } catch (e) {}
    });
    padNodesRef.current = [];
  };

  // Main start handler
  const startMusicLoop = async () => {
    if (htmlAudioRef.current) {
      try {
        htmlAudioRef.current.volume = 0.4;
        await htmlAudioRef.current.play();
        isUsingHtmlAudio.current = true;
        return;
      } catch (err) {
        // Fallback to Web Audio synthesizer
      }
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        await audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;

      // Master output gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.12, ctx.currentTime);
      masterGain.connect(ctx.destination);
      ctx.masterGain = masterGain;

      // Concert hall reverb convolver
      let reverbConvolver = null;
      try {
        reverbConvolver = ctx.createConvolver();
        reverbConvolver.buffer = createReverbBuffer(ctx);
        reverbConvolver.connect(masterGain);
      } catch (err) {}

      // Start ambient pad choir
      startAmbientPads(ctx, masterGain, reverbConvolver);

      let stepIndex = 0;

      const scheduleNextStep = () => {
        if (!isPlayingRef.current || !audioCtxRef.current) return;

        const currentStep = MELODY_SEQUENCE[stepIndex % MELODY_SEQUENCE.length];
        const now = ctx.currentTime;

        // Play each note in chord
        currentStep.notes.forEach((freq, chordIdx) => {
          playHarmonicNote(
            ctx,
            masterGain,
            reverbConvolver,
            freq,
            now + chordIdx * 0.05, // gentle humanized strum
            currentStep.duration,
            currentStep.velocity
          );
        });

        stepIndex++;
        const nextIntervalMs = currentStep.duration * 1000 * 0.96;
        sequenceTimerRef.current = setTimeout(scheduleNextStep, nextIntervalMs);
      };

      scheduleNextStep();
    } catch (e) {
      console.log('Audio start:', e);
    }
  };

  const stopMusic = () => {
    if (htmlAudioRef.current) {
      htmlAudioRef.current.pause();
    }

    if (sequenceTimerRef.current) {
      clearTimeout(sequenceTimerRef.current);
      sequenceTimerRef.current = null;
    }

    stopAmbientPads();

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

    // Check for custom audio file support
    const audio = new Audio('./music.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    htmlAudioRef.current = audio;

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

    // Initial play trigger
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
