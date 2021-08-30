const supertest = require('supertest');
const app = require('../src/server');

describe('GET /individuals', () => {
  it('should return 200 OK', async () => {
    await supertest(app)
      .get('/individuals')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
