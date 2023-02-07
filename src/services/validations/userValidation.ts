import { IUser, IUserServiceResponse } from '../../interfaces';
import { userReqPattern } from './schemas';

function validateUserReq(user: IUser): IUserServiceResponse {
  const { error } = userReqPattern.validate(user);
  if (error) {
    const errorCode = error.details[0].type.includes('required') ? 400 : 422;
    return { errorCode, response: error.message };
  }
  return { errorCode: null, response: '' };
}

export default validateUserReq;
