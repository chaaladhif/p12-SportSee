import React from "react";
import "./style.css";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from "recharts";

function RadarPerformance({ performanceData }) {
    return (
        <>
            {/*<h2>Score</h2>*/}
            <RadarChart
                cx={150}
                cy={150}
                outerRadius={100}
                width={300}
                height={300}
                data={performanceData}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <PolarRadiusAxis />
                <Radar
                    name="Performance"
                    dataKey="value"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </>
    );
}

export default RadarPerformance;
