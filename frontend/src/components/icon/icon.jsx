import React from "react";
import "./style.css";
function Icon({ logo, value, unit, title }) {
    return (
        <div className="icon">
            <img className="logo" src={logo} alt="logo de nutriment" />
            <span>
                {value}
                {unit}
            </span>
            <p>{title}</p>
        </div>
    );
}

export default Icon;
