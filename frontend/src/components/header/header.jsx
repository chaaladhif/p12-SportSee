import React, { useEffect, useState } from "react";
import { getUser } from "../../services/service";
import "./style.css";
function Header({ userId }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUser(userId);
                setUserData(data);
            } catch (error) {
                console.error("Data not found", error);
            }
        };

        fetchData();
    }, [userId]);

    return (
        <>
            <div className="title">
                <h1>Bonjour </h1>
                <span className="title__user">
                    {userData ? userData.userInfos.firstName : ""}{" "}
                </span>
            </div>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </>
    );
}

export default Header;
