import React from "react";
import "./style.css";
import {
     RadialBarChart,
     RadialBar,
     Legend,
     ResponsiveContainer,
} from "recharts";

function RadialScore({ userId, score }) {
     // Les données pour le RadialBarChart avec la valeur du score multipliée par 100
     const data = [{ name: "Score", value: score * 100 }];
     // Calculer les angles de début et de fin en fonction du score
     const startAngle = 90; // Angle de début
     const endAngle = 90 + 360 * score; // Angle de fin proportionnel au score

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
                              cornerRadius={20}
                         />
                    </RadialBarChart>
               </ResponsiveContainer>
          </>
     );
}

export default RadialScore;
