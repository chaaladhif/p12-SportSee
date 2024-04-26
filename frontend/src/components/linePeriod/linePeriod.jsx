import React from "react";
import "./style.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Rectangle,
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
                        <linearGradient id="colorUv">
                            <stop
                                offset="5%"
                                stopColor="#ffffff"
                                stopOpacity={0.45}
                            />
                            <stop
                                offset="50%"
                                stopColor="#ffffff"
                                stopOpacity={0.6}
                            />
                            <stop
                                offset="100%"
                                stopColor="#ffffff"
                                stopOpacity={0.9}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        color="#fff"
                        tickFormatter={formatDay}
                        style={{
                            fontSize: "12px",
                            opacity: "0.66",
                            fill: "#fff",
                        }}
                    />
                    <Rectangle
                        fill={"#000000"}
                        fillOpacity="0.7"
                        x={30} // Positionnez-le selon vos besoins
                        y={0}
                        width={250}
                        height={250}
                    />
                    <YAxis domain={["dataMin - 10", "dataMax + 10"]} hide />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        className="customLine"
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#colorUv)"
                        strokeOpacity={1} // OPACITY de la COURBE
                        strokeWidth={2}
                        activeDot={{ r: 4, fill: "#fff" }}
                        dot={null}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default LinePeriod;
