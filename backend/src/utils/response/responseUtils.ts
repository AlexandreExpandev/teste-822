/**
 * @summary
 * Creates a standardized success response object
 * 
 * @template T - Type of the data being returned
 * @param {T} data - The data to include in the response
 * @param {object} metadata - Optional metadata to include
 * @returns {object} Standardized success response
 */
export function successResponse<T>(data: T, metadata: object = {}): object {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString()
    }
  };
}

/**
 * @summary
 * Creates a standardized error response object
 * 
 * @param {string} message - Error message
 * @param {string} code - Error code
 * @param {object} details - Optional error details
 * @returns {object} Standardized error response
 */
export function errorResponse(message: string, code: string = 'ERROR', details: object = {}): object {
  return {
    success: false,
    error: {
      message,
      code,
      details
    },
    timestamp: new Date().toISOString()
  };
}
