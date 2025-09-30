/**
 * @interface ApiResponse
 * @summary A generic type for standardized success API responses from the backend.
 */
export interface ApiResponse<T> {
  success: true;
  data: T;
  metadata: {
    timestamp: string;
    [key: string]: any;
  };
}

/**
 * @interface ApiErrorResponse
 * @summary A generic type for standardized error API responses from the backend.
 */
export interface ApiErrorResponse {
  success: false;
  error: {
    message: string;
    code: string;
    details?: any;
  };
  timestamp: string;
}
