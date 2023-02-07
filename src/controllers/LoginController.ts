import { Request, Response } from 'express';
import { LoginService } from '../services';

export default class LoginController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  requestUserByLogin = async (req: Request, res: Response) => {
    const loginData = req.body;
    const { response, errorCode } = await this.loginService.findUserByLoginInteraction(loginData);
    if (errorCode) {
      return res.status(errorCode).json({ message: response });
    }
    return res.status(200).json({ token: response });
  };
}
