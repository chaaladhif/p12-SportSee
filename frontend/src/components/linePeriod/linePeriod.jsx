import React, { useState, useEffect } from "react";
import "./style.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
function LinePeriod({ sessionData }) {
    //console.log(SessionsData);
    const formatDay = (dayIndex) => {
        // Fonction pour formater le jour de la semaine en lettre
        const days = ["D", "L", "M", "M", "J", "V", "S"];
        const formattedDay = days[dayIndex - 1];
        console.log("Formatted day:", formattedDay);
        return formattedDay;
    };

    return (
        <>
            {/*<h2>Durée moyenne des sessions</h2>*/}
            <LineChart width={500} height={300} data={sessionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </>
    );
}

export default LinePeriod;
