'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function RevenueChart() {
  const data = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Apr', revenue: 8000 },
    { month: 'May', revenue: 7500 },
    { month: 'Jun', revenue: 12000 },
    { month: 'Jul', revenue: 11000 },
    { month: 'Aug', revenue: 14000 },
    { month: 'Sep', revenue: 13000 },
    { month: 'Oct', revenue: 16000 },
    { month: 'Nov', revenue: 18000 },
    { month: 'Dec', revenue: 20000 },
  ];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280" 
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280" 
            fontSize={12}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            formatter={(value) => [`$${value}`, 'Revenue']}
            contentStyle={{ backgroundColor: '#ffffff', borderColor: '#d1d5db' }}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}