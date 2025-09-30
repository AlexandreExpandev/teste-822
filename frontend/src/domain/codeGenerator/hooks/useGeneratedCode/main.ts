import { useQuery } from '@tanstack/react-query';
import { codeGeneratorService } from '../../services/codeGeneratorService';

/**
 * @hook useGeneratedCode
 * @summary Fetches the "Hello, World!" code for a specified language.
 * The query is disabled until a language is provided.
 * @domain codeGenerator
 * @type domain-hook
 * @category data
 *
 * @param {string | null} language - The ID of the language to fetch code for.
 *
 * @returns The same return value as React Query's useQuery, containing the code data.
 */
export const useGeneratedCode = (language: string | null) => {
  return useQuery({
    queryKey: ['generatedCode', language],
    queryFn: () => {
      if (!language) {
        return Promise.resolve(null);
      }
      return codeGeneratorService.generateCode(language);
    },
    enabled: !!language, // Only run the query if a language is selected
    staleTime: Infinity, // The code for a language is static, so it never gets stale
    gcTime: 1000 * 60 * 60, // Cache for 1 hour
  });
};
