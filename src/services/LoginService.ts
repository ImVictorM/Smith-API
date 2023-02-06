import { ILogin, ILoginServiceResponse } from '../interfaces';
import { connection, LoginModel } from '../models';
import { validateLoginReq } from './validations';
import jwt, { Secret } from 'jsonwebtoken';

export default class LoginService {
  private loginModel: LoginModel;

  constructor() {
    this.loginModel = new LoginModel(connection);
  }

  findUserByLoginInteraction = async (loginData: ILogin): Promise<ILoginServiceResponse> => {
    const validationResponse = validateLoginReq(loginData);
    if (validationResponse.errorCode) {
      return validationResponse;
    }
    const user = await this.loginModel.findUserByLogin(loginData);
    if (!user) {
      return { errorCode: 401, response: 'Username or password invalid' };
    }
    const secret = process.env.JWT_SECRET as Secret;
    const token = jwt.sign(user, secret, { algorithm: 'HS256' });
    return { errorCode: null, response: token };
  };
}