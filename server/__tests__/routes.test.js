const supertest = require('supertest');
const app = require('../src/server');
const jsonData = require('../src/data.json');

describe('GET /individuals', () => {
  describe('when the request is valid', () => {
    it('should return 200 OK', async () => {
      await supertest(app)
        .get('/individuals')
        .expect('Content-Type', /json/)
        .expect(200);
    });

    it('should contain results array in response', async () => {
      const res = await supertest(app).get('/individuals').expect(200);

      expect(res.body).toEqual(jsonData);
    });
  });

  describe('when the query parameter is passed', () => {
    it('should return correct item(s)', async () => {
      const expectedResponse = {
        results: [
          {
            name: 'Dr. Jean-Martin Charcot',
            specialty: 'Pathology',
          },
        ],
      };
      const res = await supertest(app)
        .get('/individuals?text=mart')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).toEqual(expectedResponse);
    });
  });

  describe('GET non-existent route', () => {
    it('should return 404 Not Found', async () => {
      await supertest(app).get('/wrongroute').expect(404);
    });

    it('should contain correct message', async () => {
      const message = 'Route not found';
      const res = await supertest(app).get('/wrongroute').expect(404);

      expect(res.body.message).toEqual(message);
    });
  });
});
