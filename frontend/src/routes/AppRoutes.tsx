import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/Home/home";
import Legacy from "../pages/Legacy/legacy";
import Sports from "../pages/Sports/sports";
import Gallery from "../pages/Gallery/gallery";
import Team from "../pages/Team/team";
import Sponsors from "../pages/Sponsors/sponsors";
import Live from "../pages/Live/live";

export default function AppRoutes() {
    const location = useLocation();

    return (
        <div className="relative min-h-screen flex flex-col justify-between">
            <Navbar />

            <main className="relative z-10 flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/legacy" element={<Legacy />} />
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="/live" element={<Live />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}