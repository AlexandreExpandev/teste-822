import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { queryClient } from '@/core/lib/queryClient';
import { ErrorFallback } from '@/core/components/ErrorFallback';

/**
 * @component AppProviders
 * @summary A component that wraps the entire application with necessary
 * context providers, such as React Query and Error Boundary.
 * @type provider-component
 */
export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ErrorBoundary>
  );
};
