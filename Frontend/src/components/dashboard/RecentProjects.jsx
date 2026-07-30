import { ArrowRight, FolderOpen, Clock3 } from "lucide-react";

const projects = [
    {
        name: "SCOF Hackathon",
        updated: "18 min ago",
        progress: 42,
        stage: "Roadmap",
    },
    {
        name: "Startup Pitch AI",
        updated: "Yesterday",
        progress: 76,
        stage: "Pitch Generation",
    },
    {
        name: "Smart Campus",
        updated: "3 days ago",
        progress: 19,
        stage: "Idea Review",
    },
];

export default function RecentProjects() {
    return (
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
                        Projects
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        Recent Projects
                    </h2>

                </div>

                <button className="text-sm text-violet-400 hover:text-violet-300">
                    View All
                </button>

            </div>

            <div className="space-y-5">

                {projects.map((project) => (

                    <div
                        key={project.name}
                        className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/5"
                    >

                        <div className="flex items-start justify-between">

                            <div className="flex items-center gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20">

                                    <FolderOpen
                                        size={22}
                                        className="text-violet-300"
                                    />

                                </div>

                                <div>

                                    <h3 className="font-semibold text-lg">

                                        {project.name}

                                    </h3>

                                    <div className="mt-1 flex items-center gap-2 text-sm text-gray-400">

                                        <Clock3 size={14} />

                                        {project.updated}

                                    </div>

                                </div>

                            </div>

                            <ArrowRight
                                size={20}
                                className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                            />

                        </div>

                        <div className="mt-6">

                            <div className="mb-2 flex justify-between text-sm">

                                <span className="text-gray-400">

                                    Progress

                                </span>

                                <span>

                                    {project.progress}%

                                </span>

                            </div>

                            <div className="h-2 rounded-full bg-white/10">

                                <div
                                    className="h-2 rounded-full bg-violet-500"
                                    style={{
                                        width: `${project.progress}%`,
                                    }}
                                />

                            </div>

                        </div>

                        <div className="mt-5 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">

                            {project.stage}

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}