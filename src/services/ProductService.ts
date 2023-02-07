import { IProduct, IProductServiceResponse } from '../interfaces';
import { ProductModel, connection } from '../models';
import { validateProductReq } from './validations';

export default class ProductService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  createOneProductInteraction = async (productFromReq: IProduct)
  : Promise<IProductServiceResponse> => {
    const validationResponse = validateProductReq(productFromReq);
    if (validationResponse.errorCode) {
      return validationResponse;
    }
    const createdProduct = await this.productModel.createOneProducts(productFromReq);
    return { errorCode: null, response: createdProduct };
  };

  findAllProductsInteraction = async (): Promise<IProductServiceResponse> => {
    const products = await this.productModel.findAllProducts();
    return { errorCode: null, response: products };
  };
}
