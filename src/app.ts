import express from 'express';
import { productRoutes, userRoutes, orderRoutes } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

export default app;
