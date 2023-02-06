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
}