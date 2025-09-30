import { LanguageInfo } from '../../types/language';

/**
 * @summary
 * Provides the list of available programming languages
 * 
 * @returns {Promise<LanguageInfo[]>} Array of supported languages with metadata
 */
export async function getLanguages(): Promise<LanguageInfo[]> {
  // In a real application, this might come from a database
  // For this example, we'll use a static list
  return [
    { id: 'javascript', name: 'JavaScript', extension: 'js', displayName: 'JavaScript' },
    { id: 'typescript', name: 'TypeScript', extension: 'ts', displayName: 'TypeScript' },
    { id: 'python', name: 'Python', extension: 'py', displayName: 'Python' },
    { id: 'java', name: 'Java', extension: 'java', displayName: 'Java' },
    { id: 'csharp', name: 'C#', extension: 'cs', displayName: 'C#' },
    { id: 'cpp', name: 'C++', extension: 'cpp', displayName: 'C++' },
    { id: 'php', name: 'PHP', extension: 'php', displayName: 'PHP' },
    { id: 'ruby', name: 'Ruby', extension: 'rb', displayName: 'Ruby' },
    { id: 'go', name: 'Go', extension: 'go', displayName: 'Go' },
    { id: 'rust', name: 'Rust', extension: 'rs', displayName: 'Rust' }
  ];
}

/**
 * @summary
 * Checks if a language is supported by the system
 * 
 * @param {string} languageId - The language identifier to check
 * @returns {Promise<boolean>} True if the language is supported
 */
export async function isLanguageSupported(languageId: string): Promise<boolean> {
  const languages = await getLanguages();
  return languages.some(lang => lang.id === languageId);
}

/**
 * @summary
 * Gets language information by its identifier
 * 
 * @param {string} languageId - The language identifier
 * @returns {Promise<LanguageInfo | undefined>} Language information or undefined if not found
 */
export async function getLanguageById(languageId: string): Promise<LanguageInfo | undefined> {
  const languages = await getLanguages();
  return languages.find(lang => lang.id === languageId);
}
