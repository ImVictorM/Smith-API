export interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number | null
}

export interface IProductServiceResponse {
  errorCode: null | number, 
  response: IProduct | IProduct[] | string,
}
