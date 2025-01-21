import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { sql } from 'drizzle-orm';

export const GET: RequestHandler = async ({ url }) => {
  const result = await db.execute(sql`select 1 + 1;`)
  console.log(result)
	return json({ url });
};
