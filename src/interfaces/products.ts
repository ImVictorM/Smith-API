export interface IProduct {
  id?: number,
  name: string,
  amount: string,
}

export interface IProductServiceResponse {
  errorCode: null | number, 
  response: IProduct | string,
}
