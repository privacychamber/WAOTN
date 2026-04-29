import React from 'react';
import servicesImage from '../assets/services_chrome_head_1777426925812.png';

const Services = () => {
  const services = [
    {
      title: 'AI Agents & Chatbots',
      desc: 'Custom agents trained on your data for support, sales, ops and internal copilots.'
    },
    {
      title: 'Workflow Automation',
      desc: 'Automation pipelines that connect apps & replace hours of manual work.'
    },
    {
      title: 'No-Code Websites & Apps',
      desc: 'High-performance websites and apps built rapidly without traditional dev.'
    },
    {
      title: 'Data & RAG Systems',
      desc: 'AI systems powered by your data for smarter insights and workflows.'
    }
  ];

  return (
    <section className="section">
      <div className="container animate-fade-in delay-200">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <h2>Everything trending in AI, low-code and no-code — under one roof.</h2>
        </div>

        <div className="grid grid-4">
          {services.map((service, idx) => (
            <div key={idx} style={{ 
              backgroundColor: '#ffffff', 
              padding: '2rem', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: 'var(--shadow-sm)',
              transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}>
              <img 
                src={servicesImage} 
                alt={service.title} 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  border: '1px solid #E5E7EB'
                }} 
              />
              <h3 style={{ fontSize: '1.25rem' }}>{service.title}</h3>
              <p style={{ fontSize: '1rem', marginBottom: 0 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
