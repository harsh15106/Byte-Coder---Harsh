import { ArrowUpRight } from "lucide-react";

export default function WorkspaceCard({
    icon: Icon,
    title,
    description,
    progress,
    color = "violet",
    status,
}) {
    const colors = {
        violet: "from-violet-500/20 to-violet-700/5 border-violet-500/20",
        cyan: "from-cyan-500/20 to-cyan-700/5 border-cyan-500/20",
        emerald: "from-emerald-500/20 to-emerald-700/5 border-emerald-500/20",
        amber: "from-amber-500/20 to-amber-700/5 border-amber-500/20",
    };

    return (
        <button
            className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${colors[color]} p-6 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/20`}
        >
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/5 blur-3xl" />

            <div className="relative flex h-full flex-col">

                <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                        <Icon size={24} />
                    </div>

                    <ArrowUpRight
                        size={18}
                        className="opacity-40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />

                </div>

                <h3 className="mt-6 text-2xl font-bold">
                    {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                    {description}
                </p>

                <div className="mt-8">

                </div>

                <div className="mt-6 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">

                    {status}

                </div>

            </div>
        </button>
    );
}