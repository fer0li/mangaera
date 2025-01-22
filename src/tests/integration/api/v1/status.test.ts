import { describe, it, expect } from 'vitest';

describe('GET test', () => {
	it('should return 200', async () => {
		const response = await fetch('http://localhost:5173/api/v1/status');
		expect(response.status).toBe(200);

		const responseBody = await response.json();
		expect(responseBody.updated_at).toBeDefined();

		const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
		expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

    expect(responseBody.dependencies.database.version).toEqual("16.6")
    expect(responseBody.dependencies.database.max_connections).toEqual(100)
    expect(responseBody.dependencies.database.opened_connections).toEqual(1)
	});
});
