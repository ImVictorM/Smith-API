import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  findAllOrders = async (): Promise<IOrder[]> => {
    const query = `
    SELECT orders.id, orders.user_id, JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.orders as orders
    INNER JOIN Trybesmith.products as products
    ON products.order_id = orders.id
    GROUP BY orders.id
    `;

    const [orders] = await this.connection.execute<RowDataPacket[]>(query);
    return orders as IOrder[];
  };
}
