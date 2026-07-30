import { useProject } from '../../state/ProjectContext';
import {
  Quote,
  Lock
} from 'lucide-react';

export default function PitchView() {
  const { project } = useProject();

  const name = project.meta?.name || 'AI Interview Prep Coach';
  const techStackList = project.ideaAnalysis?.techStack || ['React', 'Node.js', 'Firebase', 'OpenAI API', 'TailwindCSS'];
  const feasibilityScore = project.ideaAnalysis?.feasibilityScore || 84;

  // Pitch Script Paragraph Narrative
  const pitchScript = `Students and candidates preparing for technical interviews face fragmented study resources, high scheduling friction, and a complete lack of real-time structured feedback. ${name} addresses this urgent gap by offering an interactive practice workspace that delivers instant AI evaluation rubrics, identifies skill gaps, and dynamically generates actionable milestone sprint plans. Built on a modern tech stack of ${techStackList.join(', ')} with a verified ${feasibilityScore}% feasibility score, ${name} enables candidates to practice 10x faster, overcome preparation bottlenecks, and measurably boost performance before stepping into high-stakes interviews.`;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner (Read-Only Output) */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-900/30 via-black/60 to-fuchsia-900/30 p-8 backdrop-blur-3xl">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 mb-4">
            <Lock size={13} className="text-violet-400" />
            Pitch Deck Report • Read-Only Output
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Pitch Narrative
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-300">
            Presentation script generated for project demo showcases and judge evaluation.
          </p>
        </div>
      </section>

      {/* Main Pitch Script Container */}
      <section className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/40 via-black/60 to-fuchsia-950/40 p-8 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
              <Quote size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Pitch Script</h2>
              <p className="text-xs text-gray-400">Verbal narrative for presentation</p>
            </div>
          </div>
        </div>

        {/* Read-Only Pitch Script Paragraph */}
        <div className="rounded-2xl border border-white/10 bg-black/60 p-8 shadow-inner">
          <p className="text-lg leading-relaxed text-gray-100 font-medium italic">
            "{pitchScript}"
          </p>
        </div>
      </section>
    </div>
  );
}
