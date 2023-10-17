import {userModel} from '../models/userModel.js';
import { hashpassword, comparePassword } from '../helpers/authHelpers.js';
import JWT from 'jsonwebtoken';

export const registerController = async (req, res) => {
    try {

        const { name, email, password, phone ,cpassword} = req.body;
        // const {  email, password } = req.body;

        //is any field blank
        if (!name) { return res.status(400).json({ success: false,message: 'name is required' }) }
        if (!email) { return res.status(400).json({ success: false,message: 'email is required' }) }
        if (!password) { return res.status(400).json({ success: false,message: 'password is required' }) }
        if (!cpassword) { return res.status(400).json({ success: false,message: 'confirm password is required' }) }
        if (!phone) { return res.status(400).json({ success: false,message: 'phone number is required' }) }
        // if (!adress) { return res.send({ error: 'Adress is required' }) }

        if (password !== cpassword) {
            return res.status(400).json({data:{success: false, message: 'Passwords do not match' }});
          }
        
        //user is aleready exists
        const exisitingUser = await userModel.findOne({ email: email })
        if (exisitingUser) {
            return res.status(200).send({data:{
                success: false,
                message: 'Already Register please login'
            }})
        }

        //register user
        const hashedPassword = await hashpassword(password);

        //save
        const user = await new userModel({ name, email, phone, password: hashedPassword }).save();

        res.status(201).send({data:{
            success: true,
            message: 'User Register successfully',
            user
        }})

    } catch (error) {
        console.log(error);
        res.status(500).send({data:{
            success: false,
            message: 'error in registration',
            error
        }})
    }
}

//login controller

export const loginController = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).json({data:{
                success: false,
                message: ' email and  password is required',
            }})
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({data:{
                success: false,
                message: 'Email is not registered'
            }})
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(404).json({data:{
                success: false,
                message: 'Invalid password'
            }})
        }

        const token = await JWT.sign({ _id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(200).json({
            data:{
            success: true,
            message: 'login Successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                adress: user.adress,
            },
            token,
        }
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({data:{
            success: false,
            message: 'error in login',
            error
        }})
    }
}


//test controller
export const testController = (req, res) => {
    res.send('route protected')
}

// module.exports = { registerController, loginController, testController };