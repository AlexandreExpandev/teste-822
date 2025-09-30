import axios from 'axios';

const apiBaseUrl = process.env.VITE_API_BASE_URL || '/';

/**
 * @singleton apiClient
 * @summary A pre-configured Axios instance for making API requests.
 * It sets the base URL and default headers for all requests.
 * @type api-client
 * @category core-library
 */
export const apiClient = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors for handling auth tokens or global errors here
// apiClient.interceptors.request.use(...);
// apiClient.interceptors.response.use(...);
