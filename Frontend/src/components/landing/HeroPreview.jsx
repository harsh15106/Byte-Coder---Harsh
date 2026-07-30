import {
    CheckCircle2,
    AlertTriangle,
    ArrowRight
} from "lucide-react";

export default function HeroPreview() {
    return (
        <div
            className="
      mt-20
      w-full
      max-w-5xl
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-2xl
      shadow-2xl
    "
        >
            <div className="grid gap-8 md:grid-cols-2">

                <div>

                    <h3 className="mb-6 text-xl font-semibold">
                        AI Project Overview
                    </h3>

                    <div className="space-y-4">

                        <div className="flex justify-between rounded-xl bg-white/5 p-4">
                            <span>Idea Score</span>
                            <span className="font-bold text-green-400">92%</span>
                        </div>

                        <div className="flex justify-between rounded-xl bg-white/5 p-4">
                            <span>MVP Readiness</span>
                            <span className="font-bold text-violet-400">
                                Excellent
                            </span>
                        </div>

                        <div className="flex justify-between rounded-xl bg-white/5 p-4">
                            <span>Current Phase</span>
                            <span className="font-bold">
                                Roadmap
                            </span>
                        </div>

                    </div>

                </div>

                <div>

                    <h3 className="mb-6 text-xl font-semibold">
                        AI Recommendations
                    </h3>

                    <div className="space-y-5">

                        <div className="flex items-start gap-3 rounded-xl bg-green-500/10 p-4">
                            <CheckCircle2 className="mt-1 text-green-400" />
                            <div>
                                Authentication before dashboard development.
                            </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl bg-yellow-500/10 p-4">
                            <AlertTriangle className="mt-1 text-yellow-400" />
                            <div>
                                Remove analytics from MVP to save development time.
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-violet-400">
                            View Full Roadmap
                            <ArrowRight size={18} />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}