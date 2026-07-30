import { ArrowLeft, Hammer } from 'lucide-react';
import { Button, Card } from '../components/ui';
import { navItems } from '../components/layout';
import { useProject } from '../state/ProjectContext';

export const ModulePlaceholder = () => {
  const { activeView, dispatch } = useProject();
  const activeItem = navItems.find((item) => item.id === activeView);

  return (
    <div className="mx-auto max-w-4xl">
      <Card className="min-h-96" tone="accent">
        <Hammer aria-hidden="true" className="h-7 w-7 text-accent" />
        <p className="mt-5 text-xs font-medium uppercase tracking-wide text-text-muted">
          Module queued
        </p>
        <h1 className="mt-3 text-3xl font-bold text-text-primary">
          {activeItem?.label ?? 'Workspace'} foundation is ready
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
          The shared state, layout, and UI primitives are in place. This screen
          will be implemented in its dedicated module pass.
        </p>
        <Button
          className="mt-8"
          icon={ArrowLeft}
          onClick={() =>
            dispatch({ type: 'SET_ACTIVE_VIEW', payload: 'dashboard' })
          }
          variant="secondary"
        >
          Back to Dashboard
        </Button>
      </Card>
    </div>
  );
};
