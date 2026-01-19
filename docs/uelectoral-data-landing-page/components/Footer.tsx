
import React from 'react';
import { TranslationSchema, Language } from '../types';
import { Logo } from '../constants';

interface FooterProps {
  t: TranslationSchema;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  return (
    <footer className="bg-[#23363D] text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <Logo dark={true} className="mb-6" />
          <p className="text-sm opacity-60 leading-relaxed mb-6">
            {lang === 'uk' 
              ? 'Незалежний проєкт з моніторингу електоральних настроїв та політичних процесів в Україні.' 
              : 'An independent project for monitoring electoral sentiments and political processes in Ukraine.'}
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#008E83] transition-colors">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#008E83] transition-colors">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#008E83] transition-colors">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">{t.footer.links}</h4>
          <ul className="flex flex-col gap-4 opacity-70">
            <li><a href="#" className="hover:text-[#93E5D6] transition-colors">{t.nav.home}</a></li>
            <li><a href="#features" className="hover:text-[#93E5D6] transition-colors">{t.nav.about}</a></li>
            <li><a href="#" className="hover:text-[#93E5D6] transition-colors">{t.nav.methodology}</a></li>
            <li><a href="#" className="hover:text-[#93E5D6] transition-colors">{t.nav.president}</a></li>
            <li><a href="#" className="hover:text-[#93E5D6] transition-colors">{t.nav.parliament}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">{t.footer.contact}</h4>
          <ul className="flex flex-col gap-4 opacity-70">
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-[#008E83]"></i>
              info@uelectoral.org
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-[#008E83]"></i>
              +380 (44) 123 45 67
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-[#008E83]"></i>
              {lang === 'uk' ? 'м. Київ, вул. Хрещатик, 1' : 'Kyiv, Khreshchatyk st, 1'}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">{lang === 'uk' ? 'Підписка на новини' : 'Newsletter'}</h4>
          <p className="text-sm opacity-60 mb-4">
            {lang === 'uk' ? 'Отримуйте щотижневі звіти на пошту.' : 'Get weekly reports in your inbox.'}
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#008E83]"
            />
            <button className="bg-[#008E83] px-4 py-2 rounded-lg hover:bg-[#007369] transition-colors">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50 italic">
        <p>{t.footer.copyright}</p>
        <p>{t.hero.partnerInfo}</p>
      </div>
    </footer>
  );
};

export default Footer;
