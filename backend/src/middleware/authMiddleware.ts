import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';

/**
 * @summary
 * Authentication middleware to protect routes
 * 
 * @function authMiddleware
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 * @returns {void}
 */
export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  // Get token from header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({
      success: false,
      error: {
        message: 'Authentication required',
        code: 'AUTH_REQUIRED'
      },
      timestamp: new Date().toISOString()
    });
    return;
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.security.jwtSecret);
    
    // Add user info to request
    (req as any).user = decoded;
    
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      error: {
        message: 'Invalid authentication token',
        code: 'INVALID_TOKEN'
      },
      timestamp: new Date().toISOString()
    });
    return;
  }
}
