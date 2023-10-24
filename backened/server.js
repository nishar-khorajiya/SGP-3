import express from 'express'
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import categoryRotes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import bodyParser from 'body-parser'


//env config
dotenv.config();

app.use(cors({
  origin: 'http://localhost:3000',
  exposedHeaders: 'Authorization',
  exposedHeaders: 'user',
}));
//database
connectDB();

app.use(bodyParser.json({ limit: '10mb' })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
//middelwares
app.use(express.json());
app.use(morgan('dev'));
app.set('case sensitive routing', true);
app.set('strict routing', true);

//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRotes);
app.use('/api/v1/product', productRoutes);

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {

  res.send("hello")
})

app.listen(port, () => {
  console.log(`server running on ${port}`);
})