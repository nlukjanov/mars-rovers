const exploration = require('./marsRovers');

describe('Testing Mars Rovers exploration', () => {
  test('should have a function', () => {
    expect(exploration).toBeTruthy();
  });

  test('should return an object', () => {
    expect(exploration()).toStrictEqual({});
  });
});
