
export type Language = 'uk' | 'en';
export type Theme = 'light' | 'dark';

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    methodology: string;
    president: string;
    parliament: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    viewButton: string;
    partnerInfo: string;
  };
  features: {
    title: string;
    sentiment: string;
    sentimentDesc: string;
    demographics: string;
    demographicsDesc: string;
    analytics: string;
    analyticsDesc: string;
  };
  footer: {
    copyright: string;
    links: string;
    contact: string;
  };
}
