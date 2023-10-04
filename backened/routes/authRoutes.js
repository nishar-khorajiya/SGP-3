import express from 'express';
<<<<<<< HEAD
import {registerController,loginController,testController,} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import passport from 'passport';//added

//router object
=======
import { registerController, loginController, testController } from '../controllers/authController.js';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';     
>>>>>>> ec9ffcdd55361c157274d16cf3bc10c84ea65513
const router = express.Router();

//routing-resister || method POST
router.post('/register', registerController);

//LOGIN || POST
router.post('/login', loginController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

<<<<<<< HEAD
export default router;
=======
export default router
>>>>>>> ec9ffcdd55361c157274d16cf3bc10c84ea65513
