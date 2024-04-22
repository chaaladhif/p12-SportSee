import React from "react";
import "./style.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function LinePeriod({ sessionLength }) {
    const formatDay = (dayIndex) => {
        const days = ["L", "M", "M", "J", "V", "S", "D"];
        const formattedDay = days[dayIndex - 1];
        return formattedDay;
    };
    // CUSTOMIZED TOOLTIP
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div
                    style={{
                        backgroundColor: "white",
                        width: "45px",
                        height: "25px",
                        fontSize: "8px",
                        fontWeight: "600",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <p className="label">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };
    return (
        <>
            <h2 className="titleLine">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="99%" height={250}>
                <LineChart
                    width={250}
                    height={250}
                    data={sessionLength}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 5,
                    }}
                    style={{ background: "#e60000", borderRadius: "5px" }}
                >
                    {/*OPACITY FADED SETTING */}
                    <defs>
                        <linearGradient
                            id="colorGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#fff"
                                stopOpacity={0.45}
                            />
                            <stop
                                offset="60%"
                                stopColor="#fff"
                                stopOpacity={0.6}
                            />
                            <stop
                                offset="100%"
                                stopColor="#fff"
                                stopOpacity={0.9}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis
                        axisLine={false}
                        dataKey="day"
                        tickLine={false}
                        stroke="#fff"
                        tickFormatter={formatDay}
                        style={{
                            fontSize: "12px",
                            opacity: "0.66",
                            fill: "#fff",
                        }}
                        color="#fff"
                    />
                    <YAxis domain={["dataMin - 10", "dataMax + 10"]} hide />
                    <Tooltip content={<CustomTooltip />} />

                    <Line
                        // allowDataOverflow
                        // includeHidden
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#colorGradient)"
                        strokeOpacity={1} // OPACITY de la COURBE
                        strokeWidth={2}
                        activeDot={{ r: 4, fill: "white" }}
                        dot={null}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default LinePeriod;
