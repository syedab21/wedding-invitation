import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);

  const toggleAudio = () => {
    if (!isPlaying) {
      startAmbientAudio();
      setIsPlaying(true);
    } else {
      stopAmbientAudio();
      setIsPlaying(false);
    }
  };

  const startAmbientAudio = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.07, ctx.currentTime);
      masterGain.connect(ctx.destination);

      const freqs = [146.83, 220.00, 293.66, 349.23, 440.00];
      
      const oscillators = freqs.map((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + i * 0.1, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.02, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(gain.gain);
        lfo.start();

        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
        return { osc, lfo };
      });

      audioCtxRef.current.activeNodes = oscillators;
      audioCtxRef.current.masterGain = masterGain;
    } catch (e) {
      console.log('Audio init prevented:', e);
    }
  };

  const stopAmbientAudio = () => {
    if (audioCtxRef.current && audioCtxRef.current.activeNodes) {
      audioCtxRef.current.activeNodes.forEach(({ osc, lfo }) => {
        try {
          osc.stop();
          lfo.stop();
        } catch (e) {}
      });
      audioCtxRef.current.activeNodes = null;
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientAudio();
    };
  }, []);

  return (
    <div 
      className="fixed z-50 pointer-events-auto"
      style={{
        bottom: 'max(16px, env(safe-area-inset-bottom))',
        right: 'max(16px, env(safe-area-inset-right))',
      }}
    >
      <button
        onClick={toggleAudio}
        className="group relative flex items-center gap-2.5 bg-[#6B7556]/95 hover:bg-[#586245] active:scale-95 text-[#FBEAD6] border border-[#E5BCA9] px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] min-w-[44px] rounded-full shadow-xl backdrop-blur-md transition-all duration-200"
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        aria-label="Toggle Background Music"
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FBEAD6] animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-[#FBEAD6]/75" />
          )}
        </div>
        
        <span className="text-[11px] sm:text-xs font-cinzel font-semibold tracking-wider text-[#FBEAD6] hidden sm:inline">
          {isPlaying ? "Music On" : "Play Music"}
        </span>

        {isPlaying && (
          <div className="flex items-end gap-1 h-3.5">
            <span className="w-0.5 bg-[#FBEAD6] animate-[bounce_1s_infinite_100ms] h-2.5" />
            <span className="w-0.5 bg-[#F0C4CB] animate-[bounce_1s_infinite_300ms] h-3.5" />
            <span className="w-0.5 bg-[#FBEAD6] animate-[bounce_1s_infinite_200ms] h-2" />
          </div>
        )}
      </button>
    </div>
  );
};
