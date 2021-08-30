const errorHandler = require('../src/errorHandler');

describe('Error Handler', () => {
  let req, res;
  const next = jest.fn();

  beforeEach(() => {
    req = {
      params: {},
      body: {},
    };

    res = {
      data: null,
      code: null,
      status(status) {
        this.code = status;
        return this;
      },
      send(payload) {
        this.data = payload;
      },
    };

    next.mockClear();
    errorHandler(new Error(), req, res, next);
  });

  it('should return 500 error', () => {
    expect(res.code).toBeDefined();
    expect(res.code).toBe(500);
  });

  it('should contain correct Error message', () => {
    expect(res.data).toBeDefined();
    expect(res.data).toEqual({ error: 'Error' });
  });
});
