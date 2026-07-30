import { X } from 'lucide-react';
import { Button } from './Button';

export const Modal = ({
  children,
  description,
  isOpen,
  onClose,
  title,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4"
      role="dialog"
    >
      <div className="w-full max-w-lg rounded-xl border border-surface-border bg-surface p-5 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
            {description ? (
              <p className="mt-1 text-sm text-text-muted">{description}</p>
            ) : null}
          </div>
          <Button
            aria-label="Close modal"
            icon={X}
            onClick={onClose}
            size="icon"
            variant="ghost"
          >
            Close
          </Button>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};
