import { Request, Response, NextFunction } from 'express';

/**
 * @summary
 * Middleware to handle 404 Not Found errors
 * 
 * @function notFoundMiddleware
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 * @returns {void}
 */
export function notFoundMiddleware(req: Request, res: Response, next: NextFunction): void {
  res.status(404).json({
    success: false,
    error: {
      message: 'Resource not found',
      code: 'NOT_FOUND'
    },
    timestamp: new Date().toISOString()
  });
}
