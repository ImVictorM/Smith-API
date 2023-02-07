export interface IOrder {
  id?: number,
  userId?: number,
  productsIds: number[],
}

export interface IOrderServiceResponse {
  errorCode: null | number, 
  response: IOrder | IOrder[] | string,
}
