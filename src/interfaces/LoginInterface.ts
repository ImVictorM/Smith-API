export interface ILogin {
  username: string,
  password: string,
}

export interface ILoginServiceResponse {
  errorCode: null | number, 
  response: ILogin | ILogin[] | string,
}
