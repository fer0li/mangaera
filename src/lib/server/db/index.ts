import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import {
	POSTGRES_HOST,
	POSTGRES_PORT,
	POSTGRES_USER,
	POSTGRES_PASSWORD,
	POSTGRES_DB,
	NODE_ENV
} from '$env/static/private';

if (!POSTGRES_HOST || !POSTGRES_PORT || !POSTGRES_USER || !POSTGRES_PASSWORD || !POSTGRES_DB)
	throw new Error('Postgres settings is not set');

const dbConnect = () => {
	try {
		const client = postgres({
			host: POSTGRES_HOST,
			port: Number(POSTGRES_PORT),
			user: POSTGRES_USER,
			password: POSTGRES_PASSWORD,
			database: POSTGRES_DB,
			ssl: NODE_ENV === 'development' ? false : true
		});

		return drizzle(client);
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const db = dbConnect();
