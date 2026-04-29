import React from 'react';
import heroImage from '../assets/hero_abstract_fluid_1777426863430.png';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container grid grid-2 animate-fade-in" style={{ alignItems: 'center' }}>
        <div style={{ paddingRight: '2rem' }}>
          <h1>Build the future, faster than ever.</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>
            WeAreOneTechNation is a futuristic IT studio crafting AI agents, automations, and no-code platforms that turn ambitious ideas into shipped products.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Book a Discovery Call</a>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(74,125,255,0.1) 0%, rgba(247,248,250,0) 70%)',
            zIndex: -1,
            borderRadius: '50%'
          }}></div>
          <img 
            src={heroImage} 
            alt="Abstract 3D futuristic fluid sculpture" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: 'var(--radius-xl)', 
              boxShadow: 'var(--shadow-lg)' 
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
