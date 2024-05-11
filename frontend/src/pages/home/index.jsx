import React, { useEffect, useState } from "react";
import "./style.css";
import BarActivity from "../../components/barActivity/barActivity";
import LinePeriod from "../../components/linePeriod/linePeriod";
import Header from "../../components/header/header";
import Icon from "../../components/icon/icon";
import calorie from "../../assets/calorie.svg";
import glucide from "../../assets/glucide.svg";
import protein from "../../assets/protein.svg";
import lipide from "../../assets/lipide.svg";
import RadarPerformance from "../../components/radarPerformance/radarPerformance";
import RadialScore from "../../components/radialScore/radialScore";

import {
    getUser,
    getUserActivity,
    getUserPerformance,
    getUserAverageSessions,
} from "../../services/service";
import { useParams, Navigate } from "react-router-dom";

function Home() {
    const { id } = useParams();
    const [userId, setUserId] = useState(id);
    const [userData, setUserData] = useState(null);
    const [activityData, setActivityData] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);
    const [sessionLengthData, setSessionData] = useState([]);

    useEffect(() => {
        if (!id) return <Navigate to="*" />;

        const fetchData = async () => {
            setUserId(id);
            try {
                const user = await getUser(userId);
                //console.log("user:", user);
                const activity = await getUserActivity(userId);
                //console.log("activity data:", activity);
                const performance = await getUserPerformance(userId);
                //console.log("performance data:", performance);
                const sessionLength = await getUserAverageSessions(userId);
                //console.log("Session length data:", sessionLength);
                setUserData(user);
                setActivityData(activity);
                setPerformanceData(performance);
                setSessionData(sessionLength);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const icons = [
        {
            logo: calorie,
            unit: "KCal",
            title: "Calories",
            backgroundColor: "#Fbeaea",
            keyData: userData ? userData.keyData.calorieCount / 1000 : 0,
        },
        {
            logo: protein,
            unit: "g",
            title: "Proteins",
            backgroundColor: "#4AB8FF1A",
            keyData: userData ? userData.keyData.proteinCount : 0,
        },
        {
            logo: glucide,
            unit: "g",
            title: "Glucides",
            backgroundColor: "#fbf6e5",
            keyData: userData ? userData.keyData.carbohydrateCount : 0,
        },
        {
            logo: lipide,
            unit: "g",
            title: "Lipides",
            backgroundColor: "#FD51811A",
            keyData: userData ? userData.keyData.lipidCount : 0,
        },
    ];

    return (
        <div className="home">
            <Header userData={userData} />
            <div className="row">
                <div className="diagramsColumn">
                    <BarActivity sessions={activityData} />
                    <div className="diagramsRow">
                        <LinePeriod sessionLength={sessionLengthData} />
                        <RadarPerformance performance={performanceData} />
                        <RadialScore score={userData ? userData.score : 0} />
                    </div>
                </div>
                <div className="aside">
                    {icons.map((icon) => (
                        <Icon
                            key={icon.title}
                            logo={icon.logo}
                            value={icon.keyData}
                            unit={icon.unit}
                            title={icon.title}
                            backgroundColor={icon.backgroundColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
