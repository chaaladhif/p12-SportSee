import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HorizontalNavbar from "./components/horizontalNavber/index";
import VerticalNavbar from "./components/verticalNavbar/index";
import Home from "./pages/home/index";
import Profile from "./pages/profile/index";
import Reglage from "./pages/reglage/index";
import Community from "./pages/community/index";
import ErrorPage from "./pages/ErrorPage";
import Accueil from "./pages/accueil/accueil";
function App() {
    return (
        <>
            <BrowserRouter>
                <HorizontalNavbar />
                <div className="main">
                    <VerticalNavbar />
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/:id" element={<Home />} />
                        <Route path="/user" element={<Profile />} />
                        <Route path="/Reglage" element={<Reglage />} />
                        <Route path="/Community" element={<Community />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
