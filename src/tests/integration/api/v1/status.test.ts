import { describe, it, expect } from 'vitest';

describe('GET test', () => {
	it('should return 200', async () => {
		const response = await fetch('http://localhost:5173/api/v1/status');
    expect(response.status).toBe(200)
	});
});
