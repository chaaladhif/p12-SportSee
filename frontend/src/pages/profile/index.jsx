import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Profile() {
    const [currentUser, setCurrentUser] = useState("");

    const handleSwitchUser = (userId) => {
        setCurrentUser(userId);
    };

    return (
        <div className="profil">
            <button onClick={() => handleSwitchUser(12)}>Carl</button>
            <button onClick={() => handleSwitchUser(18)}>Cicilia</button>
        </div>
    );
}

export default Profile;
{
    /*<div>
                <button>User 12</button>
                <button>User 18</button>
            </div>
            <div>
                <button>User Mocké 12</button>
                <button>User Mocké 18</button>
    </div>*/
}
