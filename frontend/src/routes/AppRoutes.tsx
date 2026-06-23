import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Legacy from "../pages/Legacy/Legacy";
import Sports from "../pages/Sports/Sports";
import Gallery from "../pages/Gallery/Gallery";
import Team from "../pages/Team/Team";
import Sponsors from "../pages/Sponsors/Sponsors";
import Live from "../pages/Live/Live";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legacy" element={<Legacy />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/live" element={<Live />} />
        </Routes>
    );
}