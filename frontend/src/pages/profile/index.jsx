import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Profile() {
    return (
        <div className="profil">
            <div>
                <button>User 12</button>
                <button>User 18</button>
            </div>
            <div>
                <button>User Mocké 12</button>
                <button>User Mocké 18</button>
            </div>
        </div>
    );
}

export default Profile;
