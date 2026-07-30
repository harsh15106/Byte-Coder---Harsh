import SoftAurora from "../effects/SoftAurora";
import HeroPreview from "./HeroPreview";
import { Link, useNavigate } from "react-router-dom";    

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

            {/* Aurora Background */}
            <div className="absolute inset-0">
                <SoftAurora
                    speed={0.6}
                    scale={1.5}
                    brightness={1}
                    color1="#f7f7f7"
                    color2="#e100ff"
                    noiseFrequency={2.5}
                    noiseAmplitude={1}
                    bandHeight={0.5}
                    bandSpread={1}
                    octaveDecay={0.1}
                    layerOffset={0}
                    colorSpeed={1}
                    enableMouseInteraction
                    mouseInfluence={0.25}
                />
            </div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Hero Content */}
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-32 text-center">

                <div className="mb-8 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
                    <span className="text-sm text-violet-300">
                        ✨ Built for Hackathons & Startup Teams
                    </span>
                </div>

                <h1 className="max-w-5xl text-6xl font-black leading-tight tracking-tight text-white md:text-7xl">
                    From
                    <span className="text-violet-400"> Idea </span>
                    to
                    <br />
                    Winning Demo.
                </h1>

                <p className="mt-8 max-w-2xl text-lg text-gray-300">
                    Generate MVP roadmaps, critique your scope, organize milestones,
                    detect risks, and build your final pitch with one AI workspace.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-5">
                    <Link
                        to="/login"
                        className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
                    >
                        Start Planning
                    </Link>

                    <button className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-white backdrop-blur-xl transition duration-300 hover:bg-white/10">
                        Watch Demo
                    </button>
                </div>

                <div className="mt-20 w-full">
                    <HeroPreview />
                </div>

            </div>
        </section>
    );
}