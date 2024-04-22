import React from "react";
import "./style.css";
function Icon({ logo, value, unit, title, backgroundColor }) {
    return (
        <div className="icon">
            <img
                style={{ backgroundColor }}
                className="logo"
                src={logo}
                alt="logo de nutriment"
            />
            <div className="icon-text">
                <span className="icon-textValue">
                    {value}
                    {unit}
                </span>
                <span className="icon-textTitle">{title}</span>
            </div>
        </div>
    );
}

export default Icon;
