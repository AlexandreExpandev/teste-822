import { useEffect, useRef } from 'react';
import { useGeneratedCode } from '../../hooks/useGeneratedCode';

interface CodeDisplayProps {
  language: string | null;
}

/**
 * @component CodeDisplay
 * @summary Displays the generated "Hello, World!" code with syntax highlighting.
 * @domain codeGenerator
 * @type domain-component
 * @category display
 */
export const CodeDisplay = ({ language }: CodeDisplayProps) => {
  const { data, isLoading, error } = useGeneratedCode(language);
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    // Apply syntax highlighting when code is available
    if (data?.code && codeRef.current) {
      // In a real implementation, we would use a library like Prism.js or highlight.js here
      // For this implementation, we'll just display the code with basic styling
    }
  }, [data?.code]);

  if (!language) {
    return (
      <div className="flex h-64 items-center justify-center rounded-md border bg-muted/20 p-4 text-muted-foreground">
        Select a language to generate code
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-64 w-full animate-pulse rounded-md bg-muted/50" aria-label="Loading code..."></div>
    );
  }

  if (error) {
    return (
      <div className="flex h-64 items-center justify-center rounded-md border border-destructive bg-destructive/10 p-4 text-destructive">
        Error loading code. Please try again.
      </div>
    );
  }

  if (!data?.code) {
    return (
      <div className="flex h-64 items-center justify-center rounded-md border bg-muted/20 p-4 text-muted-foreground">
        No code available for the selected language
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-md border bg-muted/20">
      <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2">
        <span className="text-sm font-medium">{language}</span>
      </div>
      <pre
        ref={codeRef}
        className="overflow-auto p-4 text-sm"
        style={{ maxHeight: '250px', minHeight: '150px' }}
      >
        <code>{data.code}</code>
      </pre>
    </div>
  );
};
