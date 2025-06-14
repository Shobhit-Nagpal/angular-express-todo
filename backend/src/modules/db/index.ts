import { Pool } from "pg";
import envManager from "../config/env-manager";

class Database {
  private pool: Pool;

  constructor() {
    console.log('Setting up database...')
    this.pool = new Pool({
      host: envManager.DATABASE_HOST,
      port: envManager.DATABASE_PORT,
      database: envManager.DATABASE_NAME,
      user: envManager.DATABASE_USER,
      password: envManager.DATABASE_PASSWORD,
    });

    this.setup();
    console.log('Database setup!')
  }

  setup() {
    this.pool.on("error", (err, _) => {
      console.error("Unexpected error on idle client", err);
      process.exit(-1);
    });
  }

  async query(queryStream: string, values?: any[] | undefined) {
    const client = await this.pool.connect();
    const res = await client.query(queryStream, values);

    client.release();

    return res;
  }

  async close() {
    await this.pool.end();
  }
}

const db = new Database();

export default Object.freeze(db);
