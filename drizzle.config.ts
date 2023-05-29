import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config();

export default {
	schema: './src/lib/server/db/schema',
	out: './drizzle',
	host: process.env['DATABASE_HOST'],
	user: process.env['DATABASE_USER'],
	password: process.env['DATABASE_PASSWORD'],
	database: process.env['DATABASE_NAME']
} satisfies Config;
