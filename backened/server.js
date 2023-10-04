// import express from "express";
// import colors from "colors";
// import dotenv from 'dotenv';
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import authRoutes from './routes/authRoutes.js';
// import passport from "passport";
// import cors from "cors"; //added
// import passportSetup from "./passport";
// import router from "./routes/authRoutes.js";

//rest object
import express from 'express'
const app = express();
import cors  from  'cors';
import dotenv from 'dotenv';
import morgan from  'morgan';
import {connectDB} from   './config/db.js';
import authRoutes from './routes/authRoutes.js';


//configure env

//env config
dotenv.config();

app.use(cors({
    origin: 'http://localhost:3000',
  }));
//database
connectDB();

//middelwares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);

//rest api
// app.get('/',(req,res)=>{
//    res.end(`<h1>welcome to Ashutosh Enterprise</h1>`)

const port = process.env.PORT||8080;

app.get('/', (req, res) => {
    res.send("hello")
})

app.listen(port, () => {
 console.log(`server running on ${port}`);
})