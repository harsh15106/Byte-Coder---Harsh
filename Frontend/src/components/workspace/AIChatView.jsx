import { useState, useRef, useEffect } from 'react';
import { useProject } from '../../state/ProjectContext';
import {
  Bot,
  Send,
  Sparkles,
  Trash2,
  RefreshCw,
  User,
} from 'lucide-react';

export default function AIChatView() {
  const { project, stats } = useProject();
  const messagesEndRef = useRef(null);

  const initialMessages = [
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! 👋 I am your **SprintPilot AI Assistant**.\n\nI am synced with your active workspace:\n- 💡 **Project**: ${project.meta?.name || 'AI Interview Prep Coach'} (${project.ideaAnalysis?.feasibilityScore || 84}% Feasibility)\n- 🎯 **Target**: ${project.ideaAnalysis?.targetAudience || 'CS & Engineering Students'}\n- 💻 **Tech Stack**: ${(project.ideaAnalysis?.techStack || ['React', 'Node.js', 'OpenAI API']).join(', ')}\n- ⏱️ **Time Left**: ${stats.hoursRemaining} Hours remaining\n\nAsk me any question about your **Time Left**, **Feasibility Score**, **Tech Stack**, **Target Audience**, or **Roadmap Milestones**!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Smart Query Processing Engine that provides direct, highly relevant answers
  const generateAIResponse = (query) => {
    const q = query.toLowerCase().trim();
    const meta = project.meta || {};
    const idea = project.ideaAnalysis || {};
    const roadmap = project.roadmap || {};
    const phases = roadmap.phases || [];
    const techStackList = idea.techStack || ['React', 'Node.js', 'Firebase', 'OpenAI API', 'TailwindCSS'];
    const score = idea.feasibilityScore || 84;
    const estTotalHours = phases.reduce((sum, p) => sum + Number(p.estimateHours || 0), 0);

    // 1. Time / Hours Remaining / Clock / Deadline Questions (Direct Answer!)
    if (
      q.includes('time') ||
      q.includes('left') ||
      q.includes('remaining') ||
      q.includes('hour') ||
      q.includes('clock') ||
      q.includes('deadline') ||
      q.includes('timer') ||
      q.includes('duration') ||
      q.includes('pace') ||
      q.includes('schedule')
    ) {
      return `⏱️ **Time & Sprint Capacity Breakdown**:\n\n- **Available Time Left**: **${stats.hoursRemaining} Hours** (out of ${meta.durationHours || 24}h hackathon clock)\n- **Estimated Work Needed**: **~${estTotalHours} Hours** across ${phases.length} Roadmap Phases.\n- **Completed Tasks**: **${stats.completedTasks} / ${stats.totalTasks}** tasks finished (${stats.completionPercent}% progress).\n- **Sprint Pace Status**: ${
        stats.behindSchedule
          ? '⚠️ **Scope Pressure Detected**: Remaining estimated work exceeds available hours. Prioritize Phase 1 & Phase 2 core MVP features first!'
          : '✅ **On Track**: Build pace is steady and fits comfortably within your remaining hours.'
      }`;
    }

    // 2. Feasibility & Viability Questions
    if (q.includes('feasibility') || q.includes('score') || q.includes('viability') || q.includes('rating') || q.includes('viable')) {
      if (q.includes('improve') || q.includes('increase') || q.includes('boost') || q.includes('better')) {
        return `📈 **How to Improve Your Feasibility Score (${score}%)**:\n\n1. **Lock Core Scope**: Focus strictly on Phase 1 & Phase 2 before adding secondary features.\n2. **Leverage Pre-built Models**: Use OpenAI API prompt rubrics instead of custom ML training.\n3. **Mitigate Identified Risks**: Focus on communication & correctness feedback to avoid broad edge cases.`;
      }
      return `📊 **Feasibility Score Analysis**:\n\n- **Overall Score**: **${score}/100** (${score >= 85 ? 'High Viability' : 'Moderate Viability'})\n- **Project**: ${meta.name || 'AI Interview Prep Coach'}\n\n**Key Strengths**:\n${(idea.strengths || []).map((s) => `• ✅ ${s}`).join('\n')}\n\n**Identified Risks**:\n${(idea.weaknesses || []).map((w) => `• ⚠️ ${w}`).join('\n')}`;
    }

    // 3. Tech Stack Questions
    if (q.includes('tech') || q.includes('stack') || q.includes('framework') || q.includes('database') || q.includes('backend') || q.includes('frontend') || q.includes('api') || q.includes('openai') || q.includes('react') || q.includes('code') || q.includes('build')) {
      return `💻 **Declared Tech Stack**:\n\n- **Frontend**: React, TailwindCSS, Lucide Icons, Vite\n- **Backend & Storage**: Node.js, Firebase, OpenAI API\n- **Declared Stack**: \`${techStackList.join(', ')}\`\n\n**Suitability Rating**: **95%** - Excellent choices for rapid prototyping with zero boilerplate overhead.`;
    }

    // 4. Target Audience & Market Questions
    if (q.includes('target') || q.includes('audience') || q.includes('user') || q.includes('customer') || q.includes('market') || q.includes('who')) {
      return `🎯 **Target Audience & Market Segment**:\n\n- **Primary Persona**: ${idea.targetAudience || 'CS & Engineering Students preparing for tech interviews (Software, Data, Product)'}\n- **Core Pain Point**: ${meta.problem || 'Students struggle to get realistic practice, structured feedback, and a focused study plan in one place.'}\n- **Value Proposition**: ${meta.solution || idea.summary || 'A guided interview practice workspace that generates question drills, gives mock feedback, and turns weak areas into a sprint plan.'}`;
    }

    // 5. Problem & Solution Concept Questions
    if (q.includes('problem') || q.includes('solution') || q.includes('concept') || q.includes('about') || q.includes('summary') || q.includes('idea')) {
      return `💡 **Project Problem & Solution Concept**:\n\n- **Project Name**: ${meta.name}\n- **Problem**: "${meta.problem}"\n- **Solution**: "${meta.solution || idea.summary}"`;
    }

    // 6. Next Steps / Tasks / Priority
    if (q.includes('next') || q.includes('todo') || q.includes('task') || q.includes('do first') || q.includes('start') || q.includes('priority') || q.includes('work')) {
      return `📌 **Recommended Next Steps**:\n\n1. **Phase 1 (Architecture & Spec)**: Finalize API specs & question prompt rubrics (~2h).\n2. **Phase 2 (Backend API)**: Connect OpenAI API endpoint with Node.js backend (~6h).\n3. **Phase 3 (Core UI)**: Build practice session UI & feedback summary (~8h).`;
    }

    // 7. Specific Phase Questions
    if (q.includes('phase 1') || q.includes('phase1') || q.includes('architecture')) {
      const p1 = phases[0] || { name: 'Phase 1: Architecture & Spec', priority: 'High', estimateHours: 2, tasks: ['Define user flow', 'Setup API contract'] };
      return `📌 **${p1.name}**:\n- **Priority**: ${p1.priority} | **Estimate**: ${p1.estimateHours} Hours\n- **Tasks**:\n${(p1.tasks || []).map((t) => `  - [ ] ${t}`).join('\n')}`;
    }

    if (q.includes('phase 2') || q.includes('phase2')) {
      const p2 = phases[1] || { name: 'Phase 2: Backend API & AI Integration', priority: 'High', estimateHours: 6, tasks: ['Integrate OpenAI API endpoint', 'Build response parser'] };
      return `📌 **${p2.name}**:\n- **Priority**: ${p2.priority} | **Estimate**: ${p2.estimateHours} Hours\n- **Tasks**:\n${(p2.tasks || []).map((t) => `  - [ ] ${t}`).join('\n')}`;
    }

    if (q.includes('phase 3') || q.includes('phase3')) {
      const p3 = phases[2] || { name: 'Phase 3: Core MVP Interface', priority: 'High', estimateHours: 8, tasks: ['Build interactive UI', 'Implement live score gauge'] };
      return `📌 **${p3.name}**:\n- **Priority**: ${p3.priority} | **Estimate**: ${p3.estimateHours} Hours\n- **Tasks**:\n${(p3.tasks || []).map((t) => `  - [ ] ${t}`).join('\n')}`;
    }

    // 8. General Roadmap & Milestone Questions
    if (q.includes('roadmap') || q.includes('milestone')) {
      let resp = `🗺️ **Milestone Execution Roadmap (${phases.length} Phases)**:\n\n`;
      phases.forEach((p, idx) => {
        resp += `**Phase ${idx + 1}: ${p.name}** (${p.estimateHours}h, ${p.priority || 'High'} Priority)\nTasks: ${(p.tasks || []).join(', ')}\n\n`;
      });
      resp += `⏱️ **Total Estimated Time**: ~${estTotalHours} Hours against ${stats.hoursRemaining}h remaining.`;
      return resp;
    }

    // 9. Pitch Deck & Presentation Questions
    if (q.includes('pitch') || q.includes('presentation') || q.includes('demo') || q.includes('judge')) {
      return `🎤 **60-Second Pitch Deck Narrative**:\n\n1. **The Problem (0-15s)**:\n   "${meta.problem}"\n\n2. **The Solution (15-30s)**:\n   "${meta.name} gives candidates real-time AI feedback and turns weak areas into sprint plans."\n\n3. **Tech & Execution (30-45s)**:\n   "Built with ${techStackList.slice(0, 3).join(', ')} with a verified ${score}% feasibility score."\n\n4. **Impact (45-60s)**:\n   "Enables candidates to practice 10x faster and land tech job offers."`;
    }

    // 10. Strengths & Risks
    if (q.includes('strength') || q.includes('advantage') || q.includes('pro')) {
      return `✅ **Key Project Strengths**:\n${(idea.strengths || []).map((s) => `• ${s}`).join('\n')}`;
    }

    if (q.includes('risk') || q.includes('weakness') || q.includes('con') || q.includes('constraint')) {
      return `⚠️ **Identified Scoping Risks**:\n${(idea.weaknesses || []).map((w) => `• ${w}`).join('\n')}`;
    }

    // 11. Greetings & Friendly Interactions
    if (q === 'hi' || q === 'hello' || q === 'hey' || q.includes('who are you')) {
      return `Hello! 👋 I am your **SprintPilot AI Assistant**. Ask me anything about:\n- **Time Left**: ${stats.hoursRemaining} Hours remaining\n- **Feasibility Score**: **${score}%**\n- **Declared Tech Stack**: \`${techStackList.join(', ')}\`\n- **Target Audience**: ${idea.targetAudience}\n- **Roadmap Milestones**: ${phases.length} Phases`;
    }

    // Direct, helpful answer for unclassified questions
    return `🤖 **SprintPilot AI Assistant**:

Regarding your query *"_${query}_"*:

Here is the current state for **${meta.name || 'AI Interview Prep Coach'}**:
- **Remaining Time**: **${stats.hoursRemaining} Hours**
- **Feasibility Score**: **${score}%** (High Viability)
- **Declared Tech Stack**: \`${techStackList.join(', ')}\`
- **Roadmap**: ${phases.length} Milestone Phases (~${estTotalHours} estimated hours total)

Feel free to ask about your **Time Left**, **Roadmap Phases**, **Tech Stack**, or **Feasibility Score**!`;
  };

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputQuery.trim()) return;

    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: inputQuery.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentQuery = inputQuery.trim();
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateAIResponse(currentQuery);
      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 500);
  };

  const handleQuickPrompt = (promptText) => {
    setInputQuery(promptText);
  };

  const handleClearChat = () => {
    setMessages(initialMessages);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-900/30 via-black/60 to-fuchsia-900/30 p-8 backdrop-blur-3xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 mb-4">
              <Sparkles size={14} />
              AI Assistant & Context Co-Pilot
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              AI Workspace Chat
            </h1>
            <p className="mt-3 max-w-2xl text-base text-gray-300">
              Ask questions and get real-time strategic advice directly tailored to your project's Idea Analysis, Feasibility Score, Target Audience, Tech Stack, and Milestone Roadmap.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleClearChat}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              <Trash2 size={16} />
              Clear Chat
            </button>
          </div>
        </div>

        {/* Quick Suggested Prompts Bar */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Suggested Context Queries
          </p>
          <div className="flex flex-wrap gap-2.5">
            {[
              '⏱️ How much time do I have left?',
              '📊 What is our feasibility score and how can we improve it?',
              '💻 What tech stack are we using?',
              '🎯 Who is our target audience?',
              '🗺️ What are the phases in our execution roadmap?'
            ].map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleQuickPrompt(prompt.replace(/^[^\s]+\s/, ''))}
                className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-gray-300 hover:border-violet-500/50 hover:bg-violet-600/20 hover:text-white transition"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Chat Interface Container */}
      <div className="flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl h-[650px] overflow-hidden shadow-2xl">
        {/* Chat Messages Stream */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl font-bold text-white shadow-md ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500'
                    : 'bg-violet-600 border border-violet-400/30'
                }`}
              >
                {msg.sender === 'user' ? <User size={18} /> : <Bot size={20} />}
              </div>

              {/* Message Content Bubble */}
              <div className={`max-w-2xl space-y-1.5 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className="flex items-center gap-2 text-[11px] text-gray-500">
                  <span className="font-semibold text-gray-400">
                    {msg.sender === 'user' ? 'You' : 'SprintPilot AI'}
                  </span>
                  <span>•</span>
                  <span>{msg.timestamp}</span>
                </div>

                <div
                  className={`rounded-2xl p-5 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20 rounded-tr-none'
                      : 'border border-white/10 bg-black/60 text-gray-200 shadow-xl rounded-tl-none whitespace-pre-wrap'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}

          {/* AI Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-4 animate-pulse">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-600 text-white">
                <Bot size={20} />
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-xs font-semibold text-violet-300 flex items-center gap-2">
                <RefreshCw size={14} className="animate-spin text-violet-400" />
                Retrieving project context...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="border-t border-white/10 bg-black/40 p-4">
          <form onSubmit={handleSendMessage} className="flex items-center gap-3">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask anything about time left, feasibility, tech stack, target audience, or roadmap..."
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-gray-500 outline-none transition focus:border-violet-500 focus:bg-black/60"
            />

            <button
              type="submit"
              disabled={!inputQuery.trim()}
              className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white transition hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 shadow-lg shadow-violet-600/30"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
