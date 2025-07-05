const request = require('supertest');
const app = require('../app');
const connectDB = require('../config/db');
const mongoose = require('mongoose');
const AdoptionStatus = require('../models/status.model');

beforeAll(async () => {
  await connectDB();
});

beforeEach(async () => {
  await AdoptionStatus.create({
    petId: 'pet123',
    status: 'reserved',
    notes: 'Test pet'
  });
});

afterEach(async () => {
  await AdoptionStatus.deleteMany({});
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
