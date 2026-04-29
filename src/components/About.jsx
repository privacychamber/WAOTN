import React from 'react';
import aboutImage from '../assets/about_tech_collage_1777426904379.png';

const About = () => {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff', textAlign: 'center' }}>
      <div className="container animate-fade-in delay-100">
        <h2 style={{ marginBottom: '3rem' }}>About Our Company</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '3rem' }}>
          <img 
            src={aboutImage} 
            alt="Sleek modern tech collage" 
            style={{ 
              width: '100%', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2.5rem'
            }} 
          />
          <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 500 }}>
            We unite forward-thinking founders, operators and creators around a single mission: deploying the most advanced AI and no-code tools to build businesses that scale at the speed of thought.
          </p>
        </div>
        
        <button className="btn btn-secondary">Learn More</button>
      </div>
    </section>
  );
};

export default About;
