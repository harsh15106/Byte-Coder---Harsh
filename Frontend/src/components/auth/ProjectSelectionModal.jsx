import { FolderOpen, Plus } from "lucide-react";

export default function ProjectSelectionModal({
    isOpen,
    onNewProject,
    onContinueProject,
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

            <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#111111] p-8">

                <h2 className="text-3xl font-bold text-white">
                    Welcome to SprintPilot AI 🚀
                </h2>

                <p className="mt-3 text-gray-400">
                    What would you like to do?
                </p>

                <div className="mt-10 space-y-5">

                    <button
                        onClick={onNewProject}
                        className="flex w-full items-center gap-4 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-5 transition hover:bg-violet-500/20"
                    >
                        <Plus size={26} className="text-violet-400" />

                        <div className="text-left">
                            <h3 className="text-lg font-semibold text-white">
                                New Project
                            </h3>

                            <p className="text-sm text-gray-400">
                                Start planning a brand new hackathon project.
                            </p>
                        </div>
                    </button>

                    <button
                        onClick={onContinueProject}
                        className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                    >
                        <FolderOpen size={26} className="text-cyan-400" />

                        <div className="text-left">
                            <h3 className="text-lg font-semibold text-white">
                                Continue Existing Project
                            </h3>

                            <p className="text-sm text-gray-400">
                                Open one of your previously saved projects.
                            </p>
                        </div>
                    </button>

                </div>

            </div>

        </div>
    );
}