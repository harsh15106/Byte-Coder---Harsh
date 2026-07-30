import { useProject } from '../../state/ProjectContext';
import {
  Lightbulb,
  Sparkles,
  Target,
  Cpu,
  ShieldAlert,
  TrendingUp,
  CheckCircle2,
  BarChart3,
  Lock
} from 'lucide-react';

export default function IdeaAnalyzerView() {
  const { project } = useProject();

  const name = project.meta?.name || 'AI Interview Prep Coach';
  const problem = project.meta?.problem || 'Students preparing for technical interviews struggle to get realistic practice, structured feedback, and a focused study plan in one place.';
  const solution = project.meta?.solution || project.ideaAnalysis?.summary || 'A guided interview practice workspace that generates question drills, gives mock feedback, and turns weak areas into a sprint plan.';
  const targetAudience = project.ideaAnalysis?.targetAudience || 'CS & Engineering Students preparing for tech interviews (Software, Data, Product)';
  const techStack = project.ideaAnalysis?.techStack || ['React', 'Node.js', 'Firebase', 'OpenAI API', 'TailwindCSS'];
  const feasibilityScore = project.ideaAnalysis?.feasibilityScore || 84;
  const strengths = project.ideaAnalysis?.strengths || [
    'Clear target user with urgent motivation',
    'Natural AI-assisted feedback loop',
    'Easy to demo with before-and-after progress'
  ];
  const weaknesses = project.ideaAnalysis?.weaknesses || [
    'Risk of trying to support too many interview types',
    'Needs careful scoping around personalized feedback'
  ];

  const getScoreColor = (score) => {
    if (score >= 85) return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    if (score >= 70) return 'text-violet-400 border-violet-500/30 bg-violet-500/10';
    return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner (Read-Only Report) */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-900/30 via-black/60 to-fuchsia-900/30 p-8 backdrop-blur-3xl">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 mb-4">
            <Lock size={13} className="text-violet-400" />
            AI Analysis Report • Read-Only Output
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Idea Analysis & Feasibility
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-300">
            Evaluation report generated from initial project inputs. Review feasibility score, target audience, tech stack, and strategic insights.
          </p>
        </div>
      </section>

      {/* Main Grid Layout */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Project Overview & Specs (7 cols) */}
        <div className="space-y-8 lg:col-span-7">
          {/* Card 1: Project Concept (Read-Only) */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
                <Lightbulb size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="text-xs text-gray-400">Analyzed Project Problem & Solution Narrative</p>
              </div>
            </div>

            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Problem Statement
              </span>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-gray-200 leading-relaxed">
                {problem}
              </div>
            </div>

            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Solution Concept
              </span>
              <div className="rounded-2xl border border-violet-500/20 bg-violet-950/20 p-4 text-sm text-violet-100 leading-relaxed">
                {solution}
              </div>
            </div>
          </div>

          {/* Card 2: Target Audience (Read-Only) */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-600/20 text-fuchsia-400">
                <Target size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Target Audience & Market Segment</h3>
                <p className="text-xs text-gray-400">Identified user profile and market focus</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-gray-200 leading-relaxed">
              {targetAudience}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {['CS Students', 'Developers', 'Site Reliability Engineers', 'Product Managers'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400"
                >
                  🎯 {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Tech Stack (Read-Only) */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                <Cpu size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Declared Tech Stack</h3>
                <p className="text-xs text-gray-400">Technologies and APIs utilized for execution</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-600/20 px-4 py-2 text-xs font-bold text-violet-200"
                >
                  <Sparkles size={13} className="text-violet-400" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Overall Feasibility Score & Insights (5 cols) */}
        <div className="space-y-8 lg:col-span-5">
          {/* Overall Feasibility Score Gauge */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-xl space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BarChart3 size={20} className="text-violet-400" />
                Overall Feasibility Score
              </h3>
              <span className={`rounded-xl border px-3 py-1 text-xs font-bold ${getScoreColor(feasibilityScore)}`}>
                {feasibilityScore >= 85 ? 'HIGH VIABILITY' : feasibilityScore >= 70 ? 'MODERATE VIABILITY' : 'REQUIRES SCOPING'}
              </span>
            </div>

            {/* Score Radial Ring */}
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-white/10 bg-black/40">
              <div className="relative flex items-center justify-center">
                <svg className="h-40 w-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="64"
                    stroke="currentColor"
                    strokeWidth="12"
                    className="text-white/10"
                    fill="transparent"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="64"
                    stroke="currentColor"
                    strokeWidth="12"
                    className={feasibilityScore >= 85 ? 'text-emerald-500' : feasibilityScore >= 70 ? 'text-violet-500' : 'text-amber-500'}
                    strokeDasharray={402}
                    strokeDashoffset={402 - (402 * feasibilityScore) / 100}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-5xl font-black text-white">{feasibilityScore}</span>
                  <span className="text-xs text-gray-400 block font-bold uppercase mt-0.5">/ 100</span>
                </div>
              </div>
              <p className="mt-5 text-xs text-gray-400 text-center max-w-xs leading-relaxed">
                Calculated feasibility index based on hackathon scope, team resources, and technical complexity.
              </p>
            </div>
          </div>

          {/* Key Strengths (Read-Only) */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp size={18} className="text-emerald-400" />
              Key Strengths
            </h3>

            <div className="space-y-2.5">
              {strengths.map((str, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/40 p-3.5 text-xs text-gray-200">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{str}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Risks & Constraints (Read-Only) */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldAlert size={18} className="text-amber-400" />
              Risks & Constraints
            </h3>

            <div className="space-y-2.5">
              {weaknesses.map((wk, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3.5 text-xs text-amber-200">
                  <ShieldAlert size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{wk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
