import HeroSection from "./HeroSection";
import HeroTransition from "./HeroTransition";
import HeroScrollSection from "./HeroScrollSection";
import About from "../../components/About/about";
import Venue from "../../components/venue/venue";
import Background from "../../components/background/Background.tsx"
export default function Home() {
    return (
        <main className="">
            {/* 1. The Hero Section */}
            <HeroSection />

            {/* 2. Container Scroll Animation */}
            <HeroScrollSection />

            <About />
            <Venue />

        </main>
    );
}