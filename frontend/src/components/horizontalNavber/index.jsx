import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.css";
function HorizontalNavbar() {
    return (
        <>
            <nav className="horizontalNav">
                <img className="navbar__logo" src={logo} alt="logo" />

                <NavLink className="navlink" to="/">
                    Accueil
                </NavLink>
                <NavLink className="navlink" to="/user/:id">
                    Profil
                </NavLink>
                <NavLink className="navlink" to="/Reglage">
                    Réglage
                </NavLink>
                <NavLink className="navlink" to="/Community">
                    Communauté
                </NavLink>
            </nav>
        </>
    );
}

export default HorizontalNavbar;
