import HeroSection from "./HeroSection";
import About from "../../components/About/about";
import Venue from "../../components/venue/venue";
export default function Home() {
    return (
        <main className="">
            {/* 1. The Hero Section */}
            <HeroSection />

            <About />
            <Venue />

        </main>
    );
}