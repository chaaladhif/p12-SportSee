import React from "react";
import { NavLink } from "react-router-dom";
import yoga from "../../assets/yoga.svg";
import bicycle from "../../assets/bicycle.svg";
import natation from "../../assets/natation.svg";
import musculation from "../../assets/musculation.svg";
import "./style.css";
function VerticalNavbar() {
    return (
        <>
            <nav className="verticalNav">
                <div className="verticalIcon">
                    <NavLink className="navicon " to="">
                        <img src={yoga} alt="yoga" />
                    </NavLink>
                    <NavLink className="navicon " to="">
                        <img src={natation} alt="natation" />
                    </NavLink>
                    <NavLink className="navicon " to="">
                        <img src={bicycle} alt="bicycle" />
                    </NavLink>
                    <NavLink className="navicon " to="">
                        <img src={musculation} alt="musculation" />
                    </NavLink>
                </div>
                <div>
                    <p className="navCopyright">Copyright SportSee 2024</p>
                </div>
            </nav>
        </>
    );
}

export default VerticalNavbar;
