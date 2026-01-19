
import React from 'react';
import { TranslationSchema, Language, Theme } from '../types';

interface HeroProps {
  t: TranslationSchema;
  lang: Language;
  theme: Theme;
}

const Hero: React.FC<HeroProps> = ({ t, lang, theme }) => {
  return (
    <div className="relative overflow-hidden min-h-[95vh] flex flex-col justify-center items-center text-center px-4 bg-[#004D47]">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Grid Overlay for "Electoral Data" tech feel */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>
      
      {/* Radial Gradient for focus */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,45,42,0.8)_100%)]"></div>
      
      {/* High-end decorative light blobs */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#93E5D6] rounded-full blur-[180px] opacity-10 animate-slow-pulse pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#008E83] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 py-20 px-4">
        <div className="animate-fade-in-up">
           <div className="inline-block mb-8 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-[#93E5D6] text-xs font-bold uppercase tracking-[0.2em]">
             {lang === 'uk' ? 'Дослідження електоральних настроїв 2024' : 'Electoral Sentiment Research 2024'}
           </div>
           
           <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-black leading-[0.95] mb-12 tracking-tighter drop-shadow-2xl">
            {t.hero.title.split(' ').map((word, i) => (
              <span key={i} className={`inline-block mr-2 ${i >= t.hero.title.split(' ').length - 2 ? 'text-[#93E5D6]' : ''}`}>
                {word}
              </span>
            ))}
          </h1>
          
          <div className="flex flex-col items-center gap-12">
            <div className="max-w-2xl mx-auto space-y-4">
               <p className="text-white/90 text-lg md:text-2xl font-medium leading-relaxed drop-shadow-md">
                {t.hero.description}
               </p>
               <p className="text-[#93E5D6]/80 text-sm italic font-light">
                 {t.hero.partnerInfo}
               </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <button className="group relative overflow-hidden bg-white text-[#004D47] px-12 py-5 rounded-sm font-black text-xl transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-tighter">
                <span className="relative z-10 flex items-center gap-4">
                  {lang === 'uk' ? 'Дивитись результати' : 'View Results'}
                  <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </span>
                <div className="absolute inset-0 bg-[#93E5D6] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button className="px-12 py-5 rounded-sm font-bold text-xl border-2 border-white/30 text-white hover:bg-white/10 transition-all uppercase tracking-tighter backdrop-blur-md">
                {t.nav.methodology}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modern floating elements */}
      <div className="absolute bottom-12 right-12 hidden 2xl:block animate-float">
         <div className="bg-white/5 backdrop-blur-2xl p-6 rounded-2xl border border-white/10 shadow-2xl text-white text-left max-w-[280px]">
            <div className="flex justify-between items-start mb-4">
               <div className="w-12 h-12 bg-[#008E83] rounded-lg flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-chart-simple"></i>
               </div>
               <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-[#93E5D6]">LIVE</span>
            </div>
            <p className="text-sm opacity-60 mb-1 uppercase tracking-widest font-bold">Accuracy Level</p>
            <p className="text-3xl font-black mb-2">98.4%</p>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
               <div className="bg-[#93E5D6] h-full w-[98%]"></div>
            </div>
         </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes slow-pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slow-pulse { animation: slow-pulse 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Hero;
