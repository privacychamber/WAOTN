import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5 bg-bg-light dark:bg-bg-dark pt-16 pb-8 relative overflow-hidden transition-colors duration-500">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand-blue/30 dark:via-brand-cyan/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-brand-blue to-brand-cyan shadow-[0_0_10px_rgba(74,125,255,0.3)] dark:shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
            WeAreOneTechNation
          </div>
          
          <div className="flex gap-8 font-medium">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">Twitter</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">GitHub</a>
          </div>
        </div>
        
        <div className="text-center text-gray-500 dark:text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} WeAreOneTechNation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
