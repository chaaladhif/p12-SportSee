import React from "react";
import "./accueil.css";
import { NavLink } from "react-router-dom";

function Accueil() {
    return (
        <div className="accueil">
            <h1>Welcome! 👏</h1>
            <p>SportSee est une startup dédiée au coaching sportif.</p>
            <NavLink className="navlink" to="/user">
                <button className="linkButton">Go to profil</button>
            </NavLink>
        </div>
    );
}

export default Accueil;
