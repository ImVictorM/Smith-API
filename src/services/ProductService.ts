import { IProduct, IProductServiceResponse } from '../interfaces';
import { ProductModel, connection } from '../models';

export default class ProductService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  createOneProductInteraction = async (productFromReq: IProduct)
  : Promise<IProductServiceResponse> => {
    const createdProduct = await this.productModel.createOneProducts(productFromReq);
    return { errorCode: null, response: createdProduct };
  };

  findAllProductsInteraction = async (): Promise<IProductServiceResponse> => {
    const products = await this.productModel.findAllProducts();
    return { errorCode: null, response: products };
  };
}
