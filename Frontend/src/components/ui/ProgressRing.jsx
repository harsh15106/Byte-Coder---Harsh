const toneClasses = {
  accent: 'stroke-accent',
  success: 'stroke-success',
  warning: 'stroke-warning',
  danger: 'stroke-danger',
};

export const ProgressRing = ({
  label,
  size = 96,
  tone = 'accent',
  value = 0,
}) => {
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const safeValue = Math.min(100, Math.max(0, value));
  const offset = circumference - (safeValue / 100) * circumference;

  return (
    <div className="inline-flex flex-col items-center gap-2">
      <div className="relative grid place-items-center" style={{ width: size, height: size }}>
        <svg
          aria-hidden="true"
          className="-rotate-90"
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          width={size}
        >
          <circle
            className="stroke-surface-border"
            cx={size / 2}
            cy={size / 2}
            fill="none"
            r={radius}
            strokeWidth={stroke}
          />
          <circle
            className={`${toneClasses[tone]} transition-all duration-700 ease-out`}
            cx={size / 2}
            cy={size / 2}
            fill="none"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            strokeWidth={stroke}
          />
        </svg>
        <span className="absolute text-2xl font-bold text-text-primary">
          {safeValue}
        </span>
      </div>
      {label ? (
        <span className="text-xs font-medium uppercase tracking-wide text-text-muted">
          {label}
        </span>
      ) : null}
    </div>
  );
};
