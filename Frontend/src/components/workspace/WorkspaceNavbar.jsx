import {
    LayoutDashboard,
    Lightbulb,
    Target,
    Map,
    ListTodo,
    Presentation,
    Bell,
    Search,
    ChevronDown,
} from "lucide-react";

const navItems = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        id: "idea",
        label: "Idea Analyzer",
        icon: Lightbulb,
    },
    {
        id: "scope",
        label: "Scope",
        icon: Target,
    },
    {
        id: "roadmap",
        label: "Roadmap",
        icon: Map,
    },
    {
        id: "tasks",
        label: "Tasks",
        icon: ListTodo,
    },
    {
        id: "pitch",
        label: "Pitch",
        icon: Presentation,
    },
];

export default function WorkspaceNavbar({
    activeTab,
    setActiveTab,
}) {
    return (
        <header className="fixed top-4 left-1/2 z-50 w-[96%] max-w-7xl -translate-x-1/2">

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-3xl shadow-[0_10px_60px_rgba(0,0,0,0.45)]">

                {/* Top Row */}

                <div className="flex items-center justify-between px-8 py-5">

                    {/* Logo */}

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-lg font-bold text-white">
                            SP
                        </div>

                        <div>

                            <h1 className="text-xl font-black text-white">
                                SprintPilot AI
                            </h1>

                            <p className="text-xs text-gray-400">
                                Smart Hackathon Workspace
                            </p>

                        </div>

                    </div>

                    {/* Project Selector */}

                    <button className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/10 lg:flex">

                        AI Hackathon

                        <ChevronDown size={16} />

                    </button>

                    {/* Right Side */}

                    <div className="flex items-center gap-4">

                        {/* Search */}

                        <div className="relative hidden md:block">

                            <Search
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                            />

                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-64 rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-violet-500"
                            />

                        </div>

                        {/* Notification */}

                        <button className="relative rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:bg-white/10">

                            <Bell size={20} />

                            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
                                2
                            </span>

                        </button>

                        {/* Avatar */}

                        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 font-semibold text-white">

                            H

                        </button>

                    </div>

                </div>

                {/* Bottom Navigation */}

                <div className="border-t border-white/10 px-4 py-3">

                    <nav className="flex flex-wrap items-center justify-center gap-2">

                        {navItems.map((item) => {

                            const Icon = item.icon;

                            const active = activeTab === item.id;

                            return (

                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`group flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${active
                                            ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                                            : "text-gray-400 hover:bg-white/10 hover:text-white"
                                        }`}
                                >

                                    <Icon
                                        size={18}
                                        className={`transition-transform duration-300 ${active
                                                ? "scale-110"
                                                : "group-hover:scale-110"
                                            }`}
                                    />

                                    {item.label}

                                </button>

                            );
                        })}

                    </nav>

                </div>

            </div>

        </header>
    );
}