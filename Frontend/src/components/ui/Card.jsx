const toneBorders = {
  default: 'border-l-surface-border',
  success: 'border-l-success',
  warning: 'border-l-warning',
  danger: 'border-l-danger',
  accent: 'border-l-accent',
};

export const Card = ({
  children,
  className = '',
  tone = 'default',
  hover = true,
}) => (
  <section
    className={[
      'rounded-xl border border-l-4 border-surface-border bg-surface p-5',
      'transition-shadow',
      hover ? 'hover:shadow-soft' : '',
      toneBorders[tone],
      className,
    ].join(' ')}
  >
    {children}
  </section>
);
