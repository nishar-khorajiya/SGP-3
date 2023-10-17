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
    exposedHeaders: 'Authorization',
  }));
//database
connectDB();

//middelwares
app.use(express.json());
app.use(morgan('dev'));
app.set('case sensitive routing', true);
app.set('strict routing', true);

//routes
app.use('/api/v1/auth',authRoutes);

//rest api
// app.get('/',(req,res)=>{
//    res.end(`<h1>welcome to Ashutosh Enterprise</h1>`)

const port = process.env.PORT||8080;

app.get('/', (req, res) => {

    res.send("hello")
})




// app.get('/protected', (req, res) => {
//   // Access the "Authorization" header
//   const authHeader = req.headers['authorization'];
//   console.log(authHeader)

//   // Check if the header exists
//   if (!authHeader) {
//     return res.status(401).json({ message: 'Token is missing' });
//   }

//   // Assuming the token is in the format "Bearer <token>"
//   const token = authHeader.replace('Bearer ', ''); // Remove "Bearer" prefix if present

//   // Verify the token
//   // You should implement your own token verification logic here

//   // For demonstration purposes, let's just return a success message
//   res.json({ message: 'Token is valid' });
// });


app.listen(port, () => {
 console.log(`server running on ${port}`);
})