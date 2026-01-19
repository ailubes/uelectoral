
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const dataUK = [
  { name: 'Кандидат А', value: 42, color: '#008E83' },
  { name: 'Кандидат Б', value: 38, color: '#93E5D6' },
  { name: 'Кандидат В', value: 15, color: '#A9CDE0' },
  { name: 'Кандидат Г', value: 5, color: '#3A5D66' },
];

const dataEN = [
  { name: 'Candidate A', value: 42, color: '#008E83' },
  { name: 'Candidate B', value: 38, color: '#93E5D6' },
  { name: 'Candidate C', value: 15, color: '#A9CDE0' },
  { name: 'Candidate D', value: 5, color: '#3A5D66' },
];

const DataOverview: React.FC<{ lang: 'uk' | 'en' }> = ({ lang }) => {
  const chartData = lang === 'uk' ? dataUK : dataEN;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {lang === 'uk' ? 'Динаміка рейтингів' : 'Rating Dynamics'}
          </h2>
          <p className="opacity-70">
            {lang === 'uk' 
              ? 'Наочне представлення електоральних симпатій серед населення за останній місяць досліджень.' 
              : 'Visual representation of electoral sympathies among the population during the last month of research.'}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#008E83]">2.4K</p>
            <p className="text-xs uppercase opacity-50">{lang === 'uk' ? 'Опитаних' : 'Respondents'}</p>
          </div>
          <div className="w-[1px] h-10 bg-slate-300 dark:bg-slate-700"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#008E83]">95%</p>
            <p className="text-xs uppercase opacity-50">{lang === 'uk' ? 'Точність' : 'Accuracy'}</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#121a1d] rounded-3xl p-8 shadow-inner-xl h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ left: 30, right: 30, top: 20, bottom: 20 }}>
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              width={100}
              tick={{ fontSize: 14, fontWeight: 600, fill: 'currentColor' }}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataOverview;
