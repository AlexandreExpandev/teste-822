/**
 * @module codeGenerator
 * @summary This module encapsulates all functionality related to generating,
 * displaying, and downloading "Hello, World!" code snippets.
 * @domain functional
 * @dependencies @/core/lib/api, @tanstack/react-query
 * @version 1.0.0
 */

// Domain public exports - Hooks
export * from './hooks/useLanguages';
export * from './hooks/useGeneratedCode';

// Domain public exports - Services
export * from './services/codeGeneratorService';

// Domain public exports - Types
export * from './types';

// Module metadata
export const moduleMetadata = {
  name: 'codeGenerator',
  domain: 'functional',
  version: '1.0.0',
  publicHooks: ['useLanguages', 'useGeneratedCode'],
  publicServices: ['codeGeneratorService'],
  dependencies: {
    internal: ['@/core/lib/api', '@/core/types/api'],
    external: ['@tanstack/react-query', 'axios'],
    domains: [],
  },
  exports: {
    hooks: ['useLanguages', 'useGeneratedCode'],
    services: ['codeGeneratorService'],
    types: ['Language'],
  },
} as const;
