import FloatingDashboardNav from "../components/dashboard/FloatingDashboardNav";
import WelcomeSection from "../components/dashboard/WelcomeSection";
import WorkspaceGrid from "../components/dashboard/WorkspaceGrid";
import RecentProjects from "../components/dashboard/RecentProjects";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";
import SoftAurora from "../components/effects/SoftAurora";
import QuickStats from "../components/dashboard/QuickStats";

export default function Dashboard() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

            {/* Aurora Background */}
            <div className="absolute inset-0 opacity-20">
                <SoftAurora
                    speed={0.4}
                    scale={1.4}
                    brightness={0.8}
                    color1="#ffffff"
                    color2="#8b5cf6"
                    enableMouseInteraction
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

            {/* Dashboard */}
            <div className="relative z-10">

                <FloatingDashboardNav />

                <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-16 pt-32">

                    <WelcomeSection />

                    <QuickStats />

                    <WorkspaceGrid />

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                        <RecentProjects />

                        <ActivityTimeline />

                    </div>

                </div>

            </div>

        </main>
    );
}