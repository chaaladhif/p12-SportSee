import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Profile() {
    const userIds = ["12", "18"];
    //const {userId}=useParams;

    return (
        <div className="profil">
            <h1>Bienvenu sur SportSee</h1>
            <div className="button__Container">
                {userIds.map((userId) => (
                    <Link key={userId} to={`/${userId}`}>
                        <button className="button">
                            se connecter à la page de l'utilisateur {userId}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Profile;
