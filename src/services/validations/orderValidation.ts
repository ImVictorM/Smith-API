import { IOrder, IOrderServiceResponse } from '../../interfaces';
import { orderReqPattern } from './schemas';

function validateOrderReq(order: IOrder): IOrderServiceResponse {
  const { error } = orderReqPattern.validate(order);
  if (error) {
    const errorCode = error.details[0].type.includes('required') ? 400 : 422;
    return { errorCode, response: error.message };
  }
  return { errorCode: null, response: '' };
}

export default validateOrderReq;
