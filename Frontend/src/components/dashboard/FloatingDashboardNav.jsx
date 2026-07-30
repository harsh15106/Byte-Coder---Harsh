import { Link, NavLink } from "react-router-dom";
import {
    Search,
    Bell,
    Settings,
    Sparkles,
    UserCircle2
} from "lucide-react";

export default function FloatingDashboardNav() {
    return (
        <header className="fixed left-1/2 top-6 z-50 w-full max-w-7xl -translate-x-1/2 px-6">

            <div className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-2xl">

                {/* Logo */}

                <Link
                    to="/"
                    className="flex items-center gap-3"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
                        <Sparkles size={20} />
                    </div>

                    <div>
                        <h1 className="font-bold">
                            SprintPilot
                        </h1>

                        <p className="text-xs text-gray-400">
                            AI Workspace
                        </p>
                    </div>
                </Link>

                {/* Navigation */}

                <nav className="hidden items-center gap-8 lg:flex">

                    <NavLink
                        to="/dashboard"
                        className="text-gray-300 transition hover:text-white"
                    >
                        Workspace
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className="text-gray-300 transition hover:text-white"
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/templates"
                        className="text-gray-300 transition hover:text-white"
                    >
                        Templates
                    </NavLink>

                    <NavLink
                        to="/docs"
                        className="text-gray-300 transition hover:text-white"
                    >
                        Docs
                    </NavLink>

                </nav>

                {/* Right */}

                <div className="flex items-center gap-3">

                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10">
                        <Search size={18} />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10">
                        <Bell size={18} />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10">
                        <Settings size={18} />
                    </button>

                    <button className="ml-2 flex h-11 w-11 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/20">
                        <UserCircle2 size={24} />
                    </button>

                </div>

            </div>

        </header>
    );
}