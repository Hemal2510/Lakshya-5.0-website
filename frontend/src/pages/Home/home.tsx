import HeroSection from "./HeroSection";
import HeroTransition from "./HeroTransition";
import About from "../../components/About/about";
export default function Home() {
    return (
        <main className="bg-[#0A0503]">
            {/* 1. The Hero Section */}
            <HeroSection />
            <HeroTransition />
            <About />

        </main>
    );
}