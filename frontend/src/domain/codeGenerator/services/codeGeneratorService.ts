import { apiClient } from '@/core/lib/api';
import type { ApiResponse } from '@/core/types/api';
import type { Language } from '../types';

/**
 * @service codeGeneratorService
 * @summary Provides methods for all code generation-related backend operations.
 * @domain codeGenerator
 * @type api-service
 */
export const codeGeneratorService = {
  /**
   * @summary Fetches the list of available programming languages.
   * @returns {Promise<Language[]>} A list of languages.
   */
  async getLanguages(): Promise<Language[]> {
    const response = await apiClient.get<ApiResponse<Language[]>>('/api/external/languages');
    return response.data.data;
  },

  /**
   * @summary Fetches the generated "Hello, World!" code for a given language.
   * @param {string} language - The ID of the language.
   * @returns {Promise<{ language: string; code: string }>} The language and its generated code.
   */
  async generateCode(language: string): Promise<{ language: string; code: string }> {
    const response = await apiClient.get<ApiResponse<{ language: string; code: string }>>(
      `/api/external/code/${language}`,
    );
    return response.data.data;
  },

  /**
   * @summary Constructs the URL to download the code file for a given language.
   * @param {string} language - The ID of the language.
   * @returns {string} The full URL for downloading the code file.
   */
  getDownloadUrl(language: string): string {
    // We need to construct the full URL because this will be used in an `<a>` tag
    const baseUrl = (apiClient.defaults.baseURL || '').replace(/\/$/, '');
    return `${baseUrl}/api/external/code/${language}/download`;
  },
};
