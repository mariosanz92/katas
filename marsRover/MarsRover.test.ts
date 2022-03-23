import MarsRover from './MarsRover';

describe('Mars Rovers', () => {
  test('Knows its landing zone', () => {
    const landingPosition: [number, number, string] = [5, 5, 'N'];
    const worldDimension: [number, number] = [10, 10];
    const commands: string[] = [];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.landingPosition).toEqual(landingPosition);
  });

  test('Knows its final zone', () => {
    const landingPosition: [number, number, string] = [5, 5, 'N'];
    const worldDimension: [number, number] = [10, 10];
    const commands: string[] = [];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(landingPosition);
  });

  test('move forward when there is an "M" command', () => {
    const landingPosition: [number, number, string] = [5, 5, 'N'];
    const finalPosition: [number, number, string] = [5, 6, 'N'];
    const worldDimension: [number, number] = [10, 10];
    const commands: string[] = ['M'];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(finalPosition);
  });

  test('move forward to "S" subtract to Y position', () => {
    const landingPosition: [number, number, string] = [5, 5, 'S'];
    const finalPosition: [number, number, string] = [5, 4, 'S'];
    const worldDimension: [number, number] = [10, 10];
    const commands: string[] = ['M'];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(finalPosition);
  });

  test('turn to right when there is an "R" command', () => {
    const landingPosition: [number, number, string] = [5, 5, 'N'];
    const finalPosition: [number, number, string] = [5, 5, 'E'];
    const worldDimension: [number, number] = [10, 10];
    const commands: string[] = ['R'];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(finalPosition);
  });

  test('turn to right 360º if there is 4 "R"', () => {
    const landingPosition: [number, number, string] = [5, 5, 'N'];
    const finalPosition: [number, number, string] = [5, 5, 'N'];
    const worldDimension: [number, number] = [10, 10];
    const commands: string[] = ['R', 'R', 'R', 'R'];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(finalPosition);
  });

  test('turn to right and move forward sum to x position', () => {
    const landingPosition: [number, number, string] = [5, 5, 'N'];
    const finalPosition: [number, number, string] = [6, 5, 'E'];
    const worldDimension: [number, number] = [10, 10];
    const commands: string[] = ['R', 'M'];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(finalPosition);
  });

  test('turn to left when there is an "L" command', () => {
    const landingPosition: [number, number, string] = [5, 5, 'E'];
    const finalPosition: [number, number, string] = [5, 5, 'N'];
    const worldDimension: [number, number] = [10, 10];

    const commands: string[] = ['L'];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(finalPosition);
  });

  test('turn to left 360º if there is 4 "L"', () => {
    const landingPosition: [number, number, string] = [5, 5, 'N'];
    const finalPosition: [number, number, string] = [5, 5, 'N'];
    const worldDimension: [number, number] = [10, 10];
    const commands: string[] = ['L', 'L', 'L', 'L'];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(finalPosition);
  });

  test('turn to left and move forward subtract to x position', () => {
    const landingPosition: [number, number, string] = [5, 5, 'N'];
    const finalPosition: [number, number, string] = [4, 5, 'W'];
    const worldDimension: [number, number] = [10, 10];
    const commands: string[] = ['L', 'M'];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(finalPosition);
  });

  test('it knows the world dimension when goes to north', () => {
    const landingPosition: [number, number, string] = [5, 5, 'N'];
    const finalPosition: [number, number, string] = [5, 2, 'N'];
    const worldDimension: [number, number] = [5, 5];
    const commands: string[] = ['M', 'M'];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(finalPosition);
  });
  test('it knows the world dimension when goes to south', () => {
    const landingPosition: [number, number, string] = [5, 1, 'S'];
    const finalPosition: [number, number, string] = [5, 4, 'S'];
    const worldDimension: [number, number] = [5, 5];
    const commands: string[] = ['M', 'M'];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(finalPosition);
  });
  test('it knows the world dimension when goes to east', () => {
    const landingPosition: [number, number, string] = [5, 5, 'E'];
    const finalPosition: [number, number, string] = [2, 5, 'E'];
    const worldDimension: [number, number] = [5, 5];
    const commands: string[] = ['M', 'M'];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(finalPosition);
  });
  test('it knows the world dimension when goes to west', () => {
    const landingPosition: [number, number, string] = [1, 5, 'W'];
    const finalPosition: [number, number, string] = [4, 5, 'W'];
    const worldDimension: [number, number] = [5, 5];
    const commands: string[] = ['M', 'M'];

    const marsRover: MarsRover = new MarsRover(landingPosition, worldDimension, commands);

    expect(marsRover.getFinalPosition()).toEqual(finalPosition);
  });
});
