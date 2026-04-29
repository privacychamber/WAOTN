import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#ffffff', padding: '3rem 0', borderTop: '1px solid #E5E7EB' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
          WeAreOneTechNation
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--accent-blue)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Twitter</a>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--accent-blue)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>LinkedIn</a>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={e => e.target.style.color = 'var(--accent-blue)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>GitHub</a>
        </div>
      </div>
      <div className="container" style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.875rem', color: '#9CA3AF' }}>
        &copy; {new Date().getFullYear()} WeAreOneTechNation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
