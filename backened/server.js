// const express = require('express')
// const colors = require('colors')
//sujal
import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
import passport from "passport";
import cors from "cors"; 
import passportSetup from "passport";
import router from "./routes/authRoutes.js";

const cookieSession=require("cookie-session");

//rest object
const app = express();

app.use(cookieSession({
    name: "session",
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
    // keys:["Ashutosh"]
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors(
        {
            origin: "http://localhost:3000",
            credentials: true,
            methods:"GET,POST,PUT,DELETE"
        }
    )
);

//configure env
dotenv.config();

//database config
connectDB();


//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes);

//rest api
app.get('/',(req,res)=>{
   res.end(`<h1>welcome to Ashutosh Enterprise</h1>`)
})
//syntax is app.get(requestURL,callback functions are req,res, and many more)

//PORT
// const PORT = 8080;

const PORT = process.env.PORT || 8080;
//see here we can write any port ensure that it should be empty
//PORT of react works at 3000
//PORT of Angular at 4200
//PORT of NOde at 8000

//run listen
app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white); //to check if server started or not
}); 

//here our basic server is completed and also we have secure our website using env variables