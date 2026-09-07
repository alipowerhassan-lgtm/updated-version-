import React, { useRef, useState } from 'react';

export default function ThreeDTiltCard({ children, className = "", maxTilt = 12, scale = 1.02 }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s cubic-bezier(0.03, 0.98, 0.52, 0.99)'
    });

    setGlareStyle({
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 75%)`,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s ease-out'
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease-out'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', ...style }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Glare Reflection Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
        style={glareStyle}
      />
      <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
