import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { generateCode, getFileExtension } from '../../../../services/code/codeService';
import { successResponse, errorResponse } from '../../../../utils/response/responseUtils';

// Validation schema for language parameter
const languageParamSchema = z.object({
  language: z.string().min(1).max(50)
});

/**
 * @summary
 * Generates and returns Hello World code for the specified language
 * 
 * @function getHandler
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 * @returns {Promise<void>}
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    // Validate language parameter
    const result = languageParamSchema.safeParse(req.params);
    
    if (!result.success) {
      res.status(400).json(errorResponse('Invalid language parameter'));
      return;
    }
    
    const { language } = result.data;
    const code = await generateCode(language);
    
    if (!code) {
      res.status(404).json(errorResponse(`Language '${language}' not supported`));
      return;
    }
    
    res.json(successResponse({ language, code }));
  } catch (error: any) {
    next(error);
  }
}

/**
 * @summary
 * Downloads Hello World code for the specified language as a file
 * 
 * @function downloadHandler
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 * @returns {Promise<void>}
 */
export async function downloadHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    // Validate language parameter
    const result = languageParamSchema.safeParse(req.params);
    
    if (!result.success) {
      res.status(400).json(errorResponse('Invalid language parameter'));
      return;
    }
    
    const { language } = result.data;
    const code = await generateCode(language);
    
    if (!code) {
      res.status(404).json(errorResponse(`Language '${language}' not supported`));
      return;
    }
    
    const extension = getFileExtension(language);
    const filename = `hello-world.${extension}`;
    
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.send(code);
  } catch (error: any) {
    next(error);
  }
}
