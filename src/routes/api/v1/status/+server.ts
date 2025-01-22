import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { sql } from 'drizzle-orm';
import { POSTGRES_DB } from '$env/static/private';

export const GET: RequestHandler = async () => {
	const updatedAt = new Date().toISOString();
	const [postgresVersion] = await db.execute(sql`show server_version`);
	const [postgresMaxConnections] = await db.execute(sql`show max_connections`);
	const [postgresOpenedConnections] = await db.execute(
		sql`select count(*)::int from pg_stat_activity where datname = ${POSTGRES_DB} and state = 'active'`
	);

	return json({
		updated_at: updatedAt,
		dependencies: {
			database: {
				version: postgresVersion.server_version,
				max_connections: Number(postgresMaxConnections.max_connections),
				opened_connections: postgresOpenedConnections.count
			}
		}
	});
};
