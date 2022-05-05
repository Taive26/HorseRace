const getAllRaces = require('../../src/controllers');

const spy = jest.fn();

jest.doMock('express', () => {
  return {
    Router() {
      return {
        get: spy,
        post: spy,
        delete: spy,
      };
    },
  };
});

describe('router', () => {
  require('../../src/router.js');

  test('should use getAllRaces controller when "/races" is triggered', () => {
    expect(spy).toHaveBeenNthCalledWith(1, '/races', getAllRaces);
  });
  test('should call methods 6 times', () => {
    expect(spy).toHaveBeenCalledTimes(7);
  });
});
