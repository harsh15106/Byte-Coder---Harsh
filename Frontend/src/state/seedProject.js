export const seedProject = {
  meta: {
    name: 'AI Interview Prep Coach',
    problem:
      'Students preparing for technical interviews struggle to get realistic practice, structured feedback, and a focused study plan in one place.',
    solution:
      'A guided interview practice workspace that generates question drills, gives mock feedback, and turns weak areas into a sprint plan.',
    teamSize: 4,
    durationHours: 24,
    techPreferences: ['React', 'Node.js', 'Firebase', 'OpenAI'],
    startedAt: new Date().toISOString(),
  },
  ideaAnalysis: {
    status: 'ready',
    summary:
      'A strong hackathon idea with a clear user pain point and demo-friendly workflow. The MVP should focus on one interview mode, fast feedback, and a visible progress loop.',
    feasibilityScore: 82,
    innovationScore: 74,
    complexity: 'Moderate',
    targetAudience: 'CS & Engineering Students preparing for tech interviews (Software, Data, Product)',
    techStack: ['React', 'Node.js', 'Firebase', 'OpenAI API', 'TailwindCSS'],
    competitors: [
      {
        name: 'LeetCode / HackerRank',
        strength: 'Massive question bank & auto-grader',
        weakness: 'Lacks interactive conversational feedback & soft-skill evaluation',
        ourMoat: 'AI real-time voice & code feedback with personalized sprint plans'
      },
      {
        name: 'Pramp / Interviewing.io',
        strength: 'Real human peer interviews',
        weakness: 'High scheduling latency, quality varies by peer',
        ourMoat: 'Instant 24/7 AI availability with structured scoring rubrics'
      }
    ],
    feasibilityBreakdown: {
      technicalComplexity: 85,
      timeFeasibility: 88,
      marketDemand: 90,
      resourceAvailability: 78
    },
    strengths: [
      'Clear target user with urgent motivation',
      'Natural AI-assisted feedback loop',
      'Easy to demo with before-and-after progress',
    ],
    weaknesses: [
      'Risk of trying to support too many interview types',
      'Needs careful scoping around personalized feedback',
    ],
    missingInfo: ['Primary interview type', 'Feedback rubric', 'Question source'],
  },
  scope: {
    selectedFeatures: [
      'Mock interview session',
      'AI feedback summary',
      'Weakness tracker',
      'Study sprint plan',
      'Progress dashboard',
      'Peer review rooms',
    ],
    mvpFeatures: [
      'Mock interview session',
      'AI feedback summary',
      'Weakness tracker',
      'Study sprint plan',
    ],
    futureFeatures: ['Progress dashboard', 'Peer review rooms'],
  },
  roadmap: {
    viewMode: 'roadmap',
    phases: [
      {
        id: 'requirements',
        name: 'Requirements',
        priority: 'High',
        estimateHours: 2,
        dependency: 'None',
        tasks: ['Define interview flow', 'Create feedback rubric'],
      },
      {
        id: 'backend',
        name: 'Backend',
        priority: 'Medium',
        estimateHours: 5,
        dependency: 'Requirements',
        tasks: ['Mock response generator', 'Session data model'],
      },
      {
        id: 'frontend',
        name: 'Frontend',
        priority: 'High',
        estimateHours: 8,
        dependency: 'Requirements',
        tasks: ['Practice UI', 'Feedback view', 'Progress summary'],
      },
      {
        id: 'testing',
        name: 'Testing',
        priority: 'Medium',
        estimateHours: 4,
        dependency: 'Frontend',
        tasks: ['Run demo script', 'Check edge cases'],
      },
      {
        id: 'deployment',
        name: 'Deployment',
        priority: 'High',
        estimateHours: 2,
        dependency: 'Testing',
        tasks: ['Deploy build', 'Prepare backup recording'],
      },
    ],
  },
  tasks: {
    columns: {
      todo: ['task-1', 'task-2', 'task-3'],
      inProgress: ['task-4', 'task-5'],
      completed: ['task-6', 'task-7'],
    },
    items: {
      'task-1': {
        id: 'task-1',
        title: 'Write feedback rubric',
        assignee: 'AS',
        priority: 'High',
        estimateHours: 2,
        blocked: false,
      },
      'task-2': {
        id: 'task-2',
        title: 'Draft final pitch narrative',
        assignee: 'MR',
        priority: 'Medium',
        estimateHours: 1,
        blocked: false,
      },
      'task-3': {
        id: 'task-3',
        title: 'Add progress visualization',
        assignee: 'JR',
        priority: 'Medium',
        estimateHours: 3,
        blocked: false,
      },
      'task-4': {
        id: 'task-4',
        title: 'Build practice session screen',
        assignee: 'HP',
        priority: 'High',
        estimateHours: 4,
        blocked: false,
      },
      'task-5': {
        id: 'task-5',
        title: 'Connect mock AI generator',
        assignee: 'AS',
        priority: 'High',
        estimateHours: 3,
        blocked: false,
      },
      'task-6': {
        id: 'task-6',
        title: 'Choose MVP feature set',
        assignee: 'MR',
        priority: 'High',
        estimateHours: 1,
        blocked: false,
      },
      'task-7': {
        id: 'task-7',
        title: 'Create project shell',
        assignee: 'JR',
        priority: 'High',
        estimateHours: 2,
        blocked: false,
      },
    },
  },
  pitch: {
    activeTab: 'sixty',
    sections: {
      problem:
        'Interview prep is fragmented, stressful, and hard to measure under real time pressure.',
      solution:
        'SprintPilot turns each practice attempt into targeted feedback and a short study sprint.',
      architecture:
        'React frontend, mocked API layer, session store, AI feedback generator, and deployment preview.',
      impact:
        'Teams can show measurable improvement from first attempt to final practice run.',
    },
  },
  risks: [
    {
      id: 'risk-1',
      description: 'Personalized feedback could become too broad for a 24-hour MVP.',
      severity: 'Medium',
      recommendation: 'Limit feedback to communication, correctness, and confidence.',
      resolved: false,
    },
  ],
};
