const { marsExploration, roverMove, calculatePath } = require('./marsRovers');

const fs = require('fs');

const textInput1 = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
const textInput2 = fs.readFileSync('input2.txt', 'utf-8').split(/\r?\n/);

describe('Testing Mars Rovers exploration', () => {
  const input = textInput1;
  const anotherInput = textInput2;

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
    expect(roverMove(roverLocation)).toStrictEqual({ x: 1, y: 3, d: 'N' });
    const roverLocation2 = { x: 1, y: 2, d: 'S' };
    expect(roverMove(roverLocation2)).toStrictEqual({ x: 1, y: 1, d: 'S' });
  });

  test('calculate path should correctly calculate path', () => {
    const roverLocation = { x: 2, y: 2, d: 'N' };
    const roverInstructionArray = ['M', 'L', 'M', 'R', 'M', 'R', 'M', 'M', 'M'];
    expect(calculatePath(roverLocation, roverInstructionArray)).toStrictEqual({
      x: 4,
      y: 4,
      d: 'E'
    });
  });

  test('should return correct calculation for both rovers', () => {
    expect(marsExploration(input)).toStrictEqual({
      rover1: { x: 1, y: 3, d: 'N' },
      rover2: { x: 5, y: 1, d: 'E' }
    });

    expect(marsExploration(anotherInput)).toStrictEqual({
      rover1: { x: 2, y: 1, d: 'S' },
      rover2: { x: 3, y: 4, d: 'E' }
    });
  });
});
