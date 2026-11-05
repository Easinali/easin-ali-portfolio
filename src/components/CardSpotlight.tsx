import React, { useRef, useState, useEffect } from 'react';

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  enableTilt?: boolean;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  className = '',
  maxTilt = 4,
  enableTilt = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [tilt, setTilt] = useState<{ rotateX: number; rotateY: number }>({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;
      setTilt({ rotateX, rotateY });
    }
  };

  const handleMouseEnter = () => {
    if (isTouch) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setMousePos(null);
  };

  return (
    <div
      ref={cardRef}
      data-cursor="card"
      data-tilt-card="true"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        transform: enableTilt && isHovered && !isTouch
          ? `perspective(1000px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) translateZ(4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
        willChange: 'transform',
      }}
      {...props}
    >
      {/* Dynamic Radial Spotlight Overlay */}
      {isHovered && mousePos && !isTouch && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.14), transparent 60%)`,
          }}
        />
      )}

      {/* Subtle Border Glow on Hover */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-[inherit] border transition-opacity duration-300 ${
          isHovered ? 'border-electricBlue/40 opacity-100' : 'border-transparent opacity-0'
        }`}
      />

      {children}
    </div>
  );
};

