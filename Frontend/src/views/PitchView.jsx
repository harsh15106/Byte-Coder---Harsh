import { useState } from "react";
import {
    Presentation,
    Sparkles,
    Play,
    HelpCircle,
    X,
    CheckCircle2,
    BookOpen
} from "lucide-react";

const initialAiPitch = {
    title: "SprintPilot AI",
    subtext: "The Autonomous Smart Hackathon Workspace — From Idea to Demo in 24 Hours",
    paragraphs: [
        "In competitive software hackathons, engineering teams frequently lose up to 40% of their available build time to scope drift, disjointed task management, and last-minute presentation panic. SprintPilot AI solves this fundamental challenge by acting as an autonomous AI co-pilot that orchestrates your entire hackathon workflow from initial idea evaluation straight to a pitch-ready demo.",
        "By dynamically evaluating technical feasibility and project complexity, SprintPilot's Smart Scope Kanban automatically identifies and trims non-essential features, guaranteeing a fully functional MVP within 24-hour sprint constraints. This eliminates scattered tools like Trello, Figma, and separate slide editors, replacing them with a single unified workspace.",
        "Built on a high-performance architecture featuring React 18, Vite, Tailwind CSS, and zero-latency streaming LLM integrations, SprintPilot unlocks unprecedented sprint velocity for over 3.5 million global developers and enterprise hackathon teams worldwide, enabling teams to build faster, pitch smarter, and deliver winning product submissions every time."
    ],
    judgeNote: "AI Insight: Pitch narrative structured for high impact, emphasizing verified MVP execution and time optimization."
};

const sampleJudgeQa = [
    {
        q: "How does SprintPilot calculate project feasibility?",
        a: "We analyze feature complexity, estimated task hours, and remaining sprint duration using weighted algorithmic scoring trained on winning hackathon project scopes.",
    },
    {
        q: "How does the AI generate this pitch narrative?",
        a: "SprintPilot synthesizes your project goals, selected MVP scope items, and technical stack into a structured pitch narrative automatically.",
    },
    {
        q: "What makes this different from generic pitch generators?",
        a: "SprintPilot is deeply context-aware—it builds presentation pitch content directly from your active scope items and project tasks, maintaining total consistency.",
    },
];

