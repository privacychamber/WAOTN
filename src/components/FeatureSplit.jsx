import React from 'react';
import laptopImage from '../assets/laptop_mockup_1777426948163.png';

const FeatureSplit = () => {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container grid grid-2 animate-fade-in delay-300" style={{ alignItems: 'center' }}>
        <div>
          <img 
            src={laptopImage} 
            alt="Premium minimal futuristic 3D laptop" 
            style={{ 
              width: '100%', 
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-lg)'
            }} 
          />
        </div>
        <div style={{ paddingLeft: '2rem' }}>
          <h2>Get Great Websites With Generative Media & AI Strategy</h2>
          <p>
            We map your stack, identify high-ROI use cases and build a 60-day roadmap that delivers. AI-driven image, video and voice production for marketing, product and brand storytelling.
          </p>
          <button className="btn btn-primary">Book a Discovery Call</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;
