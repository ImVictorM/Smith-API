import { IProduct, IProductServiceResponse } from '../../interfaces';
import { productReqPattern } from './schemas';

function validateProductReq(product: IProduct): IProductServiceResponse {
  const { error } = productReqPattern.validate(product);
  if (error) {
    const errorCode = error.details[0].type.includes('required') ? 400 : 422;
    return { errorCode, response: error.message };
  }
  return { errorCode: null, response: '' };
}

export default validateProductReq;
