const request = require('supertest');
const app = require('../app');
const connectDB = require('../config/db');
const mongoose = require('mongoose');

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /adoption/status/:petId', () => {
  it('should return the adoption status for a given petId', async () => {
    const res = await request(app).get('/adoption/status/pet123');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('petId', 'pet123');
  }, 10000);
});
