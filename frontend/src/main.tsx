import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";

import App from "./App";
import "./index.css";
import SmoothScroll from "./components/ui/SmoothScroll"; // Import your provider

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            {/* Wrap App in SmoothScroll so the Router is inside the smooth scroll context */}
            <SmoothScroll>
                <App />
            </SmoothScroll>
        </BrowserRouter>
    </React.StrictMode>
);