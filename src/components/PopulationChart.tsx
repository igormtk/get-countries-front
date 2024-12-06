import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Payload {
  value: number;
  name: string;
  fill: string;
  dataKey: string;
}

interface CustomTooltipProps {
  payload: Payload[];
  label: string;
}

// Custom Tooltip component
const CustomTooltip: React.FC<CustomTooltipProps> = ({ payload, label }) => {
  if (!payload || payload.length === 0) return null;

  const { value, name } = payload[0];

  return (
    <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
      <p style={{ color: 'black' }}>Year: {label}</p>  
      <p style={{ color: '#8884d8' }}>
        {name}: {value}
      </p>
    </div>
  );
};

interface PopulationChartProps {
  data: { year: number; value: number }[];
}

export const PopulationChart: React.FC<PopulationChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No population data available</div>;
  }

  return (
    <div className="mb-8 w-full mt-12">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
        <div className="bg-blue-500 text-white p-4">
          <h5 className="text-lg font-semibold">Population Over Time</h5>
        </div>
        <div className="p-4">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              {/* Custom Tooltip */}
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ fontSize: '14px', color: '#8884d8' }}  // Change this to desired color for the legend
              />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
