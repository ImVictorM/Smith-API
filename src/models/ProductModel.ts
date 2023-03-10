import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  createOneProducts = async (productFromReq: IProduct): Promise<IProduct> => {
    const { name, amount } = productFromReq;
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const [headers] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const { insertId } = headers;
    return {
      id: insertId,
      ...productFromReq,
    };
  };

  findAllProducts = async (): Promise<IProduct[]> => {
    const query = 'SELECT * FROM Trybesmith.products';
    const [products] = await this.connection.execute<RowDataPacket[]>(query);
    return products as IProduct[];
  };
}
