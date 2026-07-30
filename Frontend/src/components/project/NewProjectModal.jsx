import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewProjectModal({
    isOpen,
    onClose,
    onCreate,
}) {
    const [form, setForm] = useState({
        projectName: "",
        problemStatement: "",
        teamSize: "4",
        duration: "24 Hours",
        solution: "",
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

            <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-[#111111] p-8">

                <h2 className="mb-8 text-3xl font-bold text-white">
                    Create New Project
                </h2>

                <div className="space-y-6">

                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Project Name
                        </label>

                        <input
                            name="projectName"
                            value={form.projectName}
                            onChange={handleChange}
                            className="w-full rounded-xl bg-black/30 p-3 text-white outline-none"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Problem Statement
                        </label>

                        <textarea
                            rows="4"
                            name="problemStatement"
                            value={form.problemStatement}
                            onChange={handleChange}
                            className="w-full rounded-xl bg-black/30 p-3 text-white outline-none"
                        />
                    </div>


                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Proposed Solution
                        </label>

                        <textarea
                            rows="5"
                            name="solution"
                            value={form.solution}
                            onChange={handleChange}
                            className="w-full rounded-xl bg-black/30 p-3 text-white outline-none"
                        />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm text-gray-300">
                                Team Size
                            </label>

                            <select
                                name="teamSize"
                                value={form.teamSize}
                                onChange={handleChange}
                                className="w-full rounded-xl bg-black/30 p-3 text-white"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6+</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-gray-300">
                                Hackathon Duration
                            </label>

                            <select
                                name="duration"
                                value={form.duration}
                                onChange={handleChange}
                                className="w-full rounded-xl bg-black/30 p-3 text-white"
                            >
                                <option>12 Hours</option>
                                <option>24 Hours</option>
                                <option>36 Hours</option>
                                <option>48 Hours</option>
                                <option>72 Hours</option>
                            </select>
                        </div>

                    </div>
                    <div className="flex justify-end gap-4">

                        <button
                            onClick={onClose}
                            className="rounded-xl border border-white/10 px-6 py-3 text-white"
                        >
                            Cancel
                        </button>

                        <Link
                            to ="/workspace"
                            className="rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white hover:bg-violet-500"
                        >
                            Continue →
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}