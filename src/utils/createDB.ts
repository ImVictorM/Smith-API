import fs from 'fs';
import path from 'path';
import connection from '../models/connection';

const { cwd } = process;

async function createDB(): Promise<void> {
  try {
    const fileName = 'Trybesmith.sql';
    const filePath = path.resolve(cwd(), fileName);
    const fullSql = fs.readFileSync(filePath).toString();
    const queries = fullSql.split(';').filter((sql) => sql.trim());
    for (let index = 0; index < queries.length; index += 1) {
      const query = queries[index];
      // eslint-disable-next-line no-await-in-loop
      await connection.query(query); // reason: the queries must be executed sequentially
    }
    console.log('Database created successfully');
  } catch (error) {
    console.error(error);
  }
}

createDB().then(async () => {
  await connection.end();
});
