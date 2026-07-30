import {
    Brain,
    Map,
    TriangleAlert,
    Rocket,
    CheckCircle2,
} from "lucide-react";

const activities = [
    {
        icon: Brain,
        title: "Idea analyzed",
        description: "AI reviewed your project idea and suggested improvements.",
        time: "2 min ago",
        color: "bg-violet-500",
    },
    {
        icon: Map,
        title: "Roadmap generated",
        description: "Execution roadmap with milestones created successfully.",
        time: "18 min ago",
        color: "bg-cyan-500",
    },
    {
        icon: TriangleAlert,
        title: "Risk detected",
        description: "Authentication flow may increase implementation time.",
        time: "26 min ago",
        color: "bg-amber-500",
    },
    {
        icon: Rocket,
        title: "Pitch updated",
        description: "Presentation deck regenerated with latest features.",
        time: "1 hour ago",
        color: "bg-emerald-500",
    },
    {
        icon: CheckCircle2,
        title: "Workspace synced",
        description: "All project data has been saved successfully.",
        time: "Today",
        color: "bg-white",
    },
];

export default function ActivityTimeline() {
    return (
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">

            <div className="mb-8">

                <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
                    Activity
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                    AI Timeline
                </h2>

            </div>

            <div className="relative">

                {/* Vertical Line */}

                <div className="absolute left-6 top-0 h-full w-px bg-white/10" />

                <div className="space-y-8">

                    {activities.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="relative flex gap-5"
                            >

                                {/* Timeline Dot */}

                                <div
                                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}
                                >
                                    <Icon
                                        size={20}
                                        className="text-black"
                                    />
                                </div>

                                {/* Content */}

                                <div className="flex-1">

                                    <div className="flex items-center justify-between">

                                        <h3 className="font-semibold">

                                            {item.title}

                                        </h3>

                                        <span className="text-xs text-gray-500">

                                            {item.time}

                                        </span>

                                    </div>

                                    <p className="mt-2 text-sm leading-7 text-gray-400">

                                        {item.description}

                                    </p>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}