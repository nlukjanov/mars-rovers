const roverMove = (roverLocation) => {
  const roverDirection = roverLocation.d.toUpperCase();

  if (roverDirection === 'N') {
    roverLocation.y += 1;
  } else if (roverDirection === 'E') {
    roverLocation.x += 1;
  } else if (roverDirection === 'S') {
    roverLocation.y -= 1;
  } else if (roverDirection === 'W') {
    roverLocation.x -= 1;
  }
  return roverLocation;
};

const roverLeftRotation = {
  N: 'W',
  W: 'S',
  S: 'E',
  E: 'N'
};

const roverRightRotation = {
  N: 'E',
  E: 'S',
  S: 'W',
  W: 'N'
};

const calculatePath = (roverData, roverInstruction) => {
  let roverLocation = { ...roverData };
  for (let index = 0; index < roverInstruction.length; index++) {
    const element = roverInstruction[index].toUpperCase();
    if (element === 'L') {
      roverLocation.d = roverLeftRotation[roverLocation.d];
    } else if (element === 'R') {
      roverLocation.d = roverRightRotation[roverLocation.d];
    } else if (element === 'M') {
      roverLocation = roverMove(roverLocation);
    }
  }
  return roverLocation;
};

const marsExploration = (input) => {
  const {
    rover1Location,
    rover1Instruction,
    rover2Location,
    rover2Instruction
  } = input;

  const rover1InstructionArray = rover1Instruction.split('');
  const rover2InstructionArray = rover2Instruction.split('');

  const rover1FinalLocation = calculatePath(
    rover1Location,
    rover1InstructionArray
  );

  const rover2FinalLocation = calculatePath(
    rover2Location,
    rover2InstructionArray
  );

  return { rover1: rover1FinalLocation, rover2: rover2FinalLocation };
};

module.exports = { marsExploration, roverMove, calculatePath };
