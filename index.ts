import * as Knex from "knex";
import { config } from "dotenv";

config({ path: `${__dirname}/.env` });

const knex = Knex({
    client: "pg",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
});

async function query(): Promise<any> {
    // Query goes here.
    process.exit(0);
}

query();