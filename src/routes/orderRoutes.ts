import express from 'express';
import { OrderController } from '../controllers';
import authToken from '../middlewares/authToken';

const router = express.Router();
const orderController = new OrderController();

router.get('/', orderController.requestAllOrders);
router.post('/', authToken, orderController.requestCreateNewOrder);

export default router;
