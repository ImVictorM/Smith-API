import { ILogin, ILoginServiceResponse } from '../../interfaces';
import { loginReqPattern } from './schemas';

function validateLoginReq(loginData: ILogin): ILoginServiceResponse {
  const { error } = loginReqPattern.validate(loginData);
  if (error) {
    return { errorCode: 400, response: error.message };
  }

  return { errorCode: null, response: '' };
}

export default validateLoginReq;
