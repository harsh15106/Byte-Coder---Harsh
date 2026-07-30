import { ArrowRight, CheckCircle2, Lightbulb, Timer } from 'lucide-react';
import { Badge, Button, Card, ProgressRing } from '../components/ui';
import { navItems } from '../components/layout';
import { useProject } from '../state/ProjectContext';

const previewViews = ['analyzer', 'scope', 'roadmap', 'tasks'];

export const ScaffoldWorkspace = () => {
  const { dispatch, project, stats } = useProject();

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="min-h-72" tone="accent">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="max-w-3xl">
              <Badge tone="accent">Demo Project</Badge>
              <h1 className="mt-5 text-4xl font-bold tracking-normal text-text-primary">
                {project.meta.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
                {project.ideaAnalysis.summary}
              </p>
            </div>
            <ProgressRing
              label="Complete"
              tone={stats.behindSchedule ? 'warning' : 'success'}
              value={stats.completionPercent}
            />
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-surface-border bg-background/50 p-4">
              <Lightbulb aria-hidden="true" className="h-5 w-5 text-accent" />
              <p className="mt-3 text-2xl font-bold text-text-primary">
                {project.ideaAnalysis.feasibilityScore}
              </p>
              <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                Feasibility
              </p>
            </div>
            <div className="rounded-lg border border-surface-border bg-background/50 p-4">
              <Timer aria-hidden="true" className="h-5 w-5 text-warning" />
              <p className="mt-3 text-2xl font-bold text-text-primary">
                {stats.hoursRemaining}h
              </p>
              <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                Remaining
              </p>
            </div>
            <div className="rounded-lg border border-surface-border bg-background/50 p-4">
              <CheckCircle2
                aria-hidden="true"
                className="h-5 w-5 text-success"
              />
              <p className="mt-3 text-2xl font-bold text-text-primary">
                {stats.completedTasks}/{stats.totalTasks}
              </p>
              <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                Tasks Done
              </p>
            </div>
          </div>
        </Card>

        <Card tone={stats.behindSchedule ? 'warning' : 'success'}>
          <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
            Sprint Signal
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-text-primary">
            {stats.behindSchedule ? 'Scope pressure detected' : 'Build pace steady'}
          </h2>
          <p className="mt-3 text-sm leading-6 text-text-muted">
            {stats.remainingEstimateHours} estimated hours remain against{' '}
            {stats.hoursRemaining} available hours.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.meta.techPreferences.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {previewViews.map((viewId) => {
          const item = navItems.find((view) => view.id === viewId);
          const Icon = item.icon;

          return (
            <Card className="flex min-h-44 flex-col justify-between" key={viewId}>
              <div>
                <Icon aria-hidden="true" className="h-5 w-5 text-accent" />
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  Seed data is ready for this workspace area.
                </p>
              </div>
              <Button
                className="mt-5 w-fit"
                icon={ArrowRight}
                onClick={() =>
                  dispatch({ type: 'SET_ACTIVE_VIEW', payload: viewId })
                }
                variant="ghost"
              >
                Open
              </Button>
            </Card>
          );
        })}
      </section>
    </div>
  );
};
