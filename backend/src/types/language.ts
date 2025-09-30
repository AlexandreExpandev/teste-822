/**
 * @interface LanguageInfo
 * @description Represents a programming language supported by the system
 */
export interface LanguageInfo {
  /** Unique identifier for the language */
  id: string;
  
  /** Language name (used for lookups) */
  name: string;
  
  /** File extension for the language */
  extension: string;
  
  /** Display name for the language (used in UI) */
  displayName: string;
}
