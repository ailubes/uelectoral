
import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { TRANSLATIONS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DataOverview from './components/DataOverview';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('uk');
  const [theme, setTheme] = useState<Theme>('light');

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleLang = () => setLang(prev => prev === 'uk' ? 'en' : 'uk');
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <div className={`min-h-screen transition-theme ${theme === 'dark' ? 'bg-[#121a1d] text-white' : 'bg-white text-[#23363D]'}`}>
      <Navbar 
        lang={lang} 
        theme={theme} 
        toggleLang={toggleLang} 
        toggleTheme={toggleTheme} 
        t={t} 
      />
      
      <main>
        <Hero lang={lang} t={t} theme={theme} />
        
        <section id="features" className="py-20 px-4">
          <Features t={t} />
        </section>

        <section id="data" className="py-20 bg-slate-50 dark:bg-[#1a2529] transition-theme">
          <DataOverview lang={lang} />
        </section>

        <section className="py-20 px-4 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === 'uk' ? 'Готові зануритися в дані?' : 'Ready to dive into the data?'}
          </h2>
          <p className="text-lg opacity-80 mb-10">
            {lang === 'uk' 
              ? 'Наш проєкт надає найактуальніші соціологічні дослідження України.' 
              : 'Our project provides the most up-to-date sociological research in Ukraine.'}
          </p>
          <button className="bg-[#008E83] hover:bg-[#007369] text-white px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl">
            {t.nav.cta}
          </button>
        </section>
      </main>

      <Footer t={t} lang={lang} />
    </div>
  );
};

export default App;
