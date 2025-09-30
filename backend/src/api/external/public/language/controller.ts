import { Request, Response, NextFunction } from 'express';
import { getLanguages } from '../../../../services/language/languageService';
import { successResponse, errorResponse } from '../../../../utils/response/responseUtils';

/**
 * @summary
 * Retrieves the list of available programming languages
 * 
 * @function getHandler
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 * @returns {Promise<void>}
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const languages = await getLanguages();
    res.json(successResponse(languages));
  } catch (error: any) {
    next(error);
  }
}
