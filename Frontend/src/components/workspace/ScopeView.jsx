import { useProject } from '../../state/ProjectContext';
import {
  CheckCircle2,
  Lock,
  Layers
} from 'lucide-react';

export default function ScopeView() {
  const { project } = useProject();

  const mvpFeatures = project.scope?.mvpFeatures || [
    'Mock Interview Session',
    'AI Feedback Summary',
    'Weakness Tracker',
    'Study Sprint Plan'
  ];

  const optionalFeatures = project.scope?.futureFeatures || [
    'Progress Dashboard',
    'Peer Review Rooms',
    'Enterprise Hiring Portal',
    'Custom Rubric Creator'
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner (Read-Only Output) */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-900/30 via-black/60 to-fuchsia-900/30 p-8 backdrop-blur-3xl">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 mb-4">
            <Lock size={13} className="text-violet-400" />
            Scope Report • Read-Only Output
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Project Scope & Feature Plan
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-300">
            Feature specification detailing core MVP essentials and optional enhancements.
          </p>
        </div>
      </section>

      {/* Main Content Layout: MVP Features & Optional Features */}
      <div className="space-y-8">
        {/* MVP Features Section */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">MVP Features ({mvpFeatures.length})</h3>
              <p className="text-xs text-gray-400">Core features required for the primary build</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Mock Interview Session"
              description="Interactive practice workspace providing real-time question drills and adaptive responses."
              tag="MVP Core"
              color="border-emerald-500/30 bg-emerald-950/20 text-emerald-200"
            />

            <FeatureCard
              title="AI Feedback Summary"
              description="Instant rubric evaluation analyzing communication, technical correctness, and confidence."
              tag="MVP Core"
              color="border-violet-500/30 bg-violet-950/20 text-violet-200"
            />

            <FeatureCard
              title="Weakness Tracker"
              description="Diagnostic panel highlighting skill gaps and tracking question category accuracy."
              tag="MVP Core"
              color="border-blue-500/30 bg-blue-950/20 text-blue-200"
            />

            <FeatureCard
              title="Study Sprint Plan"
              description="Automated roadmap generator converting identified weak areas into step-by-step milestones."
              tag="MVP Core"
              color="border-fuchsia-500/30 bg-fuchsia-950/20 text-fuchsia-200"
            />
          </div>
        </div>

        {/* Optional Features Section */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600/20 text-amber-400">
              <Layers size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Optional Features ({optionalFeatures.length})</h3>
              <p className="text-xs text-gray-400">Secondary enhancements for future iterations</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {optionalFeatures.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-200 text-sm">{feature}</span>
                  <span className="rounded-lg border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[11px] font-bold text-amber-300">
                    Optional
                  </span>
                </div>
                <p className="text-xs text-gray-400">Secondary feature expansion reserved for post-MVP releases.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, tag, color }) {
  return (
    <div className={`rounded-2xl border p-5 space-y-3 backdrop-blur-xl ${color}`}>
      <div className="flex items-center justify-between">
        <span className="font-bold text-white text-base">{title}</span>
        <span className="rounded-md border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          {tag}
        </span>
      </div>
      <p className="text-xs text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}
