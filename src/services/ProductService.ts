import { IProduct, IProductServiceResponse } from '../interfaces';
import { ProductModel, connection } from '../models';

export default class ProductService {
  private ProductModel: ProductModel;

  constructor() {
    this.ProductModel = new ProductModel(connection);
  }

  createOneProductInteraction = async (productFromReq: IProduct)
  : Promise<IProductServiceResponse> => {
    const createdProduct = await this.ProductModel.createOneProducts(productFromReq);
    return { errorCode: null, response: createdProduct };
  };
}
