import React, { useState } from "react";
import "./style.css";
function Reglage() {
    const [useMockData, setUseMockData] = useState(false);
    const [useApiData, setUseApiData] = useState(false);

    const handleToggleMockData = () => {
        setUseMockData(!useMockData);
        if (!useMockData && useApiData) {
            setUseApiData(false);
        }
    };

    const handleToggleApiData = () => {
        setUseApiData(!useApiData);
        if (!useApiData && useMockData) {
            setUseMockData(false);
        }
    };

    return (
        <div className="reglage">
            <label>
                Utiliser les données mockées :
                <input
                    type="checkbox"
                    checked={useMockData}
                    onChange={handleToggleMockData}
                />
            </label>
            <label>
                Utiliser les données de l'API :
                <input
                    type="checkbox"
                    checked={useApiData}
                    onChange={handleToggleApiData}
                />
            </label>
        </div>
    );
}

export default Reglage;
