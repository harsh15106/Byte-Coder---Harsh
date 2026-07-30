import { Clock, Menu, Users } from 'lucide-react';
import { Badge, Button } from '../ui';
import { navItems } from './navigation';
import { useProject } from '../../state/ProjectContext';

export const TopBar = () => {
  const { activeView, dispatch, project, stats } = useProject();
  const activeItem = navItems.find((item) => item.id === activeView);

  return (
    <header className="sticky top-0 z-20 border-b border-surface-border bg-background/90 px-4 py-4 backdrop-blur xl:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <Button
            aria-label="Open navigation"
            className="lg:hidden"
            icon={Menu}
            size="icon"
            variant="ghost"
          >
            Open navigation
          </Button>
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
              {activeItem?.label ?? 'Workspace'}
            </p>
            <h2 className="truncate text-xl font-semibold text-text-primary">
              {project.meta.name}
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={stats.behindSchedule ? 'warning' : 'success'}>
            {stats.behindSchedule ? 'At risk' : 'On track'}
          </Badge>
          <span className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface px-3 py-2 text-sm text-text-muted">
            <Clock aria-hidden="true" className="h-4 w-4 text-accent" />
            {stats.hoursRemaining}h left
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface px-3 py-2 text-sm text-text-muted">
            <Users aria-hidden="true" className="h-4 w-4 text-accent" />
            {project.meta.teamSize}
          </span>
        </div>
      </div>

      <nav
        aria-label="Mobile primary"
        className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <button
              className={[
                'inline-flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition',
                'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background',
                isActive
                  ? 'border-accent bg-accent text-white'
                  : 'border-surface-border bg-surface text-text-muted',
              ].join(' ')}
              key={item.id}
              onClick={() =>
                dispatch({ type: 'SET_ACTIVE_VIEW', payload: item.id })
              }
              type="button"
            >
              <Icon aria-hidden="true" className="h-3.5 w-3.5" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};
