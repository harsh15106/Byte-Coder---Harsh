import {
    Sparkles,
    Target,
    TriangleAlert,
    Clock3,
} from "lucide-react";

const stats = [
    {
        icon: Sparkles,
        title: "AI Score",
        value: "92",
        subtitle: "Excellent",
        color: "text-violet-400",
        glow: "bg-violet-500/20",
    },
    {
        icon: Target,
        title: "Completion",
        value: "42%",
        subtitle: "On Track",
        color: "text-cyan-400",
        glow: "bg-cyan-500/20",
    },
    {
        icon: TriangleAlert,
        title: "Risks",
        value: "3",
        subtitle: "Medium",
        color: "text-amber-400",
        glow: "bg-amber-500/20",
    },
    {
        icon: Clock3,
        title: "ETA",
        value: "16h",
        subtitle: "Estimated",
        color: "text-emerald-400",
        glow: "bg-emerald-500/20",
    },
];

export default function QuickStats() {
    return (
        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((item) => {

                const Icon = item.icon;

                return (

                    <div
                        key={item.title}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                    >

                        <div
                            className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl ${item.glow}`}
                        />

                        <div className="relative">

                            <div
                                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ${item.color}`}
                            >
                                <Icon size={22} />
                            </div>

                            <p className="text-sm text-gray-400">
                                {item.title}
                            </p>

                            <h2 className="mt-2 text-4xl font-black">
                                {item.value}
                            </h2>

                            <p className={`mt-2 text-sm ${item.color}`}>
                                {item.subtitle}
                            </p>

                        </div>

                    </div>

                );

            })}

        </section>
    );
}