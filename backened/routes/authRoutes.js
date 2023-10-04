import express from 'express';
// import {registerController,loginController,testController,} from '../controllers/authController.js';
// import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
// import passport from 'passport';//added

//router object
import { registerController, loginController, testController } from '../controllers/authController.js';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';     
const router = express.Router();

//routing-resister || method POST
router.post('/register', registerController);

//LOGIN || POST
router.post('/login', loginController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

export default router;
