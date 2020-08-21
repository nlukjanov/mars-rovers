const { marsExploration, roverMove, calculatePath } = require('./marsRovers');

describe('Testing Mars Rovers exploration', () => {
  const input = {
    grid: { x: 5, y: 5 },
    rover1Location: { x: 1, y: 2, d: 'N' },
    rover1Instruction: 'LMLMLMLMM',
    rover2Location: { x: 3, y: 3, d: 'E' },
    rover2Instruction: 'MMRMMRMRRM'
  };

  test('should have a function', () => {
    expect(typeof marsExploration).toBe('function');
  });

  test('marsExploration should return an object', () => {
    expect(typeof marsExploration(input)).toBe('object');
  });

  test('roverMove should return an object', () => {
    const roverLocation = { x: 1, y: 2, d: 'N' };
    expect(typeof roverMove(roverLocation)).toBe('object');
  });

  test('roverMove should correctly ', () => {
    const roverLocation = { x: 1, y: 2, d: 'N' };
    expect(roverMove(roverLocation)).toMatchObject({ x: 1, y: 3, d: 'N' });
    const roverLocation2 = { x: 1, y: 2, d: 'S' };
    expect(roverMove(roverLocation2)).toMatchObject({ x: 1, y: 1, d: 'S' });
  });

  test('calculate path should correctly calculate path', () => {
    const roverLocation = { x: 2, y: 2, d: 'N' };
    const roverInstructionArray = ['M', 'L', 'M', 'R', 'M', 'R', 'M', 'M', 'M'];
    expect(calculatePath(roverLocation, roverInstructionArray)).toMatchObject({ x: 4, y: 4, d: 'E' });
  });

  test('should return correct calculation for both rovers', () => {
    expect(marsExploration(input)).toMatchObject({
      rover1: { x: 1, y: 3, d: 'N' },
      rover2: { x: 5, y: 1, d: 'E' }
    });
  });
});
