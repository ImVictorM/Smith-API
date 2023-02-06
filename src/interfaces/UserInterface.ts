export interface IUser {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface IUserServiceResponse {
  errorCode: null | number, 
  response: IUser | IUser[] | string,
}
