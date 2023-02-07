import { NextFunction, Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import { IUser } from '../interfaces';

const secret = process.env.JWT_SECRET as Secret;

function authToken(req: Request, res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const user = jwt.verify(token, secret, { algorithms: ['HS256'] }) as IUser;
    req.body = {
      requestData: { ...req.body },
      userId: user.id,
    };
    return next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export default authToken;
