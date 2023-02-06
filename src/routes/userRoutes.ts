import express from 'express';
import { UserController } from '../controllers';

const router = express.Router();
const userController = new UserController();

router.post('/', userController.requestCreateNewUser);

export default router;
