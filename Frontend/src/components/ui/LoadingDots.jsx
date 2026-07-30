export const LoadingDots = ({ label = 'Thinking' }) => (
  <span className="inline-flex items-center gap-2 text-sm text-text-muted">
    {label}
    <span className="flex items-center gap-1" aria-hidden="true">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted" />
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted [animation-delay:120ms]" />
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted [animation-delay:240ms]" />
    </span>
  </span>
);
