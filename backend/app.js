import express from 'express';
import ProductListRouter from './routes/ProductListRouter.js';
import CartListRouter from './routes/CartListRouter.js';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();

app.use(cors({
  origin: ['https://e-commerce-megashop.vercel.app', 'http://localhost:5173'] 
}));

app.use(express.json());
app.use('/api', ProductListRouter);
app.use('/api', CartListRouter);

export default app;

