const tones = {
  default: 'border-zinc-700 bg-zinc-900/60 text-text-muted',
  accent: 'border-accent/40 bg-accent/10 text-blue-300',
  success: 'border-success/40 bg-success/10 text-green-300',
  warning: 'border-warning/40 bg-warning/10 text-amber-300',
  danger: 'border-danger/40 bg-danger/10 text-red-300',
};

export const Badge = ({ children, className = '', tone = 'default' }) => (
  <span
    className={[
      'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium',
      tones[tone],
      className,
    ].join(' ')}
  >
    {children}
  </span>
);
