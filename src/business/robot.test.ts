import { Robot } from "./robot";
import { Direction } from "./types";

describe("Robot", () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot();
  });

  it("should place the robot at the specified coordinates and direction", () => {
    robot.place(2, 3, Direction.NORTH);
    expect(robot.getPosition()).toEqual([2, 3, Direction.NORTH]);
  });

  it("should move the robot one step in the right direction", () => {
    robot.place(0, 2, Direction.EAST);
    robot.move();
    expect(robot.getPosition()).toEqual([1, 2, Direction.EAST]);
  });

  it("should rotate the robot 90 degrees to the left and the coordinates should not change", () => {
    robot.place(2, 1, Direction.NORTH);
    robot.left();
    expect(robot.getPosition()).toEqual([2, 1, Direction.WEST]);
  });

  it("should rotate the robot 90 degrees to the right and the coordinates should not change", () => {
    robot.place(1, 2, Direction.SOUTH);
    robot.right();
    expect(robot.getPosition()).toEqual([1, 2, Direction.WEST]);
  });

  it("should not move the robot if it would exceed the dimension limits", () => {
    robot.place(0, 4, Direction.NORTH);
    robot.move();
    expect(robot.getPosition()).toEqual([0, 4, Direction.NORTH]);
  });

  it("should not move the robot if it would exceed the dimension limits", () => {
    robot.place(0, 0, Direction.SOUTH);
    robot.move();
    expect(robot.getPosition()).toEqual([0, 0, Direction.SOUTH]);
  });
});