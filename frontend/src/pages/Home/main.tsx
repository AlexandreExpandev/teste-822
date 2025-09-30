import { useState } from 'react';
import { LanguageSelector, CodeDisplay, DownloadButton } from '@/domain/codeGenerator/components';

/**
 * @page HomePage
 * @summary The main landing page of the application where users can
 * select a language and generate "Hello, World!" code.
 * @domain codeGenerator
 * @type page-component
 * @category public
 */
export const HomePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <main className="container mx-auto flex flex-1 flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hello, World! Generator
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Select a programming language to instantly generate a "Hello, World!" snippet.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          {/* 1. Language Selector */}
          <LanguageSelector 
            onLanguageSelect={handleLanguageSelect} 
            selectedLanguage={selectedLanguage} 
          />
          
          {/* 2. Code Display */}
          <div className="mt-6">
            <CodeDisplay language={selectedLanguage} />
          </div>
          
          {/* 3. Download Button */}
          <DownloadButton language={selectedLanguage} />
        </div>
      </div>
    </main>
  );
};
