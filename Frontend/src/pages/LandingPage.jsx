import FloatingNavbar from "../components/landing/FloatingNavbar";
import Hero from "../components/landing/Hero";

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-[#09090B] text-white overflow-hidden">
            <FloatingNavbar />
            <Hero />
        </main>
    );
}