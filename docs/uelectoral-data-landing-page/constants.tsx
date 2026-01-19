
import React from 'react';
import { TranslationSchema } from './types';

export const COLORS = {
  teal: '#008E83',
  mint: '#93E5D6',
  softBlue: '#A9CDE0',
  darkGray: '#3A5D66',
  deepNavy: '#23363D',
};

export const Logo: React.FC<{ className?: string, dark?: boolean }> = ({ className, dark }) => {
  // We use CSS filters to ensure the logo is visible regardless of the background.
  // The logo image has white 'data' text and dark teal 'Uelectoral' text.
  const filterStyle = dark 
    ? 'brightness(0) invert(1)' // Make it all white on dark backgrounds
    : 'brightness(0.7) contrast(1.2)'; // Darken it on light backgrounds so the white 'data' is visible

  return (
    <div className={`flex items-center transition-all duration-300 ${className}`}>
      <img 
        src="Ueelectoral 1.png" 
        alt="Uelectoral Data Logo" 
        className="h-8 md:h-10 lg:h-11 w-auto object-contain"
        style={{ filter: filterStyle }}
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.style.display = 'none';
          const span = document.createElement('span');
          span.className = `text-xl font-bold ${dark ? 'text-white' : 'text-[#004D47]'}`;
          span.innerText = 'Uelectoral data';
          e.currentTarget.parentElement?.appendChild(span);
        }}
      />
    </div>
  );
};

export const TRANSLATIONS: Record<'uk' | 'en', TranslationSchema> = {
  uk: {
    nav: {
      home: 'Головна',
      about: 'Про проєкт',
      methodology: 'Методологія',
      president: 'Президент',
      parliament: 'Парламент',
      cta: 'Отримати дані',
    },
    hero: {
      title: 'Результати дослідження електоральних настроїв',
      subtitle: 'в рамках U electoral data Project',
      description: 'Глибокий аналіз політичних вподобань українців, динаміка рейтингів та соціологічні зрізи в режимі реального часу.',
      viewButton: 'Дивитись результати',
      partnerInfo: 'Підготовлено Info Sapiens на замовлення Public policy development office',
    },
    features: {
      title: 'Ключові напрямки аналізу',
      sentiment: 'Електоральні настрої',
      sentimentDesc: 'Відстеження симпатій виборців до політичних лідерів та партій.',
      demographics: 'Демографічний зріз',
      demographicsDesc: 'Аналіз даних за віком, статтю, регіоном проживання та освітою.',
      analytics: 'Прогнозна аналітика',
      analyticsDesc: 'Моделювання можливих сценаріїв розвитку політичної ситуації.',
    },
    footer: {
      copyright: '© 2024 Uelectoral Data Project. Усі права захищено.',
      links: 'Швидкі посилання',
      contact: 'Зв\'яжіться з нами',
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About project',
      methodology: 'Methodology',
      president: 'President',
      parliament: 'Parliament',
      cta: 'Get Data',
    },
    hero: {
      title: 'Electoral Sentiment Research Results',
      subtitle: 'within U electoral data Project',
      description: 'In-depth analysis of Ukrainian political preferences, rating dynamics, and sociological snapshots in real-time.',
      viewButton: 'View Results',
      partnerInfo: 'Prepared by Info Sapiens commissioned by Public policy development office',
    },
    features: {
      title: 'Key Analysis Areas',
      sentiment: 'Electoral Sentiments',
      sentimentDesc: 'Tracking voter sympathies for political leaders and parties.',
      demographics: 'Demographic Breakdown',
      demographicsDesc: 'Analysis of data by age, gender, region of residence, and education.',
      analytics: 'Predictive Analytics',
      analyticsDesc: 'Modeling possible scenarios for the development of the political situation.',
    },
    footer: {
      copyright: '© 2024 Uelectoral Data Project. All rights reserved.',
      links: 'Quick Links',
      contact: 'Contact Us',
    }
  }
};
