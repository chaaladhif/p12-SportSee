import React from "react";
import "./style.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

function BarActivity({ sessions }) {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const kilogram = payload[0].payload.kilogram; // Récupérer la valeur du poids
            const calories = payload[0].payload.calories; // Récupérer la valeur des calories

            return (
                <div className="tooltip-container">
                    <p className="tooltip-text">{` ${kilogram} kg`}</p>
                    <p className="tooltip-text">{` ${calories} kcal`}</p>
                </div>
            );
        }

        return null;
    };
    return (
        <>
            <ResponsiveContainer width="99%" height={200}>
                <h2 className="titleBar">Activité quotidienne</h2>
                <BarChart
                    barGap={0}
                    barCategoryGap={30}
                    maxBarSize={10}
                    width={730}
                    height={200}
                    data={sessions}
                    margin={{ top: -30, right: 0, left: 0, bottom: 10 }}
                >
                    <CartesianGrid strokeDasharray="2" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickFormatter={(day) => new Date(day).getDate()}
                        tickMargin={20}
                    />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        dataKey="kilogram"
                        domain={["dataMin-1", "dataMax+1"]}
                        tickCount={4}
                        tickMargin={20}
                    />
                    <YAxis
                        yAxisId="left"
                        orientation="left"
                        dataKey="calories"
                        axisLine={false}
                        tickLine={false}
                        hide
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{
                            fontSize: "0.9em",
                            color: "#74798C",
                            paddingBottom: "3em",
                        }}
                        formatter={(value) => (
                            <span style={{ color: "#74798C" }}>{value}</span>
                        )}
                    />
                    <Bar
                        name="Poids (kg)"
                        radius={[20, 20, 0, 0]}
                        dataKey="kilogram"
                        fill="#000"
                        yAxisId="right"
                    />
                    <Bar
                        name="Calories brûlées (kCal)"
                        radius={[20, 20, 0, 0]}
                        dataKey="calories"
                        fill="#E60000"
                        yAxisId="left"
                    />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default BarActivity;
