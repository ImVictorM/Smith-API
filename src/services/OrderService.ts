import { IOrder, IOrderServiceResponse } from '../interfaces';
import { connection, OrderModel } from '../models';
import { validateOrderReq } from './validations';

export default class OrderService {
  private orderModel: OrderModel;
  
  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  findAllOrdersInteraction = async (): Promise<IOrderServiceResponse> => {
    const orders = await this.orderModel.findAllOrders();
    return { errorCode: null, response: orders };
  };

  createNewOrderInteraction = async (userId: number, orderFromReq: IOrder)
  : Promise<IOrderServiceResponse> => {
    const validationResponse = validateOrderReq(orderFromReq);
    if (validationResponse.errorCode) {
      return validationResponse;
    }

    const creationResponse = await this.orderModel.createNewOrder(userId, orderFromReq);
    return { errorCode: null, response: creationResponse };
  };
}
