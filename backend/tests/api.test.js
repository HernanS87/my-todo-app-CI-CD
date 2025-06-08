const request = require('supertest');
const app = require('../app'); // Importa tu app Express
const db = require('../db');   // Tu conexión MySQL

describe('API de tareas', () => {
  it('GET /tasks debe devolver un array y status 200', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(3); 
  });
});

// Cerramos el pool de conexiones después de todos los tests
afterAll(() => {
  if (db.end) db.end();  // Cierra el pool si existe
});
