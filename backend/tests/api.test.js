const request = require('supertest');
const app = require('../app'); // Importa tu app Express

describe('API de tareas', () => {
  it('GET /tasks debe devolver un array y status 200', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(3); 
  });
});
