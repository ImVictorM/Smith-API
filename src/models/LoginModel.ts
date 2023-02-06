import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin, IUser } from '../interfaces';

export default class LoginModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  findUserByLogin = async (loginData: ILogin): Promise<IUser | null> => {
    const { username, password } = loginData;
    const query = `
    SELECT id, username, vocation, level FROM Trybesmith.users 
    WHERE username = ? AND password = ?
    `;
    const [dataPacket] = await this.connection
      .execute<RowDataPacket[]>(query, [username, password]);
    const [user] = dataPacket;
    return user as IUser || null;
  };
}
