import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import construction from "../../assets/construction.jpg";
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