export default function PitchView() {
    const [pitch, setPitch] = useState(initialAiPitch);
    const [activeTab, setActiveTab] = useState("builder");
    const [isPresenting, setIsPresenting] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [aiNotice, setAiNotice] = useState("");

    const handleAiRefine = () => {
        setIsGenerating(true);
        setAiNotice("");
        setTimeout(() => {
            setPitch({
                title: "SprintPilot AI",
                subtext: "Autonomous Hackathon Co-Pilot & Execution Engine",
                paragraphs: [
                    "SprintPilot AI fundamentally transforms how developers approach competitive software sprints. By unifying idea evaluation, dynamic feature scoping, milestone roadmaps, and pitch deck generation into a single continuous AI-driven workspace, teams eliminate presentation panic and focus 100% on core engineering.",
                    "Our AI Feasibility Engine continuously monitors sprint constraints against technical complexity, auto-trimming scope overflow to guarantee a working MVP submission. Built with React 18, Vite, and streaming AI pipelines, SprintPilot empowers over 3.5 million global developers to pitch with confidence and win more hackathons."
                ],
                judgeNote: "AI Insight: Refined narrative emphasizing AI feasibility automation and high-speed execution."
            });
            setIsGenerating(false);
            setAiNotice("AI Pitch Studio: Re-generated pitch narrative into structured executive paragraphs!");
        }, 1200);
    };

    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl space-y-6 animate-fadeIn">
            {/* Header — matches Idea Analyzer / Roadmap / Tasks header pattern */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-500/20 text-fuchsia-400">
                        <Presentation size={24} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-white">Build Pitch</h1>
                        <p className="text-sm text-gray-400">AI-generated executive pitch narrative for judges.</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <button
                        onClick={handleAiRefine}
                        disabled={isGenerating}
                        className="flex items-center gap-2 rounded-2xl bg-violet-600 px-6 py-3 font-bold text-white transition hover:bg-violet-500 disabled:opacity-50"
                    >
                        <Sparkles size={18} className={isGenerating ? "animate-spin" : ""} />
                        {isGenerating ? "Refining..." : "AI Re-Generate Pitch"}
                    </button>

                    <button
                        onClick={() => setIsPresenting(true)}
                        className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                    >
                        <Play size={18} />
                        Present Pitch
                    </button>
                </div>
            </div>

            {/* AI Notification */}
            {aiNotice && (
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                        <Sparkles size={18} className="text-violet-400 shrink-0" />
                        <span className="text-sm text-gray-300">{aiNotice}</span>
                    </div>
                    <button onClick={() => setAiNotice("")} className="text-gray-400 hover:text-white">
                        <X size={16} />
                    </button>
                </div>
            )}

            {/* Mode Selector — matches filter tabs pattern */}
            <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1 w-fit">
                <button
                    onClick={() => setActiveTab("builder")}
                    className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-semibold transition ${activeTab === "builder" ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"
                        }`}
                >
                    <BookOpen size={14} />
                    AI Pitch Narrative
                </button>
                <button
                    onClick={() => setActiveTab("qa")}
                    className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-semibold transition ${activeTab === "qa" ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"
                        }`}
                >
                    <HelpCircle size={14} />
                    Judge Q&A Defense
                </button>
            </div>

            {/* TAB 1: AI PITCH NARRATIVE */}
            {activeTab === "builder" && (
                <div className="space-y-4">
                    {/* Title Card */}
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-6 space-y-3">
                        <span className="text-xs font-bold uppercase text-fuchsia-400">AI Generated Pitch</span>
                        <h3 className="text-4xl font-black text-white">{pitch.title}</h3>
                        <p className="text-xs text-gray-400">{pitch.subtext}</p>
                    </div>

                    {/* Paragraphs — matches activity/task item card pattern */}
                    {pitch.paragraphs.map((para, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                        >
                            <div className="text-violet-400 mt-0.5 shrink-0">
                                <CheckCircle2 size={18} />
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{para}</p>
                        </div>
                    ))}

                    {/* AI Insight Footer */}
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="text-violet-400">
                            <Sparkles size={18} />
                        </div>
                        <p className="text-gray-300 text-sm">{pitch.judgeNote}</p>
                    </div>
                </div>
            )}

            {/* TAB 2: JUDGE Q&A DEFENSE */}
            {activeTab === "qa" && (
                <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                        {sampleJudgeQa.map((qa, idx) => (
                            <div key={idx} className="rounded-2xl border border-white/10 bg-black/40 p-6 space-y-3">
                                <span className="text-xs font-bold uppercase text-fuchsia-400">Question #{idx + 1}</span>
                                <h4 className="font-bold text-white text-base">"{qa.q}"</h4>
                                <p className="text-xs text-gray-400">{qa.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Navigation — matches Idea Analyzer "Proceed" button pattern */}
            <div className="flex justify-end gap-4 pt-4">
                <button
                    onClick={() => setIsPresenting(true)}
                    className="flex items-center gap-2 rounded-2xl bg-violet-600 px-6 py-3 font-bold text-white hover:bg-violet-500"
                >
                    Launch Full-Screen Pitch <Play size={18} />
                </button>
            </div>

            {/* FULL SCREEN PRESENTATION OVERLAY */}
            {isPresenting && (
                <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black p-6 md:p-12 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs text-gray-400 border-b border-white/10 pb-4">
                        <span className="font-bold text-violet-400 text-sm">SprintPilot AI Presentation</span>
                        <button
                            onClick={() => setIsPresenting(false)}
                            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="mx-auto max-w-3xl w-full my-auto space-y-6">
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-black text-white md:text-4xl">
                                {pitch.title}
                            </h1>
                            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                                {pitch.subtext}
                            </p>
                        </div>

                        <div className="space-y-4 max-w-2xl mx-auto">
                            {pitch.paragraphs.map((para, idx) => (
                                <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">{para}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-6 text-xs text-gray-500">
                        <span>SprintPilot Autonomous Smart Hackathon Workspace</span>
                        <button
                            onClick={() => setIsPresenting(false)}
                            className="rounded-xl bg-violet-600 px-5 py-2 font-bold text-white hover:bg-violet-500"
                        >
                            Close Pitch
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
