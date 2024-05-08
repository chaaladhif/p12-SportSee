import "./style.css";

function Header({ userData }) {
    return (
        <>
            <div className="title">
                <h1>Bonjour </h1>
                <span className="title__user">
                    {userData ? userData.userInfos.firstName : ""}
                </span>
            </div>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </>
    );
}
export default Header;
