import { useQuery } from '@tanstack/react-query';
import { codeGeneratorService } from '../../services/codeGeneratorService';

/**
 * @hook useLanguages
 * @summary Fetches the list of available programming languages from the API.
 * @domain codeGenerator
 * @type domain-hook
 * @category data
 *
 * @returns The return value of React Query's useQuery, containing the list of languages.
 */
export const useLanguages = () => {
  return useQuery({
    queryKey: ['languages'],
    queryFn: codeGeneratorService.getLanguages,
    staleTime: 1000 * 60 * 60, // Data is fairly static, stale time of 1 hour
  });
};
