import express from 'express';
import {registerController,loginController,testController,} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import passport from 'passport';//added

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register',registerController);

//LOGIn || POST
router.post('/login',loginController);

//test routes
router.get('/test',requireSignIn, isAdmin, testController);

export default router;