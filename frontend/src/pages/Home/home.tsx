import HeroSection from "./HeroSection";
import HeroTransition from "./HeroTransition";
import About from "../../components/About/about";
import Background from "../../components/background/Background.tsx"
export default function Home() {
    return (
        <main className="">
            {/* 1. The Hero Section */}
            <HeroSection />

            <About />

        </main>
    );
}