import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import {
	POSTGRES_HOST,
	POSTGRES_PORT,
	POSTGRES_USER,
	POSTGRES_PASSWORD,
	POSTGRES_DB
} from '$env/static/private';

if (!POSTGRES_HOST || !POSTGRES_PORT || !POSTGRES_USER || !POSTGRES_PASSWORD || !POSTGRES_DB)
	throw new Error('Postgres settings is not set');

const client = postgres({
	host: POSTGRES_HOST,
	port: Number(POSTGRES_PORT),
	user: POSTGRES_USER,
	password: POSTGRES_PASSWORD,
	database: POSTGRES_DB
});

export const db = drizzle(client);
