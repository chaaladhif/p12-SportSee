import React from "react";
import "./style.css";
import {
    RadialBarChart,
    RadialBar,
    Legend,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";

function RadialScore({ userId, score }) {
    const data = [{ name: "Score", value: score * 100 }];
    //console.log(data);
    // Calculer les angles de début et de fin en fonction du score
    const startAngle = 90; // Angle de début
    const endAngle = 90 + data[0].value; // Angle de fin
    const RenderCustomizedLegend = () => {
        return (
            <div className="legendWrapper">
                <div className="score">{score ? score * 100 : 0}%</div>
                <div className="description">
                    de votre <br />
                    objectif
                </div>
            </div>
        );
    };
    return (
        <>
            <h2 className="titleRadial">Score</h2>
            <ResponsiveContainer width="99%" height={250}>
                <RadialBarChart
                    width={700}
                    height={250}
                    innerRadius="65%"
                    outerRadius="75%"
                    data={data}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    style={{ background: "#FBFBFB", borderRadius: "5px" }}
                >
                    <Legend content={<RenderCustomizedLegend />} />

                    <RadialBar
                        name="Score"
                        barSize={10}
                        dataKey="value"
                        fill="#FF0000"
                        cornerRadius={20} // Couleur de l'arc
                    />
                    {/* <PolarAngleAxis
                        type="number"
                        domain={[0, 1]}
                        tick={false}
    />*/}
                </RadialBarChart>
            </ResponsiveContainer>
        </>
    );
}

export default RadialScore;
