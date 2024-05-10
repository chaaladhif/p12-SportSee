import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Community() {
    return (
        <div className="community">
            <p>Cette page est actuellement en cours de développement 🛠️</p>

            <Link to="/" className="community__link">
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}

export default Community;

{
    /*import React from "react";
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

export default Reglage;*/
}
