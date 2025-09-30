/**
 * @interface Language
 * @description Represents a programming language supported by the system.
 * Mirrors the LanguageInfo type from the backend.
 */
export interface Language {
  /** Unique identifier for the language (e.g., 'javascript') */
  id: string;

  /** Language name (e.g., 'JavaScript') */
  name: string;

  /** File extension for the language (e.g., 'js') */
  extension: string;

  /** Display name for the language (e.g., 'JavaScript') */
  displayName: string;
}
