import React from 'react';

const Logo = ({ className = "h-12" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img src="/logo.png" alt="WeAreOneTechNation Logo" className="h-full w-auto object-contain drop-shadow-[0_0_8px_rgba(74,125,255,0.4)]" />
    </div>
  );
};

export default Logo;
