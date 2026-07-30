const projects = [
    {
        id: 1,
        name: "SprintPilot AI",
        progress: 42,
        updated: "2 hours ago",
    },
    {
        id: 2,
        name: "AI Resume Builder",
        progress: 81,
        updated: "Yesterday",
    },
    {
        id: 3,
        name: "Smart Agriculture",
        progress: 18,
        updated: "3 days ago",
    },
];

export default function ContinueProjectModal({
    isOpen,
    onClose,
    onSelect,
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

            <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#111111] p-8">

                <h2 className="mb-8 text-3xl font-bold text-white">
                    Continue Project
                </h2>

                <div className="space-y-5">

                    {projects.map((project) => (
                        <button
                            key={project.id}
                            onClick={() => onSelect(project)}
                            className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10"
                        >
                            <div className="flex items-center justify-between">

                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {project.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-400">
                                        Last updated {project.updated}
                                    </p>
                                </div>


                            </div>
                        </button>
                    ))}

                </div>

                <button
                    onClick={onClose}
                    className="mt-6 w-full rounded-xl border border-white/10 py-3 text-white"
                >
                    Close
                </button>

            </div>

        </div>
    );
}