const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const AdoptionStatus = require('../models/status.model');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
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
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('GET /adoption/status/:petId', () => {
  it('should return the adoption status for a given petId', async () => {
    const res = await request(app).get('/adoption/status/pet123');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('petId', 'pet123');
  });
});
