import {
  Bot,
  ClipboardList,
  LayoutDashboard,
  Lightbulb,
  Map,
  Presentation,
  Rocket,
  ShieldAlert,
  SlidersHorizontal,
} from 'lucide-react';

export const navItems = [
  { id: 'create', label: 'Create', icon: Rocket },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'analyzer', label: 'Analyzer', icon: Lightbulb },
  { id: 'scope', label: 'Scope', icon: SlidersHorizontal },
  { id: 'roadmap', label: 'Roadmap', icon: Map },
  { id: 'aichat', label: 'AI Chat', icon: Bot },
  { id: 'pitch', label: 'Pitch', icon: Presentation },
  { id: 'risks', label: 'Risks', icon: ShieldAlert },
];

export const quickStats = [
  { id: 'ideas', label: 'Idea Review', icon: Lightbulb },
  { id: 'scope', label: 'MVP Scope', icon: ClipboardList },
];
