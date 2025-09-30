import { useLanguages } from '../../hooks/useLanguages';
import { Language } from '../../types';

interface LanguageSelectorProps {
  onLanguageSelect: (language: string) => void;
  selectedLanguage: string | null;
}

/**
 * @component LanguageSelector
 * @summary A dropdown component that allows users to select a programming language
 * from the available options.
 * @domain codeGenerator
 * @type domain-component
 * @category form
 */
export const LanguageSelector = ({ onLanguageSelect, selectedLanguage }: LanguageSelectorProps) => {
  const { data: languages, isLoading, error } = useLanguages();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onLanguageSelect(e.target.value);
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-xs">
        <div className="h-10 w-full animate-pulse rounded-md bg-muted/50"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-xs rounded-md bg-destructive/10 p-2 text-sm text-destructive">
        Failed to load languages. Please try again.
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs">
      <label htmlFor="language-select" className="mb-2 block text-sm font-medium">
        Select a Programming Language
      </label>
      <select
        id="language-select"
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        value={selectedLanguage || ''}
        onChange={handleChange}
      >
        <option value="" disabled>
          Choose a language...
        </option>
        {languages?.map((language: Language) => (
          <option key={language.id} value={language.id}>
            {language.displayName}
          </option>
        ))}
      </select>
    </div>
  );
};
