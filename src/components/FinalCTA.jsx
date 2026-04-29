import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import finalLaptopImage from '../assets/final_cta_laptop_1777426969528.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FinalCTA = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%"
      }
    });

    tl.fromTo('.cta-text', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    )
    .fromTo('.cta-image',
      { opacity: 0, scale: 0.9, x: 30 },
      { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power3.out" },
      "-=0.4"
    );

    gsap.to('.cta-image-float', {
      y: -15,
      rotation: -1,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 relative px-6 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative shadow-2xl">
        {/* Animated gradient mesh background - forced dark for CTA impact */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-90"></div>
        <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[2px]"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 md:p-20 items-center">
          <div>
            <h2 className="cta-text text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">extraordinary?</span>
            </h2>
            <p className="cta-text text-xl text-gray-300 mb-10 max-w-lg">
              Book a free 30-minute strategy call. We map your opportunity and ship a working prototype within days.
            </p>
            <div className="cta-text flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-white text-brand-dark font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform transition-all duration-300 hover:scale-105 active:scale-95">
                Book a Discovery Call
              </button>
              <button className="px-8 py-4 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white font-bold text-lg hover:bg-white/15 transition-colors transform hover:scale-105 active:scale-95">
                View Pricing
              </button>
            </div>
          </div>
          
          <div className="cta-image relative">
            <div className="absolute inset-0 bg-brand-cyan/20 blur-[100px] rounded-full"></div>
            <img 
              src={finalLaptopImage} 
              alt="Futuristic 3D laptop" 
              className="cta-image-float w-full relative z-10 rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
