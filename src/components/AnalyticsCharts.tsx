'use strict';

import React from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis
} from 'recharts';

export const RiskDistributionChart: React.FC = () => {
  const data = [
    { name: 'Red Flags', count: 3, fill: '#b91c1c' },
    { name: 'Caution', count: 4, fill: '#d97706' },
    { name: 'Safe', count: 12, fill: '#15803d' },
  ];

  return (
    <div className="h-60 w-full bg-white border p-4">
      <h4 className="text-xs font-bold text-[#6b6b61] uppercase tracking-wider mb-2">Clause Risk Breakdown</h4>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={65}
            paddingAngle={2}
            dataKey="count"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} stroke="#ffffff" strokeWidth={1} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              borderRadius: '0px', 
              borderColor: '#d2d3c9', 
              fontSize: '12px',
              backgroundColor: '#f0f0e8'
            }} 
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-4 text-[10px] font-bold">
        <span className="text-red-700">● Red Flags (3)</span>
        <span className="text-amber-700">● Caution (4)</span>
        <span className="text-emerald-700">● Safe (12)</span>
      </div>
    </div>
  );
};

export const LegalComplexityGraph: React.FC = () => {
  const data = [
    { section: 'Intro', complexity: 20, clarity: 80 },
    { section: 'Obligations', complexity: 75, clarity: 40 },
    { section: 'Termination', complexity: 90, clarity: 25 },
    { section: 'Indemnity', complexity: 85, clarity: 30 },
    { section: 'General', complexity: 40, clarity: 70 },
  ];

  return (
    <div className="h-60 w-full bg-white border p-4">
      <h4 className="text-xs font-bold text-[#6b6b61] uppercase tracking-wider mb-2">Legal Complexity vs Clarity</h4>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <XAxis dataKey="section" fontSize={10} stroke="#6b6b61" tickLine={false} />
          <YAxis fontSize={10} stroke="#6b6b61" tickLine={false} />
          <Tooltip 
            contentStyle={{ borderRadius: '0px', borderColor: '#d2d3c9', fontSize: '12px' }} 
          />
          <Area type="monotone" dataKey="complexity" stackId="1" stroke="#b91c1c" fill="#b91c1c" fillOpacity={0.2} name="Complexity" />
          <Area type="monotone" dataKey="clarity" stackId="2" stroke="#15803d" fill="#15803d" fillOpacity={0.2} name="Clarity" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ComplianceHeatmap: React.FC = () => {
  const data = [
    { metric: 'Rent Cap', score: 95 },
    { metric: 'Notice Rights', score: 30 },
    { metric: 'Deposit Rules', score: 20 },
    { metric: 'Data Privacy', score: 85 },
    { metric: 'Dispute Prep', score: 65 },
  ];

  return (
    <div className="h-60 w-full bg-white border p-4">
      <h4 className="text-xs font-bold text-[#6b6b61] uppercase tracking-wider mb-2">Regional Compliance Alignment</h4>
      <ResponsiveContainer width="100%" height="85%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#d2d3c9" />
          <PolarAngleAxis dataKey="metric" fontSize={9} stroke="#1a1a1a" />
          <Radar name="Alignment Score" dataKey="score" stroke="#7a5c40" fill="#7a5c40" fillOpacity={0.3} />
          <Tooltip contentStyle={{ borderRadius: '0px', fontSize: '11px' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const RiskTimelineChart: React.FC = () => {
  const data = [
    { month: 'Year 1', baseRisk: 40, escalationRisk: 10 },
    { month: 'Year 2', baseRisk: 40, escalationRisk: 30 },
    { month: 'Year 3', baseRisk: 40, escalationRisk: 60 },
    { month: 'Exit Phase', baseRisk: 90, escalationRisk: 0 },
  ];

  return (
    <div className="h-60 w-full bg-white border p-4">
      <h4 className="text-xs font-bold text-[#6b6b61] uppercase tracking-wider mb-2">Contract Risk Timeline</h4>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <XAxis dataKey="month" fontSize={10} stroke="#6b6b61" tickLine={false} />
          <YAxis fontSize={10} stroke="#6b6b61" tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: '0px', borderColor: '#7a5c40', fontSize: '12px' }} />
          <Bar dataKey="baseRisk" stackId="a" fill="#7a5c40" name="Inherent Risk" />
          <Bar dataKey="escalationRisk" stackId="a" fill="#d97706" name="Compounding Risks" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
