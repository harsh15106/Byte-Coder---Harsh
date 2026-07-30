import { Bot } from 'lucide-react';
import { Badge } from '../ui';
import { navItems } from './navigation';
import { useProject } from '../../state/ProjectContext';

export const Sidebar = () => {
  const { activeView, dispatch, project } = useProject();

  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-surface-border bg-background px-4 py-5 lg:flex lg:flex-col">
      <div className="flex items-center gap-3 px-2">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
          <Bot aria-hidden="true" className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary">
            SprintPilot AI
          </p>
          <p className="text-xs text-text-muted">Hackathon command center</p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-surface-border bg-surface p-3">
        <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
          Active Project
        </p>
        <h1 className="mt-2 text-sm font-semibold text-text-primary">
          {project.meta.name}
        </h1>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge tone="accent">{project.meta.durationHours}h sprint</Badge>
          <Badge>{project.meta.teamSize} members</Badge>
        </div>
      </div>

      <nav aria-label="Primary" className="mt-6 flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <button
              className={[
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition',
                'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background',
                isActive
                  ? 'bg-surface text-text-primary'
                  : 'text-text-muted hover:bg-surface hover:text-text-primary',
              ].join(' ')}
              key={item.id}
              onClick={() =>
                dispatch({ type: 'SET_ACTIVE_VIEW', payload: item.id })
              }
              type="button"
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="rounded-xl border border-surface-border bg-surface p-3 text-xs leading-5 text-text-muted">
        Mock AI mode is active. Outputs are generated locally for a fast demo.
      </div>
    </aside>
  );
};
