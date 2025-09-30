import { Button } from '@/core/components/Button';
import { Download } from 'lucide-react';
import { useGeneratedCode } from '../../hooks/useGeneratedCode';

interface DownloadButtonProps {
  language: string | null;
}

/**
 * @component DownloadButton
 * @summary A button that allows users to download the generated code as a file.
 * @domain codeGenerator
 * @type domain-component
 * @category action
 */
export const DownloadButton = ({ language }: DownloadButtonProps) => {
  const { data, isLoading } = useGeneratedCode(language);

  const handleDownload = () => {
    if (!language || !data?.code) return;

    // Create a Blob with the code content
    const blob = new Blob([data.code], { type: 'text/plain' });
    
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    
    // Get the appropriate file extension based on language
    const fileExtensions: Record<string, string> = {
      javascript: 'js',
      typescript: 'ts',
      python: 'py',
      java: 'java',
      csharp: 'cs',
      cpp: 'cpp',
      php: 'php',
      ruby: 'rb',
      go: 'go',
      rust: 'rs'
    };
    
    const extension = fileExtensions[language] || 'txt';
    const filename = `helloworld.${extension}`;
    
    a.download = filename;
    
    // Trigger the download
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={!language || isLoading || !data}
      className="mt-4"
    >
      <Download className="mr-2 h-4 w-4" />
      Download Code
    </Button>
  );
};
