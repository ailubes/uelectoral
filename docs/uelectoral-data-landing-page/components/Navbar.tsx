
import React, { useState } from 'react';
import { Language, Theme, TranslationSchema } from '../types';
import { Logo } from '../constants';

interface NavbarProps {
  lang: Language;
  theme: Theme;
  toggleLang: () => void;
  toggleTheme: () => void;
  t: TranslationSchema;
}

const Navbar: React.FC<NavbarProps> = ({ lang, theme, toggleLang, toggleTheme, t }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.about, href: '#features' },
    { name: t.nav.methodology, href: '#' },
    { name: 'Вектор руху', href: '#' }, // Specific link seen in mockup
    { name: t.nav.president, href: '#' },
    { name: t.nav.parliament, href: '#' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-theme border-b ${theme === 'dark' ? 'bg-[#121a1d]/95 border-slate-800' : 'bg-white/95 border-slate-100'} backdrop-blur-md`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Logo dark={theme === 'dark'} />
        </div>

        {/* Desktop Links - matching the mockup's centered/spaced style */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-[13px] font-semibold tracking-wide uppercase hover:text-[#008E83] transition-colors ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <button 
              onClick={toggleLang} 
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-[10px] font-bold uppercase hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {lang === 'uk' ? 'UK' : 'EN'}
            </button>
            
            <button 
              onClick={toggleTheme} 
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:text-[#008E83] transition-all"
            >
              {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden absolute top-20 left-0 w-full p-8 flex flex-col gap-6 border-b ${theme === 'dark' ? 'bg-[#121a1d] border-slate-800' : 'bg-white border-slate-100 shadow-2xl animate-fade-in'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-bold tracking-tight"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 pt-4">
             <button onClick={toggleLang} className="flex-1 py-4 border rounded-xl font-bold uppercase">{lang === 'uk' ? 'Українська' : 'English'}</button>
             <button onClick={toggleTheme} className="flex-1 py-4 border rounded-xl font-bold uppercase">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </nav>
  );
};

export default Navbar;
