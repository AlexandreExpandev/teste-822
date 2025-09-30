import { FallbackProps } from 'react-error-boundary';
import { Button } from '@/core/components/Button';

/**
 * @component ErrorFallback
 * @summary A generic UI component to display when a critical error occurs
 * in the application, caught by an ErrorBoundary.
 * @type ui-component
 * @category feedback
 */
export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div
      role="alert"
      className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-background p-4"
    >
      <h2 className="text-2xl font-bold text-destructive">Something went wrong:</h2>
      <pre className="w-full max-w-2xl whitespace-pre-wrap rounded-md bg-muted p-4 text-destructive-foreground">
        {error.message}
      </pre>
      <Button onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
};
