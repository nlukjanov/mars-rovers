# Mars Rovers

## Instructions

Use ```npm install``` to install the test suite and required packages

Run ```npm run test``` to run test suite

To use the function somewhere else import and pass input in the same format as test input, for example:
```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

## Technologies used

Solution is written in JavaScript with the use of Jest Testing Framework.
During development I used eslint for code linting.

## Results

Using the test input from the brief solution provides correct output.

Added extra tests for each function used in the solution.

Added extra test for different input.

Test input also has a grid coordinates. Grid can be used to set boundaries.
The path of both rovers from the test input did not hit the boundary. I did not include edge cases, they can be checked with another if statement.
There are many way to address them:
1. Stop the rover.
2. Check which sides are available for movement and move into available direction.
3. Turn around and continue executing instruction.


