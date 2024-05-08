import React from "react";
import "./style.css";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";

function RadarPerformance({ performance }) {
    //const reversedPerformance = performance.slice().reverse();
    const kinds = performance.kind
        ? Object.values(performance.kind).reverse()
        : [];
    //console.log(kinds);
    return (
        <>
            <ResponsiveContainer width="99%" height={250}>
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius={80} // Reduire la taille du diagramme
                    width={200}
                    data={performance.data}
                    style={{
                        background: "#282D30",
                        borderRadius: "5px",
                        fontSize: "0.7em",
                    }}
                >
                    {/* Supprimer les lignes */}
                    <PolarGrid radialLines={false} />
                    {/* Afficher uniquement les labels "kind" sans leurs valeurs */}
                    <PolarAngleAxis
                        tickFormatter={(index) => kinds[index]}
                        tick={{ fill: "#fff" }}
                        //key={performance.map((data, index) => index)}
                    />
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
