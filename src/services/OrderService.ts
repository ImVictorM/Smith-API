import { IOrderServiceResponse } from '../interfaces';
import { connection, OrderModel } from '../models';

export default class OrderService {
  private orderModel: OrderModel;
  
  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  findAllOrdersInteraction = async (): Promise<IOrderServiceResponse> => {
    const orders = await this.orderModel.findAllOrders();
    return { errorCode: null, response: orders };
  };
}
