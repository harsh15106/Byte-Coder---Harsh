import {
    Brain,
    Map,
    TriangleAlert,
    Rocket,
} from "lucide-react";

import WorkspaceCard from "./WorkspaceCard";

const modules = [
    {
        icon: Brain,
        title: "Idea Analyzer",
        description:
            "Validate your hackathon idea, detect weaknesses, and receive AI-powered improvements.",
        progress: 92,
        status: "Ready",
        color: "violet",
    },
    {
        icon: Map,
        title: "Roadmap Generator",
        description:
            "Generate milestones, task priorities, and an execution timeline automatically.",
        progress: 61,
        status: "In Progress",
        color: "cyan",
    },
    {
        icon: TriangleAlert,
        title: "Risk Monitor",
        description:
            "Identify technical risks, scope creep, missing features, and project blockers.",
        progress: 35,
        status: "3 Risks Found",
        color: "amber",
    },
    {
        icon: Rocket,
        title: "Pitch Generator",
        description:
            "Create a professional project pitch, demo script, and presentation instantly.",
        progress: 18,
        status: "Draft",
        color: "emerald",
    },
];

export default function WorkspaceGrid() {
    return (
        <section>

            <div className="mb-8 flex items-end justify-between">

                <div>

                    <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                        Workspace
                    </p>

                    <h2 className="mt-2 text-4xl font-black">
                        AI Modules
                    </h2>

                </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

                {modules.map((module) => (
                    <WorkspaceCard
                        key={module.title}
                        {...module}
                    />
                ))}

            </div>

        </section>
    );
}