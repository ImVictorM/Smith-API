import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  findAllOrders = async (): Promise<IOrder[]> => {
    const query = `
    SELECT orders.id, orders.user_id as userId, JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.orders as orders
    INNER JOIN Trybesmith.products as products
    ON products.order_id = orders.id
    GROUP BY orders.id
    `;

    const [orders] = await this.connection.execute<RowDataPacket[]>(query);
    return orders as IOrder[];
  };

  createNewOrder = async (userId: number, orderFromReq: IOrder): Promise<IOrder> => {
    const { productsIds } = orderFromReq;
    const ordersQuery = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
    const [headers] = await this.connection.execute<ResultSetHeader>(ordersQuery, [userId]);
    const { insertId: orderId } = headers;

    const productsPromises = productsIds.map((productId) => {
      const productsQuery = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
      return this.connection.execute(productsQuery, [orderId, productId]);
    });
    await Promise.all(productsPromises);
    return { userId, productsIds };
  };
}
