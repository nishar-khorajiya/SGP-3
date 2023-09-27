import express from 'express';
import {registerController,loginController,testController,} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import passport from 'passport';//added

// const CLIENT_URL = 'http://localhost:3000/';//added

// router.get('/login/success', (req,res)=>{
//     if(req.user){
//         res.status(200).json({
//             success:true,
//             message:"successful",
//             user:req.user,
//         });
//     }
// });//added

// router.get('/login/failed', (req,res)=>{
    
//         res.status(401).json({
//             success:false,
//             message:"failure",
//         });
// });//added

// router.get('/logout', (req,res)=>{
//     req.logout();
//     res.redirect(CLIENT_URL);
// });//added

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register',registerController);

//LOGIn || POST
router.post('/login',loginController);

//test routes
router.get('/test',requireSignIn, isAdmin, testController);

//loginin with google auth
// router.get("google",passport.authenticate("google",{scope:["profile"]}))

// router.get("/google/callback",passport.authenticate("google",{
//     successRedirect:CLIENT_URL,
//     failureRedirect:"/login/failed"
// }));//added

export default router;