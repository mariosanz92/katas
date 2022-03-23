class MarsRover {
  NORTH: string = 'N';
  SOUTH: string = 'S';
  WEST: string = 'W';
  EAST: string = 'E';
  landingPosition: [number, number, string];
  worldDimension: [number, number];
  commands: string[];

  constructor(landingPosition: [number, number, string], worldDimension: [number, number], commands?: string[]) {
    this.landingPosition = landingPosition;
    this.commands = commands;
    this.worldDimension = worldDimension;
  }

  public getFinalPosition() {
    const isThereNoCommands = !this.commands.length;
    if (isThereNoCommands) return this.landingPosition;

    return this.calculatePositionPerCommand();
  }

  private calculatePositionPerCommand() {
    const actualPosition: { x: number; y: number; cardinalPoint: string } = {
      x: this.landingPosition[0],
      y: this.landingPosition[1],
      cardinalPoint: this.landingPosition[2],
    };
    const cardinalPoints: string[] = [this.NORTH, this.EAST, this.SOUTH, this.WEST];

    this.commands.forEach((command) => {
      if (command == 'M') {
        this.moveForward(actualPosition);
      }
      if (command == 'R') {
        const newPosition = this.calculateRight(actualPosition.cardinalPoint, cardinalPoints);
        actualPosition.cardinalPoint = cardinalPoints[newPosition];
      }
      if (command == 'L') {
        const newPosition = this.calculateLeft(actualPosition.cardinalPoint, cardinalPoints);
        actualPosition.cardinalPoint = cardinalPoints[newPosition];
      }
    });

    const finalPosition = [actualPosition.x, actualPosition.y, actualPosition.cardinalPoint];
    return finalPosition;
  }

  private calculateRight(actualCardinalPoint: string, cardinalPoints: string[]) {
    const north = 0;
    if (actualCardinalPoint == this.WEST) return north;

    const newPosition = cardinalPoints.indexOf(actualCardinalPoint) + 1;

    return newPosition;
  }

  private calculateLeft(actualCardinalPoint: string, cardinalPoints: string[]) {
    const west = cardinalPoints.length - 1;
    if (actualCardinalPoint == this.NORTH) return west;

    const newPosition = cardinalPoints.indexOf(actualCardinalPoint) - 1;

    return newPosition;
  }

  private moveForward(actualPosition: { x: number; y: number; cardinalPoint: string }) {
    const moveFrom = {
      N: () => {
        const north = this.moveTo('north', actualPosition.y);
        actualPosition.y = north;
      },
      S: () => {
        const south = this.moveTo('south', actualPosition.y);
        actualPosition.y = south;
      },
      E: () => {
        const east = this.moveTo('east', actualPosition.x);
        actualPosition.x = east;
      },
      W: () => {
        const west = this.moveTo('west', actualPosition.x);
        actualPosition.x = west;
      },
    };
    const move = (cardinalPoint: string) => moveFrom[cardinalPoint]();

    move(actualPosition.cardinalPoint);
  }

  moveTo(cardinalPoint: string, actualPosition: number) {
    const location = {
      forwardPositive: {
        step: () => actualPosition + 1 < this.worldDimension[0] && actualPosition + 1,
        reset: () => (actualPosition = 1),
      },
      forwardNegative: {
        step: () => actualPosition - 1 > 0 && actualPosition - 1,
        reset: () => this.worldDimension[0],
      },
    };

    if (cardinalPoint == 'north' || cardinalPoint == 'east') {
      return location.forwardPositive.step() || location.forwardPositive.reset();
    } else {
      return location.forwardNegative.step() || location.forwardNegative.reset();
    }
  }
}

export default MarsRover;
