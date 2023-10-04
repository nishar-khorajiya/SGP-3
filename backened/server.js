import express from 'express'
const app = express();
import cors  from  'cors';
import dotenv from 'dotenv';
import morgan from  'morgan';
import {connectDB} from   './config/db.js';
import authRoutes from './routes/authRoutes.js';

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


const port = process.env.PORT||8080;

app.get('/', (req, res) => {
    res.send("hello")
})

app.listen(port, () => {
 console.log(`server running on ${port}`);
})