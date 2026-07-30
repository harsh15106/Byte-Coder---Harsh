const variants = {
  primary:
    'border-accent bg-accent text-white hover:bg-blue-500 hover:border-blue-500',
  secondary:
    'border-surface-border bg-surface text-text-primary hover:border-zinc-600',
  ghost:
    'border-transparent bg-transparent text-text-muted hover:bg-surface hover:text-text-primary',
  danger:
    'border-danger bg-danger text-white hover:bg-red-500 hover:border-red-500',
};

const sizes = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-sm',
  icon: 'h-10 w-10 p-0',
};

export const Button = ({
  children,
  className = '',
  icon: Icon,
  size = 'md',
  type = 'button',
  variant = 'secondary',
  ...props
}) => {
  const iconOnly = size === 'icon';

  return (
    <button
      className={[
        'inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border font-medium',
        'transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      ].join(' ')}
      type={type}
      {...props}
    >
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
      {iconOnly ? <span className="sr-only">{children}</span> : children}
    </button>
  );
};
