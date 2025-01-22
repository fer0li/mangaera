import { defineConfig } from 'drizzle-kit';

const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, NODE_ENV } =
	process.env;

if (!POSTGRES_HOST || !POSTGRES_PORT || !POSTGRES_USER || !POSTGRES_PASSWORD || !POSTGRES_DB)
	throw new Error('Postgres settings is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	out: './.drizzle-out',

	dbCredentials: {
		host: POSTGRES_HOST,
		port: Number(POSTGRES_PORT),
		user: POSTGRES_USER,
		password: POSTGRES_PASSWORD,
		database: POSTGRES_DB,
		ssl: NODE_ENV === 'development' ? false : true
	},

	entities: {
		roles: {
			provider: 'neon'
		}
	},

	verbose: true,
	strict: true,
	dialect: 'postgresql'
});
