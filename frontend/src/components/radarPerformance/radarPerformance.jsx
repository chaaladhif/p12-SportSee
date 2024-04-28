import React from "react";
import "./style.css";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";
function customTick({ payload, x, y, textAnchor, stroke, radius }) {
    return (
        <g className="recharts-layer recharts-polar-angle-axis-tick">
            <text
                radius={radius}
                stroke={stroke}
                x={x}
                y={y}
                className="recharts-text recharts-polar-angle-axis-tick-value"
                textAnchor={textAnchor}
                fontSize={12}
                fontWeight={500}
                fill="#ffffff"
                style={{ textTransform: "capitalize" }}
            >
                <tspan x={x} dy="0em">
                    {payload.value}
                </tspan>
            </text>
        </g>
    );
}
function RadarPerformance({ performance }) {
    const reversedPerformance = performance.slice().reverse();

    return (
        <>
            <ResponsiveContainer width="99%" height={250}>
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius={80} // Reduire la taille du diagramme
                    width={200}
                    data={reversedPerformance}
                    style={{
                        background: "#282D30",
                        borderRadius: "5px",
                        fontSize: "0.7em",
                    }}
                >
                    {/* Supprimer les lignes */}
                    <PolarGrid radialLines={false} />
                    {/* Afficher uniquement les labels "kind" sans leurs valeurs */}
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "#fff" }} />
                    {/* Supprimer les valeurs de l'axe radial */}
                    {/* <PolarRadiusAxis tick={false} axisLine={false} />*/}
                    <Radar
                        name="Performance"
                        dataKey="value"
                        stroke="#e60000"
                        fill="#e60000"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </>
    );
}

export default RadarPerformance;
