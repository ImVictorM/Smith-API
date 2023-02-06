import express from 'express';
import ProductController from '../controllers';

const router = express.Router();
const productController = new ProductController();

router.post('/', productController.requestCreateOneProduct);

export default router;
