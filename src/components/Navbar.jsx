import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="cursor-pointer">
          <Logo className="h-10 md:h-12" />
        </div>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium font-sans">
          <a href="#services" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">Services</a>
          <a href="#process" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">Process</a>
          <a href="#work" className="hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">Work</a>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5 text-brand-cyan" /> : <Moon className="w-5 h-5 text-brand-deep" />}
          </button>
          
          <button className="hidden sm:block px-6 py-2.5 rounded-full bg-brand-deep dark:bg-brand-blue text-white text-sm font-semibold shadow-[0_0_15px_rgba(27,58,146,0.4)] dark:shadow-[0_0_15px_rgba(74,125,255,0.4)] hover:scale-105 transition-all">
            Get Started
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
