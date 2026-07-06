import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Background from "../background/Background";

export default function MainLayout() {
    return (
        <div className="relative">
            <Background />
            <Navbar />
            <main className="relative pointer-events-auto">
                <Outlet />   {/* Team, Home, Sports, etc. all render here */}
            </main>
        </div>
    );
}