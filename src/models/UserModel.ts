import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  createNewUser = async (userFromReq: IUser): Promise<IUser> => {
    const { username, vocation, level, password } = userFromReq;
    const query = `
    INSERT INTO Trybesmith.users 
    (username, vocation, level, password) 
    VALUES 
    (?, ?, ?, ?)`;
    const [headers] = await this.connection
      .execute<ResultSetHeader>(query, [username, vocation, level, password]);
    const { insertId } = headers;
    return {
      id: insertId,
      ...userFromReq,
    };
  };
}
