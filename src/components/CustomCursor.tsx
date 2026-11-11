import React, { useEffect, useRef, useState, useCallback } from 'react';

type CursorState = 'default' | 'link' | 'button' | 'card' | 'text' | 'image';

/**
 * Advanced custom cursor inspired by serhii.website
 * - Inner dot: instant tracking, mix-blend-mode difference
 * - Outer ring: smooth lerp follower with contextual states
 * - Magnetic attraction on [data-magnetic] elements
 * - Label text inside ring for links/buttons
 * - Zero React re-renders in the RAF loop (pure DOM manipulation)
 */
export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [cursorLabel, setCursorLabel] = useState('');

  // DOM refs — mutated directly in RAF to avoid React re-renders
  const dotRef        = useRef<HTMLDivElement>(null);
  const ringRef       = useRef<HTMLDivElement>(null);
  const labelRef      = useRef<HTMLSpanElement>(null);
  const rafId         = useRef<number | null>(null);
  const mouse         = useRef({ x: -200, y: -200 });
  const ring          = useRef({ x: -200, y: -200 });
  const magnetTarget  = useRef<HTMLElement | null>(null);

  // Magnetic pull — applied to target element's transform
  const applyMagnet = useCallback((e: MouseEvent) => {
    if (!magnetTarget.current) return;
    const el = magnetTarget.current;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.28;
    const dy = (e.clientY - cy) * 0.28;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);

  const resetMagnet = useCallback(() => {
    if (!magnetTarget.current) return;
    const el = magnetTarget.current;
    el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
    el.style.transform = 'translate(0px,0px)';
    setTimeout(() => { if (el) el.style.transition = ''; }, 500);
    magnetTarget.current = null;
  }, []);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    setIsEnabled(true);
    document.body.classList.add('custom-cursor-enabled');

    // ── RAF animation loop — only DOM mutations, no setState ──
    const animateRing = () => {
      const ease = 0.13; // trailing speed (lower = more lag)
      ring.current.x += (mouse.current.x - ring.current.x) * ease;
      ring.current.y += (mouse.current.y - ring.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(animateRing);
    };
    rafId.current = requestAnimationFrame(animateRing);

    // ── Mouse move: instant dot, deferred ring via RAF ──
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      setIsVisible(true);

      // Apply magnetic pull if inside a magnetic zone
      if (magnetTarget.current) applyMagnet(e);
    };

    // ── Hover detection via event delegation ──
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const inputEl = target.closest('input, textarea, [contenteditable]');
      if (inputEl) { setCursorState('text'); setCursorLabel(''); return; }

      const magnetEl = target.closest<HTMLElement>('[data-magnetic]');
      if (magnetEl) {
        magnetTarget.current = magnetEl;
        setCursorState('button');
        setCursorLabel(magnetEl.dataset.cursorLabel || 'OPEN');
        return;
      }

      const cardEl = target.closest<HTMLElement>('[data-cursor="card"]');
      if (cardEl) { setCursorState('card'); setCursorLabel('VIEW'); return; }

      const imgEl = target.closest('img');
      if (imgEl) { setCursorState('image'); setCursorLabel(''); return; }

      const btnEl = target.closest('button, [role="button"]');
      if (btnEl) { setCursorState('button'); setCursorLabel(''); return; }

      const linkEl = target.closest('a');
      if (linkEl) { setCursorState('link'); setCursorLabel(''); return; }

      setCursorState('default');
      setCursorLabel('');
    };

    const onMouseOut = (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement | null;

      // If leaving a magnetic element
      if (magnetTarget.current && !magnetTarget.current.contains(relatedTarget)) {
        resetMagnet();
        setCursorState('default');
        setCursorLabel('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      resetMagnet();
    };
  }, [applyMagnet, resetMagnet]);

  if (!isEnabled) return null;

  // ── Visual state mappings ──
  const ringStyle: Record<CursorState, {
    size: number;
    borderColor: string;
    bg: string;
    mixBlend: string;
  }> = {
    default: { size: 32,  borderColor: 'rgba(240,235,224,0.6)',  bg: 'transparent',               mixBlend: 'difference' },
    link:    { size: 56,  borderColor: 'rgba(96,165,250,0.9)',   bg: 'rgba(59,130,246,0.08)',      mixBlend: 'normal' },
    button:  { size: 48,  borderColor: 'rgba(240,235,224,0.9)',  bg: 'rgba(240,235,224,0.06)',     mixBlend: 'normal' },
    card:    { size: 72,  borderColor: 'rgba(59,130,246,0.6)',   bg: 'rgba(59,130,246,0.05)',      mixBlend: 'normal' },
    text:    { size: 24,  borderColor: 'rgba(240,235,224,0.4)',  bg: 'transparent',               mixBlend: 'difference' },
    image:   { size: 60,  borderColor: 'rgba(240,235,224,0.7)',  bg: 'rgba(0,0,0,0.3)',           mixBlend: 'exclusion' },
  };

  const rs = ringStyle[cursorState];

  return (
    <>
      {/* Inner dot — instant tracking, mix-blend difference */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: cursorState === 'button' ? '6px' : '5px',
          height: cursorState === 'button' ? '6px' : '5px',
          background: '#F0EBE0',
          mixBlendMode: 'difference',
          willChange: 'transform',
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.15s ease',
        }}
      />

      {/* Outer ring — smooth lerp follower */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full flex items-center justify-center ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: `${rs.size}px`,
          height: `${rs.size}px`,
          border: `1px solid ${rs.borderColor}`,
          background: rs.bg,
          mixBlendMode: rs.mixBlend as React.CSSProperties['mixBlendMode'],
          willChange: 'transform',
          transition: `width 0.35s cubic-bezier(0.16,1,0.3,1),
                       height 0.35s cubic-bezier(0.16,1,0.3,1),
                       border-color 0.25s ease,
                       background 0.25s ease,
                       opacity 0.15s ease`,
        }}
      >
        {/* Label inside ring for card/link states */}
        {cursorLabel && (
          <span
            ref={labelRef}
            className="cursor-label text-warmWhite pointer-events-none select-none"
            style={{ fontSize: '0.5rem', letterSpacing: '0.12em', opacity: 0.9 }}
          >
            {cursorLabel}
          </span>
        )}
      </div>
    </>
  );
};
