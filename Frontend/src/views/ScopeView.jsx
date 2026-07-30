import { useState } from "react";
import {
    Target,
    Plus,
    Sparkles,
    Trash2,
    ArrowRight,
    ArrowLeft,
    Clock,
    Zap,
    CheckCircle2,
    AlertTriangle,
    Layers,
    Code2,
    X
} from "lucide-react";

const initialFeatures = [
    {
        id: "feat-1",
        title: "Mock Interview Voice/Text Session",
        description: "Interactive real-time mock interview environment with AI prompt streaming.",
        category: "must",
        hours: 6,
        complexity: "High",
        tech: "OpenAI + WebSockets",
        priority: "Critical",
    },
    {
        id: "feat-2",
        title: "Instant AI Performance Feedback",
        description: "Automated analysis of candidate response confidence, clarity, and technical depth.",
        category: "must",
        hours: 4,
        complexity: "Medium",
        tech: "GPT-4o API",
        priority: "High",
    },
    {
        id: "feat-3",
        title: "Weakness & Skill Gap Tracker",
        description: "Dashboard highlighting specific topic gaps based on interview scoring.",
        category: "must",
        hours: 3,
        complexity: "Low",
        tech: "React + Tailwind",
        priority: "High",
    },
    {
        id: "feat-4",
        title: "Targeted 24-Hour Study Plan Generator",
        description: "AI-generated action items based on identified interview weaknesses.",
        category: "must",
        hours: 3,
        complexity: "Medium",
        tech: "Node.js + LLM Prompt",
        priority: "High",
    },
    {
        id: "feat-5",
        title: "Peer Practice Video Rooms",
        description: "Live WebRTC video rooms for peer-to-peer mock technical interviews.",
        category: "nice",
        hours: 8,
        complexity: "High",
        tech: "WebRTC + Socket.io",
        priority: "Medium",
    },
    {
        id: "feat-6",
        title: "Customizable Company Question Bank",
        description: "Filtering questions by target company (Google, Amazon, Meta).",
        category: "nice",
        hours: 4,
        complexity: "Medium",
        tech: "Firestore / MongoDB",
        priority: "Medium",
    },
    {
        id: "feat-7",
        title: "Resume Parsing & Custom Prompts",
        description: "PDF parser extracting user experience to tailor interview questions.",
        category: "future",
        hours: 5,
        complexity: "High",
        tech: "pdf-parse + Vector DB",
        priority: "Low",
    },
    {
        id: "feat-8",
        title: "Multi-Language Audio Transcriber",
        description: "Speech-to-text in 15+ spoken languages for international interviewees.",
        category: "future",
        hours: 7,
        complexity: "High",
        tech: "Whisper API",
        priority: "Low",
    },
];

const initialTechStack = [
    { name: "React + Vite", category: "Frontend", status: "Ready" },
    { name: "Node.js / Express", category: "Backend", status: "Ready" },
    { name: "OpenAI GPT-4o", category: "AI Engine", status: "Connected" },
    { name: "Firebase Auth & Firestore", category: "Database", status: "Ready" },
    { name: "Tailwind CSS", category: "Styling", status: "Configured" },
];

