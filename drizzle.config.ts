import type { Config } from 'drizzle-kit';

export default {
	schema: './src/db/index.ts',
	out: './drizzle',
	host: process.env.host,
	user: process.env.user,
	password: process.env.password,
	database: process.env.database
} satisfies Config;
