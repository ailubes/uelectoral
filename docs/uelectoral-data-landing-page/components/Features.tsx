
import React from 'react';
import { TranslationSchema } from '../types';

interface FeaturesProps {
  t: TranslationSchema;
}

const Features: React.FC<FeaturesProps> = ({ t }) => {
  const items = [
    {
      icon: 'fa-chart-line',
      title: t.features.sentiment,
      desc: t.features.sentimentDesc,
    },
    {
      icon: 'fa-users',
      title: t.features.demographics,
      desc: t.features.demographicsDesc,
    },
    {
      icon: 'fa-brain',
      title: t.features.analytics,
      desc: t.features.analyticsDesc,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.features.title}</h2>
        <div className="w-20 h-1.5 bg-[#008E83] mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-white dark:bg-[#1f292d] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-[#008E83]/10 flex items-center justify-center mb-6 group-hover:bg-[#008E83] transition-colors">
              <i className={`fa-solid ${item.icon} text-2xl text-[#008E83] group-hover:text-white transition-colors`}></i>
            </div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="opacity-70 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
