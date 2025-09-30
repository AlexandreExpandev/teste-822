import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger/loggerUtils';

/**
 * @summary
 * Global error handling middleware
 * 
 * @function errorMiddleware
 * @param {Error} err - Error object
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 * @returns {void}
 */
export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
  // Log the error
  logger.error('Error occurred', {
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method
  });

  // Determine status code
  const statusCode = err.statusCode || 500;
  
  // Send error response
  res.status(statusCode).json({
    success: false,
    error: {
      message: statusCode === 500 ? 'Internal server error' : err.message,
      code: err.code || 'INTERNAL_ERROR'
    },
    timestamp: new Date().toISOString()
  });
}
