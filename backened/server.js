<<<<<<< HEAD
import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
import passport from "passport";
import cors from "cors"; //added
import passportSetup from "./passport";
import router from "./routes/authRoutes.js";

//rest object
=======
import express from 'express'
>>>>>>> ec9ffcdd55361c157274d16cf3bc10c84ea65513
const app = express();
import cors  from  'cors';
import dotenv from 'dotenv';
import morgan from  'morgan';
import {connectDB} from   './config/db.js';
import authRoutes from './routes/authRoutes.js';

<<<<<<< HEAD
//configure env
=======
//env config
>>>>>>> ec9ffcdd55361c157274d16cf3bc10c84ea65513
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

<<<<<<< HEAD
//rest api
app.get('/',(req,res)=>{
   res.end(`<h1>welcome to Ashutosh Enterprise</h1>`)
=======

const port = process.env.PORT||8080;

app.get('/', (req, res) => {
    res.send("hello")
>>>>>>> ec9ffcdd55361c157274d16cf3bc10c84ea65513
})

app.listen(port, () => {
 console.log(`server running on ${port}`);
})