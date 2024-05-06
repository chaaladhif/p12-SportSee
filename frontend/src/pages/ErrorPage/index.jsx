import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function ErrorPage() {
    return (
        <div className="error">
            <h1>Oups..</h1>
            <p>La page que vous recherchez semble introuvable</p>
            <Link to="/" className="error__link">
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}

export default ErrorPage;
