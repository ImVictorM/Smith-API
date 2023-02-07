import jwt, { Secret } from 'jsonwebtoken';
import { IUser, IUserServiceResponse } from '../interfaces';
import { connection, UserModel } from '../models';
import { validateUserReq } from './validations';

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  createNewUserInteraction = async (userFromReq: IUser): Promise<IUserServiceResponse> => {
    const validationResponse = validateUserReq(userFromReq);
    if (validationResponse.errorCode) {
      return validationResponse;
    }
    const createdUser = await this.userModel.createNewUser(userFromReq);
    const secret = process.env.JWT_SECRET as Secret;
    const token = jwt.sign(createdUser, secret, { algorithm: 'HS256' });
    return { errorCode: null, response: token };
  };
}