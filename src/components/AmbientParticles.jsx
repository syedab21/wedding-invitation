import React, { useEffect, useRef } from 'react';

/**
 * AmbientParticles - Lightweight background drifting petals & sparkles
 * Strictly using the 5-color palette:
 * - #F0C4CB (Soft Rose Pink)
 * - #C87D87 (Muted Mauve / Dusty Rose)
 * - #FBEAD6 (Warm Cream / Soft Ivory)
 * - #6B7556 (Sage Green / Muted Olive)
 * - #E5BCA9 (Warm Peach Beige)
 */
export const AmbientParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(240, 196, 203, 0.45)', // Pink
      'rgba(200, 125, 135, 0.35)', // Mauve
      'rgba(229, 188, 169, 0.40)', // Peach
      'rgba(251, 234, 214, 0.50)', // Cream
      'rgba(107, 117, 86, 0.25)',  // Sage
    ];

    // Responsive particle count (fewer on mobile for max battery/60fps performance)
    const count = width < 768 ? 16 : 28;

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 2,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.6 + 0.2,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      isPetal: Math.random() > 0.4,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;

        if (p.y > height + 10) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x > width + 10) p.x = -10;
        if (p.x < -10) p.x = width + 10;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;

        if (p.isPetal) {
          // Draw subtle organic petal shape
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.5, p.size * 0.8, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw gentle circular sparkle
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-85"
      style={{ willChange: 'transform' }}
    />
  );
};
