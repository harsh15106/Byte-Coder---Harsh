import { Sparkles } from "lucide-react";

import { Link, useNavigate } from "react-router-dom"; 

export default function FloatingNavbar() {
    return (
        <header className="fixed top-6 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-6">
            <div
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4">
                <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-violet-400" />
                    <span className="text-xl font-semibold tracking-wide">
                        IdeaForge AI
                    </span>
                </div>

                <nav className="hidden md:flex gap-10 text-sm text-gray-300">
                    <a href="#">Features</a>
                    <a href="#">Workflow</a>
                    <a href="#">About</a>
                </nav>

                <Link
                    to="/login"
                    className="rounded-xl bg-white px-6 py-3
          font-semibold
          text-black
          transition
          hover:scale-105
        "
                >
                    Start Building
                </Link>
            </div>
        </header>
    );
}