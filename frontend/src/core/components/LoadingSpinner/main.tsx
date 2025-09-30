import { cn } from '@/core/utils/cn';

interface LoadingSpinnerProps {
  fullPage?: boolean;
  className?: string;
}

/**
 * @component LoadingSpinner
 * @summary A simple SVG-based loading spinner component.
 * @type ui-component
 * @category feedback
 */
export const LoadingSpinner = ({ fullPage = false, className }: LoadingSpinnerProps) => {
  const spinner = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('animate-spin text-primary', className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );

  if (fullPage) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        {spinner}
      </div>
    );
  }

  return spinner;
};
