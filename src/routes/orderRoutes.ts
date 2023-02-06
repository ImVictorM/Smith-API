import express from 'express';
import { OrderController } from '../controllers';

const router = express.Router();
const orderController = new OrderController();

router.get('/', orderController.requestAllOrders);

export default router;
