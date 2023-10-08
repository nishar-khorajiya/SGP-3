import express from 'express';
import { registerController, loginController, testController} from '../controllers/authController.js';
import { contactusController} from '../controllers/contactusController.js';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';     
const router = express.Router();

//routing-resister || method POST
router.post('/register', registerController);

//LOGIN || POST
router.post('/login', loginController)

//CONTACT US || POST
router.post('/contactus',contactusController)
//test routes
router.get('/test', requireSignIn, isAdmin, testController);

export default router