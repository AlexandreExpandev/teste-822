import { Router } from 'express';
import * as languageController from '../api/external/public/language/controller';
import * as codeController from '../api/external/public/code/controller';

const router = Router();

// Public routes for language selection and code generation
router.get('/languages', languageController.getHandler);
router.get('/code/:language', codeController.getHandler);
router.get('/code/:language/download', codeController.downloadHandler);

export default router;
