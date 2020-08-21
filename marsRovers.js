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

const convertInputIntoObject = (textInput) => {
  const gridArray = textInput[0].split(' ');
  const rover1LocationArray = textInput[1].split(' ');
  const rover1InstructionArray = textInput[2].split('');
  const rover2LocationArray = textInput[3].split(' ');
  const rover2InstructionArray = textInput[4].split('');

  return {
    grid: { x: gridArray[0], y: gridArray[1] },
    rover1Location: {
      x: Number(rover1LocationArray[0]),
      y: Number(rover1LocationArray[1]),
      d: rover1LocationArray[2]
    },
    rover1InstructionArray,
    rover2Location: {
      x: Number(rover2LocationArray[0]),
      y: Number(rover2LocationArray[1]),
      d: rover2LocationArray[2]
    },
    rover2InstructionArray
  };
};

const marsExploration = (input) => {
  const inputFromText = convertInputIntoObject(input);
  const {
    rover1Location,
    rover1InstructionArray,
    rover2Location,
    rover2InstructionArray
  } = inputFromText;

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
