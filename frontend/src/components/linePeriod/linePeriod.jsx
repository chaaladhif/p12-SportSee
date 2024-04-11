import React, { useState, useEffect } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { getUserAverageSessions } from "../../services/service.js";
function LinePeriod({ userId }) {
    const [SessionsData, setSessionsData] = useState([]);
    //console.log("SessionsData:", SessionsData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserAverageSessions(userId);
                setSessionsData(data);
                // console.log("Data:", data);
            } catch (error) {
                console.error("data not found", error);
            }
        };

        fetchData();
    }, [userId]);
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
            <h2>Durée moyenne des sessions</h2>
            <LineChart width={500} height={300} data={SessionsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" tickFormatter={formatDay} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="sessionLength" stroke="#000" />
            </LineChart>
        </>
    );
}

export default LinePeriod;
