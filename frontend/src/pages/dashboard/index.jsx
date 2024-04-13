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
import {
    getUserActivity,
    getUserPerformance,
    getUserAverageSessions,
} from "../../services/service";

function Dashboard() {
    const [activityData, setActivityData] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);
    const [sessionData, setSessionData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const activity = await getUserActivity(18);
                const performance = await getUserPerformance(18);
                const sessions = await getUserAverageSessions(18);
                setActivityData(activity);
                setPerformanceData(performance);
                setSessionData(sessions);
            } catch (error) {
                console.error("data not found", error);
            }
        };

        fetchData();
    }, [18]);

    return (
        <div className="dashboard">
            <Header userId={18} />
            <div className="row">
                <div className="diagramsColumn">
                    <BarActivity sessions={activityData} />
                    <div className="diagramsRow">
                        <LinePeriod sessionData={sessionData} />
                        <RadarPerformance performanceData={performanceData} />
                    </div>
                </div>
                <div className="aside">
                    <Icon
                        logo={calorie}
                        value={100}
                        unit="KCal"
                        title="calories"
                    />
                    <Icon
                        logo={protein}
                        value={100}
                        unit="g"
                        title="proteins"
                    />
                    <Icon
                        logo={glucide}
                        value={100}
                        unit="g"
                        title="glucides"
                    />
                    <Icon logo={lipide} value={100} unit="g" title="lipides" />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
