import { useState } from "react";
import { useProject } from "../../state/ProjectContext";
import {
  Map,
  Sparkles,
  Clock,
  CheckCircle2,
  ListTodo,
  Plus,
  Trash2,
  Share2,
  RefreshCw,
  Layers,
  ArrowRight,
  ChevronRight,
  Copy,
  Zap,
  Check,
  AlertCircle,
} from "lucide-react";

export default function RoadmapBuilderView() {
  const { project, dispatch } = useProject();

  const [phases, setPhases] = useState(
    project.roadmap?.phases || [
      {
        id: "req",
        name: "Phase 1: Architecture & Data Spec",
        priority: "High",
        estimateHours: 2,
        dependency: "None",
        tasks: [
          "Define user flow & state schema",
          "Setup AI prompt rubric",
          "Draft API contract",
        ],
      },
      {
        id: "backend",
        name: "Phase 2: Backend API & AI Integration",
        priority: "High",
        estimateHours: 6,
        dependency: "Phase 1",
        tasks: [
          "Integrate OpenAI API endpoint",
          "Build response parser",
          "Implement session state persistence",
        ],
      },
      {
        id: "frontend",
        name: "Phase 3: Core MVP Interface",
        priority: "High",
        estimateHours: 8,
        dependency: "Phase 2",
        tasks: [
          "Build interactive dashboard UI",
          "Implement live score gauge",
          "Create input form controls",
        ],
      },
      {
        id: "testing",
        name: "Phase 4: Verification & Edge Cases",
        priority: "Medium",
        estimateHours: 3,
        dependency: "Phase 3",
        tasks: [
          "Test AI response fallbacks",
          "Validate responsiveness & mobile layout",
        ],
      },
      {
        id: "pitch",
        name: "Phase 5: Pitch & Demo Preparation",
        priority: "High",
        estimateHours: 2,
        dependency: "Phase 4",
        tasks: [
          "Record backup demo video",
          "Finalize 60-sec pitch presentation",
          "Deploy build to Vercel/Netlify",
        ],
      },
    ],
  );

  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [isGenerating, setIsGenerating] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // New Phase Form State
  const [showAddPhase, setShowAddPhase] = useState(false);
  const [newPhaseName, setNewPhaseName] = useState("");
  const [newPhasePriority, setNewPhasePriority] = useState("High");
  const [newPhaseHours, setNewPhaseHours] = useState(4);

  // New Task Inline Form State per Phase
  const [newTaskInput, setNewTaskInput] = useState({});

  const totalEstimate = phases.reduce(
    (sum, p) => sum + Number(p.estimateHours || 0),
    0,
  );
  const totalTasksCount = phases.reduce(
    (sum, p) => sum + (p.tasks?.length || 0),
    0,
  );

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleTask = (taskTitle) => {
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(taskTitle)) next.delete(taskTitle);
      else next.add(taskTitle);
      return next;
    });
  };

  const handleAddTaskToPhase = (phaseId, e) => {
    e.preventDefault();
    const taskTitle = newTaskInput[phaseId];
    if (!taskTitle || !taskTitle.trim()) return;

    const updated = phases.map((phase) =>
      phase.id === phaseId
        ? { ...phase, tasks: [...(phase.tasks || []), taskTitle.trim()] }
        : phase,
    );

    setPhases(updated);
    setNewTaskInput((prev) => ({ ...prev, [phaseId]: "" }));
    dispatch({ type: "UPDATE_ROADMAP_PHASES", payload: updated });
  };

  const handleDeleteTask = (phaseId, taskIndex) => {
    const updated = phases.map((phase) => {
      if (phase.id === phaseId) {
        const newTasks = [...phase.tasks];
        newTasks.splice(taskIndex, 1);
        return { ...phase, tasks: newTasks };
      }
      return phase;
    });
    setPhases(updated);
    dispatch({ type: "UPDATE_ROADMAP_PHASES", payload: updated });
  };

  const handleAddPhase = (e) => {
    e.preventDefault();
    if (!newPhaseName.trim()) return;

    const newPhase = {
      id: `phase-${Date.now()}`,
      name: newPhaseName.trim(),
      priority: newPhasePriority,
      estimateHours: Number(newPhaseHours),
      dependency: phases.length > 0 ? phases[phases.length - 1].name : "None",
      tasks: [],
    };

    const updated = [...phases, newPhase];
    setPhases(updated);
    dispatch({ type: "UPDATE_ROADMAP_PHASES", payload: updated });

    setNewPhaseName("");
    setShowAddPhase(false);
    showToast("New Milestone Phase added!");
  };

  const handleDeletePhase = (phaseId) => {
    const updated = phases.filter((p) => p.id !== phaseId);
    setPhases(updated);
    dispatch({ type: "UPDATE_ROADMAP_PHASES", payload: updated });
    showToast("Phase removed from roadmap");
  };

  const handleReGenerateRoadmap = () => {
    setIsGenerating(true);
    setTimeout(() => {
      // Dynamic phases based on project tech stack & name
      const techList = project.ideaAnalysis?.techStack || [
        "React",
        "Node.js",
        "OpenAI",
      ];
      const techString = techList.slice(0, 3).join(", ");

      const generated = [
        {
          id: "gen-1",
          name: `Phase 1: ${project.meta?.name || "Project"} Requirements & Tech Scoping`,
          priority: "High",
          estimateHours: 2,
          dependency: "None",
          tasks: [
            `Scaffolding ${techString} codebase`,
            "Define target user personas & problem scope",
            "Establish API specs & state store model",
          ],
        },
        {
          id: "gen-2",
          name: "Phase 2: Core AI Engine & Data Layer",
          priority: "High",
          estimateHours: 6,
          dependency: "Phase 1",
          tasks: [
            "Connect OpenAI API with custom prompt engineering",
            "Setup real-time response calculation logic",
            "Implement feasibility score evaluator",
          ],
        },
        {
          id: "gen-3",
          name: "Phase 3: Interactive UI & Dashboard Components",
          priority: "High",
          estimateHours: 8,
          dependency: "Phase 2",
          tasks: [
            "Build responsive glassmorphism workspace UI",
            "Implement target market & competitor matrix view",
            "Integrate progress rings and milestone indicators",
          ],
        },
        {
          id: "gen-4",
          name: "Phase 4: Testing, Polish & Demo Pitch",
          priority: "Medium",
          estimateHours: 4,
          dependency: "Phase 3",
          tasks: [
            "Execute end-to-end user workflow test",
            "Deploy live production preview",
            "Prepare 60-second hackathon pitch narrative",
          ],
        },
      ];

      setPhases(generated);
      dispatch({ type: "UPDATE_ROADMAP_PHASES", payload: generated });
      setIsGenerating(false);
      showToast("Roadmap recalculated based on Tech Stack & Idea!");
    }, 1200);
  };

  const handleSyncToTasks = () => {
    dispatch({ type: "SYNC_ROADMAP_TO_TASKS" });
    showToast("Roadmap milestones synced to Project Taskboard!");
  };

  const handleCopyMarkdown = () => {
    let md = `# ${project.meta?.name || "SprintPilot"} - Execution Roadmap\n\n`;
    phases.forEach((p, i) => {
      md += `## ${p.name}\n`;
      md += `- **Priority**: ${p.priority} | **Estimate**: ${p.estimateHours}h | **Dependency**: ${p.dependency}\n`;
      md += `- **Tasks**:\n`;
      (p.tasks || []).forEach((t) => {
        md += `  - [ ] ${t}\n`;
      });
      md += `\n`;
    });

    navigator.clipboard.writeText(md);
    showToast("Roadmap copied to clipboard as Markdown!");
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-violet-500/40 bg-violet-950/90 px-6 py-4 text-violet-200 shadow-2xl backdrop-blur-xl transition duration-300">
          <Zap size={20} className="text-violet-400" />
          <span className="font-semibold text-sm">{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-900/30 via-black/60 to-fuchsia-900/30 p-8 backdrop-blur-3xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 mb-4">
              <Sparkles size={14} />
              AI Milestone & Roadmap Builder
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Execution Roadmap
            </h1>
            <p className="mt-3 max-w-2xl text-base text-gray-300">
              Structured sprint milestones generated from your idea feasibility,
              tech stack, and target user workflow.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleReGenerateRoadmap}
              disabled={isGenerating}
              className="flex items-center gap-2 rounded-2xl border border-violet-500/30 bg-violet-600/20 px-5 py-3.5 font-semibold text-violet-200 transition hover:bg-violet-600/40 hover:text-white disabled:opacity-50 text-sm"
            >
              <RefreshCw
                size={16}
                className={isGenerating ? "animate-spin text-violet-400" : ""}
              />
              {isGenerating ? "Generating..." : "AI Auto-Generate"}
            </button>

            <button
              onClick={handleSyncToTasks}
              className="flex items-center gap-2 rounded-2xl bg-violet-600 px-5 py-3.5 font-semibold text-white transition hover:bg-violet-500 text-sm shadow-lg shadow-violet-600/25"
            >
              <ListTodo size={16} />
              Sync to Taskboard
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white text-sm"
            >
              <Copy size={16} />
              Export MD
            </button>
          </div>
        </div>

        {/* Sprint Stats Summary Bar */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10 pt-6">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold uppercase">
              <Clock size={14} className="text-violet-400" />
              Total Estimate
            </div>
            <p className="mt-2 text-2xl font-black text-white">
              {totalEstimate} Hours
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold uppercase">
              <Layers size={14} className="text-fuchsia-400" />
              Milestone Phases
            </div>
            <p className="mt-2 text-2xl font-black text-white">
              {phases.length} Phases
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold uppercase">
              <ListTodo size={14} className="text-blue-400" />
              Total Sprint Tasks
            </div>
            <p className="mt-2 text-2xl font-black text-white">
              {totalTasksCount} Tasks
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold uppercase">
              <Zap size={14} className="text-emerald-400" />
              Feasibility Rating
            </div>
            <p className="mt-2 text-2xl font-black text-emerald-400">
              {project.ideaAnalysis?.feasibilityScore || 84}% Score
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Milestone Phases Timeline */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Map className="text-violet-400" size={24} />
            Milestone Timeline
          </h2>

          <button
            onClick={() => setShowAddPhase(!showAddPhase)}
            className="flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-600/20 px-4 py-2.5 text-xs font-semibold text-violet-300 hover:bg-violet-600 hover:text-white transition"
          >
            <Plus size={16} />
            Add Milestone Phase
          </button>
        </div>

        {/* Add Phase Form */}
        {showAddPhase && (
          <form
            onSubmit={handleAddPhase}
            className="rounded-3xl border border-violet-500/30 bg-violet-950/30 p-6 space-y-4 backdrop-blur-xl animate-fadeIn"
          >
            <h3 className="text-base font-bold text-white">
              Create New Milestone Phase
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="md:col-span-2">
                <label className="block text-xs text-gray-400 mb-1">
                  Phase Title
                </label>
                <input
                  type="text"
                  value={newPhaseName}
                  onChange={(e) => setNewPhaseName(e.target.value)}
                  placeholder="e.g. Phase 6: Advanced Analytics & Webhooks"
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Estimated Hours
                </label>
                <input
                  type="number"
                  min="1"
                  max="24"
                  value={newPhaseHours}
                  onChange={(e) => setNewPhaseHours(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowAddPhase(false)}
                className="rounded-xl px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-violet-600 px-5 py-2 text-xs font-semibold text-white hover:bg-violet-500 transition"
              >
                Save Phase
              </button>
            </div>
          </form>
        )}

        {/* Render Phases List */}
        <div className="space-y-6">
          {phases.map((phase, pIdx) => {
            const tasks = phase.tasks || [];
            const doneInPhase = tasks.filter((t) =>
              completedTasks.has(t),
            ).length;
            const progress =
              tasks.length > 0
                ? Math.round((doneInPhase / tasks.length) * 100)
                : 0;

            return (
              <div
                key={phase.id || pIdx}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-violet-500/40"
              >
                {/* Phase Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 font-black text-white text-lg shadow-md">
                      0{pIdx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {phase.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5">
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                          <Clock size={13} className="text-violet-400" />
                          {phase.estimateHours} Hours
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="text-xs text-gray-400">
                          Dep:{" "}
                          <span className="text-violet-300 font-medium">
                            {phase.dependency || "None"}
                          </span>
                        </span>
                        <span className="text-gray-600">•</span>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                            phase.priority === "High"
                              ? "bg-red-500/20 text-red-300 border border-red-500/30"
                              : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          }`}
                        >
                          {phase.priority || "Medium"} Priority
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Mini Progress */}
                    <div className="w-32 hidden sm:block">
                      <div className="flex justify-between text-xs text-gray-400 mb-1 font-medium">
                        <span>Progress</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-black/50 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-500 to-emerald-400 transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeletePhase(phase.id)}
                      className="text-gray-500 hover:text-red-400 transition p-2"
                      title="Delete Phase"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Sub-tasks Section */}
                <div className="mt-5 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Phase Execution Tasks ({tasks.length})
                  </h4>

                  <div className="grid gap-2.5 md:grid-cols-2">
                    {tasks.map((taskTitle, tIdx) => {
                      const isDone = completedTasks.has(taskTitle);
                      return (
                        <div
                          key={tIdx}
                          className={`flex items-center justify-between gap-3 rounded-2xl border p-3.5 transition duration-200 ${
                            isDone
                              ? "border-emerald-500/30 bg-emerald-950/20 text-gray-400 line-through"
                              : "border-white/5 bg-black/40 text-gray-200 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            <button
                              onClick={() => handleToggleTask(taskTitle)}
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                                isDone
                                  ? "border-emerald-500 bg-emerald-500 text-black"
                                  : "border-white/20 hover:border-violet-400"
                              }`}
                            >
                              {isDone && <Check size={14} strokeWidth={3} />}
                            </button>
                            <span className="text-xs font-medium truncate">
                              {taskTitle}
                            </span>
                          </div>

                          <button
                            onClick={() => handleDeleteTask(phase.id, tIdx)}
                            className="text-gray-600 hover:text-red-400 transition shrink-0 opacity-0 group-hover:opacity-100"
                          >
                            ×
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Inline Add Task */}
                  <form
                    onSubmit={(e) => handleAddTaskToPhase(phase.id, e)}
                    className="flex gap-2 pt-2"
                  >
                    <input
                      type="text"
                      value={newTaskInput[phase.id] || ""}
                      onChange={(e) =>
                        setNewTaskInput((prev) => ({
                          ...prev,
                          [phase.id]: e.target.value,
                        }))
                      }
                      placeholder="Add task to this milestone..."
                      className="flex-1 rounded-xl border border-white/10 bg-black/30 px-3.5 py-2 text-xs text-white placeholder-gray-500 outline-none focus:border-violet-500"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-violet-600 hover:text-white transition"
                    >
                      + Task
                    </button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
