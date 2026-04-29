import React from 'react';
import finalLaptopImage from '../assets/final_cta_laptop_1777426969528.png';

const FinalCTA = () => {
  return (
    <section className="section">
      <div className="container grid grid-2 animate-fade-in" style={{ alignItems: 'center', backgroundColor: '#111827', borderRadius: 'var(--radius-xl)', padding: '4rem', color: '#ffffff' }}>
        <div style={{ paddingRight: '2rem' }}>
          <h2 style={{ color: '#ffffff', marginBottom: '1.5rem' }}>Ready to build something extraordinary?</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '2.5rem' }}>
            Book a free 30-minute strategy call. We map your opportunity and ship a working prototype within days.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Book a Discovery Call</button>
            <button className="btn btn-primary" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent-blue)' }}>Book a Discovery Call</button>
          </div>
        </div>
        <div>
          <img 
            src={finalLaptopImage} 
            alt="Futuristic 3D laptop combined with abstract shapes" 
            style={{ 
              width: '100%', 
              borderRadius: 'var(--radius-lg)' 
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
