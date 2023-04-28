import { Direction } from "./types";

export class Robot {
  #cords: [number, number] = [0, 0];
  #direction: Direction = Direction.NORTH;
  #dimension: number = 5;
  #leftMap = {
    [Direction.NORTH]: Direction.WEST,
    [Direction.EAST]: Direction.NORTH,
    [Direction.SOUTH]: Direction.EAST,
    [Direction.WEST]: Direction.SOUTH,
  };
  #rightMap = {
    [Direction.NORTH]: Direction.EAST,
    [Direction.EAST]: Direction.SOUTH,
    [Direction.SOUTH]: Direction.WEST,
    [Direction.WEST]: Direction.NORTH,
  };
  #movementMap = {
    [Direction.NORTH]: [0, 1],
    [Direction.EAST]: [1, 0],
    [Direction.SOUTH]: [0, -1],
    [Direction.WEST]: [-1, 0],
  }
  constructor() {
  }

  place(x: number, y: number, direction: Direction) {
    this.#cords = [x, y];
    this.#direction = direction;
  }

  move() {
    let [x, y] = this.#cords;
    const [dx, dy] = this.#movementMap[this.#direction];
    x += dx;
    y += dy;
    if (x >= 0 && x < this.#dimension && y >= 0 && y < this.#dimension) {
      this.#cords = [x, y];
    }
  }

  left() {
    this.#direction = this.#leftMap[this.#direction]
  }

  right() {
    this.#direction = this.#rightMap[this.#direction]
  }

  getPosition() {
    return [...this.#cords, this.#direction] as [number, number, Direction]
  }
}