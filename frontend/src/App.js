import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HorizontalNavbar from "./components/horizontalNavber/index";
import VerticalNavbar from "./components/verticalNavbar/index";
import Dashboard from "./pages/dashboard/index";
import Profile from "./pages/profile/index";

function App() {
    return (
        <>
            <BrowserRouter>
                <HorizontalNavbar />
                <div className="main">
                    <VerticalNavbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/user/:id" element={<Profile />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
