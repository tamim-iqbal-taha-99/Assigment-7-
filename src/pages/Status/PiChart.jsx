import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const COLORS = ["#1f2937", "#7c3aed", "#22c55e"]; // call, text, video
const PiChart = ({chartData}) => {
    return (
        <PieChart width={300} height={300}>
            <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}   // donut effect
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
            >
                {chartData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                ))}
            </Pie>

            <Tooltip />
            <Legend />
        </PieChart>
    );
    
};

export default PiChart;