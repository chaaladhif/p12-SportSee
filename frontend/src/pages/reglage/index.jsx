import React from "react";
import "./style.css";
function Reglage({ switchToMockData, switchToApi }) {
    return (
        <div className="reglage">
            <button onClick={switchToMockData}>
                Utiliser les données mockées
            </button>
            <button onClick={switchToApi}>Utiliser les données de l'API</button>
        </div>
    );
}

export default Reglage;
