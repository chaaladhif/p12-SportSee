import React from "react";
import "./style.css";
import BarActivity from "../../components/barActivity/barActivity";
import LinePeriod from "../../components/linePeriod/linePeriod";
import Header from "../../components/header/header";
import Icon from "../../components/icon/icon";
import calorie from "../../assets/calorie.svg";
import glucide from "../../assets/glucide.svg";
import protein from "../../assets/protein.svg";
import lipide from "../../assets/lipide.svg";

function Dashboard() {
    return (
        <div className="dashboard">
            <Header userId={18} />
            <div className="row">
                <div className="diagrams">
                    <BarActivity userId={18} />
                    <LinePeriod userId={18} />
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
