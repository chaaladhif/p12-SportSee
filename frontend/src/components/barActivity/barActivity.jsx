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
    return (
        <>
            <h2>Activité quotidienne</h2>
            {/*<ResponsiveContainer width="100%" height="100%">*/}
            <BarChart
                barGap={0}
                barCategoryGap={30}
                maxBarSize={10}
                width={730}
                height={200}
                data={sessions}
            >
                <CartesianGrid strokeDasharray="2" vertical={false} />
                <XAxis
                    dataKey="day"
                    tickFormatter={(day) => new Date(day).getDate()}
                />
                <YAxis
                    yAxisId="right"
                    orientation="right"
                    dataKey="kilogram"
                    domain={["dataMin-1", "dataMax+1"]}
                    tickCount={4}
                />
                <YAxis
                    yAxisId="left"
                    orientation="left"
                    dataKey="calories"
                    axisLine={false}
                    tickLine={false}
                    hide
                />
                <Tooltip />
                <Legend
                    verticalAlign="top"
                    align="right"
                    iconType="circle"
                    wrapperStyle={{ fontSize: "14px" }}
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
            </BarChart>{" "}
            {/* </ResponsiveContainer>*/}
        </>
    );
}

export default BarActivity;
