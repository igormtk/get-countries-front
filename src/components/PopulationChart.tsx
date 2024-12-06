import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const PopulationChart: React.FC<{ data: { year: number, value: number }[] }> = ({ data }) => {
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
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
};
