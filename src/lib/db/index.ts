import { drizzle, type MySql2Database } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from '$lib/db';

const connection = await mysql.createConnection({
	host: process.env['DATABASE_HOST'],
	user: process.env['DATABASE_USER'],
	password: process.env['DATABASE_PASSWORD'],
	database: process.env['DATABASE_NAME']
});

const db: MySql2Database = drizzle(connection, { schema });

export { db };
