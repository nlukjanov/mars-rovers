const marsExploration = require('./marsRovers');

describe('Testing Mars Rovers exploration', () => {
  const input = {
    grid: { x: 5, y: 5 },
    rover1Location: { x: 1, y: 2, d: 'N' },
    rover1Instruction: 'LMLMLMLMM',
    rover2Location: { x: 3, y: 3, d: 'E' },
    rover2Instruction: 'MMRMMRMRRM'
  };

  test('should have a function', () => {
    expect(marsExploration).toBeTruthy();
  });

  test('should return correct calculation for rovers', () => {
    expect(marsExploration(input)).toMatchObject({
      rover1: { x: 1, y: 3, d: 'N' },
      rover2: { x: 5, y: 1, d: 'E' }
    });
  });
});
