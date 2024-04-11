import React, { useEffect, useState } from "react";
import "./style.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { getUserActivity } from "../../services/service";

function BarActivity({ userId }) {
    const [activityData, setActivityData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserActivity(userId);
                setActivityData(data);
            } catch (error) {
                console.error("data not found", error);
            }
        };

        fetchData();
    }, [userId]);
    return (
        <>
            <h2>Activité quotidienne</h2>
            <BarChart
                barGap={0}
                barCategoryGap={30}
                maxBarSize={10}
                width={730}
                height={160}
                data={activityData}
            >
                <CartesianGrid strokeDasharray="3" />
                <XAxis
                    dataKey="day"
                    tickFormatter={(day) => new Date(day).getDate()}
                />
                <YAxis
                    dataKey="kilogram"
                    domain={["dataMin-1", "dataMax"]}
                    tickCount={3}
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
                />
                <Bar
                    name="Calories brûlées (kCal)"
                    radius={[20, 20, 0, 0]}
                    dataKey="calories"
                    fill="#E60000"
                />
            </BarChart>
        </>
    );
}

export default BarActivity;
