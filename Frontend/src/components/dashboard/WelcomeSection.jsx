import { ArrowRight, Sparkles, Clock3 } from "lucide-react";

export default function WelcomeSection() {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-600/20 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div className="max-w-2xl">

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">

                        <Sparkles
                            size={16}
                            className="text-violet-400"
                        />

                        <span className="text-sm text-violet-300">
                            AI Mentor Active
                        </span>

                    </div>

                    <h1 className="text-5xl font-black leading-tight">

                        Continue Building

                        <br />

                        <span className="text-violet-400">
                            SprintPilot AI
                        </span>

                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">

                        Your workspace is ready. Continue refining your idea,
                        generate an execution roadmap, identify project risks,
                        and prepare your final presentation.

                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">

                        <button className="rounded-xl bg-white px-7 py-4 font-semibold text-black transition duration-300 hover:scale-105">

                            Continue Project

                        </button>

                        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 transition hover:bg-white/10">

                            Open Workspace

                            <ArrowRight size={18} />

                        </button>

                    </div>

                </div>

                {/* Right */}

                <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl">

                    <div className="flex items-center justify-between">

                        <span className="text-gray-400">

                            Current Project

                        </span>

                        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400">

                            Active

                        </span>

                    </div>

                    <h3 className="mt-5 text-2xl font-bold">

                        SCOF Hackathon

                    </h3>

                    <div className="mt-8 space-y-5">

                        <div>

                            <div className="mb-2 flex justify-between text-sm">

                                <span className="text-gray-400">

                                    Overall Progress

                                </span>

                                <span>

                                    42%

                                </span>

                            </div>

                            <div className="h-2 rounded-full bg-white/10">

                                <div className="h-2 w-[42%] rounded-full bg-violet-500" />

                            </div>

                        </div>

                        <div className="flex items-center gap-3 text-gray-400">

                            <Clock3 size={18} />

                            Last edited 18 minutes ago

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}