import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [hoverState, setHoverState] = useState<'default' | 'pointer' | 'card'>('default');
  const [isVisible, setIsVisible] = useState(false);

  // Position references to avoid React re-renders in RAF loop
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // 1. Disable on touch devices or if reduced motion is preferred
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);
    document.body.classList.add('custom-cursor-enabled');

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      setIsVisible(true);

      // Move dot directly without delay for instant responsiveness
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Dynamic hover detection via event delegation
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('input, textarea, [contenteditable="true"]')) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        if (target.closest('[data-cursor="card"], [data-tilt-card]')) {
          setHoverState('card');
        } else if (
          target.closest('a, button, [role="button"], select, [data-cursor="pointer"]')
        ) {
          setHoverState('pointer');
        } else {
          setHoverState('default');
        }
      }
    };

    // Smooth ring trailing with requestAnimationFrame (Linear interpolation)
    const animateRing = () => {
      const ease = 0.16; // smooth trailing speed
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    rafId.current = requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!isEnabled) return null;

  // Determine ring sizing & glow based on hoverState
  let ringClasses = 'w-9 h-9 border-electricBlue/50 bg-electricBlue/5';
  let dotClasses = 'w-2 h-2 bg-electricBlue shadow-[0_0_8px_#3B82F6]';

  if (hoverState === 'pointer') {
    ringClasses = 'w-14 h-14 border-electricBlue/90 bg-electricBlue/15 shadow-[0_0_20px_rgba(59,130,246,0.35)]';
    dotClasses = 'w-2.5 h-2.5 bg-highlightBlue shadow-[0_0_12px_#75B8FF]';
  } else if (hoverState === 'card') {
    ringClasses = 'w-16 h-16 border-highlightBlue/70 bg-electricBlue/10 shadow-[0_0_25px_rgba(59,130,246,0.25)]';
    dotClasses = 'w-2 h-2 bg-electricBlue shadow-[0_0_8px_#3B82F6]';
  }

  return (
    <>
      {/* Central Blue Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${dotClasses}`}
        style={{ willChange: 'transform' }}
      />

      {/* Smooth Trailing Circular Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border transition-[width,height,border-color,background-color,box-shadow,opacity] duration-250 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${ringClasses}`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
};
