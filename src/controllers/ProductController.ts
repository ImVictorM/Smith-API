import { Request, Response } from 'express';
import { ProductService } from '../services';

export default class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  requestCreateOneProduct = async (req: Request, res: Response) => {
    const productFromReq = req.body;
    const { response, errorCode } = await this.productService
      .createOneProductInteraction(productFromReq);
    if (errorCode) {
      return res.status(errorCode).json({ message: response });
    }
    return res.status(201).json(response);
  };

  requestAllProducts = async (_req: Request, res: Response) => {
    const { response } = await this.productService.findAllProductsInteraction();
    return res.status(200).json(response);
  };
}
