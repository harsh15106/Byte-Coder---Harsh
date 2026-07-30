import { useState } from "react";
import WorkspaceNavbar from "../components/workspace/WorkspaceNavbar";
import {
    Lightbulb,
    Target,
    Map,
    Presentation,
    CheckCircle2,
    Clock3,
    Sparkles,
    ArrowRight,
} from "lucide-react";



export default function Workspace() {

    const [activeTab, setActiveTab] = useState("dashboard");

    return (

        <div className="min-h-screen bg-[#050505]">

            <WorkspaceNavbar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <main className="mx-auto max-w-7xl px-8 pt-44 pb-10">

                {activeTab === "dashboard" && (

                    <div className="space-y-8">

                        {/* Hero */}

                        <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/20 via-black/40 to-fuchsia-600/20 p-8 backdrop-blur-3xl">

                            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                                <div>

                                    <h1 className="text-5xl font-black text-white">

                                        Welcome Back 👋

                                    </h1>

                                    <p className="mt-3 text-lg text-gray-300">

                                        Continue building your AI Hackathon project.

                                    </p>

                                    <div className="mt-8">

                                        <div className="mb-2 flex justify-between text-sm text-gray-300">

                                            <span>Project Progress</span>

                                            <span>78%</span>

                                        </div>

                                        <div className="h-3 overflow-hidden rounded-full bg-white/10">

                                            <div className="h-full w-[78%] rounded-full bg-violet-500"></div>

                                        </div>

                                    </div>

                                </div>

                                <button className="flex items-center gap-2 rounded-2xl bg-violet-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-violet-500">

                                    Continue Working

                                    <ArrowRight size={18} />

                                </button>

                            </div>

                        </section>

                        {/* Quick Actions */}

                        <section>

                            <h2 className="mb-5 text-2xl font-bold text-white">

                                Quick Actions

                            </h2>

                            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                                <ActionCard
                                    icon={<Lightbulb size={26} />}
                                    title="Analyze Idea"
                                    subtitle="Evaluate your project idea."
                                />

                                <ActionCard
                                    icon={<Target size={26} />}
                                    title="Define Scope"
                                    subtitle="Plan MVP features."
                                />

                                <ActionCard
                                    icon={<Map size={26} />}
                                    title="Generate Roadmap"
                                    subtitle="AI creates milestones."
                                />

                                <ActionCard
                                    icon={<Presentation size={26} />}
                                    title="Build Pitch"
                                    subtitle="Generate presentation."
                                />

                            </div>

                        </section>

                        {/* Statistics */}

                        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                            <DashboardCard
                                title="Tasks Remaining"
                                value="18"
                            />

                            <DashboardCard
                                title="AI Readiness"
                                value="91%"
                            />

                            <DashboardCard
                                title="Deadline"
                                value="3 Days"
                            />

                            <DashboardCard
                                title="Completed"
                                value="42"
                            />

                        </section>

                        {/* Panels */}

                        <section className="grid gap-6 lg:grid-cols-2">

                            <DashboardPanel title="Recent Activity">

                                <div className="space-y-5">

                                    <ActivityItem
                                        icon={<CheckCircle2 size={18} />}
                                        text="Roadmap Generated"
                                    />

                                    <ActivityItem
                                        icon={<CheckCircle2 size={18} />}
                                        text="Scope Updated"
                                    />

                                    <ActivityItem
                                        icon={<CheckCircle2 size={18} />}
                                        text="Pitch Generated"
                                    />

                                    <ActivityItem
                                        icon={<CheckCircle2 size={18} />}
                                        text="Tasks Synced"
                                    />

                                </div>

                            </DashboardPanel>

                            <DashboardPanel title="AI Suggestions">

                                <div className="space-y-5">

                                    <ActivityItem
                                        icon={<Sparkles size={18} />}
                                        text="Improve your problem statement."
                                    />

                                    <ActivityItem
                                        icon={<Sparkles size={18} />}
                                        text="Add feasibility analysis."
                                    />

                                    <ActivityItem
                                        icon={<Sparkles size={18} />}
                                        text="Generate architecture diagram."
                                    />

                                    <ActivityItem
                                        icon={<Sparkles size={18} />}
                                        text="Optimize your roadmap."
                                    />

                                </div>

                            </DashboardPanel>

                        </section>

                        {/* Upcoming Tasks */}

                        <DashboardPanel title="Upcoming Tasks">

                            <div className="space-y-5">

                                <TaskItem
                                    task="Finish MVP Development"
                                    due="Tomorrow"
                                />

                                <TaskItem
                                    task="Complete UI Design"
                                    due="2 Days"
                                />

                                <TaskItem
                                    task="Prepare Presentation"
                                    due="Friday"
                                />

                            </div>

                        </DashboardPanel>

                    </div>

                )}

            </main>

        </div>
        

    );
    function DashboardCard({ title, value }) {

        return (

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                <p className="text-sm text-gray-400">

                    {title}

                </p>

                <h2 className="mt-4 text-3xl font-black text-white">

                    {value}

                </h2>

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

    function ActionCard({ icon, title, subtitle }) {

        return (

            <button className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:bg-violet-600/10">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white">

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

                <div className="text-violet-400">

                    {icon}

                </div>

                <p className="text-gray-300">

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

                    <span className="text-white">

                        {task}

                    </span>

                </div>

                <span className="rounded-lg bg-violet-600/20 px-3 py-1 text-sm text-violet-300">

                    {due}

                </span>

            </div>

        );

    }
}