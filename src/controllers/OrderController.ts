import { Request, Response } from 'express';
import { OrderService } from '../services';

export default class OrderController {
  private orderService: OrderService;
  
  constructor() {
    this.orderService = new OrderService();
  }

  requestAllOrders = async (_req: Request, res: Response) => {
    const { response } = await this.orderService.findAllOrdersInteraction();
    return res.status(200).json(response);
  };

  requestCreateNewOrder = async (req: Request, res: Response) => {
    const { userId, order } = req.body;
    const { errorCode, response } = await this.orderService
      .createNewOrderInteraction(userId, order);
    if (errorCode) {
      return res.status(errorCode).json({ message: response });
    }
    return res.status(201).json(response);
  };
}