export default function ScopeView() {
    const [features, setFeatures] = useState(initialFeatures);
    const [techStack] = useState(initialTechStack);
    const [targetHours] = useState(24);
    const [isOptimizing, setIsOptimizing] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [filterCategory, setFilterCategory] = useState("all");
    const [aiNotification, setAiNotification] = useState("");

    // Form state for adding new feature
    const [newTitle, setNewTitle] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newCategory, setNewCategory] = useState("must");
    const [newHours, setNewHours] = useState(3);
    const [newComplexity, setNewComplexity] = useState("Medium");
    const [newTech, setNewTech] = useState("React + Node");

    // Calculations
    const mustFeatures = features.filter((f) => f.category === "must");
    const niceFeatures = features.filter((f) => f.category === "nice");
    const futureFeatures = features.filter((f) => f.category === "future");

    const totalMustHours = mustFeatures.reduce((acc, f) => acc + Number(f.hours), 0);
    const totalNiceHours = niceFeatures.reduce((acc, f) => acc + Number(f.hours), 0);

    const isOverCapacity = totalMustHours > targetHours;
    const capacityPercent = Math.min(100, Math.round((totalMustHours / targetHours) * 100));

    const feasibilityScore = Math.max(
        30,
        Math.min(99, Math.round(100 - (totalMustHours > targetHours ? (totalMustHours - targetHours) * 8 : 0)))
    );

    const handleMoveCategory = (id, newCat) => {
        setFeatures((prev) =>
            prev.map((f) => (f.id === id ? { ...f, category: newCat } : f))
        );
    };

    const handleDeleteFeature = (id) => {
        setFeatures((prev) => prev.filter((f) => f.id !== id));
    };

    const handleAddFeature = (e) => {
        e.preventDefault();
        if (!newTitle.trim()) return;
        const newFeat = {
            id: `feat-${Date.now()}`,
            title: newTitle.trim(),
            description: newDesc.trim() || "User defined scope feature.",
            category: newCategory,
            hours: Number(newHours) || 2,
            complexity: newComplexity,
            tech: newTech,
            priority: newCategory === "must" ? "High" : newCategory === "nice" ? "Medium" : "Low",
        };
        setFeatures((prev) => [...prev, newFeat]);
        setNewTitle("");
        setNewDesc("");
        setShowAddModal(false);
    };

    const handleAiOptimize = () => {
        setIsOptimizing(true);
        setAiNotification("");
        setTimeout(() => {
            setFeatures((prev) =>
                prev.map((f) => {
                    if (f.id === "feat-5") return { ...f, category: "future" };
                    if (f.id === "feat-6") return { ...f, hours: 2 };
                    return f;
                })
            );
            setIsOptimizing(false);
            setAiNotification("AI Scope Optimizer: De-scoped heavy WebRTC peer video module to Future and capped Question Bank at 2h to fit 24h sprint target!");
        }, 1200);
    };

    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl space-y-6 animate-fadeIn">
            {/* Header — matches Idea Analyzer / Roadmap / Tasks header pattern */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-400">
                        <Target size={24} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-white">Define Scope</h1>
                        <p className="text-sm text-gray-400">Establish your MVP core boundary and manage total build hours.</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <button
                        onClick={handleAiOptimize}
                        disabled={isOptimizing}
                        className="flex items-center gap-2 rounded-2xl bg-violet-600 px-6 py-3 font-bold text-white transition hover:bg-violet-500 disabled:opacity-50"
                    >
                        <Sparkles size={18} className={isOptimizing ? "animate-spin" : ""} />
                        {isOptimizing ? "Optimizing..." : "AI Auto-Trim Scope"}
                    </button>

                    <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                    >
                        <Plus size={18} />
                        Add Feature
                    </button>
                </div>
            </div>

            {/* AI Notification */}
            {aiNotification && (
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                        <Sparkles size={18} className="text-violet-400 shrink-0" />
                        <span className="text-sm text-gray-300">{aiNotification}</span>
                    </div>
                    <button onClick={() => setAiNotification("")} className="text-gray-400 hover:text-white">
                        <X size={16} />
                    </button>
                </div>
            )}

            {/* Capacity & Feasibility — matches DashboardCard pattern */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-violet-500/30">
                    <p className="text-sm text-gray-400">MVP Effort</p>
                    <h2 className={`mt-4 text-3xl font-black ${isOverCapacity ? "text-red-400" : "text-white"}`}>
                        {totalMustHours}h
                    </h2>
                    <p className="mt-2 text-xs text-gray-400">of {targetHours}h capacity</p>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                            className={`h-full rounded-full transition-all duration-500 ${isOverCapacity ? "bg-red-500" : "bg-violet-500"}`}
                            style={{ width: `${capacityPercent}%` }}
                        />
                    </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-violet-500/30">
                    <p className="text-sm text-gray-400">Sprint Feasibility</p>
                    <h2 className="mt-4 text-3xl font-black text-emerald-400">{feasibilityScore}%</h2>
                    <p className="mt-2 text-xs text-gray-400">
                        {feasibilityScore >= 80 ? "Healthy Scope" : "High Risk — trim features"}
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-violet-500/30">
                    <p className="text-sm text-gray-400">MVP Feature Count</p>
                    <h2 className="mt-4 text-3xl font-black text-white">{mustFeatures.length}</h2>
                    <p className="mt-2 text-xs text-gray-400">
                        {niceFeatures.length} Nice-to-have · {futureFeatures.length} Deferred
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-violet-500/30">
                    <p className="text-sm text-gray-400">Scope Status</p>
                    <h2 className="mt-4 text-3xl font-black text-white">
                        {isOverCapacity ? "Overloaded" : "On Track"}
                    </h2>
                    <p className={`mt-2 text-xs font-medium ${isOverCapacity ? "text-amber-400" : "text-emerald-400"}`}>
                        {isOverCapacity ? "Trim features to fit deadline" : "Ready for execution"}
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold text-white">Feature Priority Kanban</h2>

                <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
                    {["all", "must", "nice", "future"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilterCategory(cat)}
                            className={`rounded-lg px-4 py-1.5 text-xs font-semibold capitalize transition ${filterCategory === cat
                                ? "bg-violet-600 text-white"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {cat === "all" ? "All" : cat === "must" ? "Must Have" : cat === "nice" ? "Nice to Have" : "Out of Scope"}
                        </button>
                    ))}
                </div>
            </div>

            {/* Kanban Columns — matches Tasks tab column pattern */}
            <div className="grid gap-6 lg:grid-cols-3">
                {(filterCategory === "all" || filterCategory === "must") && (
                    <ScopeColumn
                        title="Must-Have (Core MVP)"
                        count={mustFeatures.length}
                        hours={totalMustHours}
                        badgeColor="text-emerald-400 bg-emerald-500/20"
                        features={mustFeatures}
                        onMove={handleMoveCategory}
                        onDelete={handleDeleteFeature}
                        columnType="must"
                    />
                )}
                {(filterCategory === "all" || filterCategory === "nice") && (
                    <ScopeColumn
                        title="Nice-to-Have"
                        count={niceFeatures.length}
                        hours={totalNiceHours}
                        badgeColor="text-violet-400 bg-violet-500/20"
                        features={niceFeatures}
                        onMove={handleMoveCategory}
                        onDelete={handleDeleteFeature}
                        columnType="nice"
                    />
                )}
                {(filterCategory === "all" || filterCategory === "future") && (
                    <ScopeColumn
                        title="Out of Scope (v2)"
                        count={futureFeatures.length}
                        badgeColor="text-gray-400 bg-white/10"
                        features={futureFeatures}
                        onMove={handleMoveCategory}
                        onDelete={handleDeleteFeature}
                        columnType="future"
                    />
                )}
            </div>

            {/* Tech Stack — matches dashboard panel pattern */}
            <div>
                <h2 className="mb-6 text-xl font-bold text-white flex items-center gap-2">
                    <Code2 className="text-violet-400" size={20} />
                    Tech Stack & Architecture
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {techStack.map((item, idx) => (
                        <div key={idx} className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-3">
                            <span className="text-xs font-bold uppercase text-violet-400">{item.category}</span>
                            <h4 className="font-bold text-white text-base">{item.name}</h4>
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                <span className="text-xs text-gray-400">{item.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add Feature Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
                    <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#0e0e12] p-6 shadow-2xl">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <h3 className="text-xl font-bold text-white">Add Scope Feature</h3>
                            <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleAddFeature} className="mt-6 space-y-4">
                            <div>
                                <label className="block text-xs font-semibold uppercase text-gray-300">Feature Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. AI Resume Parser"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white outline-none focus:border-violet-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase text-gray-300">Description</label>
                                <textarea
                                    rows={2}
                                    placeholder="Brief description..."
                                    value={newDesc}
                                    onChange={(e) => setNewDesc(e.target.value)}
                                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white outline-none focus:border-violet-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-300">Category</label>
                                    <select
                                        value={newCategory}
                                        onChange={(e) => setNewCategory(e.target.value)}
                                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#16161e] p-3 text-sm text-white outline-none focus:border-violet-500"
                                    >
                                        <option value="must">Must-Have (MVP)</option>
                                        <option value="nice">Nice-to-Have</option>
                                        <option value="future">Out of Scope</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-300">Estimated Hours</label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="24"
                                        value={newHours}
                                        onChange={(e) => setNewHours(e.target.value)}
                                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white outline-none focus:border-violet-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-300">Complexity</label>
                                    <select
                                        value={newComplexity}
                                        onChange={(e) => setNewComplexity(e.target.value)}
                                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#16161e] p-3 text-sm text-white outline-none focus:border-violet-500"
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-300">Tech Module</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. React + Node"
                                        value={newTech}
                                        onChange={(e) => setNewTech(e.target.value)}
                                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white outline-none focus:border-violet-500"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-white/10">
                                <button
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                    className="rounded-xl px-5 py-2.5 text-sm font-semibold text-gray-400 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-violet-500"
                                >
                                    Add Feature
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

function ScopeColumn({ title, count, hours, badgeColor, features, onMove, onDelete, columnType }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-3">
            <h3 className="font-bold text-gray-300 text-sm flex items-center justify-between">
                <span>{title}</span>
                <span className={`rounded-full px-2.5 py-0.5 text-xs ${badgeColor}`}>
                    {count}{hours !== undefined ? ` · ${hours}h` : ""}
                </span>
            </h3>

            <div className="space-y-3">
                {features.length === 0 ? (
                    <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-xs text-gray-500 text-center">
                        No features in this column
                    </div>
                ) : (
                    features.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-xl border border-white/5 bg-white/5 p-3 text-xs text-gray-200 space-y-2"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <span className="font-medium text-white">{item.title}</span>
                                <button
                                    onClick={() => onDelete(item.id)}
                                    className="text-gray-500 hover:text-red-400 transition shrink-0"
                                >
                                    <Trash2 size={12} />
                                </button>
                            </div>

                            <p className="text-gray-400 leading-relaxed">{item.description}</p>

                            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
                                <span className="flex items-center gap-1 text-gray-300">
                                    <Clock size={10} className="text-violet-400" />
                                    {item.hours}h
                                </span>
                                <span className="rounded bg-white/10 px-1.5 py-0.5 text-gray-400 font-mono text-[10px]">
                                    {item.tech}
                                </span>
                                <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${item.complexity === "High"
                                    ? "bg-red-500/20 text-red-300"
                                    : item.complexity === "Medium"
                                        ? "bg-amber-500/20 text-amber-300"
                                        : "bg-emerald-500/20 text-emerald-300"
                                    }`}>
                                    {item.complexity}
                                </span>
                            </div>

                            {/* Move actions */}
                            <div className="flex items-center justify-end gap-1.5 pt-1">
                                {columnType !== "must" && (
                                    <button
                                        onClick={() => onMove(item.id, "must")}
                                        className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 hover:bg-emerald-500/20"
                                    >
                                        <ArrowLeft size={8} /> Must
                                    </button>
                                )}
                                {columnType !== "nice" && (
                                    <button
                                        onClick={() => onMove(item.id, "nice")}
                                        className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-violet-300 hover:bg-violet-500/20"
                                    >
                                        Nice
                                    </button>
                                )}
                                {columnType !== "future" && (
                                    <button
                                        onClick={() => onMove(item.id, "future")}
                                        className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-gray-400 hover:bg-white/10"
                                    >
                                        Out <ArrowRight size={8} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
