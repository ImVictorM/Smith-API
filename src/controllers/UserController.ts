import { Request, Response } from 'express';
import { UserService } from '../services';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  requestCreateNewUser = async (req: Request, res: Response) => {
    const userFromReq = req.body;
    const { response } = await this.userService.createNewUserInteraction(userFromReq);
    return res.status(201).json({ token: response });
  };
}
