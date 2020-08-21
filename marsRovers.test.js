const exploration = require('./marsRovers');

describe('Testing Mars Rovers exploration', () => {
  test('should have a function', () => {
    expect(exploration).toBeTruthy();
  });

  test('should return an object with 2 Rovers', () => {
    expect(exploration()).toEqual({ rover1: {}, rover2: {} });
  });
});
