import { useState } from "react";
import WorkspaceNavbar from "../components/workspace/WorkspaceNavbar";
import IdeaAnalyzerView from "../components/workspace/IdeaAnalyzerView";
import RoadmapBuilderView from "../components/workspace/RoadmapBuilderView";
import AIChatView from "../components/workspace/AIChatView";
import ScopeView from "../components/workspace/ScopeView";
import PitchView from "../components/workspace/PitchView";
import { useProject } from "../state/ProjectContext";
import {
    Lightbulb,
    Target,
    Map,
    Presentation,
    CheckCircle2,
    Clock3,
    Sparkles,
    ArrowRight,
    Bot
} from "lucide-react";

export default function Workspace() {
    const [activeTab, setActiveTab] = useState("dashboard");
    const { project, stats } = useProject();

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <WorkspaceNavbar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <main className="mx-auto max-w-7xl px-8 pt-44 pb-16">
                {/* Dashboard Tab */}
                {activeTab === "dashboard" && (
                    <div className="space-y-8 animate-fadeIn">
                        {/* Hero */}
                        <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/20 via-black/40 to-fuchsia-600/20 p-8 backdrop-blur-3xl">
                            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 mb-3">
                                        ✨ Active Workspace: {project.meta?.name || 'AI Hackathon Project'}
                                    </div>
                                    <h1 className="text-5xl font-black text-white">
                                        Welcome Back 👋
                                    </h1>
                                    <p className="mt-3 text-lg text-gray-300">
                                        Continue analyzing ideas, building roadmaps, defining scope, and pitching your AI project.
                                    </p>

                                    <div className="mt-8 max-w-md">
                                        <div className="mb-2 flex justify-between text-sm text-gray-300">
                                            <span>Project Completion</span>
                                            <span className="font-bold text-violet-400">{stats.completionPercent}%</span>
                                        </div>
                                        <div className="h-3 overflow-hidden rounded-full bg-white/10">
                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
                                                style={{ width: `${stats.completionPercent}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setActiveTab("idea")}
                                    className="flex items-center gap-2 rounded-2xl bg-violet-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-violet-500 shadow-lg shadow-violet-600/30"
                                >
                                    Review Idea Report
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </section>

                        {/* Quick Actions */}
                        <section>
                            <h2 className="mb-5 text-2xl font-bold text-white">
                                Workspace Modules
                            </h2>

                            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                                <ActionCard
                                    icon={<Lightbulb size={26} />}
                                    title="Idea Analyzer"
                                    subtitle="Review feasibility score, target & tech stack."
                                    onClick={() => setActiveTab("idea")}
                                />

                                <ActionCard
                                    icon={<Map size={26} />}
                                    title="Build Roadmap"
                                    subtitle="AI generates milestones & sprint tasks."
                                    onClick={() => setActiveTab("roadmap")}
                                />

                                <ActionCard
                                    icon={<Target size={26} />}
                                    title="Define Scope"
                                    subtitle="Locked 24-hour MVP feature specification."
                                    onClick={() => setActiveTab("scope")}
                                />

                                <ActionCard
                                    icon={<Presentation size={26} />}
                                    title="Build Pitch"
                                    subtitle="Review 60-second narrative pitch deck."
                                    onClick={() => setActiveTab("pitch")}
                                />
                            </div>
                        </section>

                        {/* Statistics */}
                        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            <DashboardCard
                                title="Feasibility Score"
                                value={`${project.ideaAnalysis?.feasibilityScore || 82}%`}
                                subtitle="Calculated from scope & tech"
                            />

                            <DashboardCard
                                title="Hours Remaining"
                                value={`${stats.hoursRemaining}h`}
                                subtitle="24h Hackathon Clock"
                            />

                            <DashboardCard
                                title="MVP Scope Items"
                                value={`${project.scope?.mvpFeatures?.length || 4}`}
                                subtitle="Locked MVP Features"
                            />

                            <DashboardCard
                                title="Tech Stack Items"
                                value={`${project.ideaAnalysis?.techStack?.length || 5}`}
                                subtitle="Declared technologies"
                            />
                        </section>

                        {/* Panels */}
                        <section className="grid gap-6 lg:grid-cols-2">
                            <DashboardPanel title="Recent Sprint Activity">
                                <div className="space-y-4">
                                    <ActivityItem
                                        icon={<CheckCircle2 size={18} />}
                                        text="Feasibility Score calculated (84%)"
                                    />
                                    <ActivityItem
                                        icon={<CheckCircle2 size={18} />}
                                        text="Tech Stack declared (React, OpenAI, Node.js)"
                                    />
                                    <ActivityItem
                                        icon={<CheckCircle2 size={18} />}
                                        text="Scope Definition & MVP features locked"
                                    />
                                    <ActivityItem
                                        icon={<CheckCircle2 size={18} />}
                                        text="60-Second Pitch Narrative generated"
                                    />
                                </div>
                            </DashboardPanel>

                            <DashboardPanel title="AI Strategic Insights">
                                <div className="space-y-4">
                                    <ActivityItem
                                        icon={<Sparkles size={18} />}
                                        text={`Target Audience: ${project.ideaAnalysis?.targetAudience || 'CS Students preparing for tech interviews'}`}
                                    />
                                    <ActivityItem
                                        icon={<Sparkles size={18} />}
                                        text="Scope locked: Deferred v2 peer rooms to guarantee 24h delivery."
                                    />
                                    <ActivityItem
                                        icon={<Sparkles size={18} />}
                                        text="Pitch narrative prepared in single 60-second verbal paragraph."
                                    />
                                </div>
                            </DashboardPanel>
                        </section>

                        {/* Upcoming Tasks */}
                        <DashboardPanel title="Sprint Focus Areas">
                            <div className="space-y-4">
                                <TaskItem
                                    task="Review Feasibility Score & Strengths"
                                    due="Phase 1"
                                />
                                <TaskItem
                                    task="Finalize Tech Stack & API Endpoints"
                                    due="Phase 2"
                                />
                                <TaskItem
                                    task="Execute Milestone Phase 3 UI"
                                    due="Phase 3"
                                />
                            </div>
                        </DashboardPanel>
                    </div>
                )}

                {/* Idea Analyzer View */}
                {activeTab === "idea" && (
                    <IdeaAnalyzerView />
                )}

                {/* Roadmap View */}
                {activeTab === "roadmap" && (
                    <RoadmapBuilderView />
                )}

                {/* AI Chat View */}
                {activeTab === "aichat" && (
                    <AIChatView />
                )}

                {/* Scope View */}
                {activeTab === "scope" && (
                    <ScopeView />
                )}

                {/* Pitch View */}
                {activeTab === "pitch" && (
                    <PitchView />
                )}
            </main>
        </div>
    );

    function DashboardCard({ title, value, subtitle }) {
        return (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {title}
                </p>
                <h2 className="mt-3 text-3xl font-black text-white">
                    {value}
                </h2>
                {subtitle && (
                    <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
                )}
            </div>
        );
    }

    function DashboardPanel({ title, children }) {
        return (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h2 className="mb-6 text-xl font-bold text-white">
                    {title}
                </h2>
                <div className="text-gray-300">
                    {children}
                </div>
            </div>
        );
    }

    function ActionCard({ icon, title, subtitle, onClick }) {
        return (
            <button
                onClick={onClick}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition duration-300 hover:-translate-y-1.5 hover:border-violet-500 hover:bg-violet-600/10 cursor-pointer"
            >
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-violet-600 text-white transition group-hover:scale-110">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                    {subtitle}
                </p>
            </button>
        );
    }

    function ActivityItem({ icon, text }) {
        return (
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-violet-400 shrink-0">
                    {icon}
                </div>
                <p className="text-sm text-gray-300">
                    {text}
                </p>
            </div>
        );
    }

    function TaskItem({ task, due }) {
        return (
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                    <Clock3
                        size={18}
                        className="text-violet-400"
                    />
                    <span className="text-sm font-medium text-white">
                        {task}
                    </span>
                </div>
                <span className="rounded-lg bg-violet-600/20 border border-violet-500/30 px-3 py-1 text-xs font-semibold text-violet-300">
                    {due}
                </span>
            </div>
        );
    }
}